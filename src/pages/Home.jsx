import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../utils/variants";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import Container from "../layout/Container";

const Home = () => {
  return (
    <Container>
      <div className="bg-primary h-full">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-white/30 to-white/10">
          <div className="text-center flex flex-col justify-center pt-5 xl:pt-20 xl:text-left h-full container mx-auto">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mb-5 leading-none"
            >
              Crafting Innovative
              <br /> <span className="text-accent">Solutions</span> From <br />
              Complex <span className="text-accent">Ideas </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              "I thrive on turning complex ideas into elegant software solutions
              and I believe in working closely with clients to understand their
              needs and deliver the best possible outcomes. Through open
              communication and a collaborative approach, I can translate your
              vision into user-friendly and effective software that drives real
              results."
            </motion.p>

            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        <div className="w-full h-full absolute bottom-0 right-0">
          <div className="bg-none xl:bg-explosions xl:bg:cover xl:bg-right bg-no-repeat h-full w-full absolute mix-blend-color-dodge translate-z-0"></div>

          <ParticlesContainer />

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[600px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
