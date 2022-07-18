import ReactDOM from "react-dom";

import "./modal.scss";
import { connect, useDispatch, useSelector  } from 'react-redux';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { fetchAllbuses } from '../../../redux/Action/fetchallbuses';
import { assigndrivers} from '../../../redux/Action/assigndrverstobus';
import {cleanCode} from '../../../redux/Action/clean'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { async } from "regenerator-runtime";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#012241",
    },
    thrirdly: {
      main: "#be0e0ecd",
    },
  },
});
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
   const useress=propp.userState.users.filter( user => (user.isAssigned == false && user.roleName=="driver"));
   console.log(propp.userState.users)
    const columns = [
      { field: 'uuid', headerName: 'ID', width: 150 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'gender', headerName: 'gender', width: 100 },
      { field: 'district', headerName: 'district', width: 150 },

      {
        field: '',
        headerName: '',
        width: 150,
        renderCell: (params) => (
          <Button
            variant="contained"
            color="secondary"
            backgroundColor="#012241"
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
    <ThemeProvider theme={theme}>
     {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
            <main className="modal_content">
            
             <DataGrid getRowId={(row)=>row.uuid} columns={columns} rows={useress} pageSize={5} />
            
             
             
             </main>

            <footer className="modal_footer">
             
              <Box sx={{ display: "flex",justifyContent: 'flex-end', flexWrap: "wrap" }}>
                <Button
                  onClick={async() => {close()} }
                  color="thrirdly"
                  backgroundColor="primary"
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
                    backgroundColor: "#012241",
                  }}
                  onClick={async () =>{
                     assignBusses()
                    close()
                
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
        </ThemeProvider>
    </>
  );
};

export default Modal;
