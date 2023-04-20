import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';


const In4 = () => {
    const theme = useTheme();
    return (
        <Grid >
        <Card sx={{height : '100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography>123</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>123</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>123</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>123</Typography>
                </Grid>
            </Grid>

        </Card>
        </Grid>


    )
}
export default In4