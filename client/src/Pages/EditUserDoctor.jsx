import { useNavigate, useParams } from 'react-router-dom';

import * as userService from '../serviceR/userService';
import { useEffect, useState } from 'react';


export default function EditUserDoctor(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        imageUrl: '',
        role: '',
        gender: '',


    })


    useEffect(() =>{
        userService.getOne(id)
        .then(result =>{
            setUser(result);
            console.log(result)
        })
    },[id])

    const editUserDoctorHandler = async (e) =>{
        e.preventDefault()
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await userService.edit(id, values);

            navigate('/doctors');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }
    const onChange = async (e) =>{
        setUser(state =>({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div>
        <form onSubmit={editUserDoctorHandler}>
                    <div>
                        <p>{user.email}</p>
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="fullname" name="fullname" id="fullname" value={user.fullname} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ivan Ivanov" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">imageUrl</label>
                        <input type="imageUrl" name="imageUrl" id="imageUrl" value={user.imageUrl} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="http://image.com/picture.jpg" />
                    </div>

                    <div>
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">role</label>
                        <select id="role" value={user.role} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="patient/doctor">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        </select>
                        
                    </div>

                    <div>
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">gender</label>
                        <select id="gender" value={user.gender} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male/Female">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </div>
                        <div id="form-actions">
                            <button id="action-save" className="px-5 py-2.5 text-sm my-10 mr-2 font-medium text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
                            <button id="action-cancel" className="px-5 py-2.5 text-sm my-10 mr-2 font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
                                Cancel
                            </button>
                        </div>
                    </form>
                    </div>
    )
}