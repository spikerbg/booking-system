
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill, RiFacebookCircleFill, RiGithubFill, RiInstagramLine } from "react-icons/ri";
import style from "../style.css";

const sociallinks = [
  {
    path: "/",
    icon: <RiGithubFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <RiFacebookCircleFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <RiInstagramLine className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about-us",
    display: "About-us",
  },

];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Location",
  },
  {
    path: "/contact",
    display: "Contact-us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} className="logo" alt="MedRent" />
            <p className="text-[16px] leading-7 font-[400]">
              Copyright ©️ {year} developed by Valentin Nedev. All right
              reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {sociallinks.map((link, index) => (
                <Link
                  to="link.path"
                  key={index}
                  className="w-9 h-9 rounded-full flex items-center border border-solid border-[#181A1E] justify-center group hover:bg-primaryColor hover:border-none "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[18px] leading-7 font-[600] pb-5 text-textColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[18px] leading-7 font-[600] pb-5 text-textColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[18px] leading-7 font-[600] pb-5 text-textColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
