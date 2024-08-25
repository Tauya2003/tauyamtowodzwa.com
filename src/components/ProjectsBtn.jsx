import { BsDownload } from "react-icons/bs";

const ProjectsBtn = () => {
  return (
    <button className="btn rounded-full backdrop-blur-sm border z-50 border-black/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-[#343434]">
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
        Download CV
      </span>
      <BsDownload className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] group-hover:animate-bounce" />
    </button>
  );
};

export default ProjectsBtn;
