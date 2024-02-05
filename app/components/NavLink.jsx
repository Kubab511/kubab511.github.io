//import Link from "next/link";
import {Link} from "react-scroll";


const NavLink = ({ href, title, offset }) => {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
