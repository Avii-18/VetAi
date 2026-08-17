import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-16 lg:px-28 py-12 transition-colors duration-300">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* About Section */}
        <div>
          <h2 className='text-2xl font-semibold text-emerald-500 dark:text-emerald-400 mb-4'>
            Vetaicare
          </h2>
          <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
            Your trusted partner in pet health. Compassionate, modern veterinary care tailored 
            to your furry family members. From wellness checkups to emergency care, we’re here for every wag and purr.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold text-emerald-500 dark:text-emerald-400 mb-4'>
            Quick Links
          </h3>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors'>Home</a></li>
            <li><a href="#" className='hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors'>Services</a></li>
            <li><a href="#" className='hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors'>About Us</a></li>
            <li><a href="#" className='hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors'>Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-xl font-semibold text-emerald-500 dark:text-emerald-400 mb-4'>Connect With Us</h3>
          <p className='text-sm mb-4 text-gray-600 dark:text-gray-400'>
            Follow us on social media for updates, tips & adorable pet moments!
          </p>
          <div className='flex space-x-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className='p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500 text-white transition'>
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className='p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500 text-white transition'>
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className='p-2 rounded-full bg-pink-500 hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-500 text-white transition'>
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className='border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500 dark:text-gray-400'>
        &copy; {new Date().getFullYear()} Vetaicare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
