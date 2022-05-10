import * as React from 'react';
import Box from '@mui/material/Box';
import SVG from '../../static/images/b2.svg'
import { Outlet, Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import React, { useState, useEffect} from "react";

import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      primary: {
           main:'#ffffff',
      },
      secondary: {

        main: '#012241',
      },
    },
  });
 
export const Signin = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const [prod, setprod] = React.useState({
    email:"",
    password:"",
    
  });
  const { email,password} = prod;
  const onInputChange = e => {
    const { name, value } = e.target;
    setprod({ ...prod, [name]: value });
  };
  const submitRecord = e => {
    e.preventDefault();
    console.log(values.password)
    
    const send={
      email:prod.email,
      password:values.password,
    }
    console.log(JSON.stringify(send))
    fetch(`http://localhost:5000/api/v1/users/login`
          ,{

            method: 'post',
            headers: {
                'Content-Type': 'application/json'

              },
            body:JSON.stringify(send)
          
        })
          .then(
             function(response) {
                if (response.status !== 200) {
                  console.log(response)
            
                response.json().then(function(data) {
             
                alert(`'Looks like there was a problem   ' ${data.message}`) });
                  return;
               }
    
          // Examine the text in the response
              response.json().then(function(data) {
               console.log(data);
               location.replace('../dashboard');
               
          
                localStorage.setItem('token',data.token );
                
     
                 //console.log(donut + " donuts cost $" + cost + " each");
            
             
    
           
            });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :', err);
      });
            
    };
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        
        
      
       
        <Box sx={{
            
            

            display:'flex',
            flexDirection: 'column',
            left: 0,
            right: 0,         
          
            boxSizing:'border-box' ,
            position: 'absolute',
            
            
            
            top:'68px' ,
            
            bottom: 0,
           
            
            }}>
        <Box 
         sx={{
          //padding: 8,
            pt:8,
          //  pr:8,

          display:'flex',
          justifyContent: 'space-around',
                     
          height: '100%',
          // boxSizing:'border-box' 
          flexWrap: 'wrap',
          color:'primary.main',
          background:`linear-gradient(rgba(1, 34, 65, 0.5),rgba(1, 34, 65, 0.9)), url(${SVG})`,
          // backgroundColor: 'secondary.main',
          backgroundSize: "cover",
          border: "1px solid black",
          display: { xs: 'flex  ', md: ' flex ' }
          }}>
        {/* <Box 
        sx={{ //padding: 8,
          // mt:0.5,

          //display:'flex',
          display: { xs: 'flex ', md: 'none ' },
          justifyContent: 'space-between',
                     
          height: '100%',
          // boxSizing:'border-box' 
          flexWrap: 'wrap',
          color:'primary.main',
          background:`linear-gradient(rgba(1, 34, 65, 0.5),rgba(1, 34, 65, 0.9)), url(${SVG})`,
          // backgroundColor: 'secondary.main',
          backgroundSize: "cover",
          border: "1px solid black",
          
          }}>
         */}
        
        <Box sx={{height:'fit-content' 
           ,width: '253px' 
           ,fontWeight: '400',
           mt:8,
           ml:8,
           fontSize: '40px',
           display: { xs: 'none ', md: ' flex' } }}>Phantom Transportation</Box >
       <Box sx={{height:'fit-content' 
           ,width: '253px' 
           ,fontWeight: '400',
           mt:8,
           ml:8,
           fontSize: '20px',
           display: { xs: 'flex ', md: 'none ' } }}>Phantom Transportation</Box >
        <Box 
        // component='form'
    
        sx={{
           
            
            p:2,
            mb:10,
            height:'fit-content',
            width:'400px',
            display:'flex',
            backgroundColor:"primary.main",
            flexDirection: 'column',
            borderRadius: '10px',
            // boxSizing:'border-box' ,
            
        }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel> 
         <OutlinedInput label="email" name="email" value={email} onChange={e => onInputChange(e)} sx={{Color:"secondary.main",mt:2}} />
         {/* <TextField  label="password"  sx={{Color:"secondary.main",m:2, borderRadius: '10px', type:"password"}} /> */}
         <FormControl m='10px' sx={{ }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> 
          <OutlinedInput
            label="password"
            name="password"
            value={password} onChange={e => onInputChange(e)}
            sx={{ mt: 2}} 
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment  sx={{ m: 1}}  position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center", m: 4 }}>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              height: "30.16px",
              width: "150.37px",
              borderRadius: "45.125px",
            }}
          >
            <Typography sx={{ mx: "auto", width: "100.37px" }}>
              sign in
            </Typography>
          </Button>
        </Box>
        <Box
         
          sx={{color:'secondary.main', }}
         >
          <Button
                
                
                sx={{ my: 2, color:'secondary.main', display: 'block',display:'flex', justifyContent: 'center' }}
                component={Link} to={`/reset`} 
              >
              <Typography sx={{textDecoration: 'underline'}} display="inline">forget password reset</Typography> 
                
              </Button>
         
        </Box>
        </Box>
        </Box>
        </Box>
        {/* </Box> */}
        
       
        </ThemeProvider>
        
    )
}
