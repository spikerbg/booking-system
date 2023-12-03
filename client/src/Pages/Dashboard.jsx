
import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React

import styles from "../Components/style/dashboard.module.css"
import { useContext } from "react";
import AuthContext from '../Context/authContext';
import * as authService from "../serviceR/authService";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/dataUtils";
import * as bookingService from "../serviceR/bookingService"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';





export default function Dashboard({}) {
  const { id } = useParams();
  const localizer = momentLocalizer(moment);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [booking, setBooking] = useState([])
  
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

  //fechwam booking zaqwkata
useEffect(() => {

  bookingService.getAll()
      .then(result => setBooking(result))
      .catch(err => console.log(err))
}, []);


  const {
    email,
    fullname,
    role,
    gender,
    imageUrl,
    createdAt,
    userId,
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
          <button type="button" className={styles['btndb']}>
            Delete profile
          </button>
          <button type="button" className={styles['btndbred']}>
            Edit profile
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
            events={booking
              .filter(data => data.userId === userId) // Replace 1 with the client's actual ID
              .map(data => {
                const startDate = new Date(data.selectedDates[0]);
                const endDate = data.selectedDates[1] ? new Date(data.selectedDates[1]) : startDate;
                return {
                  title: `Reservate`,
                  start: startDate,
                  end: endDate,
                };
              })}
            style={{ height: 500 }}
          />
) : (
  <p>No booking to display</p>
)}
        </div>
      </div>
    </div>



  );
}
