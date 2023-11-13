import doctorImg01 from "../src/assets/images/doctor-img01.jpg";
import doctorImg02 from "../src/assets/images/doctor-img02.jpg";
import doctorImg03 from "../src/assets/images/doctor-img03.jpg";

export const doctors = [
  {
    id: "01",
    name: "Dr. Drake",
    specialty: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 500,
    date: "23 June, 2008",
    education: "PHD in Surgeon",
    hospital: "Kangaroo Hospital.",
    price: "100 Euro",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
  {
    id: "02",
    name: "Dr. Krus Kir",
    specialty: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02,
    date: "23 June, 2008",
    totalPatients: 1500,
    hospital: "Flex Hospital",
    education: "PHD in Neurologist",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
  {
    id: "03",
    name: "Dr. Uris Tar",
    specialty: "Gynaecology",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 1000,
    date: "23 June, 2008",
    education: "PHD in Gynaecology",
    hospital: "Flex Hospital",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
];
