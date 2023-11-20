import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import React from "react";
import styles from '../Components/style/login.module.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // You can redirect the user to another page on successful login
      navigate("/dashboard");
    } catch (error) {
      setError("Wrong email or password");
      console.error("Login error:", error);
    }
  };
  
  return (
    <section className={styles['mainselection']}>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form onSubmit={handleLogin} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
            {error && <span>Wrong email or password</span>}
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
