import { Box, Typography } from "@mui/material";
import myprojects from "../assets/images/my-projects.png";
import bg1 from "../assets/images/bg1.png";
import chevron from "../assets/icons/chevron.png";
import { useSidebar } from "../context/SidebarContext";
import useInView from "../hooks/useInView";
import { useEffect } from "react";

const Home = () => {
  const { setSelected } = useSidebar();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      setSelected("home");
    }
  }, [isInView, setSelected]);

  const scrollToPortfolio = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        px: "60px",
        pt: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Typography
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "60px",
          fontWeight: 700,
          lineHeight: "60px",
          width: "60%",
        }}
      >
        Crafting innovative{" "}
        <span style={{ color: "#EBA864" }}> solutions </span> from complex
        <span style={{ color: "#EBA864" }}> ideas</span>.
      </Typography>

      <Typography
        sx={{
          mt: "20px",
          color: "#787878",
          fontFamily: "Montserrat, sans-rarif",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "normal",
          width: "50%",
        }}
      >
        "I thrive on turning complex ideas into elegant software solutions and I
        believe in working closely with clients to understand their needs and
        deliver the best possible outcomes. Through open communication and a
        collaborative approach, I can translate your vision into user-friendly
        and effective software that drives real results."
      </Typography>

      <Box
        sx={{
          mt: "40px",
          width: "130px",
          height: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          className="rotating"
          src={myprojects}
          alt="my-projects"
          style={{
            width: "130px",
            position: "absolute",
            animation: "rotate 10s linear infinite",
          }}
        />
        <Box
          sx={{
            width: "105px",
            height: "105px",
            border: "5px solid #EBA864",
            borderRadius: "50%",
            display: "grid",
            placeContent: "center",
          }}
        >
          <img
            onClick={scrollToPortfolio}
            style={{
              cursor: "pointer",
              animation: "scrollRight 2s ease infinite",
              // transform: "rotate(90deg)",
            }}
            src={chevron}
            alt="chevron"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
