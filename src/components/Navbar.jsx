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
        padding: "0 20px",
        position: "fixed",
        top: 0,
        padding: "60px 150px 0 150px",
      }}
    >
      <Typography
        onClick={() => navigate("")}
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "normal",
          cursor: "pointer",
        }}
      >
        Tauya Mtowodzwa
      </Typography>

      <Stack direction={"row"} gap={"40px"}>
        <IconButton href="" target="_blank">
          <Facebook sx={{ color: "#000" }} />
        </IconButton>
        <IconButton href="" target="_blank">
          <Instagram sx={{ color: "#000" }} />
        </IconButton>
        <IconButton href="https://github.com/Tauya2003" target="_blank">
          <GitHub sx={{ color: "#000" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/tauyanashe-mtowodzwa"
          target="_blank"
        >
          <LinkedIn sx={{ color: "#000" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Navbar;
