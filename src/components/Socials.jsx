import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Socials = () => {
  const socials = [
    {
      name: "Github",
      Icon: <GitHub />,
      href: "https://github.com/Tauya2003",
    },
    {
      name: "LinkedIn",
      Icon: <LinkedIn />,
      href: "",
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
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socials.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          href={link.href}
          target="_blank"
          className="hover:text-accent trantision-all duration-300"
        >
          {link.Icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
