import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Grid } from '@material-ui/core';
import { connect, useDispatch, useSelector  } from 'react-redux';
import Modal from "../buses redux/newmodal/Modal.jsx";
import { fetchAllbuses } from '../../redux/Action/fetchallbuses';
import { fetchallusers } from '../../redux/Action/fetchallusers';
import { assigndrivers} from '../../redux/Action/assigndrverstobus';
import {cleanCode} from '../../redux/Action/clean'

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

    const[Id , setId] = useState(0)
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
   
    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'company', headerName: 'Name', width: 150 },
      { field: 'manufacturer', headerName: 'Manifacturer', width: 100 },
      { field: 'plateNumber', headerName: 'Plate number', width: 150 },
      // { field: 'categoryId', headerName: 'Category', width: 150 },
      // { field: 'createdAt', headerName: 'Date created', width: 250 },
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
                setId(params.row.uuid)
                localStorage.setItem('busuuid',params.row.uuid);
                setModal(!modal)

            }}
          >
            Assign
          </Button>
           
      )},
      // {
      //   field: 'delete',
      //   headerName: 'Delete',
      //   width: 150,
      //   renderCell: (params) => (
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       size="small"
      //       style={{ marginLeft: 16 }}
      //       onClick={()=> {
      //         // dispatch(deleteExpenseAction(params.row.id))
      //       }}
      //     >
      //       Delete
      //     </Button>
      // )}
    ]

  return (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        
    >  
     {/* <button style={{ height: 100, width: '90%'}} title="My Modal"  onClick={() => props.fetchAllbuses()}>Increase Count</button>disableMultipleSelection={true} checkboxSelection */}
     <>
        <div style={{ marginTop:'200px' ,width:'750px',height: 400,marginLeft:'340px' }}>
     
        <DataGrid  columns={columns} rows={props.busesState.buses} pageSize={5} />
        <Modal propp={props}show={modal}close={Toggle}>
           
          
          </Modal>
          {props.assignState.err ?(
               alert(`${props.assignState.err}`),handleassign()
               ):null}
          {props.assignState.resp ?(
               alert(`${props.assignState.resp}`),handleassign()
               ):null}
        </div>
        </>
    </Grid>
  );

}

const mapStateToProps = (fetchbuses) => {
    return {
    busesState: fetchbuses.fetchbuses,
    userState:fetchbuses.fetchusers,
    assignState:fetchbuses.assign
}}
// const mapStateToProps = ({fetchbuses}) => ({
//     busesState: fetchbuses
//     })
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchAllbuses: () => dispatch(fetchAllbuses())
        
//     };
// };
export default connect(mapStateToProps, { fetchAllbuses })(ListBuses) 
// export default ListBuses
// export default connect(mapStateToProps,mapDispatchToProps)(ListBuses) 
