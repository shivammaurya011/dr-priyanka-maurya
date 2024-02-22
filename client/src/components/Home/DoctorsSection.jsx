// Import React and icons
import React from "react";
import { FaHeart, FaChild, FaVenus, FaUserMd, FaBalanceScale, FaSmile } from 'react-icons/fa';

// Dummy doctor image URL (replace with your actual image URL)
const dummyDoctorImage = "https://placekitten.com/70/70"; // Placeholder image URL

const DoctorsSection = () => {
  const DoctorCard = ({ name, image, specialization, price, rating }) => {
    return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex items-center justify-center h-[70px] w-[70px] rounded-full bg-blue-800 text-white">
            {/* Use an img tag with dummyDoctorImage */}
            <img src={dummyDoctorImage} alt="Doctor" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex">
            <div>
              <h4>{name}</h4>
              <p>{specialization}</p>
            </div>
            <div>
              <p>{rating}</p>
              <h3>{price}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-10 bg-blue-50">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Doctors
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-blue-800 sm:text-4xl md:text-[40px]">
                Best Doctors
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {/* DoctorCard components go here */}
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
          <DoctorCard
            name="Priyanka Maurya"
            specialization="Skin"
            image={<FaHeart />}
            price="300"
            rating="4.5"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
