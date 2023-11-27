import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors/Doctors";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import Dashboard from "../Pages/Dashboard";
import AdminDashboardSet from "../Pages/AdminDashboardSet";
import DashboardDoctor from "../Pages/DashboardDoctor";
import Logout from "../Pages/Logout";
import EditDoctorModal from "../Pages/EditDoctorModal"
import PrivateRoutes from "./PrivateRoute";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services services={Services} />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/edit-user/:userId" element={<EditDoctorModal />} />
      <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<DashboardDoctor/>} path="/dashboarddoctor/:id"/>
                <Route  path="/dashboard/:id" element={<Dashboard />} />
                <Route  path="/admdash" element={<AdminDashboardSet />} />
            </Route>
      <Route  path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routers;
