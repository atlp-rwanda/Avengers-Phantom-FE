import React from 'react';
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';

export default function About(){
    return(
        <Box sx={{marginTop:2,display:'block',fontFamily:'Poppins'}}>
            <Typography sx={{ fontSize:{lg:'20px',xs:'12px'},p:2,fontWeight:700,color:'#012241',textAlign:'center',textTransform:'uppercase' }}>
             About us
            </Typography>
            <Box sx={{display:{lg:'flex',xs:'block',md:'flex'},pl:{lg:12,xs:6},pr:{lg:12,xs:6},margin:'auto'}}>
                <Box 
                component="img"
                sx={{width:'100%',height:'400px'}}
                src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445466/Images/images/About_vqod2c.png'}
                alt="About"
                />
                <Box sx={{width:'100%',marginLeft:{lg:5,xs:0}}}>
                    <Typography sx={{ fontSize:{lg:'17px',xs:'15px'},p:4,color:'#012241',textAlign:'left' }}>
                        Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return
                    </Typography>
                    <Typography sx={{ fontSize:{lg:'17px',xs:'15px'},p:4,color:'#012241',textAlign:'left' }}>
                        Sometimes you have to go up really high to understand how small you are.
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
    
}