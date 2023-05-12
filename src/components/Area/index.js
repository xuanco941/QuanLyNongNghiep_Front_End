import { Grid } from '@mui/material'
import "./index.css";
import logo from '../../asset/img/logo-leanway.png';
import areaLogo from '../../asset/img/area2.png'
import { Link } from 'react-router-dom'

const Area = () => {
  const areas = [
    {
      AreaID: "1",
      name: "Khu 1",
      description: "Trong một thế giới được thống trị bởi  thì lòi ra 1 ông nhõi anh hùng nào đi xiên mất chị gái của main nhà ta. Đếch cần biết là đứa nào, chị đây đi gặt đầu từng đứa một, và trở",
      UpdateAt: 1608517114,
    },
    {
      AreaID: "2",
      name: "Khu 2",
      description: "Leanway",
      UpdateAt: 1608517114,
    },
   
    
   
  ];

  return (
    <Grid container>
      {areas.map((area) => (


        <Link to="/main/UserDashboard" className='area' key={area.AreaID}>

          <div className='header-box'>
            <span className='name-are'>{area.name}</span>
          </div>

          <div className='img-are'>
            <img src={areaLogo}></img>
          </div>

          <div className='footer'>
            {area.description}
          </div>

        </Link>



      ))}
    </Grid>
  );
};

export default Area;