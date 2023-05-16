import { useState } from "react";
import { Button } from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';




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
          <div className="TitleParentProcesss" >Quy trình {index + 1}</div>
          <ProcessChild />
        </div>
      ))}
      <Button sx={{
        marginTop:'10px',
        backgroundColor: '#8dc641',
        fontSize: '20px',
        ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
        color: 'white'
      }} onClick={addNewProcess} >Thêm quy trình <AddToPhotosIcon sx={{marginLeft:'10px'}}/>
      </Button>
    </div>
  );
};

export default ProcessParent;
