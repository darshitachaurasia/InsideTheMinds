import React from 'react';

const HeroSection = () => (
  <div className="p-6 sm:p-10 md:p-20 ">
  <div className="flex">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-extrabold pl-0 sm:pl-10">
      Tune into mental clarity.
    </h1>
  </div>

  <div className="flex flex-col pr-0 sm:pr-10 md:pr-40 items-start pl-0 sm:pl-10 md:pl-20">
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-medium mt-5">
      Just <span className="italic">press play.</span>
    </h2>
    <p className=" text-left text-base sm:text-lg md:text-xl font-playfair font-normal p-2 sm:p-4 mt-4 mb-4 leading-relaxed max-w-full sm:max-w-[80%] md:max-w-[66%]">
           Explore mind‑balancing insights, inspiring guest stories, and psychology‑backed tools to guide your wellness journey — one episode at a time.
          Each week, dive into real-life guest experiences—from mental health experts to resilience champions—to uncover practical tips and transformative strategies rooted in science and mindful living.
    </p>
    <button className="m-4 bg-pink-300 font-[Inter] font-light py-2 px-4 md:py-3 md:px-8 rounded hover:text-2xl hover:bg-black hover hover:text-white">
      Watch Now
    </button>
  </div>
</div>

);

export default HeroSection;
