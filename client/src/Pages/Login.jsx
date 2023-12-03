

import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from '../Components/style/login.module.css'
import useForm from "../Hooks/useForm";
import AuthContext  from "../Context/authContext";
import { useContext }  from "react";
import { ToastContainer, toast } from 'react-toastify';

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

const Login = () => {
  
  const { loginSubmitHandler } = useContext(AuthContext);
    const [values, setValues] = useState({
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });
    const [formError, setFormError] = useState(false);

    const onChange = (e) => {
      setValues((prevValues) => ({
        ...prevValues,
        [e.target.name]: e.target.value,
      }));
      setFormError(false);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (!values[LoginFormKyes.Email].includes('@') || values[LoginFormKyes.Email].split('@')[1].length < 3 || values[LoginFormKyes.Password].length < 4) {
        setFormError(true);
        return;
      }

    loginSubmitHandler(values)
    }
   
  
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
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              className="w-full peer py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
            <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
    Please enter a valid email address
  </span>
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name={LoginFormKyes.Password}
              onChange={onChange}
              value={values[LoginFormKyes.Password]}
              className="w-full py-4 peer border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
              minLength="4"
            />
            <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
    Your password need be min 4 characters
  </span>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
            >
              Login
            </button>
            <ToastContainer />
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
    </section>
  );
};

export default Login;

