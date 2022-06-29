import React, { Component } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MapSection from "./ClientMap";
import Navbar from "../navbar/Navbar.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Agency from "./Agencies.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonial.jsx";
import Manuals from "./Manuals.jsx";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    label: "Discover Buses passing nearby your location",
    BtnTxt: "Discover",
  },
  {
    label: "Want to save time?",
    BtnTxt: "Go with us",
  },
  {
    label: "Have question or suggestion?",
    BtnTxt: "Email us",
  },
  {
    label: "We got you covered?",
    BtnTxt: "Start",
  },
];

function Homepage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: { lg: "500px", xs: "400px" },
          backgroundImage: `url(https://res.cloudinary.com/avengersphantom/image/upload/v1656445466/Images/images/agency3_wb0fvi.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: { lg: "bottom left", xs: "center" },
          position: "relative",
          boxShadow: "inset 0 0 0 2000px rgb(1, 34, 65,0.8)",
        }}
      >
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={10000}
          autoplay={true}
        >
          {slides.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: "block",
                    textAlign: "center",
                    p: 2,
                    marginTop: { lg: 25, xs: 15 },
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      marginBottom: 5,
                      fontSize: { xs: 12, lg: 20 },
                      color: "#D3D3D3",
                      fontWeight: 700,
                    }}
                  >
                    {slides[activeStep].label}
                  </Typography>
                  <Button
                    sx={{
                      background: "#D3D3D3",
                      borderRadius: "5px",
                      color: "#012241",
                      width: { lg: "300px", xs: "100px" },
                      "&:hover": {
                        background: "#012241",
                        color: "white",
                      },
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 700, fontSize: { lg: 12, xs: 10 } }}
                    >
                      {step.BtnTxt}
                    </Typography>
                  </Button>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "none",
            position: "absolute",
            bottom: 25,
            right: 0,
            left: 0,
          }}
        />
      </Box>
      <About />
      <Manuals />
      <MapSection />
      <Services />
      <Agency />
      <Testimonials />
      <Contact />
    </Box>
  );
}

export default Homepage;
