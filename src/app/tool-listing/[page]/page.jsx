"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar.jsx";
import Pagination from "@/components/Pagination/Pagination";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Filter from "@/components/Filter/Filter";
import Sort from "@/components/Sort/Sort";
import ToolCard from "@/components/ToolCard/ToolCard.jsx";

import baseData from "../../../../public/data/dataBase.json";
import filter from "../../../../public/images/filter.svg";
import sort from "../../../../public/images/sort.svg";
import star from "../../../../public/icons/star-filled.svg";
import SortBy from "@/components/SortBy/SortBy";


export default function ToolListing({params}){
    const [active, setActive] = useState("Price");
    const [filteredData, setFilteredData] = useState(baseData);
    const [searchQuery, setSearchQuery] = useState("");
    const [displaySortBy, setDisplaySortBy] = useState(false);
    const [viewMore, setViewMore] = useState(false);

    

    // for filtering the tools
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        handleSearch(searchQuery);
      }, [searchQuery]);


    

    function handleSearch(query) {
        if (query) {
          const lowerCaseQuery = query.toLowerCase();
          const filtered = baseData.filter((tool) =>
            tool.name.toLowerCase().includes(lowerCaseQuery)
          );
          setFilteredData(filtered);
        } else {
          setFilteredData(baseData);
        }
      }

    function sortBy(data) {
        setDisplaySortBy(false);
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
        <div>
            <Header />
            <SearchBar onChange={handleOnChange}/>
            <p className="px-20 mt-[75px] text-center">Here are the top 3 AI tools based on your request. To further help choose the best tool for you we have collated comparisons based on the following;</p>
            <SortBy />
            <div className="flex flex-col items-center justify-center space-y-2 mt-[30px] mb-[100px]">
                <p className="text-white text-xs">Find more AI tools</p>
                <div className={`size-6 border-b-4 border-r-4 border-gray-400 transform my-2 ${viewMore ? "rotate-[225deg]" : "rotate-45"} `} onClick={() => setViewMore(!viewMore)}></div>
            </div>
            {viewMore && <><div className="flex justify-around items-center">
                <span></span>
                <span className="text-4xl laptop:text-3xl">AI Tools</span>
                <span className="flex gap-10">
                   <span className="px-3 py-[6px] border rounded-[17px] flex items-center text-xl laptop:text-base font-sqrt-roman gap-[11px]">
                        <span>Filter</span>
                        <Image src={filter} alt="filter logo" className="cursor-pointer"  onClick={() => setIsFilterOpen(!isFilterOpen)} />
                        <Filter open={isFilterOpen} close={setIsFilterOpen} />
                    </span>
                   <span className="px-3 py-[6px] border rounded-[17px] flex items-center text-xl laptop:text-base font-sqrt-roman gap-[11px]">
                    <span>Sort</span>
                    <Sort open={displaySortBy}  close={setDisplaySortBy} data={sortBy}/>
                    <Image src={sort} alt="filter logo" className="cursor-pointer" onClick={() => setDisplaySortBy(true)} />

                    </span>
                </span>
            </div>
            <div className="my-[52px] flex gap-10 laptop:gap-5  flex-wrap justify-center items-center">
                {currentData.map(tool => <ToolCard key={tool.name} {...tool} />)}
            </div>
            <Pagination currentPage={currentPage} totalPages={pageNumber} />
            <Footer />
            </>}
        </div>
    )
}