import React from 'react';
// import { Skeleton } from '@mui/material';
import "./skeleton.css"

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`;
    return (
        <div className={classes}></div>
    )
}

export default SkeletonElement
