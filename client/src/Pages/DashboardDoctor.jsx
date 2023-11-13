import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React
import { db } from '../firebase';
import { formatDate } from "../utils/dataUtils";
import * as doctorService from "../serviceR/doctorService"
import * as userService from "../serviceR/userService";
import CreateDoctorModal from "./CreateDoctorModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function DashboardDoctor() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = "7b3143e1-d6df-4e67-bd7e-5f8b03f2fd3f"; // Replace with the desired user ID

      try {
        const userData = await userService.getOne(userId); // Fetch user information
        setUser(userData); // Set the user data in state
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);
  const createDoctorClickHandler = () => {
    setShowCreate(true);
};

const hideCreateDoctorModal = () => {
  setShowCreate(false);
};

const doctorCreateHandler = async (e) => {
  // Stop page from refreshing
  e.preventDefault();
  

  // Get data from form data
  const data = Object.fromEntries(new FormData(e.currentTarget));

  // Create new user at the server
  const newUser = await doctorService.create(data);

  // Add newly created user to the local state
  setUsers(state => [...state, newUser]);

  // Close the modal
  setShowCreate(false);
  toast.success('Success register doctor!', {
    position: toast.POSITION.TOP_RIGHT,
  })
};

  // useEffect(() => {
  //   setIsLoading(true);

  //   userService.getAll()
  //     .then(result => setUsers(result))
  //     .catch(err => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, []);





  return (
    <div className="home-container">
      <div className="home-container1">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className="home-image"
        />
        <div className="home-container2">
          <h1>{user.fullname}</h1>
          <h1>{user.role}</h1>
        </div>
        <div className="home-container3">
          <button type="button" className="block rounded-md mr-2 bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Delete profile
          </button>
          <button type="button" className="block rounded-md mr-2 bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Edit profile
          </button>
          <button type="button" className="block rounded-md mr-2 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={createDoctorClickHandler}>
            Add Doctor
          </button>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <h1>Info for patient</h1>

          <span>{user.fullname}</span>

          <span>{user.email}</span>

          <span>{user.role}</span>

          <span>{user.gendar}</span>

          <span>{user.createdAt}</span>


        </div>
        <div className="home-container6">
          <h2>Booking</h2>
          <span></span>
          <span>{user.firstName}</span>
          <span>Text</span>
          <span>Text</span>
        </div>
      </div>
      <div>
        <h1>User List</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.email}>
                {user.fullname} {user.password} - {user.email} {user.role}
                <button onClick={() => userInfoClickHandler(user.id)}>Info</button>
              </li>
            ))}
          </ul>
        )}

{showCreate && (
                <CreateDoctorModal
                    onClose={hideCreateDoctorModal}
                    onCreate={doctorCreateHandler}
                />
            )}
      </div>
      <ToastContainer />
    </div>




  );
}
