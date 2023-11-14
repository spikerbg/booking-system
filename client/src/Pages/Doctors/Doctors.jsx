import Testimonial from "../../Components/Testimonial/Testimonial";
import { doctors } from ".././../../data/doctors.js";
import DoctorCard from "./DoctorCard";
import * as doctorService from "../../serviceR/doctorService";
import { useState, useEffect } from "react";
const Doctors = () => {
 const [doctors, setDoctors] = useState([])
 const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  useEffect(() => {

    doctorService.getAll()
    .then((result) => {
      setDoctors(result);
      setFilteredDoctors(result); // Initialize filtered doctors with all doctors
    })
    .catch((err) => console.log(err));
}, []);

const handleSearchChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  // Filter doctors based on the search query
  const filtered = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredDoctors(filtered);
};

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <div>
            <h2 className="heading">Find a Doctors</h2>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex item-center justify-between">
              <input
                type="search"
                placeholder="Search Doctor"
                className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
          "
          >
            {filteredDoctors.map((doctor,id) => (
              <DoctorCard key={id} doctor={doctor} doctorId={doctor.id} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our paient say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
