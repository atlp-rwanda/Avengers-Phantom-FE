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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchAllroutes } from "../../../redux/Action/routes";
import Skeleton from "./Skeleton";
import { ToastContainer, toast } from "react-toastify";
import { async } from "regenerator-runtime";
import { connect } from "react-redux";
import { fetchallusers } from '../../../redux/Action/fetchallusers';
import { assigndrivers} from '../../../redux/Action/assigndrverstobus';
import {cleanCode} from '../../../redux/Action/clean'
import {fetchallassigned} from '../../../redux/Action/fetchallassigned'
import {unassigndrivers} from '../../../redux/Action/unassigndriverebuse'
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

const busdriverAssigniment = (props) => {
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
  useEffect(() =>{
    handleBusses()
    handleUsers()
    handleassign()
    handleallassign()
    }, [props.unassignstate.resp,props.assignState.resp])
   
  
  const busess=props.busesState.buses.filter(bus => bus.isAssigned == false);
  const useress=props.userState.users.filter( user => (user.isAssigned == false && user.roleName=="driver"));props.allstate.alluser
  const assigned=props.allstate.alluser.filter(assign => assign.user !==null);
  console.log(props)

  const [formData, setFormData] = useState({
    busId: "",
    userId: "",
  });
 
  const [Buss, setBuss] = React.useState("");
  const [busId, setBusId] = useState("");
  const [busPlateNumber, setBusPlateNumber] = useState("");
  const [open, setOpen] = React.useState(false);
  const [routeopen, setRouteOpen] = React.useState(false);
  const [message, setmessage] = React.useState({
    message:"",
    error:""
  });
 

 
  const handleChange = (event, value) => {
    setBuss(value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    setBusId(id);
    setBusPlateNumber(plateNumber);
  };

 

  const reloadtry = () => {
    console.log(props)
    if(props.unassignstate.resp!== null){
       setmessage({...message,message:props.unassignstate.resp.message})
    }
  };

  const getUserId = (uuid) => {
    setFormData({ ...formData, userId: uuid });
  };
  const getBusId = (uuid) => {
    setFormData({ ...formData, busId: uuid });
  };



  const handleUnAssignment = async (uuid,userid) => {
   
    dispatch(unassigndrivers({
      userId: userid,
      busId: uuid,
    }))
    console.log(uuid,userid)
  };

 
  
      const handleassign=async () =>{
        dispatch(cleanCode())
        close()
      }
      const handleallassign=async () =>{
        dispatch(fetchallassigned())
       
      }
      const handleBusses = async () => {
        dispatch(fetchAllbuses())
      }
      const assignBusses = async () => {
        dispatch( assigndrivers(
          {
                userId: formData.userId,
                busId: formData.busId,
              }
        ))
      }
      const handleUsers = async () => {
        dispatch(fetchallusers())
      }
      const reload = async() =>{
      window.location.reload()
      }

  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="busassignment">
        <p>  ASSIGNIMENT Driver TO BUSES</p>
        <div className="form">
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                bus plateNumber
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
              
                value={busess?.plateNumber}
                label="Routes"
                size="small"
                sx={{ m: 1, width: 300 }}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
             
                {busess? busess.map((item)=>(
                      <MenuItem
                        id={item.uuid}
                        value={item?.plateNumber}
                        onClick={() => getBusId(item.uuid)}
                        key={item.uuid}
                      
                      >
                        {item?.plateNumber}
                        
                      </MenuItem>
                )):null}
                 
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <div>
                <InputLabel id="demo-controlled-open-select-label">
                  drivers
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                
                  value={useress?.name}
                  label="Bus"
                  size="small"
                  sx={{ m: 1, width: 300 }}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {useress? useress.map((bus) => (
                    <MenuItem
                      key={bus?.uuid}
                      value={bus?.name}
                      onClick={() => getUserId(bus.uuid)}
                

                    >
                       {bus?.name}
                    </MenuItem>
                   )):null} 
                </Select>
              </div>
            </FormControl>
          </div>

          <div className="assign__button">
            <Button
              text="Assign"
              bcolor="#012241"
              handlerFunc={assignBusses}
              
            />
          </div>
        </div>
        
      </div>
      {props.allstate? (
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
         
                { assigned?.map(
                    (item) => (
            
                      <StyledTableRow key={item.user?.uuid} className="table__row">
                        <StyledTableCell component="th" scope="row">
                          {item.user? (item.plateNumber):null}
                          
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.user?.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
                            text="Unassign"
                            handlerFunc={() => handleUnAssignment(item.uuid,item.user.uuid)}
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
          <Skeleton />
        )}
      {props.assignState.err ?(
                 notify(`${props.assignState.err.message}`)
             
               ):null}
       
          {props.assignState.resp ?(
               notify(`${props.assignState.resp.message}`)
               
               ):null}
               {props.unassignstate.err ?(
                 notify(`${props.unassignstate.err.message }`)
           
               ):null}
       
          {props.unassignstate.resp ?(
               notify(`${props.unassignstate.resp.message}`)
           ):null}
    </DashboardLayout>
  );
};


const mapStateToProps = (fetchbuses) => {
  return {
  busesState: fetchbuses.fetchbuses,
  userState:fetchbuses.fetchusers,
  assignState:fetchbuses.assign,
  allstate:fetchbuses.fetchall,
  unassignstate:fetchbuses.unassign,
}}

export default connect(mapStateToProps, { fetchAllbuses })(busdriverAssigniment) 
