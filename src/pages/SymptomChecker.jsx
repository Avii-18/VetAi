import { useState } from "react";
import { Stethoscope, PawPrint, Loader2 } from "lucide-react";

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    setResults([]);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/get-disease-by-symptoms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-white to-amber-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-3xl border border-amber-200 p-8">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-2 text-amber-800">
            <Stethoscope className="w-8 h-8" />
            <h1 className="text-3xl font-extrabold">Pet Symptom Checker</h1>
          </div>
          <p className="text-gray-600 text-center max-w-md">
            Enter your pet’s symptoms to get possible diseases and health insights 🐾
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="e.g. fever, cough, lethargy"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <PawPrint className="w-5 h-5" />
                Check Symptoms
              </>
            )}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
        )}

        <div className="mt-8 space-y-4">
          {results.length > 0 &&
            results.map((pet, idx) =>
              pet.message ? (
                <div
                  key={idx}
                  className="text-center text-gray-600 italic bg-gray-50 rounded-lg py-4 shadow-sm"
                >
                  😿 {pet.message}
                </div>
              ) : (
                <div
                  key={idx}
                  className="p-5 border border-amber-200 rounded-xl bg-gradient-to-br from-white to-amber-50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h2 className="text-lg font-bold text-amber-800 mb-2 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-amber-700" />
                    {pet.disease}
                  </h2>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <p><strong>Pet Type:</strong> {pet.petType}</p>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <p><strong>Gender:</strong> {pet.gender}</p>
                    <p><strong>Weight:</strong> {pet.weight} kg</p>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    <strong>Symptoms:</strong> {pet.symptoms}
                  </p>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
