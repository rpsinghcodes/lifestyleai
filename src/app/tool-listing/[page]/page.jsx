"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar.jsx";
import filter from "../../../../public/images/filter.svg";
import sort from "../../../../public/images/sort.svg";
import Pagination from "@/components/Pagination/Pagination";

import ToolCard from "@/components/ToolCard/ToolCard.jsx";
import baseData from "../../../../public/data/dataBase.json";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ToolListing({params}){
    console.log(params.page);
    const [active, setActive] = useState("Price") 

    function toggleActive(category){
        setActive(category)
    }
    const dataPerPage = 9;

    const totalPage = Math.ceil(baseData.length / dataPerPage);
    let currentPage = 1 || params.page

    if(Number(params.page) > 1) {
        currentPage = Number(params.page);
    }

    let offset = (currentPage -1) *  dataPerPage;

    const currentData = baseData.slice(offset, currentPage * dataPerPage);

    // calculating page Number to show in pagination component
    let pageNumber = [];

    for (let i = currentPage -3; i<=currentPage+3; i++){ //  i = 2; i <=4; i++
        if(i < 1) continue;                             // 2<1  false
        if(i > totalPage) break;                        // 2>1  true

        pageNumber.push(i);
    }

    console.log('pageNumber: ', pageNumber);
    
    return (
        <div className="">
            <Header />
            <SearchBar />
            <p className="px-20 mt-[75px]">Here are the top 3 AI tools based on your request. To further help choose the best tool for you we have collated comparisons based on the following;</p>
            <div className="py-10 flex justify-center items-center gap-[30px] text-xl font-sqrt-roman">
                <button className={`border-4 rounded-full py-2 px-3 ${active === "Price" && "bg-glow-light  border-glow-dark shadow-glow"} `} onClick={() => toggleActive("Price")}>Price</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Features" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Features")}>Features</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Reviews" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Reviews")}>Reviews</button>
            </div>
            <div className="flex gap-[15px] px-[67px] items-stretch justify-center">
                <div>
                    <ToolCard {...baseData[0]} />
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-[32px] font-sqrt-roman">Free</span>
                        <span className="text-2xl font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Plus</span>
                        <span className="text-2xl font-sqrt-roman" >$10/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Team</span>
                        <span className="text-2xl font-sqrt-roman" >$30/person/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Enterprise</span>
                        <span className="text-2xl font-sqrt-roman" >Contact Sales</span>
                    </div>
                </div>


                <div class="border-l-2 border-gray-600"></div>
                <div>
                    <ToolCard {...baseData[1]} />
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-[32px] font-sqrt-roman">Free</span>
                        <span className="text-2xl font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Pro Plan</span>
                        <span className="text-2xl font-sqrt-roman" >$9/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Enterprise Plan</span>
                        <span className="text-2xl font-sqrt-roman" >Custom Pricing</span>
                    </div>
                </div>

                <div class="border-l-2 border-gray-600"></div>
                <div>
                   <ToolCard {...baseData[2]} />
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-[32px] font-sqrt-roman">Lite</span>
                        <span className="text-2xl font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Plus</span>
                        <span className="text-2xl font-sqrt-roman" >$140/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-[32px] font-sqrt-roman">Enterprise</span>
                        <span className="text-2xl font-sqrt-roman" >Custom Pricing</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center space-y-2 mt-[30px] mb-[100px]">
                <p class="text-white text-lg">Find more AI tools</p>
                <div class="w-6 h-6 border-b-4 border-r-4 border-gray-400 transform rotate-45"></div>
            </div>
            <div className="flex justify-around items-center">
                <span></span>
                <span className="text-[64px]">AI Tools</span>
                <span className="flex gap-10">
                   <button className="px-3 py-[6px] border rounded-[17px] flex items-center text-[32px] font-sqrt-roman gap-[11px]">
                        <span>Filter</span>
                        <Image src={filter} alt="filter logo" />
                    </button>
                   <button className="px-3 py-[6px] border rounded-[17px] flex items-center text-[32px] font-sqrt-roman gap-[11px]">
                    <span>Sort</span>
                    <Image src={sort} alt="filter logo" />
                    </button>
                </span>
            </div>
            <div className="my-[52px] flex gap-10  flex-wrap justify-center items-center">
                {currentData.map(tool => <ToolCard key={tool.name} {...tool} />)}
            </div>
            <Pagination currentPage={currentPage} totalPages={pageNumber} />
            <Footer />
        </div>
    )
}