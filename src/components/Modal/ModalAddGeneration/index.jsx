import React, { useState } from "react";
import Modal from "react-modal";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconComponent from "../../Icon/IconComponent";
import FormAddSensor from "../../Form/FormAddSensor";
//test

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    boxShadow: 'none',

    color: theme.palette.text.secondary,
}));

const ModalAddGeneration = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleFinish = () => {
        onClose();
        setStep(1);
    };
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }];

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "500px",
            width: "100%",
            height: "500px",
            borderRadius: "5px",
            padding: "20px",
        },
    };


    const [componentCount, setComponentCount] = useState(1);

    const addComponent = () => {
        setComponentCount(prevCount => prevCount + 1);
    };

    const inputComponents = [];
    for (let i = 0; i < componentCount; i++) {
        inputComponents.push(<FormAddSensor count={i + 1} key={i} />);
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Steps Modal"
        >
            {step === 1 && (
                <form>
                    <h2>Thông tin hệ</h2>
                    <Stack sx={{ boxShadow: 'none' }} spacing={2}>
                        <Item>
                            <IconComponent />
                        </Item>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên hệ"
                                sx={{ width: "100%" }}
                            />
                        </Item>
                        <Item>
                        <Button onClick={handleNextStep} variant="contained">Tiếp</Button>
                        </Item>
                    </Stack>
                </form>
            )}
            {step === 2 && (
                <div>
                    <form>
                        <h2>Chọn Gateway</h2>
                        <Stack sx={{ boxShadow: 'none' }} spacing={2}>
                            <Item>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: "100%" }}
                                    renderInput={(params) => <TextField {...params} label="Gateway" />}
                                />
                            </Item>
                            <Item>
                                <Button onClick={handlePreviousStep} sx={{ marginRight: "20px" }} variant="contained">Quay lại</Button>
                                <Button onClick={handleNextStep} variant="contained">Tiếp</Button>
                            </Item>
                        </Stack>
                    </form>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h2>Chọn cảm biến</h2>
                    <Stack sx={{ boxShadow: 'none' }} spacing={2}>
                        <Item>
                            {inputComponents}
                        </Item>
                        <Item>
                            <Button onClick={addComponent} sx={{ marginRight: "20px" }} variant="contained">Thêm cảm biến</Button>
                            <Button onClick={handlePreviousStep} sx={{ marginRight: "20px" }} variant="contained">Quay lại</Button>
                            <Button onClick={handleFinish} variant="contained">Hoàn thành</Button>
                        </Item>
                    </Stack>
                </div>
            )}
        </Modal>
    );
};

export default ModalAddGeneration;
