import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Routers from "../Routes/Routers";
import {AuthProvider} from "../Context/authContext"



const Layout = () => {
    
    

  return (
    <>
    <AuthProvider>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      </AuthProvider>
    </>
  );
};

export default Layout;
