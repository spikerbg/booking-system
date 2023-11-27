
import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React

import styles from "../Components/style/dashboard.module.css"
import { useContext } from "react";
import AuthContext from '../Context/authContext';
import * as authService from "../serviceR/authService";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/dataUtils";




// export default function Dashboard() {
//   const docRef = doc(db, "users", "2RO0texyblTVKZqbndNe");
//   const [userData, setUserData] = useState(null); // Declare and initialize userData

//   useEffect(() => {
//     const fetchData = async () => {
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setUserData(data); // Update the state with user data
//       } else {
//         console.log("No such document!");
//       }
//     };

//     fetchData();
//   }, []);
export default function Dashboard({}) {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
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
    imageUrl,
    createdAt,
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
          <span></span>
          <span>{user.firstName}</span>
          <span>Text</span>
          <span>Text</span>
        </div>
      </div>
    </div>



  );
}
