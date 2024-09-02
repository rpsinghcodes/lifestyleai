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
    // <div className="w-full p-4">
    //   {/* Tab Headers */}
    //   <div className="flex justify-center space-x-6 bg-[#116466] bg-gradient-to-r from-[#116466] via-[#0b3b4c] to-[#116466]">
    //     <div
    //       className={`${tabClasses} ${
    //         activeTab === "Features" ? activeTabClasses : ""
    //       }`}
    //       onClick={() => setActiveTab("Features")}
    //     >
    //       Features
    //     </div>
    //     <div
    //       className={`${tabClasses} ${
    //         activeTab === "Pricing" ? activeTabClasses : ""
    //       }`}
    //       onClick={() => setActiveTab("Pricing")}
    //     >
    //       Pricing
    //     </div>
    //     <div
    //       className={`${tabClasses} ${
    //         activeTab === "Pros & Cons" ? activeTabClasses : ""
    //       }`}
    //       onClick={() => setActiveTab("Pros & Cons")}
    //     >
    //       Pros & Cons
    //     </div>
    //     <div
    //       className={`${tabClasses} ${
    //         activeTab === "Reviews" ? activeTabClasses : ""
    //       }`}
    //       onClick={() => setActiveTab("Reviews")}
    //     >
    //       Reviews
    //     </div>
    //   </div>

    //   {/* Tab Content */}
    //   <div className="mt-6 text-white text-lg">
    //     {activeTab === "Features" && (
    //       <ul className="list-disc list-inside">
    //         <li>Generating content from scratch based on your keywords or prompts.</li>
    //         <li>Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</li>
    //         <li>Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</li>
    //         <li>Enhancing your texts with synonyms, adjectives, or metaphors to make them more expressive or persuasive.</li>
    //       </ul>
    //     )}
    //     {activeTab === "Pricing" && <div>Pricing content goes here...</div>}
    //     {activeTab === "Pros & Cons" && <div>Pros & Cons content goes here...</div>}
    //     {activeTab === "Reviews" && <div>Reviews content goes here...</div>}
    //   </div>
    // </div>
    <div>
        <div className=" font-sqrt-roman text-[32px] w-full flex ">
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
