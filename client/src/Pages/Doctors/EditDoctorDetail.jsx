import styles from "../../Components/style/editdoctordetails.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {toast, ToastContainer } from 'react-toastify';
import * as doctorService from '../../serviceR/doctorService';
import { useEffect, useState} from 'react';
export default function EditDoctorModal(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState({
        name: '',
        specialty: '',
        photo: '',
        date: '',
        totalPatients: '',
        hospital: '',
        education: '',
        short: '',
        about: '',
    });
//izvikvam doktora po id
    useEffect(() => {
        doctorService.getOne(id)
            .then(result => {
                setDoctor(result);
            });
            
    }, [id]);

//promenqm values ot doktora
    const editDoctorHandler = async (e) =>{
        e.preventDefault()
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await doctorService.edit(id, values);
            toast.success('Edit Doctor successfully!', {
                position: toast.POSITION.TOP_RIGHT,
              })

              setTimeout(() => {navigate("/doctors");}, 2900)
        } catch {
            toast.error('Edit Doctor failed. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
              });
        }
    }





    const onChange = (e) => {
        setDoctor(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    return(
        <div className="flex justify-center ">
        <form onSubmit={editDoctorHandler} className={styles['form']}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="name" name="name" id="name" value={doctor.name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ivan Ivanov" />
                    </div>

                    <div>
                        <label htmlFor="specialty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialty</label>
                        <input type="specialty" name="specialty" id="specialty" value={doctor.specialty} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Specialty" />
                    </div>

                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                        <input type="photo" name="photo" id="photo" value={doctor.photo} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="http://image.com/picture.jpg" />
                    </div>

                    <div>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From Date</label>
                        <input type="date" name="date" id="date" value={doctor.date} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="start praktical" />
                    </div>

                    <div>
                        <label htmlFor="totalPatients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patients</label>
                        <input type="totalPatients" name="totalPatients" id="totalPatients" value={doctor.totalPatients} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="How patients you have" />
                    </div>
                    <div>
                        <label htmlFor="hospital" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital</label>
                        <input type="hospital" name="hospital" id="hospital" value={doctor.hospital} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hospital" />
                    </div>
                    <div>
                        <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                        <input type="education" name="education" id="education" value={doctor.education} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Harvard" />
                    </div>
                    <div>
                        <label htmlFor="short" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail info</label>
                        <input type="short" name="short" id="short" value={doctor.short} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Short info" />
                    </div>
                    <div>
                        <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail info</label>
                        <input type="about" name="about" id="about" value={doctor.about} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Doctor About" />
                    </div>
                    <div><input type="hidden" id="avgRating" name="avgRating" value="0"></input></div>
                    <div><input type="hidden" id="totalRating" name="totalRating" value="0"></input></div>
                    
                        <div id="form-actions">
                            <button id="action-save" className={styles['btnsave']}>Save</button>
                         <Link to={`/doctors/${doctor.id}`}><button id="action-cancel" className={styles['btncencel']} type="button">
                                Cancel
                            </button>
                            </Link>
                        </div>
                    </form>
                    <ToastContainer />
                    </div>
    )
}