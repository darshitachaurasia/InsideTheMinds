import React from 'react';

const HeroSection = () => (
  <div className="p-10 mt-2">
    <div className="flex">
      <h1 className="text-7xl font-playfair font-extrabold pl-10">
        Tune into mental clarity.
      </h1>
    </div>

    <div className="flex flex-col pr-40 items-start pl-20 ">
      <h2 className="text-7xl font-extrabold font-playfair font-medium mt-5">
        Just <span className="italic">press play.</span>
      </h2>
      <p className="text-left text-xl font-weight-300 font-playfair font-normal p-4 mt-4 mb-4 leading-relaxed max-w-[66%]">
         Explore mind‑balancing insights, inspiring guest stories, and psychology‑backed tools to guide your wellness journey — one episode at a time.
          Each week, dive into real-life guest experiences—from mental health experts to resilience champions—to uncover practical tips and transformative strategies rooted in science and mindful living.
      </p>
      <button className="m-4 bg-pink-300 font-[Inter] font-weight-200 p-5 pl-10 pr-10 rounded">
        Watch Now
      </button>
    </div>
  </div>
);

export default HeroSection;
