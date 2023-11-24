import * as request from '../utils/request'
const baseUrl='http://localhost:3030/users/users'

export const getAll = async () => {
    const result = await request.get(baseUrl)
  return result
  }  

  export const deleteAccount = async (userId) => {
    try {
      // Send a request to the server to delete the user
      await request.remove(`${baseUrl}/${userId}`);
  
      // If the server deletion is successful, update the client state
      deleteAccountLocally(userId);
  
      // Return a success message or other relevant data
      return { message: 'User deleted successfully from server and client state' };
    } catch (error) {
      // Handle any errors that occur during the server request
      console.error('Error deleting user:', error.message);
      throw error; // Rethrow the error for the calling code to handle
    }
  };
  
  // Function to simulate deleting the user account from client state
  export const deleteAccountLocally = (userId) => {
    // Implement the logic to delete the user from the client state
    // For example, you might use a Redux store, context, or local state
    // This is a placeholder, you need to implement the logic based on your application structure
    console.log(`Deleting user with ID ${userId} from client state`);
  };