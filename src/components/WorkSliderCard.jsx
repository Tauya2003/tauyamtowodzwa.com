import { Box, Typography } from "@mui/material";
import proj from "../assets/images/proj.png";

const WorkSliderCard = () => {
  return (
    <Box
      sx={{
        p: "20px 20px",
        borderRadius: "20px",
        boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backdropFilter: "blur(10px)",
        width: "500px",
      }}
    >
      <Typography
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        Project 1
      </Typography>

      <img src={proj} alt="" />
    </Box>
  );
};

export default WorkSliderCard;
