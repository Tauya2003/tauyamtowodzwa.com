import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";
import Header from "../components/Header";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={`page bg-site text-white bg-no-repeat relative`}>
      <Header />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div key={location.key} className="h-full">
          <Transition />
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
