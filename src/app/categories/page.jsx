"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import categoriesData from "../../../public/data/categories.json";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import Link from "next/link";


/*

In this page the categories are listed which can redirect us to an individual page for category at '/categories' route

*/


export default function Categories(){

  const [categories, setCategories] = useState(categoriesData) // updating categories dynamically for design purpose

  // to arrange data visually good i.e first 3 row and then 4 row and so on..
  let groupedCategories = []
  let i = 0;
  while (i < categories.length) {
    if ((groupedCategories.length + 1) % 2 !== 0) {
      // Odd-indexed rows: 3 items
      groupedCategories.push(categories.slice(i, i + 3));
      i += 3;
    } else {
      // Even-indexed rows: 4 items
      groupedCategories.push(categories.slice(i, i + 4));
      i += 4;
    }
  }

    //  search bar functionality
    function handleChange(event) {
      // update ui according 
      const lowerCaseQuery = (event.target.value).toLowerCase();
      
      if(lowerCaseQuery) {
        let filteredCategories = categories.filter(toolCategory => toolCategory.toLowerCase().includes(lowerCaseQuery))
        setCategories(filteredCategories)
      }else {
        setCategories(categoriesData)
      }
    }
    return<>
    <Header />
    <section className="flex flex-col justify-center items-center py-[75px]  gap-12">
    <h1 className="text-3xl laptop:text-2xl laptopSmall:text-xl text-glow">Categories</h1>
    <SearchBar onChange={handleChange} />
    <div className="flex flex-col items-center justify-center gap-14 laptop:gap-10 w-full px-[100px] laptop:px-[50px] text-center text-base laptop:text-sm ">
        {groupedCategories.map((row, rowIndex) => (
          <ol
            key={rowIndex}
            className={`grid ${row.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-24 laptop:gap-12 items-center `}
          >
            {row.map((category, index) => (
              <li key={index} className="category-item text-white border rounded-[30px] w-[326px] laptop:w-[226px] py-[25px] laptop:py-[15px] px-3 shadow-glow">
                <Link href={`/categories/${category}`}>{category}</Link>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </section>
    <Footer />
    </>
}