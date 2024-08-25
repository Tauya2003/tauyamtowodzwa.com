import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const socials = [
  {
    name: "Github",
    Icon: <GitHub />,
    href: "https://github.com/Tauya2003",
  },
  {
    name: "LinkedIn",
    Icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/tauyanashe-mtowodzwa",
  },
  {
    name: "Facebook",
    Icon: <Facebook />,
    href: "",
  },
  {
    name: "X",
    Icon: <Twitter />,
    href: "",
  },
  {
    name: "Instagram",
    Icon: <Instagram />,
    href: "",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socials.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          href={link.href}
          target="_blank"
          className="hover:text-accent trantision-all duration-300 text-[#343434]"
        >
          {link.Icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
