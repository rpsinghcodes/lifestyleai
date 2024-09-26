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
  const [activeTab, setActiveTab] = useState("Features"); // toggling the tabs

  const tabClasses = "flex-1 text-center  py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent";
  const activeTabClasses = "w-[90%] h-[90%] bg-black   p-3 rounded-r-lg rounded-l-lg mx-auto my-3";

  return (
    <div>
        <div className=" font-sqrt-roman text-xl laptop:text-base laptopSmall:text-xs w-full flex ">
            <span className="flex-1 text-center py-4 px-[50px] bg-gradient-to-b from-[rgba(17,100,102,0.5)] to-transparent" onClick={() => setActiveTab("Features")}>
              <span className={` ${activeTab === "Features" && activeTabClasses} `}>
                Features
              </span>
            </span>
            <span className={tabClasses} onClick={() => setActiveTab("Pricing")}>
            <span className={` ${activeTab === "Pricing" && activeTabClasses} `}>
                Pricing
                </span>
            </span>
            <span className={tabClasses} onClick={() => setActiveTab("Pros&Cons")}>
              <span className={` ${activeTab === "Pros&Cons" && "w-[90%] h-[90%] bg-black   p-3 laptopSmall:p-1 rounded-r-lg rounded-l-lg mx-auto my-3"} `}>
              Pros & Cons
              </span>
            </span>
            <span className={tabClasses} onClick={() => setActiveTab("Reviews")}>
              <span className={` ${activeTab === "Reviews" && activeTabClasses} `}>
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
