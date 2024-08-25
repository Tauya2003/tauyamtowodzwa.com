import { Link } from "react-router-dom";
import Socials from "./Socials";

const Header = () => {
  return (
    <div className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
          <Link to={"/"}>
            <h1 className="text-xl md:text-2xl font-extrabold font-montserrat text-[#343434]">
              tauya <span className="font-extralight">mtowodzwa</span>
            </h1>
          </Link>

          <Socials/>
        </div>
      </div>
    </div>
  );
};

export default Header;
