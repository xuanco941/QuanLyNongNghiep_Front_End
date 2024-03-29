import { Grid } from '@mui/material'
import "./index.css";
import logoSS from '../../asset/img/SSsoil-moisture.png';
import UpdateAt from '../UpdateAt';

const InforSenSor = () => {
  const in4Sensor = [
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "Độ ẩm đất (%)",
      parameter: "soil-moisture",
      value: 12.68,
      unit: "%"
      
    },
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "Nhiệt độ (°C)",
      parameter: "water-moisture",
      value: 32.21,
      unit: "°C"
    },
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "Độ PH (pH)",
      parameter: "soil-moisture",
      value: 7,
      unit: "pH"
    },
   
    
  ];
  return (
    <>
    <UpdateAt ></UpdateAt>
    <Grid container>
      
      {in4Sensor.map((in4Sensor) => (


        // <Link to="/main/UserDashboard" className='area' key={area.AreaID}>
        <div className='Sensor' key={in4Sensor.name}>
          <div className='header-box'>
            <div className='icon-sensor'>
           <img  src={logoSS} ></img>
           </div>
            <span className='name-sensor'>{in4Sensor.name}</span>

          </div>
          <div className='ValueSenSor'>
            <span className='textvalue'> {in4Sensor.value} {in4Sensor.unit} </span>
          </div>
          {/* // </Link> */}
        </div>



      ))}
    </Grid>
    </>
  );
};

export default InforSenSor;