// import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import React from "react"; // Fix the import statement for React
// import { db } from '../firebase';

import * as userService from "../serviceR/userService";
import Dashboard from "./Dashboard";
import AdminDashboard from "./AdminDashboard";
import CreateUserModal from "./CreateUserModal";
import UserDeleteModal from "./UserDeleteModal";
import { ToastContainer,toast } from 'react-toastify';
import styles from "../Components/style/admindash.module.css"
import 'react-toastify/dist/ReactToastify.css';

export default function AdminDashboardSet(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
 

    useEffect(() => {
        setIsLoading(true);

        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);
    

    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const hideCreateUserModal = () => {
        setShowCreate(false);
    };

    const userCreateHandler = async (e) => {
        // Stop page from refreshing
        e.preventDefault();

        // Get data from form data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user at the server
        const newUser = await userService.create(data);

        // Add newly created user to the local state
        setUsers(state => [...state, newUser]);

        // Close the modal
        setShowCreate(false);
        toast.success('Success register!', {
          position: toast.POSITION.TOP_RIGHT,
        })
    };

    const userInfoClickHandler = async (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    };

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    }

    const deleteUserHandler = async () => {
        // Remove user from server
        await userService.remove(selectedUser);

        // Remove user from state
        setUsers(state => state.filter(user => user.id !== selectedUser));

        // Close the delete modal
        setShowDelete(false);
        toast.success('User deleted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        })
    };

    return (
      
        <div className="px-4 sm:px-6 lg:px-8">
                        {showCreate && (
                <CreateUserModal
                    onClose={hideCreateUserModal}
                    onCreate={userCreateHandler}
                />
            )}

            {showInfo && (
                <UserInfoModal
                    onClose={() => setShowInfo(false)}
                    userId={selectedUser}
                />
            )}

            {showDelete && (
                <UserDeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteUserHandler}
                />
            )}
            <div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group">
                <svg className="w-4 h-4 me-2 text-blue-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>Users
            </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group" aria-current="page">
                <svg className="w-4 h-4 me-2 text-gray-400 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Doctors
            </a>
        </li>
    </ul>
</div>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button 
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={createUserClickHandler}
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Full name
                      </th>
                    <th scope="col" className={styles['tabler']}>
                        Image
                      </th>
                      <th scope="col" className={styles['tabler']}>
                        Email
                      </th>
                      <th scope="col" className={styles['tabler']}>
                        Role
                      </th>
                      <th scope="col" className={styles['tabler']}>
                        Gender
                      </th>
                      <th scope="col" className={styles['tabler']}>
                        Create At
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>


            {isLoading}
            


            <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map(user => (
                        <AdminDashboard
                        key={user.email}
                            userId={user.id}
                            createdAt={user.createdAt}
                            email={user.email}
                            role={user.role}
                            fullname={user.fullname}
                            imageUrl={user.imageUrl}
                            gender={user.gender}
                            password={user.password}
                            onInfoClick={userInfoClickHandler}
                            onDeleteClick={deleteUserClickHandler}
                        />
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
        </div>
        </div>
        </div>
        </div>

    );
}
