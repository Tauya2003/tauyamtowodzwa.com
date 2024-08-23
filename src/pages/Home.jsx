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
        px: { xs: "16px", md: "60px" },
        pt: { xs: "16px", md: "100px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "40%",
        backgroundSize: "cover",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Typography
        sx={{
          color: "#343434",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: { xs: "35px", md: "60px" },
          fontWeight: 700,
          lineHeight: { xs: "normal", md: "60px" },
          width: { xs: "90%", md: "60%" },
        }}
      >
        Crafting innovative{" "}
        <span style={{ color: "#EBA864" }}> solutions </span> from complex
        <span style={{ color: "#EBA864" }}> ideas</span>.
      </Typography>

      <Typography
        sx={{
          mt: { xs: "10px", md: "20px" },
          color: "#787878",
          fontFamily: "Montserrat, sans-rarif",
          fontSize: { xs: "15px", md: "16px" },
          fontWeight: "500",
          lineHeight: "normal",
          width: { xs: "65%", md: "50%" },
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
          width: { xs: "90px", md: "130px" },
          height: { xs: "80px", md: "130px" },
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
            width: "100%",
            position: "absolute",
            animation: "rotate 10s linear infinite",
          }}
        />
        <Box
          sx={{
            width: { xs: "70px", md: "105px" },
            height: { xs: "70px", md: "105px" },
            border: { xs: "2.75px solid #EBA864", md: "5px solid #EBA864" },
            borderRadius: "50%",
            display: "grid",
            placeContent: "center",
            p: { xs: "23px", md: 0 },
          }}
        >
          <img
            onClick={scrollToPortfolio}
            style={{
              cursor: "pointer",
              animation: "scrollRight 2s ease infinite",
              width: "100%",
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
