import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import { LineChart } from "../../components/Chart/LineChart";
import { PieChart } from "../../components/Chart/PieChart";
import { VerticalChart } from "../../components/Chart/VerticalChart";
import TableAler from "../../components/TableAler/";
import ModalAddGeneration from "../../components/Modal/ModalAddGeneration";
import Area from '../../components/Area';

function Main() {
  const [upNumber, setUpNumber] = useState(0);
  const handleUpNumber = () => {
    setUpNumber(upNumber + 1);
  };

  const [open, setOpen] = useState(true);
  const [logoVisible, setLogoVisible] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    setLogoVisible(!logoVisible);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "white",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Stack
          sx={{
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <TableAler></TableAler>
          <Box
            sx={{
              border: "2px groove",
              borderRadius:'5px',
              
            }}
          >
            <Area></Area>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Main;
