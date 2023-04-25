import React from "react";
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Card from "@mui/material/Card"
import { CardContent } from "@mui/material";



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const device = [
    {
        category: '10:20:21',
        gateway: 'wifi',
        sensor: 'temperature',
        valueGateway: '2',
        valueSensor: '1'
    },
    {
        category: '10:30:21',
        gateway: 'wifi',
        sensor: 'temperature',
        valueGateway: '3',
        valueSensor: '1'
    },
    {
        category: '10:40:22',
        gateway: 'wifi',
        sensor: 'temperature',
        valueGateway: '4',
        valueSensor: '1'
    },]


const categories = device.map(item => item.category);
const value = device.map(item => item.valueGateway);

const option = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: "Line Chart"
        },
    },
};

const data = {
    labels: categories,
    datasets: [
        {
            label: "Dataset1",
            data: value,
            borderColor: "rgba(153,102,255,1)",

        },
        // {
        //     label: 'Dataset 2',
        //     data: value,
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
    ],
};

export const LineGraph = () => {
    return (
        <React.Fragment>
            <Card style={{ backgroundColor: "#f0f0f0" }}>
                <CardContent>
                    <Line options={option}
                        data={data}

                    />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default LineGraph
