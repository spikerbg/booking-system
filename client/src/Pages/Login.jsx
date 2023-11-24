
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import styles from '../Components/style/login.module.css'
import useForm from "../Hooks/useForm";
import AuthContext  from "../Context/authContext";
import { ToastContainer,toast } from 'react-toastify';
import { useContext }  from "react";

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

const Login = () => {
  
  const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

  
  return (
    <section className={styles['mainselection']}>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form onSubmit={onSubmit} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name={LoginFormKyes.Email}
              onChange={onChange}
              value={values[LoginFormKyes.Email]}
              className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name={LoginFormKyes.Password}
              onChange={onChange}
              value={values[LoginFormKyes.Password]}
              className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
            >
              Login
            </button>
            {/* {error && <span>Wrong email or password</span>} */}
          </div>
        </form>
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account{" "}
          <Link to="/signup" className="text-primaryColor font-medium ">
            Register
          </Link>
        </p>
      </div>
          <ToastContainer />
    </section>
  );
};

export default Login;
