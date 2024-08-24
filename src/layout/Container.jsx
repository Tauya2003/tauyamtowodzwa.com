import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";
import { useLocation } from "react-router-dom";

const Container = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div key={location.key} className="h-full">
      <AnimatePresence mode="wait">
        <Transition />
        {children}
      </AnimatePresence>
    </motion.div>
  );
};

export default Container;
