import {
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  FolderOutlined,
  Home,
  HomeOutlined,
  Person2Outlined,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Box
      sx={{
        width: "80px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        right: "5%",
        top: "25%",
        py: "20px",
        bgcolor: "#e5e5e5",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
        borderRadius: "1000px",
      }}
    >
      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <HomeOutlined
          sx={{
            fontSize: "32px",
            color: selected === "home" ? "#EBA864" : "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>

      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <PersonOutlineOutlined
          sx={{
            fontSize: "30px",
            color: selected === "profile" ? "#EBA864" : "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>

      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <SettingsOutlined
          sx={{
            fontSize: "30px",
            color: "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>

      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <FolderOutlined
          sx={{
            fontSize: "30px",
            color: "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>

      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <ChatBubbleOutlineOutlined
          sx={{
            fontSize: "30px",
            color: "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>

      <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
        <EmailOutlined
          sx={{
            fontSize: "30px",
            color: "#000",
            transition: "all 0.3s",
            "&:hover": { color: "#EBA864" },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
