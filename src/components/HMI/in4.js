import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';

const device = [
    {
        category: 'phong1',
        gateway: 'wifi',
        sensor: 'temperature',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: 'phong2',
        gateway: 'wifi2',
        sensor: 'temperature2',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: 'phong3',
        gateway: 'wifi2',
        sensor: 'temperature2',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: 'phong4',
        gateway: 'wifi2',
        sensor: 'temperature2',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: 'phong5',
        gateway: 'wifi2',
        sensor: 'temperature2',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: 'phong6',
        gateway: 'wifi2',
        sensor: 'temperature2',
        valueGateway: '2',
        valueSensor: '1'
    },
];

const In4 = ({ category, gateway, sensor, valueGateway, valueSensor }) => {
    const theme = useTheme();
    return (
        <Grid item xs={3}>
            <Card>
                <Typography className='title' variant='h2' align='center'>{category}</Typography>

                <CardContent style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
                    <Typography className='CB' variant="h4" style={{ marginRight: '10px' }} align="center" fontWeight="bold">
                        {gateway}
                    </Typography>
                    <Typography className='outPut' variant="h4" align="center">
                        {valueGateway}
                    </Typography>



                </CardContent>
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
                    <Typography className='CB' variant="h4" style={{ marginRight: '10px' }} align="center" fontWeight="bold">
                        {sensor}
                    </Typography>
                    <Typography className='outPut' variant="h4" align="center">
                        {valueSensor}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

const DeviceList = () => {
    return (
        <>
            {device.map((item) => (
                <In4
                    key={item.category} //key
                    category={item.category}
                    gateway={item.gateway}
                    sensor={item.sensor}
                    valueGateway={item.valueGateway}
                    valueSensor={item.valueSensor}
                />
            ))}
        </>
    );
};

export default DeviceList;
