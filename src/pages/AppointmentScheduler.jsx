import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/appointments";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    date: "",
    time: "",
    reason: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState("");

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await axios.get(API_URL);
      setAppointments(res.data);
    } catch (err) {
      showToast("Error fetching appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const isFutureDate = () => {
    const selected = new Date(`${newAppointment.date}T${newAppointment.time}`);
    return selected > new Date();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ownerName, petName, petType, date, time, reason } = newAppointment;

    if (!ownerName || !petName || !petType || !date || !time || !reason) {
      showToast("Please fill in all fields!");
      return;
    }

    if (!isFutureDate()) {
      showToast("Please select a future date and time!");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, newAppointment);
        showToast("Appointment updated!");
        setEditingId(null);
      } else {
        await axios.post(API_URL, newAppointment);
        showToast("Appointment added!");
      }
      setNewAppointment({
        ownerName: "",
        petName: "",
        petType: "Dog",
        date: "",
        time: "",
        reason: "",
      });
      fetchAppointments();
    } catch (err) {
      showToast("Error saving appointment");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      showToast("Appointment deleted!");
      fetchAppointments();
    } catch (err) {
      showToast("Error deleting appointment");
    }
  };

  const handleEdit = (appt) => {
    setNewAppointment(appt);
    setEditingId(appt._id);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // Next appointment
  const nextAppointment = appointments
    .filter((a) => new Date(`${a.date}T${a.time}`) > new Date())
    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))[0];

  const getCountdown = (appt) => {
    const diff = new Date(`${appt.date}T${appt.time}`) - new Date();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Pet Appointment Scheduler</h1>

      {nextAppointment && (
        <div className="mb-4 p-3 bg-yellow-100 rounded">
          <strong>Next Appointment:</strong> {nextAppointment.petName} ({nextAppointment.petType}) in {getCountdown(nextAppointment)}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
        <input
          name="ownerName"
          value={newAppointment.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
          className="border p-2 rounded"
        />
        <input
          name="petName"
          value={newAppointment.petName}
          onChange={handleChange}
          placeholder="Pet Name"
          className="border p-2 rounded"
        />
        <select
          name="petType"
          value={newAppointment.petType}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Dog</option>
          <option>Cat</option>
          <option>Other</option>
        </select>
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="reason"
          value={newAppointment.reason}
          onChange={handleChange}
          placeholder="Reason"
          className="border p-2 rounded"
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editingId ? "Update" : "Add"} Appointment
          </button>
          <button
            type="button"
            onClick={() => setNewAppointment({ ownerName: "", petName: "", petType: "Dog", date: "", time: "", reason: "" })}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Appointments List */}
      <ul className="space-y-3">
        {appointments.map((appt) => (
          <li key={appt._id} className="border p-3 rounded flex justify-between items-center hover:shadow">
            <div>
              <p className="font-bold">{appt.reason}</p>
              <p>{appt.petName} ({appt.petType}) – {appt.date} at {appt.time}</p>
              <p className="text-sm text-gray-500">Owner: {appt.ownerName}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(appt)} className="bg-yellow-400 px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(appt._id)} className="bg-red-500 px-3 py-1 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow">
          {toast}
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
