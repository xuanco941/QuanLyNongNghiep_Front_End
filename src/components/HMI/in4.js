import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, colors } from '@mui/material';
import Box from '@mui/material/Box';


const DeviceInfo = () => {
    const [device, setDevices] = useState([
        {
            category: "Hệ 1",
            Temp: "32",
            H20: "17",
        },
        {

            category: "Hệ 2",
            Temp: "70",
            H20: "17",
            
        },
        {

            category: "Hệ 3",
            Temp: "70",
            H20: "17",
            
        },
    ]);

    const categories = {};

    device.forEach((item) => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }

        Object.entries(item).forEach(([key, value]) => {
            if (key !== 'category') {
                categories[item.category].push({ label: key, value: value ?? 'N/A' });
            }
        });
    });

    const DeviceCategory = ({ category, items }) => {
        return (
            <Grid container spacing={2}>
                {items.map((info, index) => (
                    <In4 key={index} label={info.label} value={info.value} />
                ))}
            </Grid>
        );
    };

    const In4 = (props) => {
        const { label, value } = props;
        return (
            <Grid item xs={6} display='flex'>
                <Card style={{ width: '100%' }}>
                    <CardContent style={{ display: '', justifyContent: 'space-between', backgroundColor: 'black', padding: '0px' }}>
                        <Typography className='CB' variant="h4" style={{ marginRight: '10px', color: 'white' }} align="center" fontWeight="bold ">
                            {label}
                        </Typography>
                        <Typography className='outPut' variant="h4" align="center" style={{ color: 'red' }}>
                            {value}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <Grid container spacing={2} >
            {Object.entries(categories).map(([category, items]) => (
                <Grid item xs={12} sm={6} md={4} key={category} minWidth="550">
                    <Box border={2} backgroundColor='red' p={2}>
                        <Typography variant="h4" align="center">{category}</Typography>
                        <DeviceCategory category={category} items={items} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default DeviceInfo;