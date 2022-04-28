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
  },
  {
    path: "/routes",
    icon: <LocationOnIcon fontSize="small" />,
    title: "Routes",
  },
  {
    path: "/driveroperator",
    icon: <PersonAddIcon fontSize="small" />,
    title: "Driveroperator",
  },
  {
    path: "/bus",
    icon: <DirectionsBusFilledIcon fontSize="small" />,
    title: "Bus",
  },
  {
    path: "/rolepermission",
    icon: <PersonIcon fontSize="small" />,
    title: "Rolepermission",
  },
];
