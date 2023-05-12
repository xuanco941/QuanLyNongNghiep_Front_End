import { Grid } from '@mui/material'
import "./index.css";
import logo from '../../asset/img/logo-leanway.png';
import areaLogo from '../../asset/img/area2.png'

const Area = () => {
  const areas = [
    {
      AreaID: "1",
      name: "Khu 1",
      description: "QuangTu",
      UpdateAt: 1608517114,
    },
    {
      AreaID: "2",
      name: "Khu 2",
      description: "leanway",
      UpdateAt: 1608517114,
    },
  ];

  return (
    <Grid container>
      {areas.map((area) => (
        <div className='area' key={area.AreaID}>
          <div className='header-box'>
            <span className='name-are'>{area.name}</span>
          </div>
          <div className='img-are'>
            <img src={areaLogo}></img>
          </div>
        </div>
      ))}
    </Grid>
  );
};

export default Area;