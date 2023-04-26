import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Delete, Edit, Close } from '@mui/icons-material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import styles from "./index.module.css";

function IconComponent() {
    const [showIconPanel, setShowIconPanel] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);

    const images = require.context('./../../asset/icon', true);
    const imagePaths = images.keys().map(image => images(image));
    const handleClick = () => {
        setShowIconPanel(true);
    };

    const handleClose = () => {
        setShowIconPanel(false);
    };
    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
        setShowIconPanel(false);
    };
    return (
        <div>
            <IconButton onClick={handleClick}>
                <AddToPhotosIcon />
            </IconButton>

            <Dialog open={showIconPanel} onClose={handleClose}>
                <DialogTitle>Select an Icon</DialogTitle>
                <DialogContent>
                    {imagePaths.map(path => (

                        <IconButton onClick={() => handleIconClick(path)}>
                            <img width={40} height={40} src={path} alt="" key={path} />
                        </IconButton>
                    ))}

                    
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogActions>
            </Dialog>
            <img src={selectedIcon} width={40} height={40} alt=""  />
            
        </div>
    );
}
export default IconComponent;