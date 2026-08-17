import React from 'react';
import { FaStethoscope, FaRegCalendarAlt, FaInfoCircle } from 'react-icons/fa'; // Added FaInfoCircle for the About section
import { IoPaw } from 'react-icons/io5';
import Card from '../components/Card';

const blogPosts = [
  {
    id: 1,
    heading: "How AI Is Transforming Veterinary Care",
    imgSrc: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=600&auto=format&fit=crop",
    paragraph: "AI-powered tools are revolutionizing diagnostics and treatment for pets, leading to faster, more accurate care. Discover the latest breakthroughs and how they're improving the lives of our furry friends.",
    date: "Aug 28, 2025",
    category: "AI & Tech" // Added a category for dynamic icons
  },
  {
    id: 2,
    heading: "Handling Last-Minute Pet Emergencies",
    imgSrc: "https://pawpal.uk/user/pages/08.blog/handling-last-minute-pet-care-emergencies-best-practices/handling-lastminute.webp",
    paragraph: "Best practices to handle unexpected pet care emergencies calmly and effectively. Learn what to do and how to prepare for the unexpected to ensure your pet's safety.",
    date: "Aug 25, 2025",
    category: "Pet Care"
  },
  {
    id: 3,
    heading: "Essential Vitamins for a Healthy Dog",
    imgSrc: "https://images.unsplash.com/photo-1543466835-f6c6509f6b9c?q=80&w=600&auto=format&fit=crop",
    paragraph: "A comprehensive guide to the essential vitamins your dog needs for optimal health, including sources and daily requirements. Keep your canine companion thriving!",
    date: "Aug 20, 2025",
    category: "Pet Health"
  },
];

const Blog = () => {
  const featuredPost = blogPosts[0]; 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-12">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/4839/4839-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/40 via-transparent to-teal-600/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            VetAI Blog
          </h1>
          <p className="text-white text-lg md:text-xl drop-shadow-sm">
            Stay updated on the latest AI innovations in veterinary care
          </p>
        </div>
      </section>

     
      <section className="relative mb-16 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="md:flex md:items-center">
          <div className="w-full md:w-2/3 h-64 md:h-[500px] overflow-hidden">
            <img
              src={featuredPost.imgSrc}
              alt={featuredPost.heading}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="w-full md:w-1/3 bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{featuredPost.heading}</h2>
            <p className="text-gray-600 text-lg mb-6">{featuredPost.paragraph}</p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <FaRegCalendarAlt className="mr-2" />
              <span>{featuredPost.date}</span>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 self-start">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to the VetAI Blog!
          </h3>
          <p className="text-gray-600 mb-4">
            Dive into the future of pet care. Our blog provides the latest insights
            and breakthroughs in veterinary AI, helping you provide the best possible
            care for your furry friends.
          </p>
          <div className="flex items-center text-teal-600 font-semibold">
            <FaInfoCircle className="mr-2 text-xl" />
            <span>Expert-written articles for pet lovers everywhere.</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Latest Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(({ id, heading, imgSrc, paragraph, date, category }) => {
            let icon;
            switch (category) {
              case "AI & Tech":
                icon = <FaStethoscope className="text-teal-600" />;
                break;
              case "Pet Care":
                icon = <IoPaw className="text-teal-600" />;
                break;
              case "Pet Health":
                icon = <IoPaw className="text-teal-600" />; 
                break;
              default:
                icon = <IoPaw className="text-teal-600" />;
            }
            return (
              <Card
                key={id}
                heading={heading}
                imgSrc={imgSrc}
                paragraph={paragraph}
                className="hover:shadow-2xl transition rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  {icon}
                  <span>{date}</span>
                </div>
                <button className="mt-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1 rounded-full font-semibold transition text-sm">
                  Read More
                </button>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-16 py-12 bg-gradient-to-r bg-amber-600 rounded-xl text-center text-white shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Explore VetAI Services</h3>
        <p className="mb-6 text-lg md:text-xl">Get personalized AI-powered insights for your pets today!</p>
        <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Blog;