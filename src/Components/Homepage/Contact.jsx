import React, { useState } from "react";
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
import { ContactValidator } from "./ContactValidator.jsx";



function Contact() {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
      } = ContactValidator();

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
        backgroundImage: `url(https://res.cloudinary.com/avengersphantom/image/upload/v1656445470/Images/images/Contact_oqjusv.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        position:'relative',
        boxShadow:'inset 0 0 0 2000px rgb(1, 34, 65,0.8)',
        }}>
            
            <Box
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
                    <form onSubmit={handleFormSubmit}>
                    <Box sx={{ display: {lg:'flex',sx:'block'}}}>
                    <TextField
                        size='small'
                        placeholder='Firstname'
                        sx={{ 
                            background: '#CBCBCB', 
                            borderRadius: '10px', 
                            width: '100%',
                            marginRight:{lg:2,xs:0},
                            }}
                        type='text'
                        name="firstname"
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        {...(errors["firstname"] && { error: true, helperText: errors["firstname"] })}
                        />
                    <TextField
                        placeholder='Lastname'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%', marginLeft:{lg:2,xs:0},marginTop:{xs:2,lg:0}}}
                        type='text' 
                        size='small'
                        name="lastname"
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        {...(errors["lastname"] && { error: true, helperText: errors["lastname"] })}
                        
                        />
                    </Box>
                    <Box sx={{ display: {lg:'flex',sx:'block'},marginTop:2}}>
                    <TextField
                        size='small'
                        placeholder='Email'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%',marginRight:{lg:2,xs:0}}}
                        type='text'
                        name="email"
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        {...(errors["email"] && { error: true, helperText: errors["email"] })}

                        />
                    <TextField
                        size='small'
                        placeholder='Subject'
                        sx={{ background: '#CBCBCB', borderRadius: '10px', width: '100%',marginLeft:{lg:2,xs:0},marginTop:{xs:2,lg:0}}}
                        type='text'
                        name="subject" 
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        {...(errors["subject"] && { error: true, helperText: errors["subject"] })}

                        />
                    </Box>
                    <Box sx={{ display: {lg:'flex',sx:'block'},marginTop:2}}>
                    <TextField
                        placeholder='Write your message here....'
                        name="message"
                        row={30}
                        multiline
                        style={{ 
                            background: '#CBCBCB', 
                            width: '100%',
                            border:'none',
                            outline:'none',
                            }}
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        {...(errors["message"] && { error: true, helperText: errors["message"] })}
                        />
                    </Box>
                    <Box sx={{ width: 100, marginLeft: 'auto' }}>
                    <Button
                        sx={{
                        background: 'white', color: '#012241', borderRadius: '5px',margin:{lg:2,xs:1} ,'&:hover': {
                            background: '#012241',
                            color: 'white',
                        }
                        }}
                        type="submit"
                        disabled={!formIsValid()}
                        >
                        Send
                    </Button>
                    </Box>
                    </form>
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
                        <Box sx={{fontSize:{lg:20,sx:14}}}>
                            <Typography>
                                +250780689938
                            </Typography>
                            <Typography>
                                avengersphantom@gmail.com
                            </Typography>
                        </Box> 
                    </Box>
                    <Box component="div" sx={{display: 'block',p:2,width:"100%", marginLeft:{lg:30,xs:0}}}>
                        <Typography  sx={{ fontWeight: 700,width:"100%",fontSize:{lg:24,xs:17},marginBottom:2}}>
                            Follow us
                        </Typography>
                        <Typography sx={{display:'flex'}}>
                            <TwitterIcon /><LinkedInIcon /><FacebookIcon /><InstagramIcon />
                        </Typography> 
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
       
      
    )
  
  
  }
  
  export default Contact;