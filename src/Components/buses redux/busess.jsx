import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Grid } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { fetchAllbuses } from '../../redux/Action/fetchallbuses';


function ListBuses( props ) {
    // const dispatch = useDispatch();
    // useEffect(() =>{
    //     handleBusses()
    // }, [])

    // const handleBusses = async (dispatch) => {
    //   return {
    //     fetchAllbuses: () => dispatch(fetchAllbuses())
            
    // };
    // }


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
   
    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'number', headerName: 'Number', width: 100 },
      { field: 'amount', headerName: 'Amount', width: 150 },
      { field: 'categoryId', headerName: 'Category', width: 150 },
      { field: 'createdAt', headerName: 'Date created', width: 250 },
      // {
      //   field: 'edit',
      //   headerName: 'Edit',
      //   width: 150,
      //   renderCell: (params) => (
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       size="small"
      //       style={{ marginLeft: 16 }}
      //       onClick={()=> {
      //         // setEditData(params.row)
      //         // setEditOpen(true)
      //       }}
      //     >
      //       Edit
      //     </Button>
      // )},
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
    >   <button style={{ height: 100, width: '90%'}} onClick={() => props.fetchAllbuses()}>Increase Count</button>
        <div style={{ marginTop:'300px' ,height: 400, width: '90%'}}>
        {/* <DataGrid  columns={columns} rows={props.busesState.buses} pageSize={5} checkboxSelection /> */}
        </div>
    </Grid>
  );
// return (
//     <div >
      
//         <button style={{ height: 700, width: '90%'}} onClick={() => props.fetchAllbuses()}>Increase Count</button>

        
//     </div>
// );
}

const mapStateToProps = (fetchbuses) => {
    console.log('state:', fetchbuses.fetchbuses);
    return {
    busesState: fetchbuses,
}}
// const mapStateToProps = ({fetchbuses}) => ({
//     busesState: fetchbuses
//     })
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllbuses: () => dispatch(fetchAllbuses())
        
    };
};
// export default connect(mapStateToProps, { fetchAllbuses })(ListBuses) 
// export default ListBuses
export default connect(mapStateToProps,mapDispatchToProps)(ListBuses) 