import { Box, IconButton, Stack, Typography } from "@mui/material";
import bg3 from "../assets/images/bg3.png";
import WorkSliderCard from "../components/WorkSliderCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useSidebar } from "../context/SidebarContext";
import useInView from "../hooks/useInView";
import { useEffect } from "react";

const Work = () => {
  const { setSelected } = useSidebar();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      setSelected("portfolio");
    }
  }, [isInView, setSelected]);

  return (
    <Box
      id="portfolio"
      ref={ref}
      sx={{
        width: "100%",
        height: "100vh",
        px: "60px",
        pt: "100px",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        gap: "50px",
        scrollSnapAlign: "start",
        minHeight: "100vh",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Box sx={{ mt: "-100px", ml: "50px" }}>
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
          My <span style={{ color: "#EBA864" }}>Work</span>
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

      <Box
        sx={{
          mr: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <WorkSliderCard />
        </Box>

        <Stack alignSelf={"center"} spacing={3} direction={"row"}>
          <IconButton>
            <ArrowBackIos />
          </IconButton>

          <IconButton>
            <ArrowForwardIos />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Work;
