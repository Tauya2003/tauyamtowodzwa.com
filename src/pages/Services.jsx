import { Box, Typography } from "@mui/material";
import bg3 from "../assets/images/bg3.png";
import ServicesSliderCard from "../components/ServicesSliderCard";
import { useSidebar } from "../context/SidebarContext";
import useInView from "../hooks/useInView";
import { useEffect } from "react";

const Services = () => {
  const { setSelected } = useSidebar();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      setSelected("services");
    }
  }, [isInView, setSelected]);

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        px: "60px",
        pt: "100px",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        gap: "20px",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Box sx={{ mt: "-70px", ml: "50px" }}>
        <Typography
          sx={{
            color: "#343434",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "normal",
            mb: "20px",
          }}
        >
          My <span style={{ color: "#EBA864" }}>Services</span>
        </Typography>

        <Typography
          sx={{
            color: "#787878",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Typography>
      </Box>

      <Box sx={{ mr: "80px", display: "flex", gap: "20px" }}>
        <ServicesSliderCard />
        <ServicesSliderCard />
      </Box>
    </Box>
  );
};

export default Services;
