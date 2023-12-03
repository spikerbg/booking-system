import React, { useState, useContext  } from "react";
import Calendar from "@demark-pro/react-booking-calendar";
import { BookContext} from "../../Context/BookContext"
import styles from "../../Components/style/sidepanel.module.css"
import AuthContext from "../../Context/authContext"



const reserved = [
  {
    startDate: new Date(2023, 3, 22),
    endDate: new Date(2022, 4, 10),
  },
];



const SidePanel = () => {

  const {doctorId, ownerId, userId }= useContext(BookContext);
  const { isAuthenticated } = useContext(AuthContext);
    const [selectedDates, setSelectedDates] = useState([]);
    const handleChange = async (e) => {
      if (!isAuthenticated) {
        // If user is not authenticated, prevent booking
        alert("Please log in to book appointments.");
        return;
      }
  
      setSelectedDates(e);
    
      // izprashtam dannite prez post zaqwka kum survura
      const data = {
        selectedDates: e,
        doctorId,
        ownerId,
        userId,
      };
    

        const response = await fetch('http://localhost:3030/jsonstore/booking', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    const result = await response.json();
    console.log(result);
  
  }


  return (
    <div className="shadow-panelShadow  p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="textx-[16px] leading-7 lg:text-[32px] lg:leading-8 text-headingColor font-bold">
          100Euro
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          <li className={styles['litag']}>
            <p className={styles['ptag']}>
              Sunday
            </p>
            <p className={styles['ptag']}>
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className={styles['litag']}>
            <p className={styles['ptag']}>
              Monday
            </p>
            <p className={styles['ptag']}>
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className={styles['litag']}>
            <p className={styles['ptag']}>
              Tuesday
            </p>
            <p className={styles['ptag']}>
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className={styles['litag']}>
            <p className={styles['ptag']}>
              Wednesday
            </p>
            
            <p className={styles['ptag']}>
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <Calendar
      selected={selectedDates}
      onChange={handleChange}
      onOverbook={(e, err) => alert(err)}
      components={{
        DayCellFooter: ({ innerProps }) => (
          <div {...innerProps}></div>
        ),
      }}
      disabled={(date, state) => !state.isSameMonth}
      reserved={reserved}
      variant="events"
      dateFnsOptions={{ weekStartsOn: 1 }}
      range={false}
    />
      {/* <button className="btn w-full px-2 rounded-md">Book Appointment</button> */}
    </div>
  );
};

export default SidePanel;
