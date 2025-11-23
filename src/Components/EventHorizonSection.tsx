import React from "react";
import { FaPeopleGroup, FaRegStar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const EventHorizonSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Event Horizon?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Seamlessly create, manage, and promote your events
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Scheduling */}
          <div className="  rounded-md p-8 transition-all duration-300 bg-[#18181b] ">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <SlCalender size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Smart Scheduling
            </h3>
            <p className="text-gray-300">
              Intelligent calendar management with automatic synchronization
              across devices and time zones
            </p>
          </div>

          {/* Community Building */}
          <div className="  rounded-md p-8 transition-all duration-300 bg-[#18181b]">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <FaPeopleGroup size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Community Building
            </h3>
            <p className="text-gray-300">
              Tools for audience growth and engagement before, during, and after
              your events
            </p>
          </div>

          {/* Immersive Analytics */}
          <div className="  rounded-md p-8 transition-all duration-300 bg-[#18181b]">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <FaRegStar size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Immersive Analytics
            </h3>
            <p className="text-gray-300">
              Real-time attendance, revenue, and analytics to optimize your
              success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHorizonSection;
