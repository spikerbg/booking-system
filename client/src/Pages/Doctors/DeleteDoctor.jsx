


const DeleteDoctor = ({
    onClose,
    onDelete,
}) => {

      
    return (
      
<div tabIndex="-1" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen backdrop-blur-sm bg-white/30">
        <div className="relative p-4 w-full max-w-md max-h-full" onClick={onClose}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" onClick={onClose}></div>
        <div className="p-4 md:p-5 text-center bg-white shadow-lg border-2">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete Doctor?</h3>
            {/* <div className="user-container"> */}
                <header className="headers">
                    <button className="x" onClick={onClose}>
                        
                        ❌
                    </button>
                </header>
                
                    <div className="actions">
                        <div id="form-actions">
                            <button id="action-save" className="px-5 py-2.5 text-sm my-10 mr-2 font-medium text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="submit" onClick={onDelete}>Delete</button>
                            <button id="action-cancel" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button" onClick={onClose}>
                                Cancel
                            </button>
                            
                    </div>
            </div>
            </div>
            </div>
            
            </div>
            
    )
}


export default DeleteDoctor;