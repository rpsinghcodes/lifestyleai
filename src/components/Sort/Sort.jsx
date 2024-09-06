"use client";
import { useState } from "react";

export default function Sort({open, close, data}) {
    const btnClass = "rounded-[82px] border-2 px-4 ";
    const initialData = {
        price:"",
        numberOfUser:"",
        rating:"",
        albhabet:"",
        time:"",
    }
    const [sortBy, setSortBy] = useState({
        price:"",
        numberOfUser:"",
        rating:"",
        albhabet:"",
        time:"",
    })

    function handleClick(column, type) {
        setSortBy(prevData => ({
            ...prevData,
            [column]: type,
        }))
    }
    return (
        <dialog open={open} className="min-w-[1000px] text-white rounded-[77px] overflow-hidden z-20">
            <div className="flex justify-around items-center  py-7 pricing-gradient">
                <span></span>
                <h1 className="text-3xl">Sort By</h1>
                <span className="relative inline-block w-6 h-6" onClick={() => close(false)}>
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg rotate-45 bg-white"></span>
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg -rotate-45 bg-white"></span>
                </span>

            </div>
            <div className="bg-[#116466] font-sqrt-roman text-2xl text-left py-[15px] px-[60px]">
                <h3 className="mb-[10px]">Price</h3>
                <div className="flex  gap-[30px]">
                    <button className={btnClass + `${sortBy.price === "low-to-high" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("price", "low-to-high")}>Low to High</button>
                    <button className={btnClass + `${sortBy.price === "high-to-low" && "bg-slate-500 border-slate-500"}`} onClick={() => handleClick("price", "high-to-low")}>High to Low</button>
                </div>
                <hr className="my-[10px]"/>
                <h3 className="mb-[10px]">Number of Users</h3>
                <div className="flex  gap-[30px]">
                    <button className={btnClass + ` ${sortBy.numberOfUser === "low-to-high" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("numberOfUser", "low-to-high")}>Low to High</button>
                    <button className={btnClass + ` ${sortBy.numberOfUser === "high-to-low" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("numberOfUser", "high-to-low")}>High to Low</button>
                </div>
                <hr className="my-[10px]" />
                <h3 className="mb-[10px]">Ratings</h3>
                <div className="flex  gap-[30px]">
                    <button className={btnClass + ` ${sortBy.rating === "low-to-high" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("rating", "low-to-high")}>Low to High</button>
                    <button className={btnClass + ` ${sortBy.rating === "high-to-low" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("rating", "high-to-low")}>High to Low</button>
                </div>
                <hr className="my-[10px]" />
                <h3 className="mb-[10px]">Alphabetical Order</h3>
                <div className="flex  gap-[30px]">
                    <button className={btnClass + ` ${sortBy.albhabet === "a-z" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("albhabet", "a-z")}>A-Z</button>
                    <button className={btnClass + ` ${sortBy.albhabet === "z-a" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("albhabet", "z-a")}>Z-A</button>
                </div>
                <hr className="my-[10px]" />
                <h3 className="mb-[10px]">Time</h3>
                <div className="flex  gap-[30px]">
                    <button className={btnClass + ` ${sortBy.time === "recent-to-oldest" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("time", "recent-to-oldest")}>Recent to Oldest</button>
                    <button className={btnClass + ` ${sortBy.time === "oldest-to-recent" && " bg-slate-500 border-slate-500"}`} onClick={() => handleClick("time", "oldest-to-recent")}>Oldest to Recent</button>
                </div>
                <hr className="my-[10px]" />
                <div className="flex justify-end  gap-[30px] my-7">
                    <button className={btnClass } onClick={() => setSortBy(initialData)} >Clear</button>
                    <button className={btnClass } onClick={() => data(sortBy)}>Done</button>
                </div>
            </div>
        </dialog>
    )
}