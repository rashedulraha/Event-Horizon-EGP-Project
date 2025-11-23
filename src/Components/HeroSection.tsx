import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Discover Events That <br /> Defy Expectations
        </h1>

        <p className="text-gray-300/60 mt-6 text-lg md:text-xl">
          Join the world&apos;s most innovative event platform. Find tech
          conferences, music festivals, and networking meetups tailored just for
          you.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:opacity-80 transition cursor-pointer">
            Explore Events →
          </button>

          <button className="border border-gray-700 px-6 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer">
            Create Account
          </button>
        </div>

        <div className="mt-20 max-w-4xl flex items-center justify-between ">
          <div>
            <h2
              className="font-bold text-white text-2xl
              ">
              50K+
            </h2>
            <span className="uppercase text-white/30">active user</span>
          </div>
          <div>
            <h2
              className="font-bold text-white text-2xl
              ">
              50K+
            </h2>
            <span className="uppercase tet- text-white/30">active user</span>
          </div>
          <div>
            <h2
              className="font-bold text-white text-2xl
              ">
              50K+
            </h2>
            <span className="uppercase text-white/30">active user</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
