import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const page2Ref = useRef(null);

  const ImageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  const diseaseData = [
    {
      species: "Dog",
      name: "Canine Distemper",
      image:
        "https://www.petmd.com/sites/default/files/styles/article_image/public/2021-11/canine-distemper.jpg",
    },
    {
      species: "Dog",
      name: "Parvovirus (Parvo)",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Puppy-with-Parvovirus-500x271.jpg",
    },
    {
      species: "Dog",
      name: "Kennel Cough",
      image:
        "https://www.thesprucepets.com/thmb/xq6CylRC25d9JXef1hzVEyUQjpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dog-with-kennel-cough-4796822-hero-6462f16d8aa740e8af25e84ec63dff5a.jpg",
    },
    // cats
    {
      species: "Cat",
      name: "Feline Leukemia Virus (FeLV)",
      image:
        "https://www.thesprucepets.com/thmb/Q84pgdoaDIZ4NvLBwqD1x1gT0tA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/cat-with-feline-leukemia-4796825-hero-64fa61d7d39441f88a0d6b1e8f26b59b.jpg",
    },
    {
      species: "Cat",
      name: "Feline Immunodeficiency Virus (FIV)",
      image: "https://www.catster.com/wp-content/uploads/2021/06/sick-cat-fiv.jpg",
    },
    {
      species: "Cat",
      name: "Feline Dental Disease",
      image:
        "https://vcahospitals.com/-/media/vca/images/lifelearn-images-foldered/dental-disease-cat.jpg",
    },
  ];
  const [selectedDisease, setSelectedDisease] = useState(diseaseData[0]);
  // 👉 Image scroll animation
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 30%',
        end: 'top -70%',
        pin: true,
        markers: true,
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(
            ImageArray.length - 1,
            Math.floor(self.progress * ImageArray.length)
          );
          if (imageRef.current) {
            imageRef.current.src = ImageArray[index];
          }
        },
      },
    });
  }, []);

  // 👉 Team list animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate team items
      gsap.from(".team-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: page2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate background color + text color
      gsap.to(page2Ref.current, {
        backgroundColor: "black",
        color: "#fff",
        scrollTrigger: {
          trigger: page2Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate borders & text to white
      gsap.to(".team-item", {
        borderColor: "#fff",
        color: "#fff",
        scrollTrigger: {
          trigger: page2Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }, page2Ref);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Section 1 with Image Scroll */}
      <div className='section-1'>
        <div
          ref={imageDivRef}
          className='h-[20vw] w-[15vw] rounded-3xl overflow-hidden top-60 absolute left-[30vw]'
        >
          <img
            ref={imageRef}
            className='h-full w-full object-cover'
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="scrolling face"
          />
        </div>

        <div className='relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] uppercase leading-[17vw] text-center'>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className='pl-[50%] mt-20'>
            <p className="text-2xl font-bold">
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner...
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="section-2 h-screen flex items-start justify-start pl-20 pt-50">
        <div className="flex gap-32 mt-12 w-screen px-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expertise</h2>
          </div>
          <div>
            <ul className="text-2xl flex flex-col font-semibold gap-1">
              <li>Strategy</li>
              <li>Advertising</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Culture/Creative Section */}
      <div className="w-full px-20 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-lg font-semibold leading-relaxed">
              <span className="font-bold">Our Work_ </span>
              Born in curiosity, raised by dedication and fed with a steady diet of creativity.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold leading-relaxed">
              <span className="font-bold">Our Creative_ </span>
              Simmering in an environment where talent can come to a full boil...
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold leading-relaxed">
              <span className="font-bold">Our Culture_ </span>
              We’re open to each other. Period...
            </p>
          </div>
        </div>
      </div>

      {/* Team List Section */}
      <div
        ref={page2Ref}
        className="page2 w-screen min-h-screen flex flex-col md:flex-row justify-center items-start gap-12 bg-gray-100 px-10 py-20"
      >
        {/* Image Card */}
        <div className="w-[350px] h-[500px] rounded-xl overflow-hidden shadow-xl">
          <img
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            src={selectedDisease.image}
            alt={selectedDisease.name}
          />
        </div>

        {/* Team List */}
        <ul className="divide-y divide-gray-400 w-full max-w-3xl">
          {diseaseData.map((disease, i) => (
            <li
              key={i}
              onClick={() => setSelectedDisease(disease)}
              className={`flex justify-between px-6 py-4 border-t border-b border-gray-300 cursor-pointer transition-all duration-300
              ${selectedDisease.name === disease.name
                  ? " text-white "
                  : "hover:bg-amber-600 hover:text-white"
                }`}
            >
              <span className="font-medium text-xl">{disease.species}</span>
              <span className="font-bold text-lg">{disease.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="w-full py-16 px-10 flex justify-center gap-10">
          <div className="w-96 h-64 overflow-hidden rounded-xl shadow-lg">
            <img className="w-full h-full object-cover" src="before.jpg" alt="Before Treatment" />
          </div>
          <div className="w-96 h-64 overflow-hidden rounded-xl shadow-lg">
            <img className="w-full h-full object-cover" src="after.jpg" alt="After Treatment" />
          </div>
        </div>
      </div>
      <div className="p-10 md:p-20 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="font-extrabold text-4xl md:text-6xl mb-2 text-gray-900 relative">
          Requirements
          <span className="absolute bottom-0 left-0 w-20 h-1  rounded-full mt-2"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl leading-relaxed animate-fadeIn">
          At the client’s request, the platform was designed to support diverse veterinary needs while ensuring compliance with leading standards and AI-powered precision.
        </p>
      </div>
      <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between items-stretch gap-4">
        <div className="border border-gray-300 p-6 text-lg md:text-xl rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex-1">
          <p>
            Support small, large, exotic, and research animals with flexible, multi-field case management.
          </p>
        </div>
        <div className="border border-gray-300 p-6 text-lg md:text-xl rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex-1">
          <p>
            Quickly capture and retrieve patient data, with AI highlighting critical details and history.
          </p>
        </div>
      </div>
      <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between items-stretch gap-8">
        <div className="border border-gray-300 p-6 text-lg md:text-xl rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex-1">
          <p>
            Monitor vitals in real time with AI-powered alerts and display color-coded dynamic charts.
          </p>
        </div>
        <div className="border border-gray-300 p-6 text-lg md:text-xl rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex-1">
          <p>
            Calculate precise medication dosages using AI, factoring in weight, history, labs, and risks.
          </p>
        </div>
      </div>
    </div>
  ); 
};

export default About;
