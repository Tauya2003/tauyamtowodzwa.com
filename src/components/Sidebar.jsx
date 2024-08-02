import {
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  FolderOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { cloneElement, useState } from "react";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { selected, setSelected } = useSidebar();

  const items = [
    { id: "home", icon: <HomeOutlined />, href: "#home" },
    { id: "about", icon: <PersonOutlineOutlined />, href: "#about" },
    { id: "services", icon: <SettingsOutlined />, href: "#services" },
    { id: "portfolio", icon: <FolderOutlined />, href: "#portfolio" },
    {
      id: "testimonials",
      icon: <ChatBubbleOutlineOutlined />,
      href: "#testimonials",
    },
    { id: "contact", icon: <EmailOutlined />, href: "#contact" },
  ];
  return (
    <Box
      sx={{
        width: "60px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        right: "5%",
        top: "25%",
        py: "20px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "1000px",
        backdropFilter: "blur(10px)",
      }}
    >
      {items.map(({ id, icon, href }) => (
        <IconButton
          key={id}
          onClick={() => setSelected(id)}
          href={href}
          aria-label={id}
          sx={{ "&:hover": { bgcolor: "transparent" } }}
        >
          {cloneElement(icon, {
            sx: {
              color: selected === id ? "#EBA864" : "#000",
              transition: "all 0.3s",
              "&:hover": { color: "#EBA864" },
            },
          })}
        </IconButton>
      ))}
    </Box>
  );
};

export default Sidebar;
