import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { FaDog, FaCat, FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

function VaccinationAp() {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerContact: "",
    ownerEmail: "",
    petName: "",
    petType: "",
    date: "",
    time: "",
    vetName: "",
  });

  const [vetLocations, setVetLocations] = useState([]);
  const [userLocation, setUserLocation] = useState([20.5937, 78.9629]); // default India

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleVetSelect = (vetName) => setFormData((prev) => ({ ...prev, vetName }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Error booking appointment");
    }
  };

  const vetIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    iconSize: [35, 35],
    iconAnchor: [17, 35],
  });

  // --- Fetch live vets using Google Places API ---
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setUserLocation([lat, lng]);

      try {
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // store API key in .env
        const radius = 5000; // 5km
        const type = "veterinary_care";

        const res = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`
        );

        const places = res.data.results.map((place) => ({
          name: place.name,
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          address: place.vicinity,
        }));

        setVetLocations(places);
      } catch (err) {
        console.error("Error fetching vets:", err);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center p-4 space-y-6">
      <h2 className="text-3xl font-bold text-green-700 text-center">🐾 Book a Vet Appointment</h2>

      {/* --- Map Section --- */}
      <div className="w-full max-w-4xl h-96 shadow rounded">
        <MapContainer center={userLocation} zoom={15} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {vetLocations.map((vet, idx) => (
            <Marker
              key={idx}
              position={[vet.lat, vet.lng]}
              icon={vetIcon}
              eventHandlers={{ click: () => handleVetSelect(vet.name) }}
            >
              <Popup>
                <strong>{vet.name}</strong>
                <br />
                {vet.address}
                <br />
                <button
                  className="text-amber-700 underline mt-1"
                  onClick={() => handleVetSelect(vet.name)}
                >
                  Select for Booking
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* --- Appointment Form --- */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
          </div>
          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input type="text" name="ownerContact" placeholder="Owner Contact" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input type="email" name="ownerEmail" placeholder="Owner Email" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
          </div>
          <div className="relative">
            <FaDog className="absolute top-3 left-3 text-gray-400" />
            <input type="text" name="petName" placeholder="Pet Name" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
          </div>
          <div className="relative">
            <FaCat className="absolute top-3 left-3 text-gray-400" />
            <input type="text" name="petType" placeholder="Pet Type" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
          </div>
          <div className="relative">
            <FaDog className="absolute top-3 left-3 text-gray-400" />
            <input type="text" name="vetName" placeholder="Veterinary Clinic" value={formData.vetName} readOnly className="w-full pl-10 p-3 border bg-gray-100 rounded-md" />
          </div>
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
              <input type="date" name="date" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
            </div>
            <div className="relative w-1/2">
              <FaClock className="absolute top-3 left-3 text-gray-400" />
              <input type="time" name="time" onChange={handleChange} required className="w-full pl-10 p-3 border rounded-md focus:ring-green-400" />
            </div>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-md font-semibold hover:bg-green-600 flex items-center justify-center gap-2">
            🐾 Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default VaccinationAp;
