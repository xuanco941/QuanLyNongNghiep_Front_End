import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal, Box } from "@mui/material"


import "./index.css"
import ComboBoxSenSor from "../../Combobox/ComboBoxSensor"


import React, { useState } from 'react'



const ProcessChild = () => {
    const [blockCount, setBlockCount] = useState(1);

    const addBlock = () => {
        setBlockCount(blockCount + 1);
    }

    const removeBlock = () => {
        setBlockCount(blockCount - 1);
      }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const blocks = blockCount > 0
  ? [...Array(blockCount)].map((_, index) => (
        <div className="TitleChildProcess" key={index}>
            <div className="childProcess">
                <div className="ElementChild" ><ComboBoxSenSor sx={{ margin: '10px' }}></ComboBoxSenSor></div>
                <div className="ElementChild">
                    <input placeholder='Chỉ số Min' style={{ height: '100%', textAlign: 'center', }}>
                    </input>
                </div>
                <div className="ElementChild">
                    <input placeholder='Chỉ số Max' style={{ height: '100%', textAlign: 'center', }}>
                    </input>
                </div>
            </div>
        </div>
    )):null;

    return (

        <div className="containerChild">
            {blocks}
            <div style={{ display: 'flex', marginTop: '7px' }}>
                <Button sx={{
                    marginRight: '20px', backgroundColor: '#208fbb',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
                    color: 'white'
                }} onClick={addBlock}>Thêm <AddCircleIcon sx={{ marginLeft: '3px' }} /></Button>
                <Button sx={{
                    marginRight: '20px', backgroundColor: '#208fbb',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
                    color: 'white'
                }} onClick={handleOpen}>Thông báo <NotificationAddIcon sx={{ marginLeft: '3px' }} /></Button>
                <Button sx={{
                    marginRight: '20px', backgroundColor: '#208fbb',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
                    color: 'white'
                }} onClick={removeBlock} >Xóa <DeleteIcon sx={{ marginLeft: '3px' }} /></Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={{ ...style, width: '50%' }}>

                    <h2 id="child-modal-title">Điền thông báo</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <textarea name="Text1" cols="40" rows="5" style={{ margin: '10px 0px' }}></textarea>

                        <Button sx={{
                            backgroundColor: 'darkblue',
                            fontSize: '20px',
                            ":hover": { backgroundColor: 'lightblue', color: '#0f0f0f' },
                            color: 'white'
                        }}
                            onClick={handleClose}>Đồng ý
                        </Button>
                    </div>
                </Box>

            </Modal>
        </div>

    )
}

export default ProcessChild;
