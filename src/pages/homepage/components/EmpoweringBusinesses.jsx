import React from 'react'
import "./empoweringBusinesses.css"


export default function EmpoweringBusinesses() {
  return (
    <div className="bg-white py-10 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-800">
          Empowering businesses through global trade
        </h1>
        <p className="text-gray-600 mt-4">
          Alibaba.com offers one-stop B2B trading solutions for global small and medium-sized businesses, 
          empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Mission Card */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1598257006463-4f54b2b5d5f6?auto=format&fit=crop&w=1200&q=80"
            alt="Team working"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-orange-500 text-sm font-semibold">OUR MISSION</p>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Make it easy to do business anywhere.
            </h2>
          </div>
        </div>

        {/* Locations Card */}
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between">
          <div>
            <p className="text-orange-500 text-sm font-semibold">OUR LOCATIONS</p>
            <h2 className="text-2xl font-bold text-brown-800 mt-2">
              We have teams around the world.
            </h2>
          </div>
          <div className="mt-6 text-gray-700 text-sm leading-relaxed">
            <p>Hangzhou, China</p>
            <p>Paris, France</p>
            <p>Munich, Germany</p>
            <p>Tokyo, Japan</p>
            <p>Seoul, Korea</p>
            <p>London, UK</p>
            <p>New York, US</p>
            <p>... and many other locations worldwide.</p>
          </div>
        </div>

        {/* ESG Promises Card */}
        <div className="relative rounded-lg overflow-hidden shadow-md md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80"
            alt="Wind turbine"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-orange-500 text-sm font-semibold">OUR ESG PROMISES</p>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Responsible technology. Sustainable future.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
