import React from "react";
import { Box, Grid, Card, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Photo from "../../../static/images/busbackground.jpg";
import { Link } from "react-router-dom";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DashboardLayout from "../../../Layouts/Dashboard";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {getBusById} from "../../../redux/Action/fetchallbuses"

const BusDetail = () => {
    const busId = localStorage.getItem("busId")
    const dispatch = useDispatch()

    const getBus =()=>{
      dispatch(getBusById(busId))
    }
    
    useEffect(() => {
      getBus()
    },[])
    
    const bus = useSelector(state => state.fetchbuses?.busById)
    console.log(bus)
  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="containt">
          <Box
            sx={{
              p: 1,
              borderBottom: "1px solid #012241",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { lg: 18, xs: 13, md: 15 },
                color: "#012241",
              }}
            >
              Bus details
            </Typography>
            <Button
              component={Link}
              to={`/dashboard/bus/update?id=${busId}`}
              sx={{
                background: "#012241",
                width: { lg: 100, xs: 50, md: 90 },
                color: "white",
                borderRadius: 68,
                fontSize: { lg: 10, xs: 5, md: 9 },
                p: 1,
                "&:hover": {
                  background: "#012241",
                  opacity: 0.8,
                  transition: "0.8s",
                },
              }}
            >
              <EditIcon
                sx={{
                  marginRight: 1,
                  fontSize: { lg: 15, xs: 10, md: 13 },
                  borderRadius: 68,
                }}
              />
              Edit
            </Button>
          </Box>

          <Typography
            sx={{
              pt: 2,
              pb: 1,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            Bus description
          </Typography>
          <Card sx={{ marginBottom: 3 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { lg: "300px 300px 300px", xs: "100%" },
              }}
            >
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Company
                </Typography>
                <Typography
                  component="p"
                  sx={{ color: "#675B5B", fontWeight: 700, fontSize: 11 }}
                >
                  {bus?.data.buses.company}
                </Typography>
  
              </Box>
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Vehicle type
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, fontSize: 11, color: "#675B5B" }}
                >
                  {bus?.data.buses.type}
                </Typography>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    color: "#675B5B",
                    fontSize: 9,
                  }}
                >
                  type
                </Typography>
              </Box>
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Plate number
                </Typography>
                <Typography
                  component="p"
                  sx={{ color: "#675B5B", fontWeight: 700, fontSize: 11 }}
                >
                  {bus?.data.buses.plateNumber}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { lg: "300px 300px 300px", xs: "100%" },
              }}
            >
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Manufacturer
                </Typography>
                <Typography
                  component="p"
                  sx={{ color: "#675B5B", fontWeight: 700, fontSize: 11 }}
                >
                  {bus?.data.buses.manufacturer}
                </Typography>
              </Box>
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Capacity
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, fontSize: 11, color: "#675B5B" }}
                >
                  {bus?.data.buses.capacity}
                </Typography>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    color: "#675B5B",
                    fontSize: 9,
                  }}
                >
                  Passengers
                </Typography>
              </Box>
              <Box component="div" sx={{ display: "block", p: 2 }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  yom
                </Typography>
                <Typography
                  component="p"
                  sx={{ color: "#675B5B", fontWeight: 700, fontSize: 11 }}
                >
                  {bus?.data.buses.yearOfManufacturing}
                </Typography>
              </Box>
            </Box>
          </Card>
          <Typography
            sx={{
              pt: 2,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            Bus images
          </Typography>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: {
                lg: "150px 150px 150px 150px",
                xs: "100%",
              },
              gridGap: "1.5rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  p: 2,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Front View
              </Typography>
              <Box
                component="div"
                sx={{
                  backgroundImage: `url(${Photo})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: { lg: 150, xs: "100%" },
                  height: 150,
                  borderRadius: 5,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  p: 2,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Back View
              </Typography>
              <Box
                component="div"
                sx={{
                  backgroundImage: `url(${Photo})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: { lg: 150, xs: "100%" },
                  height: 150,
                  borderRadius: 5,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  p: 2,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Side View
              </Typography>
              <Box
                component="div"
                sx={{
                  backgroundImage: `url(${Photo})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: { lg: 150, xs: "100%" },
                  height: 150,
                  borderRadius: 5,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  p: 2,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Inside View
              </Typography>
              <Box
                component="div"
                sx={{
                  backgroundImage: `url(${Photo})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: { lg: 150, xs: "100%" },
                  height: 150,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BusDetail;
