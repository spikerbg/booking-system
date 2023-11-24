
import { useState, useEffect } from "react";
import React from "react"; //

import { formatDate } from "../utils/dataUtils";
import { AiFillEdit, AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import AuthContext from "../Context/authContext";
import { useContext } from "react";


import * as userService from "../serviceR/userService";


export default function AdminDashboard({
  userId,
    fullname,
    email,
    gender,
    role,
    onInfoClick,
    onDeleteClick,
    createdAt
}) {
  const {
    imageUrl,
  } = useContext(AuthContext);

   


  const infoClickHandler = () => {
    onInfoClick(userId);
};

const deleteClickHandler = () => {
    onDeleteClick(userId);
};



  
  

  return (

    <>
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{fullname}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><img src={imageUrl} alt="user" className="rounded-full" width="48" height="48" /></td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{email}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{role}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{gender}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDate(createdAt)}</td>
      <td className="actions relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button className="px-3 py-2 text-xs mr-2 font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" title="Edit">
                <AiFillEdit />
                </button>
                <button className="px-3 py-2 text-xs mr-2 font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" title="Delete" onClick={deleteClickHandler}>
                 <AiFillDelete />
                </button>
            </td>
                      </tr>
                      </>

    

    
  );
}
