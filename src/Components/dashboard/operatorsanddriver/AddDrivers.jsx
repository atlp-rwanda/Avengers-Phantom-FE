import React from 'react';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from './Button.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import DashNavbar from '../dashnavbar/DashNavBar.jsx';
import '../Dashboard.css';
import './DriverAndOperator.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const genders = [
  'Male',
  'Female',
  'Bisexual',
  'Gay',
  'Homosexual',
  'Resbian',
  'other'
];
function getStyles(gender, genderName, theme) {
  return {
    fontWeight:
      genderName.indexOf(gender) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const AddDrivers = () => {
  const theme = useTheme();
  const [genderName, setGenderName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setGenderName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <DashNavbar style={{ position: 'fixed' }} />
      <div className='dashboard'>
        <div className='generalmenubar'>{<Sidebar />}</div>
        <div className='containt'>
          <h3>Register new driver</h3>
          <hr />
          <div>
            <div className='imageicon'>
              <div className='addimageicon'>
                <CameraAltOutlinedIcon />
              </div>
            </div>
            <div>
              <Grid container columns={15} className='gridcontainer'>
                <Grid item xs={5}>
                  <InputLabel id='demo-multiple-name-label'>
                    Driver name
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>
                    District
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>Email</InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>
                    Carplate
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id='demo-multiple-name-label'>
                    ID number
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>Sector</InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>
                    Permit Id
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>
                    Capacity
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id='demo-multiple-name-label'>Gender</InputLabel>
                  <Select
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    multiple
                    value={genderName}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                  >
                    {genders.map((gender) => (
                      <MenuItem
                        key={gender}
                        value={gender}
                        style={getStyles(gender, genderName, theme)}
                      >
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel id='demo-multiple-name-label'>Cell</InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel id='demo-multiple-name-label'>
                    Tell number
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <InputLabel
                    id='demo-multiple-name-label'
                    className='inputlabel'
                  >
                    Vehicle
                  </InputLabel>
                  <TextField id='outlined-basic' variant='outlined' />
                  <Button text='Add' bcolor='#012241' />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDrivers;
