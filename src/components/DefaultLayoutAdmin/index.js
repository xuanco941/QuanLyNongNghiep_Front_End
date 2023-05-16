import { SideBarMenuAdmin } from "../SideMenu";
import Box from '@mui/material/Box';
import AccountPopover from "./AccountPopover";
import Notification from "./Notification";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Divider } from "@mui/material";
function DefaultLayoutAdmin({ children }) {
    console.log("CHILDREN", children);
    const theme = createTheme()
    return (
        <>
            <SideBarMenuAdmin />

            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', display:'flex', gap:'10px', backgroundColor:'#1F8FBB', padding:'10px', justifyContent:'flex-end' }}>
                    <ThemeProvider theme={theme}>
                        <Notification />
                    </ThemeProvider>

                    <Divider orientation="vertical" flexItem>

                    </Divider>

                    <AccountPopover />
                </Box>

                {children}
            </Box>

        </>
    );
}

export default DefaultLayoutAdmin;
