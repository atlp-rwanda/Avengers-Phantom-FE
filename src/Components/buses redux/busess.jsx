import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Grid } from '@material-ui/core';
import { connect, useDispatch, useSelector  } from 'react-redux';
import Modal from "../buses redux/newmodal/Modal.jsx";
import { fetchAllbuses } from '../../redux/Action/fetchallbuses';
import { fetchallusers } from '../../redux/Action/fetchallusers';
import { assigndrivers} from '../../redux/Action/assigndrverstobus';
import {cleanCode} from '../../redux/Action/clean'
import DashboardLayout from "../../Layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#012241",
    },
  
  },
});
function ListBuses( props ) {
    
    const dispatch = useDispatch();
    useEffect(() =>{
        handleBusses()
        handleUsers()
        handleassign()
    }, [])
    const handleassign=async () =>{
      dispatch(cleanCode())
      close()
    }
    const handleBusses = async () => {
       dispatch(fetchAllbuses())
    }
    const assignBusses = async () => {
      dispatch( assigndrivers())
   }
    const handleUsers = async () => {
      dispatch(fetchallusers())
   }
   const reload = async() =>{
    window.location.reload()
   }
   
    const busess=props.busesState.buses.filter(bus => bus.isAssigned == false);
    const[Id , setId] = useState(0)
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    const [modal2, setModal2] = useState(true);
    const Toggle2 = async() =>{
            setModal2(!modal2);
          } 
          console.log(props.assignState.resp)
    const columns = [
   
      { field: 'company', headerName: 'Name', width: 150 },
      { field: 'manufacturer', headerName: 'Manifacturer', width: 100 },
      { field: 'plateNumber', headerName: 'Plate number', width: 150 },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 150,
        renderCell: (params) => (
          <Button
            variant="contained"
            
            color="#012241"
            backgroundColor="#012241"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={(e)=> {
                e.preventDefault();
                setId(params.row.uuid)
                localStorage.setItem('busuuid',params.row.uuid);
                setModal(!modal)

            }}
          >
            Assign
          </Button>
           
      )},

    ]
 

  return (
    <DashboardLayout>
    <ToastContainer />
    <div>
    <Grid
        // container
        direction="row"
        justify="center"
        alignItems="center"
        
    >  
    
     <>
     <ThemeProvider theme={theme}>
        <div style={{ marginTop:'200px' ,width:'750px',height: 400,marginLeft:'100px' }}>
     
        <DataGrid  columns={columns} rows={busess} getRowId ={(row) => row.uuid} pageSize={5} />
        <Modal propp={props}show={modal}close={Toggle}>
           
          
          </Modal>
          {props.assignState.err ?(
               alert(`${props.assignState.err}`),handleassign(),reload()
               ):null}
       
          {props.assignState.resp ?(
               alert(`${props.assignState.resp.message}`),handleassign(),reload()
               ):null}
              
        </div>
        </ThemeProvider>
        </>
    </Grid>
    </div>
    </DashboardLayout>
  );

}

const mapStateToProps = (fetchbuses) => {
    return {
    busesState: fetchbuses.fetchbuses,
    userState:fetchbuses.fetchusers,
    assignState:fetchbuses.assign
}}

export default connect(mapStateToProps, { fetchAllbuses })(ListBuses) 

