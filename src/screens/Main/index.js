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
          {/* <Button
            onClick={openModal}
            variant="contained"
            color="success"
            startIcon={
              <AddCircleOutlineIcon
                sx={{
                  fontSize: "60px",
                  width: "60px",
                  height: "60px",
                  marginBottom: "8px",
                }}
              />
            }
            sx={{
              marginBottom: "10px",
            }}
          >
            <h2>Thêm hệ giám sát</h2>
          </Button> */}
          <Box
            sx={{
              border: "1.5px groove",
              
            }}
          >
            <Area></Area>
          </Box>
          {/* <MyComponent></MyComponent> */}
          {/* <Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <LineChart></LineChart>
              </Grid>
              <Grid item xs={6}>
                <PieChart></PieChart>
              </Grid>
              <Grid item xs={6}>
                <PieChart></PieChart>
              </Grid>
              <Grid item xs={6}>
                <VerticalChart></VerticalChart>
              </Grid>
            </Grid>
          </Box> */}
        </Stack>
      </Box>
    </>
  );
}

export default Main;
