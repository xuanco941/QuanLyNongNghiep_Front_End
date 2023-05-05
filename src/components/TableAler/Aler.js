import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const TableAler = () => {
    return (
        <Grid  >
        <Card sx={{  marginBottom :'10px',border: '1.5px groove',
              backgroundColor:'#f9f9f9'
     }}  >
            <CardContent sx={{ paddingBottom: '16px' }}>
                <Grid container alignItems="center" justifyContent="space-between" >
                    <Grid item>
                        <Typography variant="h4" color='red' >07/03/2023 - 10:17:32 AM : Nhiệt độ hệ 2 vượt quá mức tiêu chuẩn</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" sx={{height:'63px',fontWeight:'Bold'}}>
                            Bảng Cảnh báo
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
    );
};

export default TableAler;



