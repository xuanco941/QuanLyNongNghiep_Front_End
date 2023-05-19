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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';

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
      <ListItemText primary="Lưu trữ dữ liệu" />
    </ListItemButton>

    <ListItemButton component={Link} to="/main/userOption">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Cài đặt" />
    </ListItemButton>

    
  </React.Fragment>
);
export const mainListItemsAdmin = (
  <React.Fragment >
    <ListItemButton component={Link} to="/admin/main">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lý nông nghiệp"></ListItemText>
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/user-manager">
      <ListItemIcon>
        <PersonOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lý người dùng" />
    </ListItemButton>

    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Quản lý tài khoản
    </ListSubheader>


    <ListItemButton component={Link} to="/main/inforUser">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lý tài khoản" />
    </ListItemButton>


    <LogoutButton />
  </React.Fragment>
);
export const secondaryListItemsAdmin = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Quản lý tài khoản
    </ListSubheader>


    <ListItemButton component={Link} to="/admin/change-password">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Đổi mật khẩu" />
    </ListItemButton>


    <LogoutButton />
  </React.Fragment>
);
