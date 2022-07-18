import React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const agencies = [
    {
     agency: 'Kigali bus service', 
    },
    {
     agency: 'RFTC',
    },
  ];

export default function Agency(){
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxagencies = agencies.length;
  
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
        height:'450px',
        marginTop:2,
        backgroundImage: `url(https://res.cloudinary.com/avengersphantom/image/upload/v1656445469/Images/images/Agencies_ihifw5.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        position:'relative',
        boxShadow:'inset 0 0 0 2000px rgb(1, 34, 65,0.8)',
        }}>
            <Typography sx={{ fontSize:{lg:'20px',xs:'12px',md:'17px'},p:6,fontWeight:700,color:'white',textAlign:'center',textTransform:'uppercase' }}>
                our agencies
            </Typography>
            <Box sx={{ maxHeight:1, maxWidth:{lg:'800px',xs:'500'},margin:'auto', p: 5 }}>
                <Box sx={{display:'block'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Box 
                        component="img"
                        src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445464/Images/images/Agency2_plet0k.png'}
                        alt="profile image"
                        sx={{margin:1,width:{lg:150,xs:100,md:200},height:{lg:100,xs:50,md:100},borderRadius:'10px'}}
                        />
                        <Box 
                        component="img"
                        src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445462/Images/images/Agency_iqrxgf.png'}
                        alt="profile image"
                        sx={{margin:1,width:{lg:150,xs:100,md:200},height:{lg:100,xs:50,md:100},borderRadius:'10px'}}
                        />
                        <Box 
                        component="img"
                        src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445466/Images/images/agency3_wb0fvi.png'}
                        alt="profile image"
                        sx={{margin:1,width:{lg:150,xs:100,md:200},height:{lg:100,xs:50,md:100},borderRadius:'10px'}}
                        />
                    </Box> 
                    <Typography sx={{fontSize:{lg:'20px',xs:'14px',md:'15px'},textTransform:'uppercase',textAlign:'center',color:'white',p:2,fontWeight:700}}>{agencies[activeStep].agency}</Typography>
                </Box>
            </Box>
            <MobileStepper
                variant="dots"
                steps={maxagencies}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="xsall"
                    onClick={handleNext}
                    disabled={activeStep === maxagencies - 1}
                    sx={{color:'white',top:{lg:-180,xs:-150}}}
                >
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="xsall" onClick={handleBack} disabled={activeStep === 0} sx={{color:'white',top:{lg:-180,xs:-150}}}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                </Button>
                }
                sx={{background:'none'}}/>
        
        </Box>
    )
}