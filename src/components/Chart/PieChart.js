import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from "@mui/material/Card"
import { CardContent } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const option = {
    responsive: true,
  maintainAspectRatio: false,
  
    plugins: {
        title: {
            display:true,
            text: "Biểu đồ tròn nhiệt độ ",
            font: {
                family: "Montserrat" ,
                size :20
              },
              
        },
        
    }
};
export const data = {
  labels: ['Hệ 1', 'Hệ 2', 'Hệ 3', 'Hệ 4', 'Hệ 5', 'Hệ 6'],
  datasets: [
    {
      label: 'Nhiệt độ',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return(
  <React.Fragment>
            <Card style={{backgroundColor:"#f9f9f9",marginTop:"10px",}}>
                <CardContent sx={{
                    height:'300px'
                }}>
                    <Pie data={data}
  options={option} />
                </CardContent>
            </Card>
        </React.Fragment> 
  )
}