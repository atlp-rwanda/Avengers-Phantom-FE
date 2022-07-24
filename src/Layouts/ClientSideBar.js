import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import socket from "../utils/socket";
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, FavoriteIcon} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Fab from '@mui/material/Fab';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles(styles);
const Routes = [
    {
      id: 0,
      label: "Select your Road",
    },
    {
      id: 1,
      label: " Down Town Remera ",
      latlng: [12, 12],
    },
    { id: 2, label: "Nyamirambo Down Town", latlng: [12, 12] },
    {
      id: 3,
      label: "Down Town Kimironko",
      latlng: [12, 12],
    },
  ];
  const ClientSideBar = ({ props }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    // const {

    // }= props;
    

    const [carState, setCarState] = useState("...")

    console.log( 'Props' + props)

    return (
      <div className={classes.clientSideBar}>
        <Card sx={{ maxWidth: 345 }}>
        <form>
          <div className={classes.formFields}>
            <div>
              <select className={classes.routeInput}>
                {Routes.map((item) => (
                  <option value={item.latlng} key={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className={classes.startButton}
                style={{ marginTop: "20px", color: "white", backgroundColor: "#012241"}}
              >
                Go
              </button>
            </div>
          </div>
        </form>
      <CardHeader
        title="Real Time Status"
      />
      <CardContent>
        <Typography color="text.secondary">
            Driving Status:<em>{props}</em>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                Free Seats: <em>{carState}</em>
              </Typography>
              <Typography paragraph>
                <Typography> Current Passengers: <em>{carState}</em> </Typography>
                <Typography> Current Speed: <em>{carState}</em> </Typography>
              </Typography>
              <Typography>Bus registration: <em> Bus Reg </em></Typography>
              <Typography> Bus capacity: <em> capacity </em> </Typography>
              <Typography> Driver: <em> Driver Name</em> </Typography>
            </CardContent>
      </Collapse>
    </Card>
    </div>
    );
  };

  export default ClientSideBar;