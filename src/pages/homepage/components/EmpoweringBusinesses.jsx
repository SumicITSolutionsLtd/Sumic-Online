import React from 'react'
import "./empoweringBusinesses.css"
import BG from "../../../media/bg2.jpg"
import Wind from "../../../media/wind.jpg"

export default function EmpoweringBusinesses() {
  return (
    <div className="empowering_businesses py-10 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-800">
          Empowering businesses through global trade
        </h1>
        <p className="text-gray-600 mt-4">
          Sumic-online offers one-stop B2B trading solutions for global small and medium-sized businesses, 
          empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Mission Card */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src={BG}
            alt="Team working"
            className="eb_image w-full h-full object-cover"
          />
          <div className="eb_holder absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <p className="eb_title text-green-500 text-sm font-semibold">START TODAY</p>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Our team is ready to get you started.
                          </h2>
          </div>
        </div>

<div className='eb_right'>

        {/* Locations Card */}
        <div className="countris_support bg-gray-100 rounded-lg p-8 flex flex-col justify-between">
          <div>
            <p  className="eb_title text-green-500 text-sm font-semibold">OUR LOCATIONS</p>
            <h2 className="text-2xl font-bold text-brown-800 mt-2">
              Make it easy to do business anywhere.

            </h2>
          </div>
          <div className="mt-6 text-gray-700 text-sm leading-relaxed">
            <p>Hangzhou, China</p>
            <p>Tokyo, Japan</p>
            <p>Kampala, Uganda</p>
            <p>...our goal is expanding our services to reach many other locations worldwide.</p>
          </div>
        </div>

        {/* ESG Promises Card */}
        <div className="relative rounded-lg overflow-hidden shadow-md md:col-span-2">
          <img
            src={Wind}
            alt="Wind turbine"
            className="eb_image w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="eb_title text-green-500 text-sm font-semibold">OUR ESG PROMISES</p>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Responsible technology. Sustainable future.
            </h2>
          </div>
        </div>
      
      
</div>

      
      </div>

    </div>
  );
}
