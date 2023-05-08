import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";

import logo from "../asset/img/logo-leanway.png";

import { Report } from "../components/Table/";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { LineGraph } from "../components/Chart/LineChart";
import { PieChart } from "../components/Chart/PieChart";
import { VerticalChart } from "../components/Chart/VerticalChart"
import TableAler from "../components/TableAler/index";

import Tags from "../components/Combobox/";
import DateTo from "../components/TimePicker/DateTo";
import { Padding } from "@mui/icons-material";
import DateEnd from "../components/TimePicker/DateEnd";





const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));
const mdTheme = createTheme();

function DashboardContent() {
  const [upNumber, setUpNumber] = useState(0);
  const handleUpNumber = () => {
    setUpNumber(upNumber + 1);
  };

  const [open, setOpen] = React.useState(true);
  const [logoVisible, setLogoVisible] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    setLogoVisible(!logoVisible);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  //Test thêm cb

  //endtest
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}></AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              marginBottom: '17px',
              paddingTop: '15px'
            }}
          >
            {logoVisible && <img src={logo} width={180} />}
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: 'white',
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            marginLeft: "10px",
            marginRight: '10px'
          }}
        >

          <Stack
            sx={{
              height: "auto",
              backgroundColor: 'white',
            }}
          >

            <TableAler></TableAler>
            <Tags></Tags>
            <Box sx={{
              backgroundColor: '#f9f9f9',
              margin: '10px 0px',
              height: '70px',


            }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                  <DateTo ></DateTo>
                </Grid>
                <Grid item xs={8}>
                  <DateEnd ></DateEnd>
                </Grid>
                <Grid item xs={1}>
                  <Button variant="contained" sx={{height:'63px',fontWeight:'Bold'}}>Xuất Excel</Button>
                </Grid>
                <Grid item xs={1}>
                  <Button variant="contained" sx={{height:'63px',fontWeight:'Bold'}}>Tìm kiếm</Button>
                </Grid>
              </Grid>
            </Box>
            <Report></Report>



          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard2() {
  return <DashboardContent />;
}
