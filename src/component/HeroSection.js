import React from "react";
import Navbar from './Navbar'; // Ensure this path is correct
import img from '../Images/img.png'; // Ensure this path is correct

export default function HeroSection() {
    return (
        <>
        <div 
            className="lg:h-[44.5em] md:h-[44em] h-[34em] bg-cover bg-center"
            style={{
                background: `linear-gradient(80deg, black, transparent), url(${img})`,
              
                
            }}
        >
            <Navbar />
            <div className="container mx-auto flex justify-center items-center h-96">
                <div>
                    <h1 className="text-white text-center lg:text-5xl md:text-5xl text-3xl px-5
                     font-bold mb-5">The biggest Indians hits. The
                        best Indian Stories. All streaming
                        here.
                    </h1>
                    <p className="text-white text-center lg:text-2xl md
                    :text-2xl text-xl mb-5">
                        Watch anywhere. Cancel anytime.</p>
                    <p className="text-white text-center lg:text-xl
                    md:text-xl text-lg mb-5">Ready to Watch? Enter Your email to <br className="lg:hidden md:hidden sm:hidden"/>create or restart your 
                        memership.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <input type="text" className="bg-[#1d1e1e] text-white text-lg py-3 px-3
                        lg:w-96 md:w-96 w-80 rounded-md opacity-80 border border-gray-300 hover:ring-1
                        hover:ring-gray-50 outline-none mb-5 lg:mb-0 md:mb-0
                        " placeholder="Email address"/>
                        <button type="button" className="bg-[#e50815] flex items-center py-3 px-5 rounded-lg">
                            <p className="text-white font-bold text-lg gap-2">Get Started</p><i className="fa-solid fa-greater-than  text-white ml-2  
                        "></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="hr_line"/>
        </>

    );
}
