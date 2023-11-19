import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React
import { formatDate } from "../utils/dataUtils";
import * as doctorService from "../serviceR/doctorService"
import * as userService from "../serviceR/userService";
import CreateDoctorModal from "./CreateDoctorModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Components/style/dashboarddoctor.module.css"
import * as bookingService from "../serviceR/bookingService"


export default function DashboardDoctor() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [booking, setBooking] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user information
        const userId = "7b3143e1-d6df-4e67-bd7e-5f8b03f2fd3f"; // Replace with the desired user ID
        const userData = await userService.getOne(userId);
        setUser(userData); // Set the user data in state

        // Fetch all bookings
        const bookingData = await bookingService.getAll();
        setBooking(bookingData); // Set the booking data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
       
      }
    };

    fetchData(); // Call the function to fetch data
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
    <div className={styles['home-container']}>
      <div className={styles['home-container1']}>
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className="home-image"
        />
        <div className={styles['home-container2']}>
          <h1>{user.fullname}</h1>
          <h1>{user.role}</h1>
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
          <h1>Info for patient</h1>

          <span>{user.fullname}</span>

          <span>{user.email}</span>

          <span>{user.role}</span>

          <span>{user.gendar}</span>

          <span>{user.createdAt}</span>


        </div>
        <div className={styles['home-container6']}>
          <h2>Booking</h2>
          {booking.map((data,id) => (<ul key={id}>
            <li >{data.selectedDates}</li>
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
