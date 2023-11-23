import * as request from '../utils/request'
const baseUrl='http://localhost:3030/users'

export const login = async (email, password) =>{
  const result = await request.post(`${baseUrl}/login` , {
    email,
    password,
   })

   return result
}
export const register = async (email, password, role, fullname, gender) => {
  const currentDate = new Date().toISOString();

  const result = await request.post(`${baseUrl}/register`, {
    email,
    password,
    role,
    fullname,
    gender,
    createdAt: currentDate,
    updatedAt: currentDate,
  });

  return result;
};

  export const logout = () => request.get(`${baseUrl}/logout`)

  export const getOne = async (userId) =>{
    const result = await request.get(`${baseUrl}/${userId}`)
    return result
}

export const getAll = async () => {
  const result = await request.get(baseUrl)
return result
}  
  