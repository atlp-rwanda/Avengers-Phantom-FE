import React, { Component } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MapSection from './MapSection.jsx';
import Navbar from '../navbar/Navbar.jsx';
import Skeleton from '@mui/material/Skeleton';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Background from '../../static/images/Banner.png';
import Agency from './Agencies.jsx';
import Services from './Services.jsx';
import Testimonials from './Testimonial.jsx';
import Manuals from './Manuals.jsx';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    label: 'Discover Buses passing nearby your location',
    BtnTxt: 'Discover'
  },
  {
    label: 'Want to save time?',
    BtnTxt: 'Go with us'
  },
  {
    label: 'Have question or suggestion?',
    BtnTxt: 'Email us'
  },
  {
    label: 'We got you covered?',
    BtnTxt: 'Start'
  }
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
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: { lg: '650px', xs: '400px' },
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { lg: 'bottom left', xs: 'center' },
          position: 'relative',
          boxShadow: 'inset 0 0 0 2000px rgb(1, 34, 65,0.8)'
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {slides.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    minHeight: '100vh',
                    pl: 2,
                    position: 'relative',
                    width: '100%'
                  }}
                >
                  <Typography
                    sx={{
                      padding: '10px auto',
                      marginTop: { lg: 30, xs: 20 },
                      marginBottom: 5,
                      fontSize: { xs: 15, lg: 36 },
                      color: 'white',
                      fontWeight: 700
                    }}
                  >
                    {slides[activeStep].label}
                  </Typography>
                  <Button
                    sx={{
                      background: 'white',
                      borderRadius: '5px',
                      color: '#012241',
                      width: { lg: '300px', xs: '100px' },
                      '&:hover': {
                        background: '#012241',
                        color: 'white'
                      }
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 700, fontSize: { lg: 16, xs: 12 } }}
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
          variant='dots'
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          sx={{
            maxWidth: '100px',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: 'none',
            position: 'absolute',
            bottom: 25,
            right: 0,
            left: 0
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
    </>
  );
}

export default Homepage;
