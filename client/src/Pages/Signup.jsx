

import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/patient-avatar.png";
import { ToastContainer, toast } from 'react-toastify';
import styles from '../Components/style/Signup.module.css'
import { useContext, useState} from "react";
import AuthContext from "../Context/authContext";
import useForm from "../Hooks/useForm";
// import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  
  //   const [users, setUsers] = useState([])
  //   const navigate = useNavigate()
  //   const [newName, setNewName] = useState("");
  //   const [newEmail, setNewEmail] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  //   const [newRole, setNewRole] = useState("patient");
  //   const [newGender, setNewGender] = useState("");
  //   const [about, setAbout] = useState("");
  //   const [education, setEducation] = useState("");


  // const userCreateHandler = async (e) => {
  //   // Stop page from refreshing
  //   e.preventDefault();
  //   if (newPassword.length < 4 || newPassword.length > 10) {
  //     alert("Password must be between 4 and 10 characters");
  //     return;
  //   }
  //   // Get data from form data
  //   const data = Object.fromEntries(new FormData(e.currentTarget));

  //   // Create new user at the server
  //   const newUser = await userService.create(data);
  //   setTimeout(() => {navigate("/login");}, 5000)

  //   // Add newly created user to the local state
  //   setUsers(state => [...state, newUser]);
    
  
  
    
  const { registerSubmitHandler } = useContext(AuthContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
    fullname: '',
    role: '',
    gender: '',
    imageUrl: '',
  });

  const notify = () => {
    // Add your toast notification logic here
  };

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Assuming submitHandler is a function that should be called with values
    registerSubmitHandler(values);
  }


  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Sign up form  */}
          <div className={styles['maindiv']}>
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create a <span className={"text-primaryColor"}>account</span>
            </h3>
            <form id="register" onSubmit={onSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullname"
                  name="fullname"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={values.fullname}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={values.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={values.password}
                  onChange={onChange}
                  required
                />
                
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    id="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={values.role}
                    onChange={onChange}
                  >
                    
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label
               className='text-headingColor font-bold text-[16px] leading-7'
              >
                Gender:
                <select
                  name='gender'
                  id="gender"
                  className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  value={values.gender}
                  onChange={onChange}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="mb-5">
                <input
                  type="text"
                  placeholder="http://image.com/image"
                  id="imageUrl"
                  name="imageUrl"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={values.imageUrl}
                  onChange={onChange}
                />
              </div>
              
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
                  // onClick={notify}
                >
                  Signup
                </button>
                <ToastContainer />
              </div>
            </form>
            <p className="mt-5 text-textColor text-center">
              Already have an account?
              <Link to="/login" className="text-primaryColor font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  }
        
        


export default Signup;

