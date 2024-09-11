import React from "react";

export default function Download() {
  return (
    <div>
      <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
       
        {/* left */}
        <div className="left order-last lg:order-first md:order-first">
          <video className="lg:w-[20em] md:w-[20em] w-[20em]" controls autoPlay muted>
            <source src="/Video/v2.mp4" type="Video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
         {/* right */}
         <div className="right mb-10 sm:mb-0">
          <h2 className="text-white lg:text-5xl md:text-5xl font-bold mb-5 text-center
           text-3xl sm:text-start">
            Download Your Shows <br className=""/>to Watch offline
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-center text-lg md:text-start">
           Save Your Favorites easily and always have <br/>
           something to watch
          </p>
        </div>
      </div>
      <div className="hr_line"/>
    </div>
  );
}
