import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TableCell, TableRow } from '@mui/material';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TableComponent from '../Table';
import { Link } from 'react-router-dom';


export function ListControl({ lists }) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {lists.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
export function ListControlDetail({ param, param1, param2, listLabel, listSystems }) {

    const [selectedItemId, setSelectedItemId] = React.useState(null);


    const handleClickOpen = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleClose = () => {
        setSelectedItemId(null);
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: '500px',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
   

    return (
        <>
            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                <TextField sx={{ width: '100%' }} defaultValue={param} id="outlined-basic" label={listLabel[0]} variant="outlined" />
            </Box>
            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                <TextField sx={{ width: '100%' }} defaultValue={param1} id="outlined-basic" label={listLabel[1]} variant="outlined" />
            </Box>
            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                <TextField sx={{ width: '100%' }} defaultValue={param2} id="outlined-basic" label={listLabel[2]} variant="outlined" />
            </Box>

            
            {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {listSystems.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >

                            <ListItemButton role={undefined} onClick={() => handleClickOpen(value.id)} dense>
                                <ListItemText id={labelId} primary={value.name} />
                            </ListItemButton>
                            {selectedItemId === value.id && (
                                <Modal
                                    open={true}
                                    onClose={handleClose}
                                    aria-labelledby={`modal-modal-title-${value.id}`}
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography
                                            id={`modal-modal-title-${value.id}`}
                                            variant="h6"
                                            component="h2"
                                        >
                                            {`Chi tiết ${value.name}`}
                                        </Typography>
                                        <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                            <TextField sx={{ width: '100%' }} value={value.ip} id="outlined-basic" label="IP Gateway hệ" variant="outlined" />
                                        </Box>
                                        <Divider>Danh sách tài khoản</Divider>

                                        <ListControl key={value} lists={value.account} />
                                        <Button sx={{ position: 'absolute', bottom: '20px' }} onClick={handleClose} variant="outlined" >
                                            Đồng ý

                                        </Button>
                                    </Box>

                                </Modal>
                            )}
                        </ListItem>
                    );
                })}
            </List> */}

        </>
    );
}
