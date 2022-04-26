import React from "react";
import Navbar from '../navbar/Navbar.jsx';
import { Grid, Paper, TextField, Button, Box } from '@material-ui/core'
import { Typography } from "@mui/material";
import { Stack, Alert} from '@mui/material'

const ResetPage = () => {

    
    const btnStyle= {margin: 20, width: "25%"}
    
    return (
        <>
        <Box bgcolor="rgba(1, 34, 65, 1)"  height="800px">
           <Navbar />
         <Grid container justify="center" alignItems="center">
         <Grid  elevation={4}  style={{margin: "1vh auto" ,width: 860 ,padding: 20 }}>
                <Stack>
                    {/* <Alert severity="success">Your email sent successfully</Alert> */}
                </Stack>

        </Grid>
             <Paper   elevation={4}  style={{margin: "17vh auto" ,width: 780 ,padding: 20 }}>
                    <Grid>
                    <h3 style={{margin:20}}>Do you want to reset your password?</h3>
                    
                    </Grid>
               <Grid >
                <Typography ml={2} mt={2}>Enter your email</Typography>
                <TextField style={{margin: 20, width: '95%'}} label= 'Create New Password' name="email" Placeholder="Enter your email" type='password' fullWidth   />
               </Grid> 
            <Grid align="center">
                <Button style={btnStyle} variant="outlined">Cancel</Button>
                <Button style={btnStyle} variant="contained">Send</Button>
            </Grid>
             </Paper>
         </Grid>
         </Box> 
         </>        
    )
}
export default ResetPage;