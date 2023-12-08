import { services } from "../../data/services.js";
import useTitle from "../Hooks/useTitle.js";
import ServicesCard from "../Services/ServicesCard.jsx";
import styles from '../Components/style/services.module.css'


export default function Services(props) {
  useTitle("Services");

  return (
    <>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Fast found doctor</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Medrent its help you to find currect doctor for you, have many option to select right doctor.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/* izkarvam dannite prez services.js */}
              {services.map((service) => (
                <div key={service.name} className="relative pl-16">
                  <div className={styles['dtstyle']}>
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <img className="w-full" src={service.icon} alt="" />
                    </div>
                    <dt className="font-bold text-lg">{service.name}</dt>
                  </div>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

