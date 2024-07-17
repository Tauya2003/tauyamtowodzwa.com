import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Navbar />
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default Layout;
