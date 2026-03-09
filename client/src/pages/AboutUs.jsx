// pages/about-us.jsx or components/AboutUs.jsx
import React, { useEffect } from 'react';
import { Home, Users, Shield, Heart } from 'lucide-react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  const stats = [
    { value: '500K+', label: 'Happy Guests' },
    { value: '50K+', label: 'Properties' },
    { value: '100+', label: 'Countries' },
    { value: '4.8', label: 'Avg Rating' },
  ];

  const values = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Unique Stays',
      description: 'Every property on NestBNB is unique, offering experiences you won\'t find anywhere else.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'We believe in bringing people together and creating meaningful connections.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: 'Your safety is our priority with verified hosts and secure bookings.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Local Experiences',
      description: 'Live like a local with authentic accommodations and insider tips.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to NestBNB
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            We're on a mission to make the world more accessible and connected through unique stays and experiences.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2026, NestBNB started with a simple idea: what if you could feel at home anywhere in the world? Today, we're proud to be a global community of hosts and travelers who believe in the power of connection.
            </p>
            <p className="text-gray-600 mb-4">
              We've grown from a small startup to a worldwide platform, but our mission remains the same: to create a world where anyone can belong anywhere.
            </p>
            <p className="text-gray-600">
              Whether you're looking for a cozy cabin in the woods or a modern apartment in the heart of the city, NestBNB has the perfect place for your next adventure.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={assets.logo} 
              alt="logo" 
              className="w-1/2 rounded-full shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-teal-100 rounded-full text-teal-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;