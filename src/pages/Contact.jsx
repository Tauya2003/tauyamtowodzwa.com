import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { BsArrowRight } from "react-icons/bs";
import Container from "../layout/Container";
import ParticlesContainer from "../components/ParticlesContainer";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8dcec50a-644c-4309-b927-7c5b351375d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log(data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <Container>
      <ParticlesContainer />
      <div className="h-full bg-primary text-[#343434]">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[780px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Contact <span className="text-accent">me.</span>
            </motion.h2>

            <motion.form
              onSubmit={onSubmit}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flel-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input"
                />
              </div>

              <input
                type="text"
                placeholder="subject"
                className="input"
                name="subject"
                required
              />
              <textarea
                placeholder="message"
                className="textarea"
                name="message"
                required
              ></textarea>

              <div className="w-full flex items-center gap-5 ">
                <button
                  type="submit"
                  className="btn flex-1 rounded-full backdrop-blur-sm border z-50 border-black/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group hover:animate-pulse"
                >
                  <span className="group-hover:translate-x-[120%] group-hover:opacity-0 transition-all duration-500">
                    Send
                  </span>
                  <BsArrowRight className="-translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>

                <span className="hidden xl:block italic">{result}</span>
              </div>
            </motion.form>
            <span className="text-left m-3 xl:hidden italic">{result}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
