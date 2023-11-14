// import { doctors } from "../../../data/doctors.js";
import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard.jsx";
import * as doctorService from "../../serviceR/doctorService.js";


const DoctorsList = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {

    doctorService.getAll()
        .then(result => setDoctors(result))
        .catch(result => console.log(result))
}, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor, id) => (
        <DoctorCard doctor={doctor} key={id} />
      ))}
    </div>
  );
};

export default DoctorsList;
