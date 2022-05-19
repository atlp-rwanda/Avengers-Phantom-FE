import ReactDOM from "react-dom";
// import * as React from "react";
import "./modal.scss";
import { connect, useDispatch, useSelector  } from 'react-redux';
// import Close from "./times-solid.svg";ReactDOM.createPortal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { fetchAllbuses } from '../../../redux/Action/fetchallbuses';
import { assigndrivers} from '../../../redux/Action/assigndrverstobus';
import {cleanCode} from '../../../redux/Action/clean'

const Modal = ({propp,show, close, title, children }) => {
  const dispatch = useDispatch();
    const [mess,setMess]=useState(null)
    const assignBusses = async () => {
      dispatch( assigndrivers())
   }
   const handleassign=async () =>{
     dispatch(cleanCode())
     close()
   }
    const columns = [
      { field: 'uuid', headerName: 'ID', width: 150 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'gender', headerName: 'gender', width: 100 },
      { field: 'district', headerName: 'district', width: 150 },

      {
        field: 'edit',
        headerName: 'Edit',
        width: 150,
        renderCell: (params) => (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={(e)=> {
                e.preventDefault();
                localStorage.setItem('useruuid',params.row.uuid);
               

            }}
          >
            Add
          </Button>
           
      )},]
  return (
    <>
     {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              
            </header> */}
            <main className="modal_content">
            
             <DataGrid getRowId={(row)=>row.uuid} columns={columns} rows={propp.userState.users} pageSize={5} />
            
             
             
             </main>

            <footer className="modal_footer">
              {/* <button className="modal-close" onClick={() => close()}>
              Cancel
            </button> */}
              <Box sx={{ display: "flex",justifyContent: 'flex-end', flexWrap: "wrap" }}>
                <Button
                  onClick={() => Toggle()}
                  color="secondary"
                  variant="contained"
                  sx={{
                    height: "30.16px",
                    width: "90.37px",
                    borderRadius: "45.125px",
                    boxSizing: "border-box",
                    ml: "100px",
                  }}
                >
                  <Typography sx={{ mx: "auto", width: "118.37px" }}>
                    cancel
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{
                    height: "30.16px",
                    width: "90.37px",
                    borderRadius: "45.125px",
                    boxSizing: "border-box",
                    ml: "10px",
                    backgroundColor: "#bd2424",
                  }}
                  onClick={async () =>{
                     assignBusses()
                    close()
                  console.log('assigned')
                  
                 
                  // setModal(!modal)
                  }}
                >
                  <Typography sx={{ mx: "auto", width: "118.37px" }}>
                    assign
                  </Typography>
                </Button>
              </Box>

             
            </footer>
          </div>
        </div>
        ) : null}
    </>
  );
};

export default Modal;
