import React from "react";
import img from "../Images/logo.png"
export default function Navbar(){
    return(
        <div>
            <div className="main flex justify-between lg:justify-around md:justify-around items-center 
            py-5 px-5 lg:mb-28 md:mb-28 mb-10">
                {/* left */}
                <div className="left">
                    <div className="main-logo">
                        <img src={img} className="lg:w-44 md:w-44 w-28 "/>
                    </div>
                </div>

                   {/* right */}
                <div className="">
                    <div className="main flex items-center">
                       <div className="selector bg-[#111112] text-white mx-4 lg:px-5
                       md:px-5 px-3
                       py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 
                       hover:ring-gray-200 opacity-80">
                        <select name="" id="" className="cursor-pointer bg-transparent outline-none">
                            <option value="english">English</option>
                            <option value="Urdu">Urdu</option>
                        </select>
                       </div>
                       <button type="button" className="bg-[#e50815] hover:bg-[#d80c1a] text-white px-5 py-1.5
                       rounded-lg font-bold">
                        SignIn
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}