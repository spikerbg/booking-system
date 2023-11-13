import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/patient-avatar.png";
import { useState, useEffect } from "react";
import * as userService from "../serviceR/userService.js";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Signup = ({}) => {
  
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newRole, setNewRole] = useState("patient");
    const [newGender, setNewGender] = useState("");
    const [about, setAbout] = useState("");
    const [education, setEducation] = useState("");


  const userCreateHandler = async (e) => {
    // Stop page from refreshing
    e.preventDefault();
    if (newPassword.length < 4 || newPassword.length > 10) {
      alert("Password must be between 4 and 10 characters");
      return;
    }
    // Get data from form data
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Create new user at the server
    const newUser = await userService.create(data);
    setTimeout(() => {navigate("/login");}, 5000)

    // Add newly created user to the local state
    setUsers(state => [...state, newUser]);
    
  

    


};
const onCreate={userCreateHandler}
const notify = ()=>{
  toast.success('Successful register!')
  toast('You will be redirect after 5 second', 
           {position: toast.POSITION.TOP_RIGHT})
}
const renderDoctorFields = () => {
  if (newRole === 'doctor') {
    return (
      <>
        <label>
          About:
          <input
            type="text"
            name="about"
            className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            required
          />
        </label>
        <label>
          Education:
          <input
            type="text"
            name="education"
            className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            value={education}
            onChange={(event) => setEducation(event.target.value)}
          />
        </label>
      </>
    );
  }
  return null;
};

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
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create a <span className={"text-primaryColor"}>account</span>
            </h3>
            <form onSubmit={userCreateHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={newName}
                  onChange={(event) => setNewName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={newEmail}
                  onChange={(event) => setNewEmail(event.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full py-4 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
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
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={newRole}
                    onChange={(event) => setNewRole(event.target.value)}
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
                  className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  value={newGender}
                    onChange={(event) => setNewGender(event.target.value)}
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

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center cursor-pointer px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              {renderDoctorFields()}
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
                  onClick={notify}
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
