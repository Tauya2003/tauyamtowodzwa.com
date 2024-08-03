import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        top: 0,
        padding: { xs: "40px 20px", md: "60px 150px 0 150px" },
        zIndex: 100,
      }}
    >
      <Typography
        onClick={() => navigate("")}
        sx={{
          color: "#343434",
          fontFamily: "Monospace",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "normal",
          cursor: "pointer",
        }}
      >
        Tauya Mtowodzwa
      </Typography>

      <Stack
        direction={"row"}
        gap={"40px"}
        display={{ xs: "none", md: "flex" }}
      >
        <IconButton href="" target="_blank">
          <Facebook sx={{ color: "#000", backdropFilter: "blur(10px)" }} />
        </IconButton>
        <IconButton href="" target="_blank">
          <Instagram sx={{ color: "#000", backdropFilter: "blur(10px)" }} />
        </IconButton>
        <IconButton href="https://github.com/Tauya2003" target="_blank">
          <GitHub sx={{ color: "#000", backdropFilter: "blur(10px)" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/tauyanashe-mtowodzwa"
          target="_blank"
        >
          <LinkedIn sx={{ color: "#000", backdropFilter: "blur(10px)" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Navbar;
