import React, { useState } from "react";
import {
  Edit3,
  Save,
  X,
  RotateCcw,
  Camera,
  Heart,
  Calendar,
  Weight,
  Syringe,
  ClipboardList,
} from "lucide-react";

export default function PetProfile() {
  const defaultProfile = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "25 kg",
    healthStatus: "Healthy",
    vaccinationStatus: "Up to date",
    allergies: "None",
    lastCheckup: "2025-05-10",
    image: "https://placedog.net/300/300", // pet image
    favorite: true,
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState(defaultProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setEditMode(false);
  };

  const handleReset = () => {
    setProfile(defaultProfile);
    setTempProfile(defaultProfile);
  };

  const toggleFavorite = () => {
    setProfile({ ...profile, favorite: !profile.favorite });
  };

  const infoFields = [
    { key: "breed", icon: ClipboardList },
    { key: "age", icon: Calendar },
    { key: "weight", icon: Weight },
    { key: "healthStatus", icon: Heart },
    { key: "vaccinationStatus", icon: Syringe },
    { key: "allergies", icon: ClipboardList },
    { key: "lastCheckup", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center p-4">
      <div className="relative bg-white shadow-xl rounded-2xl w-full max-w-3xl p-6 hover:shadow-2xl transition-shadow">
        {/* Pet Image */}
        <div className="absolute -top-12 left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-amber-700 bg-amber-300 flex items-center justify-center">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="ml-32 flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h1 className="text-2xl font-bold text-amber-700">{profile.name}</h1>
            <p className="text-gray-600">{profile.species}</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <Save className="w-4 h-4 mr-1" /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setEditMode(true)}
                  className="flex items-center bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <Edit3 className="w-4 h-4 mr-1" /> Edit
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <RotateCcw className="w-4 h-4 mr-1" /> Reset
                </button>
              </>
            )}
            <button
              onClick={toggleFavorite}
              className="flex items-center px-3 py-1 rounded-lg text-sm border border-amber-700"
            >
              <Heart
                className={`w-4 h-4 ${
                  profile.favorite ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {infoFields.map((field) => {
            const Icon = field.icon;
            return (
              <div
                key={field.key}
                className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-2"
              >
                <Icon className="w-5 h-5 text-amber-700" />
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-amber-700 mb-1 capitalize">
                    {field.key.replace(/([A-Z])/g, " $1")}
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name={field.key}
                      value={tempProfile[field.key]}
                      onChange={handleChange}
                      className="w-full border border-amber-300 rounded-lg p-1 text-sm focus:ring-2 focus:ring-amber-400 outline-none"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">
                      {profile[field.key]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
