const CreateDoctorModal = ({
    onClose,
    onCreate,
}) => {

    
    return (
        <div tabIndex="-1" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen backdrop-blur-sm bg-white/30">
        <div className="modal">
            <div className="backdrop" onClick={onClose}></div>
                {/* <div className="user-container"> */}
                    <header className="headers">
                        <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Doctor</h2>
                        <button className="x" onClick={onClose}>
                            
                            ❌
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ivan Ivanov" />
                    </div>

                    <div>
                        <label htmlFor="specialty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialty</label>
                        <input type="specialty" name="specialty" id="specialty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Specialty" />
                    </div>

                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                        <input type="photo" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="http://image.com/picture.jpg" />
                    </div>

                    <div>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From Date</label>
                        <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="start praktical" />
                    </div>

                    <div>
                        <label htmlFor="totalPatients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patients</label>
                        <input type="totalPatients" name="totalPatients" id="totalPatients" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="How patients you have" />
                    </div>
                    <div>
                        <label htmlFor="hospital" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital</label>
                        <input type="hospital" name="hospital" id="hospital" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hospital" />
                    </div>
                    <div>
                        <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                        <input type="education" name="education" id="education" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Harvard" />
                    </div>
                    <div>
                        <label htmlFor="short" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail info</label>
                        <input type="short" name="short" id="short" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Short info" />
                    </div>
                    <div>
                        <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail info</label>
                        <input type="about" name="about" id="about" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Doctor About" />
                    </div>
                    <div><input type="hidden" id="avgRating" name="avgRating" value="0"></input></div>
                    <div><input type="hidden" id="totalRating" name="totalRating" value="0"></input></div>
                    
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

export default CreateDoctorModal;