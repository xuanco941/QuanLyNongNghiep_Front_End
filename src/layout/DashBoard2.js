import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import { Grid } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Stack from "@mui/material/Stack";
import { useState } from "react";



import { Report } from "../components/Table/index1";
import TableAler from "../components/TableAler/index";
import DateTo from "../components/TimePicker/DateTo";
import DateEnd from "../components/TimePicker/DateEnd";
import ComboBoxHe from "../components/Combobox/ComboboxHe";
import ComboBoxKhu from "../components/Combobox/ComboboxKhu";
import ComboBoxSenSor from '../components/Combobox/ComboBoxSensor';

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

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Stack
            sx={{
              height: "auto",
              backgroundColor: "white",
            }}
          >
            <TableAler></TableAler>
            <Box
              sx={{

                backgroundColor: "#f9f9f9",
                margin: "10px 0px",
                height: "100%",
                border: '2px groove',
                borderRadius: '5px',

              }}
            >
              <Grid container spacing={2} marginTop='5px' marginBottom="10px" >
                <Grid className="Area"  item xs={4} >
                  <ComboBoxKhu ></ComboBoxKhu>
                </Grid>
                <Grid className="System" item xs={4} >
                  <ComboBoxHe></ComboBoxHe>
                </Grid>
                <Grid className="123"  item xs={4} >
                  <ComboBoxSenSor></ComboBoxSenSor>
                </Grid>
              </Grid>



              <div className="filerUnder" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 10px' }}>
                <div className="RangeTime" style={{ display: 'flex', border: '2px groove', padding: '10px' ,width:'940px',justifyContent: 'space-between',gap:'213px'}}>
                  <div className="dateTo" style={{ flex: 1, }} > 
                    <DateTo />
                  </div>

                  <div className="dateEnd" style={{ flex: 1 }}>
                    <DateEnd />

                  </div>


                </div>
                <div className="button" style={{ display: 'flex', paddingTop: '8px',}}>
                  <div className="ExportEx" style={{ marginRight: '23px' }}>
                    <Button
                      variant="contained"
                      sx={{ height: '80%', fontWeight: "Bold", minWidth: '170px',background:'#208fbb' }}
                    >
                      Xuất Excel
                      <GetAppIcon sx={{marginLeft:'7px'}}></GetAppIcon>
                    </Button>

                  </div>
                  <div className="Search" >
                    <Button
                      variant="contained"
                      sx={{ height: '80%', fontWeight: "Bold", minWidth: '163px' ,marginRight:'140px',background:'#208fbb' }}
                    >
                      Tìm kiếm
                      <ManageSearchIcon sx={{marginLeft:'7px'}}></ManageSearchIcon>
                    </Button>
                  </div>
                </div>
              </div>


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
