import { Box, Button, Stack, Typography } from "@mui/material";
import bg2 from "../assets/images/bg2.png";
import { useState } from "react";

const About = () => {
  const [selectedTab, setSelectedTab] = useState("Skills");
  const tabs = ["Skills", "Experience", "Credentials"];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        px: "15%",
        pt: "160px",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        gap: "30px",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography
          sx={{
            color: "#343434",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          Transforming <span style={{ color: "#EBA864" }}> Ideas </span> into
          Digital
        </Typography>

        <Typography
          sx={{
            mt: "20px",
            color: "#787878",
            fontFamily: "Montserrat, sans-rarif",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          "I thrive on turning complex ideas into elegant software solutions and
          I believe in working closely with clients to understand their needs
          and deliver the best possible outcomes. Through open communication and
          a collaborative approach, I can translate your vision into
          user-friendly and effective software that drives real results."
        </Typography>

        <Stack>
          <Box>
            <Typography
              sx={{
                color: "#EBA864",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              10+
            </Typography>

            <Typography
              sx={{
                color: "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "19px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Years of <br />
              experience
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Stack direction={"row"} gap={7}>
          {tabs.map((tab, index) => (
            <Button
              key={index}
              sx={{
                color: selectedTab === tab ? "#EBA864" : "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "normal",
                p: 0,
                minWidth: 0,
                textTransform: "none",
                position: "relative",

                "&:hover": {
                  bgcolor: "transparent",
                },

                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "65px",
                  height: "2px",
                  bgcolor: selectedTab === tab ? "#EBA864" : "#343434",
                },
              }}
            >
              {tab}
            </Button>
          ))}
        </Stack>

        <Stack mt={"40px"} pl={"10px"}>
          <Typography
            sx={{
              color: "#787878",
              fontFamily: "Montserrat, sans-sarif",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Web Development
          </Typography>

          <Typography
            sx={{
              color: "#787878",
              fontFamily: "Montserrat, sans-sarif",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Python
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
