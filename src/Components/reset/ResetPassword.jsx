import React, { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';




const ResetPassword = () => {
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
    paassword: "",

  });
  const { paassword } = prod;
  const onInputChange = e => {
    const { name, value } = e.target;
    setprod({ ...prod, [name]: value });
  };
  const btnStyle = { margin: 20, width: "25%" };
  const label = { color: "red", margin: 20 }
  const label2 = { color: "red", }
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password.length == 0) {
      setError(true);
    }
    else if (password.length < 8) {
      setCharacters(true);
    }
    else if (/([A-Z]+)/g.test(password)) {
      setSymbol(true)

    }


  }
  const body = {
    password,
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
          style={{ margin: "4vh auto", width: 860, padding: 20 }}
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
                <OutlinedInput
                  type={values.showPassword ? 'text' : 'password'}
                  value={password}
                  label='Enter new password'
                  style={{ margin: 20, width: '95%' }}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment sx={{ m: 1 }} position="end">
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
                />
                {error ?
                  <label style={label}>Password can not be Empty*</label> : ""}
              </Grid>
              <Grid style={{ margin: 21 }}>
                <ul>
                  {characters ? <li style={label2}>Password Must be 8 Charcters*</li> : ""}
                  {symbol ? <li style={label2}>Password Must be 8 Charcters*</li> : ""}
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