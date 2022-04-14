import React, { Component } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Skeleton from '@mui/material/Skeleton';
import { Divider} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from "./Footer.jsx";
import Background from '../../static/images/Contact.png'

function Contact() {
    const ScrollToContact = (props) => {
        const location = useLocation();
        useEffect(() => {
          window.scrollTo(100, 100);
        }, [location]);
      
        return <>{props.children}</>
      };
    
    return(
        <Box
        sx={{
        marginTop:2,
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        position:'relative',
        boxShadow:'inset 0 0 0 2000px rgb(1, 34, 65,0.8)',
        }}>
            
            <><Box
                square
                elevation={0}
                sx={{
                display: 'block',
                textAlign: 'center',
                height: '100%',
                width: '100%',
                }}
            >
                <Typography sx={{
                marginBottom: {lg:5,xs:0},
                fontSize: {xs:20,lg:20},
                color: 'white',
                fontWeight: 700,
                p:2
                }}>
                Let's Talk
                </Typography>

                <Box
                    sx={{
                    display: 'block',
                    textAlign: 'center',
                    height: '100%',
                    width: '90%',
                    margin:'auto',
                    pl: {lg:12,xs:6},
                    pr:{lg:12,xs:6}
                    }}>
                    <Box sx={{ display: {lg:'flex',sx:'block'}}}>
                    <TextField
                        size='xsall'
                        placeholder='Firstname'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%',marginRight:{lg:2,xs:0} }}
                        type='text'
                        />
                    <TextField
                        placeholder='Lastname'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%', marginLeft:{lg:2,xs:0},marginTop:{xs:2,lg:0}}}
                        type='text' 
                        size='xsall'
                        />
                    </Box>
                    <Box sx={{ display: {lg:'flex',sx:'block'},marginTop:2}}>
                    <TextField
                        size='xsall'
                        placeholder='Email'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%',marginRight:{lg:2,xs:0}}}
                        type='email'
                        autoComplete="off"
                        autoFocus={true} 
                        variant="outlined" />
                    <TextField
                        size='xsall'
                        placeholder='Subject'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%',marginLeft:{lg:2,xs:0},marginTop:{xs:2,lg:0}}}
                        type='text'
                        autoComplete="off"
                        autoFocus={true} 
                        variant="outlined" />
                    </Box>
                    <Box sx={{ display: {lg:'flex',sx:'block'},marginTop:2}}>
                    <TextareaAutosize
                        placeholder='Write your message here....'
                        style={{ 
                            background: '#CBCBCB', 
                            width: '100%',
                            minHeight:'100px',
                            border:'none',
                            outline:'none',
                            width:'100%',
                            }}
                        />
                    </Box>
                    <Box sx={{ width: 100, marginLeft: 'auto' }}>
                    <Button
                        sx={{
                        background: 'white', color: '#012241', borderRadius: '5px',margin:{lg:2,xs:1} ,'&:hover': {
                            background: '#012241',
                            color: 'white',
                        }
                        }}>
                        <Typography sx={{ fontWeight: 700 }}>
                        Send
                        </Typography>
                    </Button>
                    </Box>
                </Box>
                <Box sx={{
                    display:{lg:'flex',xs:'block'},
                    justifyContent:'space-between',
                    color:'#fff',
                    pr:40,
                    pl:2,
                    width:{lg:'1000px',xs:"100%"},
                    marginLeft:'auto',
                    marginRight:'auto',
                    fontFamily:'Poppins',
                    textAlign:'left'
                    }}>
                    <Box sx={{display: 'block',p:2,width:"100%"}}>
                        <Typography sx={{ fontWeight: 700,fontSize:{lg:24,xs:17},marginBottom:2}}>
                            Contacts
                        </Typography>
                        <Typography sx={{fontSize:{lg:20,sx:14}}}>
                            <Typography>
                                +250780689938
                            </Typography>
                            <Typography>
                                avengersphantom@gmail.com
                            </Typography>
                        </Typography> 
                    </Box>
                    <Box sx={{display: 'block',p:2,width:"100%", marginLeft:{lg:30,xs:0}}}>
                        <Typography  sx={{ fontWeight: 700,width:"100%",fontSize:{lg:24,xs:17},marginBottom:2}}>
                            Follow us
                        </Typography>
                        <Typography sx={{display:'flex'}}>
                            <TwitterIcon /><LinkedInIcon /><FacebookIcon /><InstagramIcon />
                        </Typography> 
                    </Box>
                </Box>
                <Footer />
            </Box></>
        </Box>
       
      
    )
  
  
  }
  
  export default Contact;