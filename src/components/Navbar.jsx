import {
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  FolderOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export const navData = [
  { id: "home", icon: <HomeOutlined />, href: "/" },
  { id: "about", icon: <PersonOutlineOutlined />, href: "/about" },
  { id: "services", icon: <SettingsOutlined />, href: "/services" },
  { id: "portfolio", icon: <FolderOutlined />, href: "/portfolio" },
  {
    id: "testimonials",
    icon: <ChatBubbleOutlineOutlined />,
    href: "/testimonials",
  },
  { id: "contact", icon: <EmailOutlined />, href: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-black/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.href === pathname ? "text-accent":"text-[#343434] "
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            to={link.href}
            key={index}
          >
            {/* Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-black relative flex text-primary text-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.id}
                </div>

                <div className="border-solid border-l-black border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {/* Icon */}
            <div className="">{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
