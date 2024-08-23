import { Box, Stack, Typography } from "@mui/material";
import jauki from "../assets/images/jauki.jpg";

const TestimonialCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        gap: "100px",
      }}
    >
      <Stack alignItems={"center"}>
        <Box sx={{ width: "215px", height: "215px", mb: "20px" }}>
          <img
            src={jauki}
            alt="jauki"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#343434",
            fontFamily: "Montserrat, sans-sarif",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "normal",
            mb: "10px",
          }}
        >
          Takudzwa Jauki
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
          CEO JaukingDesigns
        </Typography>
      </Stack>

      <Typography
        sx={{
          color: "#787878",
          fontFamily: "Montserrat, sans-sarif",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "150%",
        }}
      >
        Working with Tauya Mtowodzwa has been a great experience. He is a very
        talented developer and has a great work ethic. He is very professional
        and delivers on time. I would recommend him to anyone looking for a
        developer. He is the best.
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
