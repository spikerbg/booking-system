import styles from "../Components/style/userdelete.module.css"


const UserDeleteModal = ({
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
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete user?</h3>
            {/* <div className="user-container"> */}
                <header className="headers">
                    <button className="x" onClick={onClose}>
                        
                        ❌
                    </button>
                </header>
                
                    <div className="actions">
                        <div id="form-actions">
                            <button id="action-save" className={styles['btnsave']} type="submit" onClick={onDelete}>Delete</button>
                            <button id="action-cancel" className={styles['btncencel']} type="button" onClick={onClose}>
                                Cancel
                            </button>
                            
                    </div>
            </div>
            </div>
            </div>
            
            </div>
            
    )
}


export default UserDeleteModal;