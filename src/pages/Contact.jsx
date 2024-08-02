import { Box, Button, Typography } from "@mui/material";
import bg4 from "../assets/images/bg4.png";
import { Send } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        px: "60px",
        pt: "100px",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${bg4})`,
        backgroundSize: "cover",
        gap: "20px",
        overflow: "hidden",
        scrollSnapAlign: "start",
        scrollSnapStop: { xs: "normal", md: "always" },
      }}
    >
      <Box component={"form"} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            color: "#343434",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "38px",
            fontWeight: 700,
            lineHeight: "normal",
            mt: "20px",
            alignSelf: "stretch",
            textAlign: "center",
          }}
        >
          Let's <span style={{ color: "#EBA864" }}>Connect</span>
        </Typography>

        <Box
          sx={{
            width: "600px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mt: "30px",
          }}
        >
          <Box
            sx={{
              p: "25px",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
              width: "48%",
            }}
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            />
          </Box>

          <Box
            sx={{
              p: "25px",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
              width: "48%",
            }}
          >
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            />
          </Box>

          <Box
            sx={{
              p: "25px",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
              width: "100%",
              mt: "4%",
            }}
          >
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            />
          </Box>

          <Box
            sx={{
              p: "25px",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
              width: "100%",
              mt: "4%",
            }}
          >
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Type your message here..."
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#343434",
                fontFamily: "Montserrat, sans-sarif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          endIcon={<Send />}
          sx={{
            color: "#EBA864",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
            mt: "30px",
            ml: "auto",
            mr: "20px",
            p: 0,

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
