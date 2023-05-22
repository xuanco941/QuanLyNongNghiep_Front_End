import { useState } from "react";
import { Button } from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DateTo from "../../TimePicker/DateTo"
import DateEnd from "../../TimePicker/DateEnd"



import ProcessChild from "../ProcessChild";
import "./index.css";

const ProcessParent = () => {
  const [numProcesses, setNumProcesses] = useState(1);

  const addNewProcess = () => {
    setNumProcesses((prevNum) => prevNum + 1);
  };

  return (
    <div className="containerParent">
      {[...Array(numProcesses)].map((_, index) => (
        <div className="parentProcess" key={index}>
          <div style={{ fontFamily: 'roboto', marginTop: '10px', }}>
            Tên quy trình
          </div>
          <div className="TitleParentProcesss" ><input defaultValue={`Quy trình ${index + 1}`} /></div>
          <div style={{ fontFamily: 'roboto', marginTop: '10px', }}>
            Thời gian quy trình
          </div>
          <div className="Rangetime">
            <div className=""><DateTo /></div>
            <div className=""><DateEnd /></div>
          </div>
          <div style={{ fontFamily: 'roboto', marginTop: '10px', }}>
            Thông báo công việc
          </div>

          <div style={{ backgroundColor: '#f9f9f9', marginLeft: '10px', marginRight: '10px', border: '2px groove', display: 'flex' }}>
            <div style={{ flex: '1',margin:'10px 0px 3px 10px' }}>
              <textarea placeholder="Thông báo công việc" style={{ margin: '0', padding: '10px', width: '100%' }}></textarea>
            </div>
            <div style={{ margin: '10px 10px 0px 10px', }}>
              <DateEnd />
            </div>
          </div>
          <div style={{ fontFamily: 'roboto', marginTop: '10px', }}>
            Cài đặt thông số tiến trình
          </div>
          <ProcessChild />
        </div>
      ))}
      <Button sx={{
        marginTop: '10px',
        backgroundColor: '#8dc641',
        fontSize: '20px',
        ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
        color: 'white'
      }} onClick={addNewProcess} >Thêm quy trình <AddToPhotosIcon sx={{ marginLeft: '10px' }} />
      </Button>
    </div>
  );
};

export default ProcessParent;
