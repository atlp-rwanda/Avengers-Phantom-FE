import React, { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css';
import IconButton from '@mui/material/IconButton';




const ResetPassword = () => {
  const btnStyle = { margin: 20, width: "25%" };
  const label = { color: "red", margin: 20}
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if(password.length== 0 ){
      setError(true);
      console.log(password)
    }
    else if (password.length < 8) {
      setCharacters(true);
    }
    else if (/([A-Z]+)/g.test(value.password)) {
      setSymbol(true)
    }
   
  }
  



  return (
    <>
      <Box
        style={{ overflow: "hidden" }}
        bgcolor="rgba(1, 34, 65, 1)"
        height="840px"
      >
        <Navbar />
        <Grid
          elevation={4}
          style={{ margin: "1vh auto", width: 860, padding: 20 }}
        >
          <Stack>
           
          </Stack>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Paper
            elevation={4}
            style={{ margin: "20vh auto", width: 780, padding: 20 }}
          >
            <form onSubmit={handleFormSubmit} action="">
            <Grid>
              <h3 style={{ margin: 20 }}>
                Hello User, Welcome to Phantom Reset{" "}
              </h3>
              <h3 style={{ margin: 20 }}>Password!</h3>
            </Grid>
            <Grid>

              
              <Typography ml={2} mt={2}>Enter new password</Typography>
                <TextField
                  type="password"
                  value={password}
                  label='Enter new password'
                  style={{ margin: 20, width: '95%' }}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
              {error? 
              <label style={label}>Password can not be Empty</label>: "" }
            
              
            </Grid>
            <Grid style={{margin: 21}}>
            
            <ul>
              {characters ? <li style={label}>8 Charcters in length.</li> : "" }
              {symbol ? <li style={label}>You don't have any capital letters in there your Password</li> : "" }
              
              <li>At least one symbol</li>
            </ul>
            
            </Grid>
            
            <Grid align="center">
            <Button

              // component={Link}
              // to={`/signin`}
              style={btnStyle} variant="outlined" >Cancel</Button>
              <Button
                type="submit"
                style={{ backgroundColor: '#012241', margin: 20, width: "25%" }}
                variant="contained"
                // component={Link}
                // to={`/signin`}
              >
                Submit
              </Button>
            </Grid>
            </form>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};
export default ResetPassword;
