import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Routers from "../Routes/Routers";
import AuthContext from "../Context/authContext"
import * as authService from '../serviceR/authService'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    
  const navigate = useNavigate()
    const [auth, setAuth] = useState({})

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
      navigate('/')
    }

    const values={
        loginSubmitHandler,
        email: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.email,
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
