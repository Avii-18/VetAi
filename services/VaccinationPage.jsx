import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VaccinationPage = () => {
  const navigate = useNavigate();
  const [pets] = useState([
    {
      name: "Milo 🐶",
      species: "Dog",
      vaccinations: [
        { id: 1, type: "Rabies", date: "2025-10-10", status: "upcoming", vet: "Dr. Sharma" },
        { id: 2, type: "Parvovirus", date: "2025-07-15", status: "completed", vet: "Dr. Sharma" },
        { id: 3, type: "Distemper", date: "2025-12-05", status: "upcoming", vet: "Dr. Sharma" },
      ],
    },
    {
      name: "Luna 🐱",
      species: "Cat",
      vaccinations: [
        { id: 4, type: "Feline Distemper", date: "2025-11-01", status: "upcoming", vet: "Dr. Mehta" },
        { id: 5, type: "Rabies", date: "2025-06-01", status: "completed", vet: "Dr. Mehta" },
      ],
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-emerald-700 text-center mb-4">
          🐾 Pet Vaccination Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Track vaccination schedules, completed doses, and upcoming reminders.  
          Keep your pets healthy and protected! 🐕🐈
        </p>

        {/* Info Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">📘 Why Vaccinations Are Important</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>💉 Protects pets from deadly diseases like rabies, parvovirus, and distemper.</li>
            <li>🛡️ Strengthens immunity and prevents community outbreaks.</li>
            <li>📅 Ensures long-term health & legal compliance (rabies is mandatory).</li>
            <li>👩‍⚕️ Some vaccines are annual, others are every few years—track carefully!</li>
          </ul>
        </section>

        {/* Pet Sections */}
        {pets.map((pet, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              {pet.name} ({pet.species})
            </h2>
            
            {/* Progress */}
            <div className="mb-6">
              <p className="font-semibold text-gray-600">Vaccination Progress:</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-emerald-500 h-3 rounded-full"
                  style={{
                    width: `${(pet.vaccinations.filter(v => v.status === "completed").length / pet.vaccinations.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">📅 Upcoming Vaccinations</h3>
                <div className="space-y-4">
                  {pet.vaccinations.filter(v => v.status === "upcoming").length === 0 ? (
                    <p className="text-gray-500">✅ All vaccinations are up to date.</p>
                  ) : (
                    pet.vaccinations
                      .filter(v => v.status === "upcoming")
                      .map(v => (
                        <div
                          key={v.id}
                          className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm"
                        >
                          <h4 className="font-semibold text-lg">{v.type}</h4>
                          <p className="text-gray-600">Date: {v.date}</p>
                          <p className="text-gray-600">Vet: {v.vet}</p>

                          {/* Appointment Button for each vaccine */}
                          <button
                            onClick={() => navigate("/vaccination-booking")}
                            className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition"
                          >
                            📅 Book Appointment
                          </button>
                        </div>
                      ))
                  )}
                </div>
              </div>

              {/* Completed */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">✅ Completed Vaccinations</h3>
                <div className="space-y-4">
                  {pet.vaccinations.filter(v => v.status === "completed").length === 0 ? (
                    <p className="text-gray-500">❌ No vaccinations recorded yet.</p>
                  ) : (
                    pet.vaccinations
                      .filter(v => v.status === "completed")
                      .map(v => (
                        <div
                          key={v.id}
                          className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-lg shadow-sm"
                        >
                          <h4 className="font-semibold text-lg">{v.type}</h4>
                          <p className="text-gray-600">Date: {v.date}</p>
                          <p className="text-gray-600">Vet: {v.vet}</p>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* General Guidelines */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">📋 General Vaccination Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-3">
            <p>🐶 <strong>Puppies:</strong> Start at 6–8 weeks, repeat every 3–4 weeks until 16 weeks.</p>
            <p>🐱 <strong>Kittens:</strong> Begin at 8 weeks, boosters at 12 & 16 weeks.</p>
            <p>📅 <strong>Adults:</strong> Booster shots annually or every 3 years (depends on vaccine).</p>
            <p>🛑 <strong>Rabies:</strong> Legally required in most countries.</p>
          </div>
        </section>

        {/* Add Record + General Appointment Button */}
        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all">
            ➕ Add New Vaccination Record
          </button>
          <button
            onClick={() => navigate("/vaccination-booking")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          >
            📅 Book General Vaccination Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaccinationPage;
