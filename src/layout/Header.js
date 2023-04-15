import React,{useEffect} from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './index.module.css';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import { useState } from 'react';



const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});


const Header = () => {
    const [showGrid, setShowGrid] = useState(false);
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
    const toggleShowGrid = () => {
        setShowGrid(!showGrid);

    };
  
    useEffect(() => {
      if (isSmScreen) {
        setShowGrid(true);
        
      }
    }, [isSmScreen]);
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <Button onClick={toggleShowGrid}>
            {showGrid ? 'Collapse' : 'Expand'}
          </Button>
          {isSmScreen  ? (
            <Collapse in={showGrid}>
              <Grid container spacing={0} >
              <Grid xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A ', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px', width: '100%', boxShadow: '0px 0px 0px 1px #0000001A', }}>
                                <p>Tài liệu chờ phê duyệt</p>
                                <h1>3</h1>
                            </Paper>
                        </Grid>
              </Grid>
            </Collapse>
          ) : null}
        </Box>
      </ThemeProvider>
    );
  };
  
  export default Header;