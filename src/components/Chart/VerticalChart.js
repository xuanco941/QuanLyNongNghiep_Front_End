import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from "@mui/material/Card"
import { CardContent } from "@mui/material";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [200, 450, 600, 750, 800, 950, 1000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [300, 550, 400, 600, 900, 850, 700],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  export function VerticalChart() {
    return(
        <React.Fragment>
                  <Card style={{backgroundColor:"#f9f9f9",marginTop:"10px",}}>
                      <CardContent sx={{
                          height:'300px'
                      }}>
                           <Bar options={options} data={data} />
                      </CardContent>
                  </Card>
              </React.Fragment> 
        )
//   return;
}

