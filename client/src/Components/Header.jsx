import logo from "../../src/assets/images/logo.png";
import userImg from "../assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from '../Context/authContext';
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Service",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];


const Header = () => {
  const menuRef = useRef(null);
  const {
    email,
    role,
    gender,
    fullname,
    imageUrl,
    isAuthenticated,
  } = useContext(AuthContext);


  const togglemenu = () => menuRef.current.classList.toggle("shown__menu");
  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*  Logo  */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="max-w-xs" />
            </Link>
          </div>

          {/* Menu */}

          <div className="navigation " onClick={togglemenu} ref={menuRef}>
            <ul className="menu flex item-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-16px leading-7 font-600"
                        : "text-textColor text-16px leading-7 font-500"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <p>{fullname}</p>
            {isAuthenticated && (
              <div className="flex items-center gap-4">
                  {role === 'doctor' ? (
                  <Link to="/dashboarddoctor/:id">
                    <figure className="w-35px h-35px rounded-full">
                      <img src={imageUrl} alt="doctor" className="rounded-full" width="48" height="48" />
                    </figure>
                  </Link>
                ) : role === 'admin' ? (
                  <Link to="/admdash/">
                    <figure className="w-35px h-35px rounded-full">
                      <img src={imageUrl} alt="admin" className="rounded-full" width="48" height="48" />
                    </figure>
                  </Link>
                ) : (
                  <Link to="/dashboard/:id">
                    <figure className="w-35px h-35px rounded-full">
                      <img src={imageUrl} alt="user" className="rounded-full" width="48" height="48" />
                    </figure>
                  </Link>
                )}
                <div>
                  <Link to="/logout">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      LOGOUT
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {!isAuthenticated && (
              <div>
                <Link to="login">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
