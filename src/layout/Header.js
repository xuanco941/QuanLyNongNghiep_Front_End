import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './index.module.css'
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={3}>                                              
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Tài liệu chờ phê duyệt</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Yêu cầu sửa đổi tài liệu</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Tài liệu đã phê duyệt</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Tài liệu quá hạn phê duyệt</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Tài liệu chờ phê duyệt</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.item} elevation={3} style={{ padding: '10px 20px', borderRadius: '0px' }}>
                        <p>Tài liệu chờ phê duyệt</p>
                        <h1>3</h1>
                    </Paper>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default Header