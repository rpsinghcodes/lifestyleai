"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar.jsx";
import filter from "../../../../public/images/filter.svg";
import sort from "../../../../public/images/sort.svg";
import Pagination from "@/components/Pagination/Pagination";

import ToolCard from "@/components/ToolCard/ToolCard.jsx";
import baseData from "../../../../public/data/dataBase.json";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Filter from "@/components/Filter/Filter";
import Sort from "@/components/Sort/Sort";

export default function Categories({params}){
    const category = baseData.filter(tools => tools.category.includes(params.category))

    
    const [active, setActive] = useState("Price");
    const [filteredData, setFilteredData] = useState(category);
    const [searchQuery, setSearchQuery] = useState("");    
    const [displaySortBy, setDisplaySortBy] = useState(false)
    // for filtering the tools
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        handleSearch(searchQuery);
      }, [searchQuery]);


    function toggleActive(category){
        setActive(category)
    }

    function handleSearch(query) {
        if (query) {
          const lowerCaseQuery = query.toLowerCase();
          const filtered = category.filter((tool) =>
            tool.name.toLowerCase().includes(lowerCaseQuery)
          );
          setFilteredData(filtered);
        } else {
          setFilteredData(category);
        }
      }

    function sortBy(data) {
        setDisplaySortBy(false);
        console.log(data);

        // sortBy functionality based on the data
    }

    const dataPerPage = 9;

    const totalPage = Math.ceil(filteredData.length / dataPerPage);
    let currentPage = 1 || params.page

    if(Number(params.page) > 1) {
        currentPage = Number(params.page);
    }

    let offset = (currentPage -1) *  dataPerPage;

    const currentData = filteredData.slice(offset, currentPage * dataPerPage);

    // calculating page Number to show in pagination component
    let pageNumber = [];

    for (let i = currentPage -3; i<=currentPage+3; i++){ 
            if(i < 1) continue;                             
            if(i > totalPage) break;                        

        pageNumber.push(i);
    }


    function handleOnChange(e) {
        const searchValue = e.target.value.toLowerCase();
        setSearchQuery(searchValue);

        const filtered = baseData.filter(tool =>
        tool.name.toLowerCase().includes(searchValue)
        );

        setFilteredData(filtered);
        }
    
    return (
        <div className="">
            <Header />
            <SearchBar onChange={handleOnChange}/>
            <p className="px-20 mt-[75px]">Here are the top 3 AI tools based on your request. To further help choose the best tool for you we have collated comparisons based on the following;</p>
            <div className="py-10 flex justify-center items-center gap-[30px] text-sm font-sqrt-roman">
                <button className={`border-4 rounded-full py-2 px-3 ${active === "Price" && "bg-glow-light  border-glow-dark shadow-glow"} `} onClick={() => toggleActive("Price")}>Price</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Features" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Features")}>Features</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Reviews" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Reviews")}>Reviews</button>
            </div>
            <div className="flex gap-[15px]  laptop:gap-[6px] laptopSmall:gap-0 px-[67px] laptop:px-[12px] laptopSmall:px-0 items-stretch justify-center">
                <div>
                
                    <ToolCard {...baseData[0]}  />
                
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Free</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Plus</span>
                        <span className="text-base font-sqrt-roman" >$10/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Team</span>
                        <span className="text-base font-sqrt-roman" >$30/person/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise</span>
                        <span className="text-base font-sqrt-roman" >Contact Sales</span>
                </div>
                </div>


                <div className="border-l-2 border-gray-600" />
                <div>
                    <ToolCard {...baseData[1]} />
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Free</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Pro Plan</span>
                        <span className="text-base font-sqrt-roman" >$9/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise Plan</span>
                        <span className="text-base font-sqrt-roman" >Custom Pricing</span>
                    </div>
                </div>

                <div className="border-l-2 border-gray-600" />
                <div>
                   <ToolCard {...baseData[8]} />
                    <div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Lite</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Plus</span>
                        <span className="text-base font-sqrt-roman" >$140/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise</span>
                        <span className="text-base font-sqrt-roman" >Custom Pricing</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 mt-[30px] mb-[100px]">
                <p className="text-white text-xs">Find more AI tools</p>
                <div className="w-6 h-6 border-b-4 border-r-4 border-gray-400 transform rotate-45"></div>
            </div>
            <div className="flex justify-around items-center">
                <span></span>
                <span className="text-4xl laptopSmall:text-xl">AI Tools</span>
                <span className="flex gap-10">
                   <span className="px-3 py-[6px] border rounded-[17px] flex items-center text-xl laptopSmall:text-base font-sqrt-roman gap-[11px]">
                         <span>Filter</span>
                        <Image src={filter} alt="filter logo" className=" laptopSmall:size-8"  onClick={() => setIsFilterOpen(!isFilterOpen)} />
                        <Filter open={isFilterOpen} close={setIsFilterOpen} />
                    </span>
                   <span className="px-3 py-[6px] border rounded-[17px] flex items-center text-xl laptopSmall:text-base font-sqrt-roman gap-[11px]">
                    <span>Sort</span>
                    <Sort open={displaySortBy}  close={setDisplaySortBy} data={sortBy}/>
                    <Image src={sort} alt="filter logo" className=" laptopSmall:size-8" onClick={() => setDisplaySortBy(true)} />
                    </span>
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