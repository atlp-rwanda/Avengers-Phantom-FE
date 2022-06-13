import React from 'react';
import Skeleton from'react-loading-skeleton';
import {
    Box,
    Grid,
    ListItemButton,
    ListItemText,
    Typography,
  } from "@mui/material";
import './Skeleton.css';
 
const SkeletonElement = ({cards})  => {  
    return  (
        <div className="card-skeleton">          
            <div className="left-col">
                <Skeleton count = {3}/>
            </div>
            <div className="middle-col">
                <Skeleton count = {3}/>
            </div>
            <div className="right-col">
                <Skeleton count = {3}/>
            </div>
        </div>
    )
}
export default SkeletonElement;