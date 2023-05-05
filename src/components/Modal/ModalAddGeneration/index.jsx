import React, { useState } from "react";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import IconComponent from "../Icon/IconComponent";
// import FormAddSensor from "./FormAddSensor";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import DeviceInfo from ".././HMI/in4";

import Box from "@mui/material/Box";

//test

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  boxShadow: "none",

  color: theme.palette.text.secondary,
}));

const ModalAddGeneration = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);

  const [device, setDevices] = useState([
    {
      category: "Hệ 1",
      temp: "32 °C",
      apsuat: "17 PA",
      EC:"02 mS",
      doAm:"01 g/m³",
      Co2:"3 ppm",
      value: "Temp",
    },
    {
      category: "Hệ 2",
      temp: "32 °C",
      apsuat: "17 PA",
      EC:"02 mS",
      doAm:"01 g/m³",
      Co2:"3 ppm",
      value: "Temp",
    },
    // {
    //   category: "Hệ 3",
    //   temp: "32 °C",
    //   apsuat: "17 PA",
    //   EC:"02 mS",
    //   doAm:"01 g/m³",
    //   Co2:"3 ppm",
    //   value: "Temp",
    // },
    // {
    //   category: "Hệ 4",
    //   temp: "32 °C",
    //   apsuat: "17 PA",
    //   EC:"02 mS",
    //   doAm:"01 g/m³",
    //   Co2:"3 ppm",
    //   value: "Temp",
    // },
  ]);
//   const [value, setValue] = useState([
//     {
//       category: "Hệ 1",
//       temp: "32 C",
//       apsuat: "17 m2",
//       value: "Nhiet Do",
//     },
//   ]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const top100Films = [
    { label: "GateWay1"},
    { label: "GateWay2"},
    { label: "GateWay3"},
    { label: "GateWay4"},
    { label: "GateWay5"},
    { label: "GateWay6"},
    { label: "GateWay7"},
  ];

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

  const addComponent = () => {
    setComponentCount((prevCount) => prevCount + 1);
  };

  const handleOnChangeStepThree = (e) => {
    console.log("VALUE", e.target.value);
    const values = e.target.value;
    setTemp(values);
  };

  const inputComponents = [];
  for (let i = 0; i < componentCount; i++) {
    inputComponents.push(
      <div>
        <span>Cảm biến thứ {i + 1}</span>
        <Stack spacing={2}>
          <Item>
            <IconComponent />
          </Item>
          <Item>
            <TextField
              sx={{ width: "100%" }}
              //   required
              id="outlined-required"
              label="Nhập tên"
              onChange={handleOnChangeStepThree}
              //   value={temp}
            />
          </Item>
          {/* <Item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Chọn địa chỉ" />
                  )}
                />
              </Item> */}
        </Stack>
      </div>
    );
  }

  const handleTextFieldChange = async (e) => {
    const category = e.target.value;
    setObject(category);
  };
  console.log("object", object);

  const handleAddCategory = () => {
    // setDevices((pre) => [...pre, { category: object }]);
  };

  const handleFinish = () => {
    onClose();
    setStep(1);
    setDevices((pre) => [...pre, { category: object, value: temp }]);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Steps Modal"
        iaHideApp={false}
      >
        {step === 1 && (
          <form>
            <h2>Thông tin hệ</h2>
            <Stack sx={{ boxShadow: "none" }} spacing={2}>
              <Item>
                <IconComponent />
              </Item>
              <Item>
                <TextField
                  required
                  id="outlined-required"
                  label="Tên hệ"
                  sx={{ width: "100%" }}
                  onChange={handleTextFieldChange}
                />
              </Item>
              <Item>
                <Button
                  className="ThemHe"
                  onClick={() => {
                    handleAddCategory();
                    handleNextStep();
                  }}
                  variant="contained"
                >
                  Tiếp
                </Button>
              </Item>
            </Stack>
          </form>
        )}
        {step === 2 && (
          <div>
            <form>
              <h2>Chọn Gateway</h2>
              <Stack sx={{ boxShadow: "none" }} spacing={2}>
                <Item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Gateway" />
                    )}
                  />
                </Item>
                <Item>
                  <Button
                    onClick={() => {}}
                    handlePreviousStep
                    sx={{ marginRight: "20px" }}
                    variant="contained"
                  >
                    Quay lại
                  </Button>
                  <Button
                    onClick={() => {
                      handleNextStep();
                    }}
                    variant="contained"
                  >
                    Tiếp
                  </Button>
                </Item>
              </Stack>
            </form>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Chọn cảm biến</h2>
            <Stack sx={{ boxShadow: "none" }} spacing={2}>
              <Item>{inputComponents}</Item>
              <Item>
                <Button
                  onClick={addComponent}
                  sx={{ marginRight: "20px" }}
                  variant="contained"
                >
                  Thêm cảm biến
                </Button>
                <Button
                  onClick={handlePreviousStep}
                  sx={{ marginRight: "20px" }}
                  variant="contained"
                >
                  Quay lại
                </Button>
                <Button
                  onClick={handleFinish}
                  className="hoanThanh"
                  variant="contained"
                >
                  Hoàn thành
                </Button>
              </Item>
            </Stack>
          </div>
        )}
      </Modal>
      <DeviceInfo prop={device}></DeviceInfo>
    </>
  );
};

export default ModalAddGeneration;
