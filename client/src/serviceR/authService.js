import * as request from '../utils/request'
const baseUrl='http://localhost:3030/users/'

export const login = async (email, password) =>{
  const result = await request.post(`${baseUrl}/login` , {
    email,
    password,
   })

   return result
}
export const register = async (email, password, fullname, role, gender, imageUrl) => {
  const currentDate = new Date().toISOString();

  try {
    const result = await request.post(`${baseUrl}register`, {
      email,
      password,
      fullname,
      role,
      gender,
      imageUrl,
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    return result;
  } catch (error) {
    console.error('Registration failed:', error.message);
    throw error; // Re-throw the error to propagate it further
  }
};

  export const logout = () => request.get(`${baseUrl}logout`)

  export const getOne = async (userId) =>{
    const result = await request.get(`${baseUrl}${userId}`)
    console.log(userId, "dsadsadsa"); // Add this line
    return result
}

export const edit = async (userId, data) => {
  const result = await request.put(`${baseUrl}${userId}`, data);
  console.log(data)

  return result;
};

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

