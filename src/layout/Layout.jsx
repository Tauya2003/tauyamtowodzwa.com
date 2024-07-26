import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import About from "../pages/About";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Navbar />
      <Sidebar />
      <Home />
      <About />
    </Box>
  );
};

export default Layout;
