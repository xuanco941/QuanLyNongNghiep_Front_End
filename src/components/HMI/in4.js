import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, colors } from '@mui/material';
import Box from '@mui/material/Box';


const device = [
    {
        category: 'Hệ 1',
        NhietDo: '32',
        ApSuat: '17',
        dsa :'23',
        d2a :'23',
        da :'23',

    },
    {
        category: 'phong 2',
        DoAm: '70',
        ApSuat: '17',
        AnhSang: '20',
    },
    {
        category: 'phong 3',
        EC: '20',
        KhongKhi: '10',
    },
    {
        category: 'phong 4',
        EC: '20',
        KhongKhi: '10',
    },
    {
        category: 'phong 5',
        EC: '20',
        KhongKhi: '10',
    },
];

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
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', backgroundColor: 'black' , }}>
                    <Typography className='CB' variant="h4" style={{ marginRight: '10px', color: 'white' }} align="center" fontWeight="bold " >
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

const DeviceInfo = () => {
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

    return (

        <Grid container spacing={2}   
        >
            {Object.entries(categories).map(([category, items]) => (
                <Grid item xs={12} sm={6} md={4} key={category} minWidth="550">
                    <Box border={2}      
                    backgroundColor = 'red'                   
                        p={2}>
                        <Typography variant="h4" align="center">{category}</Typography>
                        <DeviceCategory category={category} items={items} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default DeviceInfo;