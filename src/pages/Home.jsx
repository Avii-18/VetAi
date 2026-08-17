import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ImageCursorTrail from "@components/ui/ImageCursorTrail";

const exampleImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=435&auto=format",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=387&auto=format",
  "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=386&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=1200&auto=format",
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-amber-100 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-700 mb-6">
          Smarter Care for Healthier Pets 🐾
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8">
          VetAi Care combines veterinary expertise with AI technology to provide
          early detection, smarter diagnostics, and personalized health
          recommendations for your beloved pets.
        </p>
        <button className="px-6 py-3 rounded-2xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition">
          Try AI Diagnosis
        </button>
      </section>

      {/* About Preview */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">About VetAi Care</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Our mission is to make veterinary care accessible and proactive using
          artificial intelligence. From symptom checking to breed-specific
          insights, VetAi Care empowers pet parents with reliable tools for
          better decision-making.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            🧪
            <h3 className="font-bold text-xl mt-4">AI Symptom Checker</h3>
            <p className="text-gray-600 mt-2">
              Get instant insights into possible health issues for your pet.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            📊
            <h3 className="font-bold text-xl mt-4">Health Dashboard</h3>
            <p className="text-gray-600 mt-2">
              Track diet, weight, and vaccination schedules with ease.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            🐕
            <h3 className="font-bold text-xl mt-4">Breed Insights</h3>
            <p className="text-gray-600 mt-2">
              Tailored care recommendations based on breed-specific needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            📱
            <h3 className="font-bold text-xl mt-4">24/7 AI Assistant</h3>
            <p className="text-gray-600 mt-2">
              Quick answers and guidance anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-amber-50 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-3">1. Enter Symptoms</h3>
            <p className="text-gray-600">
              Describe your pet’s health condition in simple steps.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-3">2. AI Analysis</h3>
            <p className="text-gray-600">
              Our AI analyzes data and suggests possible conditions.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-3">3. Vet Guidance</h3>
            <p className="text-gray-600">
              Get tailored advice or connect with a veterinarian if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Image Cursor Trail Section (demo you had) */}
      <section className="px-4 py-16">
        <ImageCursorTrail items={exampleImages}>
          <h2 className="text-3xl font-bold text-center">
            Our Caring Moments 🐶🐱
          </h2>
        </ImageCursorTrail>
      </section>

      {/* Final CTA */}
      <section className="bg-amber-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to take better care of your pet?
        </h2>
        <button className="px-8 py-3 rounded-2xl bg-white text-amber-600 font-semibold hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
