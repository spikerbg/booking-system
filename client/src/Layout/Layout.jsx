import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Routers from "../Routes/Routers";
import AuthContext from "../Context/authContext"
import * as authService from '../serviceR/authService'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Layout = () => {
    
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
      const result = await authService.register(values.email, values.password, values.fullname, values.role, values.gender)
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
        username: auth.username,
        role: auth.role,
        fullname: auth.fullname,
        isAuthenticated: !!auth.email,
        gender: auth.gender
    }
    

  return (
    <>
    <AuthContext.Provider value={values}>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
