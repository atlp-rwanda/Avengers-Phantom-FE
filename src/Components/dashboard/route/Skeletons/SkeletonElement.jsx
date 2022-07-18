import React from 'react';
import Skeleton from'react-loading-skeleton';
import {
    Box,
    Grid    
  } from "@mui/material";
import { Button } from "@mui/material";
import './Skeleton.css';
 
const SkeletonElement = ({cards})  => {  
    return Array(cards).fill(0).map((item,i)=> (
        <div className="card-skeleton" key={i}>          
           <Grid container minHeight={30} spacing={1} >
                <Grid item container minHeight={20} sx={{ width: "95%", margin: { xs: "auto", sm: "auto" }, display: "flex" }}>
                     <Grid item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={6.75} border={"1px solid #364878"}>
                            <Box sx={{ mb: 1, px: 2}}>
                                <Box my={0.5} sx={{ textAlign: 'center' }}>                          
                                    <Skeleton count = {3}/>                                
                                </Box>                                
                          </Box>
                </Grid>
                 
                  <Grid container item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={2} >
                    <Grid item xs={12} sx={{ mt: { xs: 1.5 } }} sm={4} md={12} >
                      <Skeleton />
                    </Grid>
                    
                  </Grid>
                </Grid>
              </Grid>

        </div>
    ))
}
export default SkeletonElement;