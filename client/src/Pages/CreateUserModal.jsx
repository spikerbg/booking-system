import { useState } from "react";
const formInitialState = {
    gender: '',

};


const CreateUserModal = ({
    onClose,
    onCreate,

}) => {

    const [formValues, setFormValues] = useState(formInitialState);
    const changeHandler = (e) => {
       setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
            
        }));
        console.log(formValues)
    };
    return (
<div tabIndex="-1" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen backdrop-blur-sm bg-white/30">
        <div className="modal">
            <div className="backdrop" onClick={onClose}></div>
                {/* <div className="user-container"> */}
                    <header className="headers">
                        <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add User</h2>
                        <button className="x" onClick={onClose}>
                            
                            ❌
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                    <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="fullname" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ivan Ivanov" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">imageUrl</label>
                        <input type="imageUrl" name="imageUrl" id="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="http://image.com/picture.jpg" />
                    </div>

                    <div>
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">role</label>
                        <select id="role" name="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="patient/doctor">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        </select>
                        
                    </div>

                    <div>
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">gender</label>
                        <select id="gender" name="gender" onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male/Female">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </div>
                        <div id="form-actions">
                            <button id="action-save" className="px-5 py-2.5 text-sm my-10 mr-2 font-medium text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
                            <button id="action-cancel" className="px-5 py-2.5 text-sm my-10 mr-2 font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
        //     </div>
        // </div>
    );
};

export default CreateUserModal;