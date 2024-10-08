import { motion } from "framer-motion";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";
import WorkSlider from "../components/WorkSlider";
import { fadeIn } from "../utils/variants";
import Container from "../layout/Container";
import ParticlesContainer from "../components/ParticlesContainer";

const Work = () => {
  return (
    <Container>
      <ParticlesContainer />
      <div className="h-full bg-primary py-36 flex items-center">
        <Circles />
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 mt-5 xl:mt-20"
              >
                My work <span className="text-accent">.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                "Explore my portfolio of successful projects and see how I can bring your vision to life."
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </Container>
  );
};

export default Work;
