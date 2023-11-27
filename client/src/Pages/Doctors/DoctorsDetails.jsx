import { useContext, useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import * as doctorService from "../../serviceR/doctorService";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout.jsx";
import Feedback from "./Feedback.jsx";
import SidePanel from "./SidePanel.jsx";
import { BookContext } from '../../Context/BookContext';
import styles from '../../Components/style/doctordetails.module.css'
import AuthContext from "../../Context/authContext";
import DeleteDoctor from "./DeleteDoctor";

const DoctorsDetails = ({}) => {
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const { userId } = useContext(AuthContext);
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const selectedDoctor = await doctorService.getOne(id);
        setDoctor(selectedDoctor);
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error fetching doctor data:", error);
      }
    }

    fetchDoctor();
  }, [id]);
  

  if (!doctor) {
    return <div>Loading...</div>; // da se pokaje kogato nqma lekari
  }
 const doctorId = doctor.id
  const {
    name,
    specialty,
    totalRating,
    photo,
    short,
  } = doctor;
  const deleteUserClickHandler = (id) => {
    setDoctor(id);
    setShowDelete(true);
}
const deleteUserHandler = async () => {
  try {
    await doctorService.remove(id);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
  navigate('/')
};
  


  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure>
                <img
                  src={photo}
                  alt={name}
                  className={styles['picture']}
                />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialty}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="star" /> {doctor.averageRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    ({doctor.totalRating})
                  </span>
                </div>
                <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                  {short}
                </p>
              </div>
            </div>
            {userId === doctor._ownerId && (
                <div className="mt-5 gap-2 flex">
                    <Link to={`/edit-doctor/${doctor.id}`} className="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">Edit</Link>
                    <button className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"  onClick={deleteUserClickHandler}>Delete</button>
                   
                </div>
                )}
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && `border-b border-solid border-primaryColor`
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About 
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  `border-b border-solid border-primaryColor`
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout doctor={doctor} />}

              {tab === "feedback" && <Feedback doctor={doctor} doctorId={id} />}
            </div>
          </div>
          {showDelete && (<DeleteDoctor
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteUserHandler}
                />)}
          <BookContext.Provider value={id}>
          <SidePanel />
          </BookContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
