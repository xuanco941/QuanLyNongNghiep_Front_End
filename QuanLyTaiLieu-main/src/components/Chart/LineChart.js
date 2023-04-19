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
    responsive :true,
    plugins: {
        title: {
            display:true,
            text: "Line Chart"
        },
    },
};

const data = {
    labels :["Jan","Feb","Mar","Apr","May"],
    datasets : [
        {
            label : "Dataset1",
            data:[10,20,15,40,22],
            borderColor :"rgba(153,102,255,1)",

        },{
            label: 'Dataset 2',
            data: [22,32,40,19,22],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ],
};
export const LineGraph = ()=>{
    return(
        <React.Fragment>
            <Card style={{backgroundColor:"#f0f0f0"}}>
                <CardContent>
                    <Line options = {option}
                            data = {data}
                            
                             />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default LineGraph
