import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Services() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginTop: 2,
        p: 2,
      }}
      id="services"
    >
      <Typography
        sx={{
          fontSize: { lg: "20px", xs: "12px" },
          p: 2,
          fontWeight: 700,
          color: "#012241",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        services
      </Typography>
      <Box
        sx={{
          display: { lg: "grid", xs: "block", md: "grid" },
          gridTemplateColumns: {
            lg: "250px 250px 250px 250px",
            xs: "50px",
            md: "400px 400px",
          },
          gridGap: "1.3em",
          p: 5,
        }}
      >
        <Box
          sx={{
            display: "block",
            width: { lg: "100%", xs: "200px" },
            margin: "auto",
            height: "200px",
            marginBottom: 5,
          }}
        >
          <Box
            component="img"
            src={
              "https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/ServiceA_uh8xyy.png"
            }
            alt="Services"
            sx={{
              width: "100%",
              height: "100%",
              p: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { lg: "15px", xs: "12px", md: "15px" },
              fontWeight: 700,
              color: "#012241",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Find my location
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            width: { lg: "100%", xs: "200px" },
            margin: "auto",
            height: "200px",
            marginBottom: 5,
          }}
        >
          <Box
            component="img"
            src={
              "https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/Serviceb_jr7zbk.png"
            }
            alt="Services"
            sx={{
              width: "100%",
              height: "100%",
              p: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { lg: "15px", xs: "12px", md: "15px" },
              fontWeight: 700,
              color: "#012241",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            track nearby bus
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            width: { lg: "100%", xs: "200px" },
            margin: "auto",
            height: "200px",
            marginBottom: 5,
          }}
        >
          <Box
            component="img"
            src={
              "https://res.cloudinary.com/avengersphantom/image/upload/v1656445462/Images/images/Servicec_wbzixj.png"
            }
            alt="Services"
            sx={{
              width: "100%",
              height: "100%",
              p: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { lg: "15px", xs: "12px", md: "15px" },
              fontWeight: 700,
              color: "#012241",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Navigates routes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            width: { lg: "100%", xs: "200px" },
            margin: "auto",
            height: "200px",
          }}
        >
          <Box
            component="img"
            src={
              "https://res.cloudinary.com/avengersphantom/image/upload/v1656445462/Images/images/Servicec_wbzixj.png"
            }
            alt="Services"
            sx={{
              width: "100%",
              height: "100%",
              p: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { lg: "15px", xs: "12px" },
              fontWeight: 700,
              color: "#012241",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            connect with Buses
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
