import React from 'react';
import { FaStethoscope, FaSyringe, FaDog, FaCat, FaTooth, FaPaw, FaHeartbeat } from 'react-icons/fa';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
export const Services = () => {
  const services = [
    {
      name: 'Emergency Care',
      description: '24/7 emergency services for your pets, ensuring they receive immediate medical attention when they need it most.',
      icon: <FaStethoscope className="text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
      link: '/emergency-care',
    },
    {
      name: 'Vaccinations',
      description: 'Essential vaccinations to protect your pets from common and dangerous diseases. Stay up-to-date with our vaccination schedules.',
      icon: <FaSyringe className="text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
      link: '/vaccinations',
    },
    {
      name: 'Routine Check-ups',
      description: 'Comprehensive annual check-ups to monitor your pet’s health, catch potential issues early, and provide preventive care.',
      icon: <FaDog className="text-4xl text-purple-500 group-hover:text-white transition-colors duration-300" />,
      link: '/routine-checkups',
    },
    {
      name: 'Grooming Services',
      description: 'Professional grooming services to keep your pet looking and feeling their best. We offer baths, trims, and more.',
      icon: <FaCat className="text-4xl text-pink-500 group-hover:text-white transition-colors duration-300" />,
      link: '/grooming-services',
    },
    {
      name: 'Dental Care',
      description: 'Specialized dental services, including cleanings and extractions, to maintain your pet’s oral health and prevent dental disease.',
      icon: <FaTooth className="text-4xl text-yellow-500 group-hover:text-white transition-colors duration-300" />,
      link: '/dental-care',
    },
    {
      name: 'Symptoms Checker',
      description: 'Helps pet owners better understand their pet’s health.',
      icon: <FaPaw className="text-4xl text-yellow-500 group-hover:text-white transition-colors duration-300" />,
      link: '/symptoms-checker',
    },
    {
      name: 'Pet Diagnosis',
      description: 'AI-powered diagnostic tools to detect early signs of diseases and ensure timely treatment for your beloved pets.',
      icon: (
        <div className="flex gap-2 justify-center">
          <FaPaw className="text-4xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          <FaHeartbeat className="text-4xl text-red-500 group-hover:text-white transition-colors duration-300" />
        </div>
      ),
      link: '/imageDiagnosis',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className='bg-amber-600 p-10 mb-6'>
          <h1 className="text-4xl md:text-5xl font-extrabold  text-white text-center mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white text-center max-w-2xl mx-auto mb-12">
            Providing compassionate and comprehensive care for your beloved pets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group flex flex-col"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {service.name}
              </h2>
              <p className="text-gray-600 text-center flex-1">{service.description}</p>
              {service.link ? (
                <Link
                  to={service.link}
                  className="mt-4 px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors duration-300 mx-auto text-center block"
                >
                  Learn More
                </Link>
              ) : (
                <button className="mt-4 px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors duration-300 mx-auto">
                  Learn More
                </button>
              )}

            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

