/*

This component allow user to switch of different tabs 

*/

"use client"
import React, { useState } from "react";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import ProsAndCons from "../ProsAndCons/ProsAndCons";
import OverAllRating from "../OverAllRating/OverAllRating";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Features");

//   const tabClasses = "px-6 py-3 text-white cursor-pointer";
//   const activeTabClasses = "border-b-2 border-green-500 bg-transparent";

  return (
    <div>
        <div className=" font-sqrt-roman text-xl laptop:text-base w-full flex ">
            <span className="flex-1 text-center py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent" onClick={() => setActiveTab("Features")}>
              <span className={` ${activeTab === "Features" && "w-[90%] h-[90%] bg-black   p-3 rounded-r-lg rounded-l-lg mx-auto my-3"} `}>
                Features
              </span>
            </span>
            <span className="flex-1 text-center  py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent" onClick={() => setActiveTab("Pricing")}>
            <span className={` ${activeTab === "Pricing" && "w-[90%] h-[90%] bg-black   p-3 rounded-r-lg rounded-l-lg mx-auto my-3"} `}>
                Pricing
                </span>
            </span>
            <span className="flex-1 text-center  py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent" onClick={() => setActiveTab("Pros&Cons")}>
              <span className={` ${activeTab === "Pros&Cons" && "w-[90%] h-[90%] bg-black   p-3 rounded-r-lg rounded-l-lg mx-auto my-3"} `}>
              Pros & Cons
              </span>
            </span>
            <span className="flex-1 text-center  py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent" onClick={() => setActiveTab("Reviews")}>
              <span className={` ${activeTab === "Reviews" && "w-[90%] h-[90%] bg-black   p-3 rounded-r-lg rounded-l-lg mx-auto my-3"} `}>
              Reviews
              </span>
            </span>
        </div>

        {/* if user select features tab */}
        <section className="py-[75px]">
        {activeTab==="Features" && <Features />}

        {/* if user select pricing tab */}

       {activeTab==="Pricing" && <Pricing />}

        {/* if user select Pros and Cons tab */}
            { activeTab === "Pros&Cons" &&  <ProsAndCons />}

              {/* if user select Reviews */}
              {
                activeTab === "Reviews" && <OverAllRating />
              }
              </section>
    </div>
  )
}
