import { Box, IconButton, Stack, Typography } from "@mui/material";
import bg3 from "../assets/images/bg3.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import TestimonialCard from "../components/TestimonialCard";
import { useSidebar } from "../context/SidebarContext";
import useInView from "../hooks/useInView";
import { useEffect } from "react";

const Testimonials = () => {
  const { setSelected } = useSidebar();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      setSelected("testimonials");
    }
  }, [isInView, setSelected]);

  return (
    <Box
      id="testimonials"
      ref={ref}
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        px: "60px",
        pt: "100px",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        gap: "20px",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Typography
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "50px",
          fontWeight: 700,
          lineHeight: "normal",
          mt: "60px",
          mb: "20px",
        }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          mr: "80px",
          ml: "50px",
        }}
      >
        <IconButton>
          <ArrowBackIos sx={{ fontSize: "60px" }} />
        </IconButton>

        <Stack ml={"50px"}>
          <TestimonialCard />
        </Stack>

        <IconButton>
          <ArrowForwardIos sx={{ fontSize: "60px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
