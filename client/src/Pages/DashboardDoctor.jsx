import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react"; // Fix the import statement for React
import { formatDate } from "../utils/dataUtils";
import * as doctorService from "../serviceR/doctorService"
import CreateDoctorModal from "./CreateDoctorModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Components/style/dashboarddoctor.module.css"
import * as bookingService from "../serviceR/bookingService"
import { useContext } from "react";
import AuthContext from '../Context/authContext';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function DashboardDoctor() {
  const { id } = useParams();
  const localizer = momentLocalizer(moment);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [booking, setBooking] = useState([])
  const [showCreate, setShowCreate] = useState(false);



//fechwam booking zaqwkata
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


  const {
    email,
    fullname,
    role,
    gender,
    userId,
    createdAt,
    imageUrl,
} = useContext(AuthContext);
console.log(booking);



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
          <button type="button" className="block rounded-md mr-2 bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
           <Link to={`/edit-user/${userId}`}> Edit profile </Link>
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
          {booking.length > 0 ? (
            <Calendar
            localizer={localizer}
            events={booking.map(data => {
              const startDate = new Date(data.selectedDates[0]);
              const endDate = data.selectedDates[1] ? new Date(data.selectedDates[1]) : startDate; 
              // console.log("Event:", { title: `Doctor ${data.doctorId}`, start: startDate, end: endDate });
              return {
                title: `Doctor ${data.doctorId}`,
                start: startDate,
                end: endDate,
              };
            })}
            style={{ height: 500 }}
          />
) : (
  <p>No events to display</p>
)}
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
