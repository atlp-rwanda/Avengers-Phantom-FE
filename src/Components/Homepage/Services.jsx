import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Services(){
    return(
        <Box
        sx={{
        width: '100%',
        height:'100%',
        marginTop:2,
        p:2,
     
        }}>
            <Typography sx={{ fontSize:{lg:'20px',xs:'12px'},p:2,fontWeight:700,color:'#012241',textAlign:'center',textTransform:'uppercase' }}>
                services
            </Typography>
            <Box sx={{   display:{lg:'grid',xs:'block',md:'grid'},gridTemplateColumns:{lg:'300px 300px 300px 300px',md:'400px 400px'},gridGap:'1.3em',margin:'auto',p:5}}>
                <Box sx={{display:'block',width:'100%'}}>
                    <Box 
                        component='img'
                        src={require('../../static/images/ServiceA.PNG')}
                        alt="Services"
                        sx={{
                            width:'100%',
                            height:'300px',
                            p:2
                        }}
                    />
                    <Typography sx={{ fontSize:{lg:'15px',xs:'12px',md:'15px'},fontWeight:700,color:'#012241',textAlign:'center',textTransform:'capitalize' }}>
                        Find my location
                    </Typography>
                    
                </Box>
                <Box sx={{display:'block',width:'100%'}}>
                    <Box 
                        component='img'
                        src={require('../../static/images/Serviceb.PNG')}
                        alt="Services"
                        sx={{
                            width:'100%',
                            height:'300px',
                            p:2
                        }}
                    />
                    <Typography sx={{ fontSize:{lg:'15px',xs:'12px',md:'15px'},fontWeight:700,color:'#012241',textAlign:'center',textTransform:'capitalize' }}>
                        track nearby bus
                    </Typography>
                    
                </Box>
                <Box sx={{display:'block',width:'100%'}}>
                    <Box 
                        component='img'
                        src={require('../../static/images/Servicec.PNG')}
                        alt="Services"
                        sx={{
                            width:'100%',
                            height:'300px',
                            p:2
                        }}
                    />
                    <Typography sx={{ fontSize:{lg:'15px',xs:'12px',md:'15px'},fontWeight:700,color:'#012241',textAlign:'center',textTransform:'capitalize' }}>
                        Navigates routes
                    </Typography>
                    
                </Box>
                <Box sx={{display:'block',width:'100%'}}>
                    <Box 
                        component='img'
                        src={require('../../static/images/Servicec.PNG')}
                        alt="Services"
                        sx={{
                            width:'100%',
                            height:'300px',
                            p:2
                        }}
                    />
                    <Typography sx={{ fontSize:{lg:'15px',xs:'12px'},fontWeight:700,color:'#012241',textAlign:'center',textTransform:'capitalize' }}>
                        connect with Buses
                    </Typography>
                    
                </Box>
            </Box>
        </Box>
    )
}