import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React
import { db } from '../firebase';
import { formatDate } from "../utils/dataUtils";

import * as userService from "../serviceR/userService";


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
export default function Dashboard({ userId,
  fullname,
  lastName,
  email,
  phoneNumber,
  createdAt,
  imageUrl, }) {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
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
          <button type="button" className="btndb">
            Delete profile
          </button>
          <button type="button" className="btndb">
            Edit profile
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

        {selectedUser && (
          <div>
            <h2>UserF Details</h2>
            <p>First Name: {selectedUser.firstName}</p>
            <p>Last Name: {selectedUser.lastName}</p>
            <p>Email: {selectedUser.email}</p>
            {/* Add more user details as needed */}
          </div>
        )}
      </div>
    </div>



  );
}
