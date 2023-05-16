import React from "react";
import {Line} from "react-chartjs-2"
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
import { Button } from "react-bootstrap";
 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

const option = {
    responsive: true,
  maintainAspectRatio: false,
  
    plugins: {
        title: {
            display:true,
            text: "Biểu đồ đường nhiệt độ ",
            font: {
                family: "Montserrat" ,
                size :20
              },
              
        },
        
    }
};

const data = {
    labels :["10:20:10","10:30:10","10:40:10","10:50:10","11:00:10"],
    datasets : [
        {
            label : "Hệ 1",
            data:[10,20,15,40,22],
            borderColor :"rgba(153,102,255,1)",

        },{
            label: 'Hệ 2',
            data: [22,32,40,19,38],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ],
};
export const LineChart = ()=>{
    return(
        <React.Fragment>
            <Card style={{backgroundColor:"#f9f9f9",marginTop:"10px",}}>
                <CardContent sx={{
                    
                    height:'300px'
                }}>
                    {/* <Button>123</Button> */}
                    <Line options = {option}
                            data = {data}
                            
                             />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default LineChart