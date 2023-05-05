import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, colors } from "@mui/material";
import Box from "@mui/material/Box";
import "./in4.css";

const DeviceInfo = (prop) => {
  console.log("prop", prop);
  const categories = {};
  const [value, setValue] = useState([
    {
      temp: "Nhiet Do:",
    },
  ]);

  return (
    <Grid container>
      {prop.prop.map((item, index) => {
        return (
          <div className="room" >
            <div>
              <span className="text-room">{item.category}</span>
            </div>

            <div className="room-child">
              <span key={index} className="NameSensor">
                {item.value}: 
              </span>
              <span className="value">{item.temp}</span>
            </div>
            <div className="room-child">
              <span className="NameSensor">
              Humidity: 
              </span>
              <span className="value">{item.doAm}</span>
            </div>
            <div className="room-child">
              <span className="NameSensor">
               EC: 
              </span>
              <span className="value">{item.EC}</span>
            </div>
            <div className="room-child">
              <span className="NameSensor">
               CO2:
              </span>
              <span className="value">{item.Co2}</span>
            </div>
            <div className="room-child">
              <span className="NameSensor">
              Pressure: 
              </span>
              <span className="value">{item.apsuat}</span>
            </div>
            
          </div>
        );
      })}
    </Grid>
  );
};

export default DeviceInfo;
