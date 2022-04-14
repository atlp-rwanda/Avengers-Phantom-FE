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
                    width: '690px',
                    height:{lg:'500px',xs:'220px',md:'500px'},
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
                    top:-20,
                    left:{lg:5,xs:-10,md:5},
                    display:{lg:'block',xs:'flex',md:'block'}
                    }}>
                    <Typography sx={{
                    background:'#012241',
                    fontWeight:700,
                    color:'#fff',
                    textAlign:'center',
                    p:{lg:1,xs:0.5,md:1},
                    width:{lg:50,xs:20,md:40},
                    height:{lg:50,xs:20,md:40},
                    borderRadius:'50%',
                    fontSize:{lg:20,xs:10,md:15},
                    margin:{lg:'auto',xs:0,md:'auto'},
                    }}>
                    1
                    </Typography>
                    <Typography sx={{p:{lg:2,md:2},fontSize:{lg:20,xs:15},pl:{xs:2},fontWeight:700,textAlign:'center'}}>
                        Create an account
                    </Typography>
                </Box>
                <Box sx={{
                    display:{lg:'flex',xs:'block',md:'flex'},
                    justifyContent:'space-between',
                    top:{xs:160,lg:100,md:130},
                    position:'relative',
                    }}>
                    <Box sx={{
                    marginRight:'auto',
                    position:'relative',
                    left:{lg:-25,xs:-10,md:-15},
                    display:'flex',
                    width:'100%',
                    position:'relative',
                    top:{xs:-50,lg:-25,md:-25}
                    }}>
                        <Typography
                        sx={{
                            background:'#012241',
                            p:{lg:1,xs:0.5,md:1},
                            width:{lg:50,xs:20,md:40},
                            height:{lg:50,xs:20,md:40},
                            fontWeight:700,
                            color:'#fff',
                            textAlign:'center',
                            borderRadius:'50%',
                            fontSize:{lg:20,xs:10,md:15},
                        }}>
                        4
                        </Typography>
                        <Typography sx={{fontSize:{lg:20,xs:15},pl:{xs:2},p:{lg:2,md:2},fontWeight:700}}>
                            Check nearby buses
                        </Typography>
                    </Box>
                    <Box sx={{
                    marginLeft:{lg:'auto',md:'auto'},
                    position:'relative',
                    right:{xs:-93,lg:-55,md:-55},
                    display:'flex',
                    top:{xs:-150,lg:-25,md:-25},
                    width:'100%'
                    }}>
                         <Typography sx={{position:'relative',left:{xs:-85,lg:0,md:70},pl:{xs:2},p:{lg:2,md:1},fontSize:{lg:20,xs:15},fontWeight:700}}>
                            Choose  a starting point
                        </Typography>
                        <Typography
                        sx={{
                            background:'#012241',
                            p:{lg:1,xs:0.5,md:1},
                            width:{lg:50,xs:20,md:40},
                            height:{lg:50,xs:20,md:40},
                            fontWeight:700,
                            color:'#fff',
                            textAlign:'center',
                            borderRadius:'50%',
                            fontSize:{lg:20,xs:10,md:15},
                            position:'relative',
                            left:{xs:-290,lg:0,md:80}
                        }}>
                        2
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    position:'relative',
                    bottom:{lg:-235,xs:-130,md:-270},
                    display:{lg:'block',xs:'flex',md:'block'},
                    }}>
                    <Typography sx={{position:'relative',left:20,p:2,fontWeight:700,fontSize:{lg:20,xs:15},textAlign:'center'}}>
                        Choose a stop point
                    </Typography>
                    <Typography sx={{
                    background:'#012241',
                    fontWeight:700,
                    color:'#fff',
                    textAlign:'center',
                    p:{lg:1,xs:0.5,md:1},
                    width:{lg:50,xs:20,md:40},
                    height:{lg:50,xs:20,md:40},
                    borderRadius:'50%',
                    fontSize:{lg:20,xs:10,md:15},
                    margin:'auto',
                    position:'relative',
                    left:{xs:-435,lg:0,md:0}
                    }}>
                    3
                    </Typography>
                    
                </Box>

                </Box>
            </Box>

        </Box>
    )
    
}