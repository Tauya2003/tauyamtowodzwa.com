import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [selected, setSelected] = useState("home");

  const contextData = {
    selected,
    setSelected,
  };

  return (
    <SidebarContext.Provider value={contextData}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
