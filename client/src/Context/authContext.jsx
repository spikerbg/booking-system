
import { createContext} from "react";
import * as authService from '../serviceR/authService'
import { useNavigate } from 'react-router-dom';
import usePersistedState from "../Hooks/usePersistedState";
import { toast } from 'react-toastify';


const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) =>{
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('auth', {});
  
      const loginSubmitHandler = async (values) => {
        try{
          const result = await authService.login(values.email, values.password);
  
          setAuth(result);
          toast.success('User login successfully!', {
            position: toast.POSITION.TOP_RIGHT,
          })
          localStorage.setItem('accessToken', result.accessToken)
          setTimeout(() => {navigate("/");}, 4600)
      } catch (error) {
        console.error('Error during Login:', error);
    
        // You can handle the error here, for example, show an error toast
        toast.error('Login failed. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  
      const registerSubmitHandler = async (values) =>{
        try{
        const result = await authService.register(values.email, values.password, values.fullname, values.role, values.gender,values.imageUrl, values.createdAt)
        setAuth(result);
        toast.success('User registration successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        })
        localStorage.setItem('accessToken', result.accessToken)
  
        setTimeout(() => {navigate("/");}, 2900)
    } catch (error) {
      console.error('Error during registration:', error);
  
      // You can handle the error here, for example, show an error toast
      toast.error('Registration failed. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
          userId: auth.id,
          isAuthenticated: !!auth.email,
      }
    return(
        <AuthContext.Provider value={values}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;