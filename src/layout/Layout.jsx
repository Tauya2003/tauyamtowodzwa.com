import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Work from "../pages/Work";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
        scrollSnapType: "y mandatory",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Layout;
