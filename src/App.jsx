import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Services } from "./pages/Services";
import Landing from "./pages/landingpage";
import SymptomChecker from "./pages/SymptomChecker";
import AppointmentScheduler from "./pages/AppointmentScheduler";
import Chat from "./pages/Chat";
import VaccinationPage from "../services/VaccinationPage";
import VaccinationAp from "../services/VaccinationAp";
import GroomingPage from "../services/Grooming";
import PetProfile from "./pages/PetProfile";
import ImageDiagnosis from "./pages/ImageDiagnosis";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/services" element={<Services />} />
      <Route path="/symptoms-checker" element={<SymptomChecker />} />
      <Route path="/appointment" element={<AppointmentScheduler />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/vaccinations" element={<VaccinationPage />} />
      <Route path="/vaccination-booking" element={<VaccinationAp />} />
      <Route path="/grooming-services" element={<GroomingPage />} />
      <Route path="/petprofile" element={<PetProfile />} />
      <Route path="/imageDiagnosis" element={<ImageDiagnosis />} />
    </Routes>
  );
}

export default App;
