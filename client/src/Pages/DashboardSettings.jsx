import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React

import * as userService from "../serviceR/userService";
import Dashboard from "./Dashboard";

export default function DashboardSettings() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        const fetchUserInfo = async () => {
          const userId = "7b3143e1-d6df-4e67-bd7e-5f8b03f2fd3f"; // Replace with the desired user ID
    
          try {
            const userData = await getOne(userId); // Fetch user information
            setUser(userData); // Set the user data in state
          } catch (error) {
            console.error('Error fetching user information:', error);
          }
        };
    
        fetchUserInfo();
      }, []);
    useEffect(() => {
        setIsLoading(true);
    
        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);
    



    return(
<div>
{users.map(user => (
                        <Dashboard
                        key={user.email}
                            userId={user.id}
                            createdAt={user.createdAt}
                            email={user.email}
                            fullname={user.fullname}
                            imageUrl={user.imageUrl}
                            lastName={user.lastName}
                            gender={user.gender}
                            phoneNumber={user.phoneNumber}
                        />
                    ))}
                    </div>

    )
    }