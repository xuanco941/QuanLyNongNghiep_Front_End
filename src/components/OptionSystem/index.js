import { Grid } from '@mui/material'
import "./index.css";
import logoSS from '../../asset/img/SSsoil-moisture.png';
import UpdateAt from '../UpdateAt';
import { TextField } from '@mui/material';

const OptionSystem = () => {
  const in4Sensor = [
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "Độ ẩm đất (%)",
      parameter: "warning",
      value: 12,
      unit: "%"

    },
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "Nhiệt độ (°C)",
      parameter: "warning",
      value: 32,
      unit: "°C"
    },
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "PH (pH)",
      parameter: "warning",
      value: 7,
      unit: "pH"
    },
    {
      create_at: "2019-04-11T08:00:05+07:00",
      name: "C02 (PPM)",
      parameter: "warning",
      value: 12,
      unit: "PPM"
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
                <img src={logoSS} ></img>
              </div>
              <span className='name-sensor'>{in4Sensor.name}</span>

            </div>
            <div className='ValueSenSor' style={{ display: 'flex', flexDirection: 'column'}}>
              <div style={{ fontSize: '18px', color: 'white' }}>Giá trị cảnh báo</div>
              <input style={{ fontSize: '40px', border: 'none', fontWeight: 'bold', color: 'white',marginLeft:'40px', marginBottom: '10px' ,width:'30%'}} defaultValue={`${in4Sensor.value}`} className='valueWarning'></input>    
            </div>

            {/* // </Link> */}
          </div>



        ))}
      </Grid>
    </>
  );
};

export default OptionSystem;