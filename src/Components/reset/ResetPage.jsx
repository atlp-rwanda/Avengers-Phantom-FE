import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Box } from '@material-ui/core'
import { Typography } from "@mui/material";
import { Stack, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import './style.css';
const ResetPage = () => {
  const btnStyle = { margin: 20, width: "25%" }

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitHander = (e) => {
    e.preventDefault();

    setLoading(true);
    setEmailError(false)
    const body = {
      email,
    };
    if (emailError == '') {
      setEmailError(true)

    } else {
      setEmailError(false)
    }
    axios({
      url: "http://localhost:9000/api/v1/users/forgotpassword",
      data: body,
      method: "PUT",
    }).then(res => {
      setEmailSent(true);
      setLoading(false)
      setTimeout(() => {
        setMessage("link to reset password has been sent successfully 👍🏾")

        navigate('/reset');
      }, 2000)

    }).catch((err) => {
      console.log(err)
      setLoading(false)
      setMessage("The User belongs to this Email does'nt exist")
    })

  }

  return (
    <>
      <Box bgcolor="rgba(1, 34, 65, 1)" height="840px">
        <Grid container justify="center" alignItems="center">
          <Grid elevation={4} style={{ margin: "6vh auto", width: 850, padding: 20 }}>
            <div className="message">
              <p style={{ backgroundColor: "white", borderRadius: "6px", color: "#012241", textAlign: 'center', fontSize: "16px" }}>{message}</p>

            </div>

          </Grid>
          <Paper elevation={4} style={{ margin: "17vh auto", width: 780, padding: 20 }}>
            <Grid> <h3 style={{ margin: 20 }}>Do you want to reset your password?</h3></Grid>
            <Grid >
              <form onSubmit={submitHander}  >
                <Typography ml={2} mt={2}>Enter your email</Typography>
                <TextField
                  type="email"
                  value={email}
                  label='Enter your email'
                  placeholder="Enter your email"
                  error={emailError}
                  style={{ margin: 20, width: '95%' }}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Grid align="center">
                  <Button

                    component={Link}
                    to={`/signin`}
                    style={btnStyle} variant="outlined" >Cancel</Button>
                  <Button type="submit" style={{ backgroundColor: '#012241', margin: 20, width: "25%" }} variant="contained">
                    {loading ? <b >Please Wait...</b> : <b>Send Email</b>}
                  </Button>
                </Grid>
              </form>
            </Grid>

          </Paper>

        </Grid>
      </Box>
    </>
  )
}
export default ResetPage;