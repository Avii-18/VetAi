import React, { useState, useMemo } from "react";
import { ChevronDown, CheckCircle, Clock, PawPrint } from 'lucide-react'; // Assuming you have `lucide-react` or similar icon library

// --- 1. New: Service Card Component for Reusability ---
const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      key={service.id} 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-pink-100"
    >
      {/* Image with Aspect Ratio and loading state */}
      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <img 
          src={service.image} 
          alt={service.name} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-pink-700 mb-2 border-b border-pink-200 pb-2">{service.name}</h2>
        
        {/* Short Description */}
        <p className="text-gray-600 mb-4 italic">{service.description}</p>

        {/* --- 2. New: Interactive/Collapsible Benefits Section --- */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-pink-600 font-semibold py-2 px-3 rounded-lg hover:bg-pink-50 transition-colors"
          >
            <span>✨ Key Benefits ({service.benefits.length})</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-2 pt-2 text-sm">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Book Button */}
        <button 
          onClick={() => console.log(`Booking ${service.name}`)} // Add actual booking logic here
          className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 mt-4"
        >
          <Clock className="w-5 h-5" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};

// --- 3. Refactored: Main Page Component ---
const GroomingPage = () => {
  // --- 4. Enhancement: Move Static Data Outside Component ---
  // The data doesn't change, so it shouldn't be defined in the component or use useState.
  const serviceData = useMemo(() => ([
    // Note: The original data is kept here.
    {
      id: 1,
      name: "Bath & Brush",
      description: "A gentle bath with pet-safe shampoo and conditioner, followed by brushing to remove loose hair and tangles.",
      benefits: ["Keeps fur clean", "Reduces shedding", "Prevents matting", "Improves skin health"],
      image: "https://as1.ftcdn.net/v2/jpg/05/87/80/24/1000_F_587802417_2rmW3zG2ZW4ifhCM5Qo33Zxv3yRoRxTY.jpg",
    },
    {
      id: 2,
      name: "Full Grooming Package",
      description: "Comprehensive care including bath, brushing, haircut, nail trimming, ear cleaning, and paw care.",
      benefits: ["Full hygiene and styling", "Ideal for long-haired pets", "Preparation for special occasions"],
      image: "https://images.unsplash.com/photo-1604147706281-06fa0c4038f8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Nail Clipping",
      description: "Trimming and filing the pet’s nails safely to prevent overgrowth.",
      benefits: ["Prevents painful walking", "Reduces risk of scratches", "Promotes paw health"],
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Ear Cleaning",
      description: "Removing dirt, wax, and debris from inside the ears safely.",
      benefits: ["Prevents infections", "Reduces odor", "Important for pets with floppy ears"],
      image: "https://as2.ftcdn.net/v2/jpg/06/38/03/77/1000_F_638037745_1N6qrs8eyOk2opQq4qhdtQUHBeAk2pPq.jpg",
    },
    {
      id: 5,
      name: "Dental Cleaning",
      description: "Cleaning teeth and gums to remove plaque and tartar.",
      benefits: ["Prevents bad breath", "Prevents gum disease", "Promotes overall health"],
      image: "https://t3.ftcdn.net/jpg/16/75/59/22/240_F_1675592217_uu8gTBN0dVsMYO07fuBDAIBfvd3ELyRT.jpg",
    },
    {
      id: 6,
      name: "Spa & Massage",
      description: "Relaxing massage, sometimes with aromatherapy, paw care, or fur treatment.",
      benefits: ["Reduces stress", "Improves circulation", "Keeps coat shiny and soft"],
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    },
  ]), []); // useMemo ensures the data is created only once

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-700 mb-2 flex items-center justify-center space-x-3">
            <PawPrint className="w-10 h-10 text-pink-500" />
            <span>Premium Pet Grooming</span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Give your companion the ultimate pampering experience. Our professional services guarantee a healthy, happy, and beautiful pet!
          </p>
        </header>

        {/* Services Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* General Grooming Tips */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2">📋 Pet Care & Grooming Tips</h2>
          <div className="bg-pink-50 p-8 rounded-2xl shadow-inner space-y-4 text-gray-700">
            <p className="flex items-center">✨ **Start Young:** Introduce grooming early to make it a positive experience.</p>
            <p className="flex items-center">🐶 **Daily Brushing:** It takes just a few minutes, but prevents painful matting.</p>
            <p className="flex items-center">🍽️ **Nutrition Matters:** A healthy diet contributes significantly to a shiny coat.</p>
            <p className="flex items-center">📅 **Stay Consistent:** Regular appointments are vital for long-term skin and coat health.</p>
            <p className="flex items-center">🦷 **Check Teeth:** Dental health is key to their overall well-being. Ask us about dental hygiene!</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GroomingPage;