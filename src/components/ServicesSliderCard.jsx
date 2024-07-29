import { ArrowBackIosNew, ArrowForwardIos, Tv } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ServicesSliderCard = () => {
  return (
    <Box
      sx={{
        p: "40px 40px",
        borderRadius: "20px",
        boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backdropFilter: "blur(10px)",
      }}
    >
      <Tv />

      <Typography
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        Development
      </Typography>

      <Typography
        sx={{
          color: "#787878",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "normal",
          minWidth: "200px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
      </Typography>

      <ArrowForwardIos sx={{ fontSize: "16px", mt: "25px" }} />
    </Box>
  );
};

export default ServicesSliderCard;
