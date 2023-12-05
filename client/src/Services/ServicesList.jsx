import { services } from "../../data/services.js";
import ServicesCard from "./ServicesCard.jsx";
import styles from "../Components/style/serviceslist.module.css"
const ServicesList = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Fast found doctor</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need is our app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Medrent its help you to find currect doctor for you, have many option to select right doctor.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((services) => (
              <div key={services.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className={styles['div']}>
                  <img className="w-full" src={services.icon} alt="" />
                  </div>
                  {services.name}
                </dt>
                <dd className="mt-2 text-lg leading-7 text-gray-600">{services.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
