"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";
import star from "../../public/icons/star-filled.svg"
import unfilledStar from "../../public/icons/star-unfilled.svg"
import Footer from "@/components/Footer/Footer";
import ToolCard from "@/components/ToolCard/ToolCard";
import dataBase from "../../public/data/dataBase.json";
import Link from "next/link";
import { useState } from "react";

/*
Home Page of our Application
*/

export default function Home() {  
  const [sectionIsVisible, setSectionIsVisible] = useState(false) // Trending and ForYou  as well as footer section visiblity

  return (
    <>
   <Header />
   
   <section className={`text-white  `} >
    <div  className="flex  items-center justify-around ">
    <div className= " flex-1 px-24 laptop:px-12 laptopSmall:px-8">
      <div className="flex flex-col gap-11 justify-center items-center mt-8">
      <Image src="/images/fulllogo_whitetransparent.png" width={400} height={400} alt="Hero-Image" className="text-center" />
      <Link href="/tool-listing/1" className="relative w-[80%] ">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full py-4 px-6 text-white bg-transparent border-2 border-[#FFCB9A] rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent shadow-glow"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
          SEARCH
        </button>
      </Link>
      
    </div>
    </div>

    <div className="flex flex-col justify-center gap-y-12  px-24 laptopSmall:px-8 py-10 laptop:py-6 text-base laptop:text-xs  laptopSmall:text-[16px] ">   
 
      <div className=" text-center flex flex-col justify-center items-center mr-20 gap-4 laptopSmall:gap-1 border border-[#FFCB9A] shadow-glow rounded-[30px] px-6 laptopSmall:px-4 py-8 laptopSmall:py-6">
        <div className="flex bg-transparent">
          <Image src={star} height={28} width={28} alt="star-filled" />
          <Image src={star} height={28} width={28} alt="star-filled" />
          <Image src={star} height={28} width={28} alt="star-filled" />
          <Image src={star} height={28} width={28} alt="star-filled" />
          <Image src={unfilledStar} height={28} width={28} alt="star-filled" />
        </div>
        <p className="text-white text-wrap w-[300px]  ">“Never found an easier website to find and discover AI tools”</p>
        <span className="self-end">- John Doe</span>
      </div>


  <div className=" text-center flex flex-col justify-center items-center ml-20 gap-4 border border-[#FFCB9A] rounded-[30px] px-6 laptopSmall:px-4 py-8 laptopSmall:py-6 shadow-glow">
    <div className="flex bg-transparent">
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={unfilledStar} height={28} width={28} alt="star-filled" />
    </div>
    <p className="text-white w-[300px]">“intuitive user interface and very easy to navigate”</p>
    <span className="self-end">- John Doe</span>
  </div>



  <div className=" text-center flex flex-col justify-center items-center mr-20 gap-4 border border-[#FFCB9A] rounded-[30px] px-6 laptopSmall:px-4 py-8 laptopSmall:py-6 shadow-glow">
    <div className="flex bg-transparent">
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={star} height={28} width={28} alt="star-filled" />
      <Image src={unfilledStar} height={28} width={28} alt="star-filled" />
    </div>
    <p className="text-white w-[300px]">“Best website for everything AI”</p>
    <span className="self-end">- John Doe</span>
  </div>


      </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-10 laptopSmall:pb-5">
        <p>Find more AI tools</p>
        <Link href="#trending" className={`size-6 border-b-4 border-r-4 border-gray-400 transform my-6 ${sectionIsVisible ? "rotate-[225deg]" : "rotate-45"} `} onClick={() => setSectionIsVisible(!sectionIsVisible)} />
      </div>
   </section>

   {/* Trending and For you section */}
   {sectionIsVisible && <> <section className=" text-white py-4 px-10 mt-44 laptop:mt-36 laptopSmall:mt-20 mb-10">
      <div id="trending" className="flex justify-evenly items-center rounded-lg py-5 background-gradient-left-to-right  shadow-glow">
        <span className="text-3xl laptop:text-2xl laptopSmall:text-base  text-glow">Trending</span>
        <ToolCard imgUrl={dataBase[0]?.imgUrl} category={dataBase[0]?.category} rating={dataBase[0]?.rating} name={dataBase[0]?.name}  />
        <ToolCard imgUrl={dataBase[1]?.imgUrl} category={dataBase[1]?.category} rating={dataBase[1]?.rating} name={dataBase[1]?.name}  />
      </div>

      <div className="flex justify-evenly items-center  rounded-lg py-5 background-gradient-right-to-left my-10  shadow-glow">
        <ToolCard imgUrl={dataBase[2]?.imgUrl} category={dataBase[2]?.category} rating={dataBase[2]?.rating} name={dataBase[2]?.name}  />
        <ToolCard imgUrl={dataBase[3]?.imgUrl} category={dataBase[3]?.category} rating={dataBase[3]?.rating} name={dataBase[3]?.name}  />
        <span className="text-3xl laptop:text-2xl laptopSmall:text-base text-glow">For You</span>
      </div>
      <div className="flex justify-evenly items-center p-4 rounded-lg py-5 background-gradient-left-to-right  shadow-glow">
        <span className="text-3xl laptop:text-2xl laptopSmall:text-base text-glow">Featured</span>
        <ToolCard imgUrl={dataBase[4]?.imgUrl} category={dataBase[4]?.category} rating={dataBase[4]?.rating} name={dataBase[4]?.name}  />
        <ToolCard imgUrl={dataBase[5]?.imgUrl} category={dataBase[5]?.category} rating={dataBase[5]?.rating} name={dataBase[5]?.name}  />
      </div>

   </section>

   <Footer />
   </>

}
   </>
  );
}
