// Signup.jsx
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // Connect to backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200  to-white p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-39 h-39  bg-amber-600 rounded-full flex items-center justify-center text-7xl animate-bounce">
          🐶
        </div>

        <h2 className="text-3xl font-bold text-center text-amber-700 mb-6">
          Join VetAi Care
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="********"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 flex items-center justify-center gap-2 text-gray-500">
          <span>or sign up with</span>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaFacebook /> Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-amber-600 font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
