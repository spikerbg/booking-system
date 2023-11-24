
import { createContext, useState } from "react";
import * as authService from '../serviceR/authService'
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) =>{
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() =>{
      localStorage.removeItem('accessToken')
      return{}
  })
  
      const loginSubmitHandler = async (values) => {
          const result = await authService.login(values.email, values.password);
  
          setAuth(result);
          localStorage.setItem('accessToken', result.accessToken)
  
        navigate('/')
      }
  
      const registerSubmitHandler = async (values) =>{
        const result = await authService.register(values.email, values.password, values.fullname, values.role, values.gender,values.imageUrl, values.createdAt)
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
  
        navigate('/')
    }
    const logoutHandler = () =>{
      setAuth({})
      localStorage.removeItem('accessToken')
  }
  
      const values={
          loginSubmitHandler,
          registerSubmitHandler,
          logoutHandler,
          email: auth.email,
          fullname: auth.fullname,
          gender: auth.gender,
          role: auth.role,
          imageUrl: auth.imageUrl,
          createdAt: auth.createdAt,
          isAuthenticated: !!auth.email,
      }
    return(
        <AuthContext.Provider value={values}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;