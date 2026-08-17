import { useState } from "react";

export default function ImageDiagnosis() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (err) => reject(err);
    });

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setResult(null);

    try {
      const imageBase64 = await toBase64(file);

      const response = await fetch("http://localhost:4000/api/nyckel-diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64 }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success && data.result) {
        const normalizedResult = {
          predictions: data.result.predictions || [],
          analysis: data.result.analysis || "",
          solution: data.result.solution || "",
          text: typeof data.result === "string" ? data.result : "",
        };
        setResult(normalizedResult);
      } else {
        setResult({ error: data.error || "Diagnosis failed" });
      }
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to diagnose" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🐾 Pet Image Diagnosis
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-gray-700 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {preview && (
            <div className="mt-4 text-center">
              <p className="font-semibold mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="mx-auto w-64 h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white p-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
          >
            {loading ? "Analyzing..." : "Upload & Diagnose"}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg shadow-inner">
            <h2 className="text-xl font-bold mb-2 text-green-700">Diagnosis Result</h2>

            {result.error && <p className="text-red-500">{result.error}</p>}

            {result.text && <p>{result.text}</p>}

            {result.predictions?.length > 0 &&
              result.predictions.map((p, index) => (
                <p key={index}>
                  <strong>{p.label}:</strong> {Math.round(p.confidence * 100)}% confidence
                </p>
              ))}

            {result.analysis && <p><strong>Analysis:</strong> {result.analysis}</p>}
            {result.solution && <p><strong>Solution:</strong> {result.solution}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
