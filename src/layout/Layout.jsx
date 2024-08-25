import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";
import Header from "../components/Header";
import ColorSplash from "../components/ColorSplash";

const Layout = () => {
  return (
    <div className={`page bg-site text-white bg-no-repeat relative`}>
      <ColorSplash />
      <Header />
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Layout;
