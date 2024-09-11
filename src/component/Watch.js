import React from "react";

export default function Watch() {
  return (
    <div>
      <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
        {/* left */}
        <div className="left mb-10 sm:mb-0">
          <h2 className="text-white lg:text-5xl md:text-5xl font-bold mb-5 text-center text-3xl sm:text-start">
            Watch everywhere
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-center text-lg md:text-start">
            Watch on smart TVs, PlayStation, Xbox,
            <br className="hidden lg:block md:block sm:block" />
            Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>
        {/* right */}
        <div className="right">
          <video className="lg:w-[34em] md:w-[34em] w-[30em]" controls autoPlay muted>
            <source src="/Video/v4.mp4" type="Video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="hr_line"/>
    </div>
  );
}
