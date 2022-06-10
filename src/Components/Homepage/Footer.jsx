import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';

export default function Footer(){
    return(
        <Box sx={{position:'relative',color:'white',fontSize:16}}>
            <Divider sx={{background:'white',marginTop:2}}/>
            <Typography sx={{p:3,fontWeight:700,textAlign:'center'}}>
            {'©'} 2022 Phantom Powered by Avengers
            </Typography>
        </Box>

    )
    
}