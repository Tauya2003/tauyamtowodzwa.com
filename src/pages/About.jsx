import { useState } from "react";
import Circles from "../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNativescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Container from "../layout/Container";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar2 from "../components/Avatar2";

const About = () => {
  const [index, setIndex] = useState(0);

  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            <FaGit />,
            <FaReact />,
            <FaJs />,
            <FaPython />,
            <SiDjango />,
            <FaHtml5 />,
            <FaNodeJs />,
            <SiExpress />,
            <SiMongodb />,
            <SiNextdotjs />,
            <SiNativescript />,
            <SiFramer />,
            <FaCss3 />,
            <SiTailwindcss />,
          ],
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Web Developer - LofiCode",
          stage: "2023 - Present",
        },
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title:
            "Software Engineering - University of Zimbabwe, Harare, Zimbabwe",
          stage: "2022 - Current",
        },
        {
          title: "Certified Legacy Javascript Algorithms - freeCodeCamp.org",
          stage: "2023",
        },
      ],
    },
  ];

  return (
    <Container>
      <ParticlesContainer />
      <div className="h-full bg-primary py-32 text-center xl:text-left">
        <Circles />

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute mt-[100px] -left-[200px] w-[300px]"
        >
          <Avatar2 />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6">
          {/* left / top */}
          <div className="flex-1 flex flex-col justify-center pt-20 z-10">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Coding for
              <span className="text-accent"> Impact</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              "As a web developer with 2 years of experience, I've collaborated
              on various projects, from startups to established businesses. My
              expertise lies in web and mobile app development. Through
              LofiCode, I contributed to innovative digital solutions that
              improve user experiences."
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              // className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
              className="hidden"
            >
              <div className="flex flex-1 xl:gap-x-6 text-[#343434]">
                {/* experience */}
                <div className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:right-0 after:top-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>

                {/* clients */}
                <div className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:right-0 after:top-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={20} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied Clients
                  </div>
                </div>

                {/* projects */}
                <div className="relative after:w-[1px]">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={15} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* right / bottom */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:pt-10"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`${
                    index === idx
                      ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      : "text-[#343434] "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black after:absolute after:-bottom-1 after:left-0`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start">
              {aboutData[index].info.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-black/60"
                >
                  <div className="font-light mb-2 md:mb-0 flex-1">
                    {item.title}
                  </div>
                  <div className="hidden md:flex text-accent font-extrabold">
                    -
                  </div>
                  <div className="">{item.stage}</div>

                  <div className="flex flex-wrap justify-center xl:justify-start gap-y-3 gap-x-4 xl:max-w-sm">
                    {item.icons?.map((icon, idx) => (
                      <div key={idx} className="text-2xl text-black">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
