import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack, Alert } from "@mui/material";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const btnStyle = { margin: 20, width: "25%" };

  return (
    <>
      <Box
        style={{ overflow: "hidden" }}
        bgcolor="rgba(1, 34, 65, 1)"
        height="800px"
      >
        <Navbar />
        <Grid
          elevation={4}
          style={{ margin: "1vh auto", width: 860, padding: 20 }}
        >
          <Stack>
            {/* <Alert severity="success">Your email sent successfully</Alert> */}
          </Stack>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Paper
            elevation={4}
            style={{ margin: "0vh auto", width: 780, padding: 20 }}
          >
            <Grid>
              <h3 style={{ margin: 20 }}>
                Hello User, Welcome to Phantom Reset{" "}
              </h3>
              <h3 style={{ margin: 20 }}>Password!</h3>
            </Grid>
            <Grid>
              <Typography ml={2}>Create new password</Typography>
              <TextField
                style={{ margin: 20, width: "95%" }}
                label="Create New Password"
                name="email"
                Placeholder="Enter new password"
                type="password"
                fullWidth
              />
              <Typography ml={2}>Create new password</Typography>
              <TextField
                style={{ margin: 20, width: "95%" }}
                label="Verify New Password"
                name="password"
                Placeholder="Enter new password"
                type="password"
                fullWidth
              />
            </Grid>
            <ul>
              <li>8 Charcters in length.</li>
              <li>At least one number</li>
              <li>At least one symbol</li>
            </ul>
            <Grid align="center">
              <Button
                style={btnStyle}
                variant="outlined"
                component={Link}
                to={`/signin`}
              >
                Cancel
              </Button>
              <Button
                style={btnStyle}
                variant="contained"
                component={Link}
                to={`/signin`}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};
export default ResetPassword;
