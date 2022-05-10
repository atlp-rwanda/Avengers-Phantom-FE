import React from 'react';
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';
import Background from '../../static/images/ManualOverlay.png';

export default function Manuals(){
    return(
        <Box sx={{marginTop:2,display:'block',fontFamily:'Poppins'}}>
            <Typography sx={{ fontSize:{lg:'20px',xs:'12px'},p:2,fontWeight:700,color:'#012241',textAlign:'center',textTransform:'uppercase' }}>
             User Manuals
            </Typography>
            <Box sx={{display:'block',pl:{lg:12,xs:6},pr:{lg:12,xs:6},marginLeft:'auto',marginRight:'auto',marginTop:5}}>
                <Box 
                sx={{
                    width: '400px',
                    height:{lg:'400px',xs:'220px',md:'400px'},
                    backgroundImage: {xs:'none',lg:`url(${Background})`,md:`url(${Background})`},
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    position:'relative',
                    borderRadius:{lg:'50%',xs:'none',md:'50%'},
                    boxshadow:'inset 0 0 0 2000px rgb(1, 34, 65,0.2)',
                    border:{lg:'2px solid #012241',xs:'none',md:'2px solid #012241'},
                    borderLeft:{xs:'2px solid #012241'},
                    margin:'auto'
                    }}
                >
                <Box sx={{
                    position:'relative',
                    top:{lg:-15,md:-10,xs:-15},
                    left:{lg:5,xs:-10,md:5},
                    display:{lg:'block',xs:'flex',md:'block'}
                    }}>
                    <Typography sx={{
                    background:'#012241',
                    fontWeight:700,
                    color:'#fff',
                    textAlign:'center',
                    p:{lg:1,xs:0.5,md:0.5},
                    width:{lg:30,xs:20,md:20},
                    height:{lg:30,xs:20,md:20},
                    borderRadius:'50%',
                    fontSize:{lg:12,xs:10,md:10},
                    margin:{lg:'auto',xs:0,md:'auto'},
                    }}>
                    1
                    </Typography>
                    <Typography sx={{p:{lg:2,md:2},fontSize:{lg:12,xs:10},pl:{xs:2},fontWeight:700,textAlign:'center'}}>
                        Create an account
                    </Typography>
                </Box>
                <Box sx={{
                    display:{lg:'flex',xs:'block',md:'flex'},
                    justifyContent:'space-between',
                    top:{xs:240,lg:110,md:130},
                    position:'relative',
                    }}>
                    <Box sx={{
                    marginRight:'auto',
                    position:'relative',
                    left:{lg:-15,xs:-10,md:-10},
                    display:'flex',
                    width:'100%',
                    position:'relative',
                    top:{xs:-50,lg:0,md:0},
                    }}>
                        <Typography
                        sx={{
                            background:'#012241',
                            p:{lg:1,xs:0.5,md:0.5},
                            width:{lg:30,xs:20,md:20},
                            height:{lg:30,xs:20,md:20},
                            fontWeight:700,
                            color:'#fff',
                            textAlign:'center',
                            borderRadius:'50%',
                            fontSize:{lg:12,xs:10,md:10},
                        }}>
                        4
                        </Typography>
                        <Typography sx={{fontSize:{lg:12,xs:10},pl:{xs:2},p:{lg:1,md:1},fontWeight:700}}>
                            Check nearby buses
                        </Typography>
                    </Box>
                    <Box sx={{
                    marginLeft:{lg:'auto',md:'auto'},
                    position:'relative',
                    right:{xs:-93,lg:-30,md:-55},
                    display:'flex',
                    width:'100%',
                    top:{xs:-220,lg:0,md:0},
                    }}>
                         <Typography sx={{position:'relative',left:{xs:-85,lg:0,md:0},pl:{xs:2},p:{lg:1,md:1},fontSize:{lg:12,xs:10},fontWeight:700}}>
                            Choose  a starting point
                        </Typography>
                        <Typography
                        sx={{
                            background:'#012241',
                            p:{lg:1,xs:0.5,md:0.5},
                            width:{lg:30,xs:20,md:20},
                            height:{lg:30,xs:20,md:20},
                            fontWeight:700,
                            color:'#fff',
                            textAlign:'center',
                            borderRadius:'50%',
                            fontSize:{lg:12,xs:10,md:10},
                            position:'relative',
                            left:{xs:-233,lg:0,md:5}
                        }}>
                        2
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    position:'relative',
                    bottom:{lg:-235,xs:-70,md:-257},
                    display:{lg:'block',xs:'flex',md:'block'},
                    }}>
                    <Typography sx={{position:'relative',left:{xs:20},p:{lg:1,md:1},fontWeight:700,fontSize:{lg:12,xs:10},textAlign:'center'}}>
                        Choose a stop point
                    </Typography>
                    <Typography sx={{
                    background:'#012241',
                    fontWeight:700,
                    color:'#fff',
                    textAlign:'center',
                    p:{lg:1,xs:0.5,md:0.5},
                    width:{lg:30,xs:20,md:20},
                    height:{lg:30,xs:20,md:20},
                    borderRadius:'50%',
                    fontSize:{lg:12,xs:10,md:10},
                    margin:{lg:'auto',md:'auto',xs:0},
                    position:'relative',
                    left:{xs:-108,lg:0,md:0}
                    }}>
                    3
                    </Typography>
                    
                </Box>

                </Box>
            </Box>

        </Box>
    )
    
}