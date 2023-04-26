import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Header from './Header';
import logo from "../asset/img/logo-leanway.png"
import { ComboboxPhongban, ComboboxMaduan } from '../components/Combobox/Combobox';
import Tags from '../components/Combobox/CMBPhongBan';
import MyComponent from '../components/Table/TableIssue';
import { useState } from 'react';
import Stack from '@mui/material/Stack'
import { LineGraph } from '../components/Chart/LineChart'
import In4 from '../components/HMI/in4';
import BasicCard from '../components/Box/CardHMI';
import ButtonAdd from '../components/Button/Button';
import DateTimePickerValue from '../components/TimePicker/DateTo'
import FirstComponent from '../components/TimePicker/DateTo';
import DeviceList from '../components/HMI/in4';
import DatePicker from '../components/TimePicker/DateTo';
import TableAler from '../components/TableAler/Aler';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(6),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(7),
                },
            }),
        },
    }),
);
const mdTheme = createTheme();

function DashboardContent() {
    const [upNumber, setUpNumber] = useState(0)
    const handleUpNumber = () => {
        setUpNumber(upNumber + 1)
    }

    const [open, setOpen] = React.useState(true);
    const [logoVisible, setLogoVisible] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
        setLogoVisible(!logoVisible);
    };

    return (

        <ThemeProvider theme={mdTheme}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
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

                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    {/* <Header /> */}

                    <Stack sx={{
                        height: 'auto', backgroundColor: '#cdcdcd', display: 'flex', flexGrow: 1
                    }}>
                        <Grid>
                            <Grid>
                            <TableAler />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                            <DeviceList />
                            </Grid>


                            <DatePicker />

                            {/* <MyComponent></MyComponent> */}
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}