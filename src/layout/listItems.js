import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import { Link } from "react-router-dom";
import LogoutButton from "../components/Logout/Logout";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/Main">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Màn hình giám sát"></ListItemText>
    </ListItemButton>
    <ListItemButton component={Link} to="/Detail">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Báo cáo" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Detail">
      <ListItemIcon>
        <ElectricMeterIcon />
      </ListItemIcon>
      <ListItemText primary="Quy trình" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Quản lý tài khoản
    </ListSubheader>

    <LogoutButton />
  </React.Fragment>
);
