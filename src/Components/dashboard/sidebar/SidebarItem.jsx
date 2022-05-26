import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";

export const SidebarItem = [
  {
    path: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    title: "Dashboard",
    cName: "sidetext",
  },
  {
    path: "/routes",
    icon: <LocationOnIcon fontSize="small" />,
    title: "Routes",
    cName: "sidetext",
  },
  {
    path: "/driveroperator",
    icon: <PersonAddIcon fontSize="small" />,
    title: "Drivers & Operators",
    cName: "sidetext",
  },
  {
    path: "/bus",
    icon: <DirectionsBusFilledIcon fontSize="small" />,
    title: "Buses",
    cName: "sidetext",
  },
  // {
  //   path: "/rolepermission",
  //   icon: <PersonIcon fontSize="small" />,
  //   title: "Rolepermission",
  //   cName: "sidetext",
  // },
  {
    path: "/updateprofile",
    icon: <PersonIcon fontSize="small" />,
    title: "Update profile",
    cName: "sidetext",
  },
  {
    path: "/assign",
    icon: <PersonIcon fontSize="small" />,
    title: "asign buses",
    cName: "sidetext",
  },
];
