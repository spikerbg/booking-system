import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react"; // Fix the import statement for React
import { formatDate } from "../utils/dataUtils";
import * as doctorService from "../serviceR/doctorService"
import * as authService from "../serviceR/authService";
import CreateDoctorModal from "./CreateDoctorModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Components/style/dashboarddoctor.module.css"
import * as bookingService from "../serviceR/bookingService"
import { useContext } from "react";
import AuthContext from '../Context/authContext';


export default function DashboardDoctor() {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [booking, setBooking] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  
  useEffect(() => {
    async function fetchUser() {
      try {
        const selectedUser = await authService.getOne(id);
        setUser(selectedUser);
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error fetching doctor data:", error);
      }
    }

    fetchUser();
  }, [id]);

  useEffect(() => {

    bookingService.getAll()
        .then(result => setBooking(result))
        .catch(err => console.log(err))
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
  const {
    email,
    fullname,
    role,
    gender,
    createdAt,
    imageUrl,
} = useContext(AuthContext);




  return (
    <div className={styles['home-container']}>
      <div className={styles['home-container1']}>
        <img
          src={imageUrl}
          alt="image"
          className="home-image"
        />
        <div className={styles['home-container2']}>
          <h1>{role}</h1>
          <h1>{fullname}</h1>
        </div>
        <div className={styles['home-container3']}>
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
      <div className={styles['home-container4']}>
        <div className={styles['home-container5']}>
          <h1>Info for profile</h1>

          <span>Fullname: {fullname}</span>

          <span>Email: {email}</span>

          <span>Role: {role}</span>

          <span>Gender: {gender}</span>

          <span>Create At:{formatDate(createdAt)}</span>


        </div>
        <div className={styles['home-container6']}>
          <h2>Booking</h2>
          {booking.map((data,id) => (<ul key={id}>
            <li >Date:{data.selectedDates}</li>
            <li>Doctor Id:{data.doctorId}</li>
          </ul>))}
        </div>
      </div>
      <div>



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
