import React from "react";
import { useState, useEffect } from "react";
import DashboardLayout from "./../../../Layouts/Dashboard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "../operatorsanddriver/Button.jsx";
import "./busassigniment.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllbuses, getBusById } from "../../../redux/Action/fetchallbuses";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchAllroutes } from "../../../redux/Action/routes";
import Skeleton from "./Skeleton";
import { ToastContainer, toast } from "react-toastify";
import { async } from "regenerator-runtime";
import { connect } from "react-redux";
import {
  assingBusToRoute as busAssignment,
  unassingBusToRoute as busUnAssignment,
  AllBusToRouteAssignment,
} from "./../../../redux/Action/AssigmentAction";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#012241",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(BUS, ROUTES, ASSIGNMENT) {
  return { BUS, ROUTES, ASSIGNMENT };
}

const rows = [
  createData("RAC 234 V", "rusizi huye"),
  createData("RAC 234 X", "kigali huye"),
  createData("RAC 234 A", "musanze huye"),
  createData("RAC 234 R", "rusizi karongi"),
  createData("RAC 234 T", "nyanza huye"),
  createData("RAC 234 S", "rusizi huye"),
  createData("RAC 234 M", "kigali huye"),
  createData("RAC 234 Q", "musanze huye"),
  createData("RAC 234 W", "rusizi karongi"),
  createData("RAC 234 E", "nyanza huye"),
  createData("RAC 234 D", "rusizi huye"),
];

const busAssigniment = (props) => {
  /**
   * Toastfy message Function
   * @param {*} toastMsg
   * @returns A toast message
   */

  const notify = (toastMsg) => toast(toastMsg);

  /**
   * Submit Function
   * @param {*} event
   */

  const dispatch = useDispatch();
  const Buses = useSelector((state) => state.fetchbuses?.buses);

  const [bus, setBus] = React.useState("");
  const [busId, setBusId] = useState("");
  const [busPlateNumber, setBusPlateNumber] = useState("");
  const [assignmentId, setAssignmentId] = useState("");

  const [formData, setFormData] = useState({
    busId: "",
    routeId: "",
  });
  const Assign = useSelector((state) => state.fetchAllAssignment?.assign);
  // const Assign = [];

  const Routes = useSelector((state) => state.routesList);
  const { loading, routes, error } = Routes;
  const [route, setRoute] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [routeopen, setRouteOpen] = React.useState(false);
  // list of buses
  const handleChange = (event, value) => {
    setBus(value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    setBusId(id);
    setBusPlateNumber(plateNumber);
  };
  const handleBusses = async () => {
    dispatch(fetchAllbuses());
  };
  useEffect(() => {
    handleBusses();
  }, []);

  // list of all routes
  // const handleSaveId = (id) => {
  //   localStorage.setItem("routeID", id);
  // };

  const routeHandleChange = (event, value) => {
    setRoute(value);
  };
  const routeHandleClose = () => {
    setRouteOpen(false);
  };

  const routeHandleOpen = () => {
    setRouteOpen(true);
  };

  useEffect(() => {
    dispatch(fetchAllroutes());
    return () => {};
  }, []);

  //mapping assignment into table
  // mapping bus

  const getRouteId = (uuid) => {
    setFormData({ ...formData, routeId: uuid });
  };
  const getBusId = (uuid) => {
    setFormData({ ...formData, busId: uuid });
  };

  // console.log("props", props);

  const handeleAssignBusToRoute = async () => {
    await props.busAssignment({
      routeId: formData.routeId,
      busId: formData.busId,
    });
  };

  const handleUnAssignment = async (uuid) => {
    setAssignmentId(uuid);
    await props.busUnAssignment(uuid);
  };

  React.useEffect(() => {
    if (props.assignBus.success) {
      console.log(props.assignBus.message);
    }
  }, [props.assignBus.success]);

  React.useEffect(() => {
    const fetchAllData = async () => {
      await props.AllBusToRouteAssignment();
    };

    fetchAllData();
  }, [props.unassignBus.success]);

  // React.useEffect(() => {
  //   if (props.assignedBuses.success) {
  //     console.log(props.assignedBuses.message.data.buses.rows);
  //   }
  // }, [props.assignedBuses.success]);

  // React.useEffect(() => {
  //   if (props.unassignBus.success) {
  //     console.log(props.unassignBus.message);
  //   }
  // }, [props.unassignBus.success]);

  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="busassignment">
        <p> BUS ASSIGNIMENT</p>
        <div className="form">
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Route
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={routeopen}
                onClose={routeHandleClose}
                onOpen={routeHandleOpen}
                value={Routes?.data?.rows?.name}
                label="Routes"
                size="small"
                sx={{ m: 1, width: 300 }}
                onChange={routeHandleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {loading === false && routes && routes.data
                  ? routes.data.routes.routes.rows.map((route) => (
                      <MenuItem
                        id={route?.uuid}
                        value={route?.name}
                        onClick={() => getRouteId(route.uuid)}
                      >
                        {route?.name}
                      </MenuItem>
                    ))
                  : !routes && <div> No route found</div>}
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <div>
                <InputLabel id="demo-controlled-open-select-label">
                  Bus
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={Buses?.plateNumber}
                  label="Bus"
                  size="small"
                  sx={{ m: 1, width: 300 }}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Buses?.map((bus) => (
                    <MenuItem
                      key={bus?.plateNumber}
                      value={bus?.plateNumber}
                      onClick={() => getBusId(bus.uuid)}
                    >
                      {bus?.plateNumber}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </FormControl>
          </div>

          <div className="assign__button">
            <Button
              text="Assign"
              bcolor="#012241"
              handlerFunc={handeleAssignBusToRoute}
            />
          </div>
        </div>
        {props?.assignedBuses?.success ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ROUTE</StyledTableCell>
                  <StyledTableCell align="left">BUS</StyledTableCell>
                  <StyledTableCell align="right">ASSIGNIMENT</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {Buses.map((bus) => { */}
                {props?.assignedBuses?.success &&
                  props?.assignedBuses?.message?.data?.buses?.rows?.map(
                    (item) => (
                      <StyledTableRow key={item?.uuid} className="table__row">
                        <StyledTableCell component="th" scope="row">
                          {item?.routeName}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item?.plateNumber}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
                            text="Unassign"
                            handlerFunc={() => handleUnAssignment(item.uuid)}
                            bcolor="#666363"
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Skeleton count={3} />
        )}
      </div>
    </DashboardLayout>
  );
};

const mapStateToprops = ({
  assignBusToRoute,
  unassignBusToRoute,
  fetchAllBusAssignment,
}) => {
  const { assignBus } = assignBusToRoute;
  const { unassignBus } = unassignBusToRoute;
  const { assignedBuses } = fetchAllBusAssignment;
  return { assignBus, unassignBus, assignedBuses };
};

export default connect(mapStateToprops, {
  busAssignment,
  busUnAssignment,
  AllBusToRouteAssignment,
})(busAssigniment);
