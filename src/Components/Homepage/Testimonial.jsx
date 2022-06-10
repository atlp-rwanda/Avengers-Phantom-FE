import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonies = [
  {
    Client: 'jean de dieu',
    testimony: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. A urna nisl amet, ut mattis. 
    In augue quam tortor nec. Ipsum nulla duis egestas et faucibus neque lectus.`,

  },
  {
    Client: 'Gedeon',
    testimony: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. A urna nisl amet, ut mattis. 
    In augue quam tortor nec. Ipsum nulla duis egestas et faucibus neque lectus. Tempus lorem nisl proin 
    interdum tristique.`,

  },
  {
    Client: 'Armstrong',
    testimony: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. A urna nisl amet, ut mattis. 
    In augue quam tortor nec.`,

  },
];


export default function Testimonials(){
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxtestimonies = testimonies.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return(
        <Box
        sx={{
        width: '100%',
        height:'100%',
        marginTop:2,
        p:2,
     
        }}>
            <Typography sx={{ fontSize:{lg:'20px',xs:'12px',md:'17px'},p:2,fontWeight:700,color:'#012241',textAlign:'center',textTransform:'uppercase' }}>
                Happy Clients
            </Typography>
            <Box sx={{ maxHeight:300, maxWidth:'800px',margin:'auto', p: 5 }}>
                <FormatQuoteIcon sx={{color:'rgba(0, 0, 0, 0.73)',fontSize:{lg:'20px',xs:'12px',md:'17px'},marginBottom:3}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.73)',fontSize:{lg:'20px',xs:'12px',md:'17px'},marginBottom:3}}>{testimonies[activeStep].testimony}</Typography>
                <Box sx={{display:'flex'}}>
                    <Box 
                        component="img"
                        src={require('../../static/images/Banner.png')}
                        alt="profile image"
                        sx={{margin:1,width:{lg:50,xs:30,md:40},height:{lg:50,xs:30,md:40},borderRadius:'50%'}}
                    />
                    <Typography sx={{fontSize:{lg:'17px',xs:'12px',md:'15px'},textTransform:'capitalize',color:'#012241',p:2,fontWeight:700}}>{testimonies[activeStep].Client}</Typography>
                </Box>
            </Box>
            <MobileStepper
                variant="dots"
                steps={maxtestimonies}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="xsall"
                    onClick={handleNext}
                    disabled={activeStep === maxtestimonies - 1}
                    sx={{color:'#012241'}}
                >
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="xsall" onClick={handleBack} disabled={activeStep === 0} sx={{color:'#012241'}}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                </Button>
                }
            />
        </Box>
    )
}