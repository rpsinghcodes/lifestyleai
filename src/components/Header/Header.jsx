"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link";
// import logo from "/images/applogo_whitetransparent.png"
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isComparisionDropdownOpen, setComparisionDropdownOpen] = useState(false);
    function toggleDropdown(){
        setIsDropdownOpen(!isDropdownOpen);
      };
    function toggleComparisionDropdownOpen(){
        setComparisionDropdownOpen(!isComparisionDropdownOpen);
    }
    return <header className="bg-[#000000] relative  text-white flex items-center justify-between p-4">        
    <div className="glow-effect">
        <Image src="/images/applogo_whitetransparent.png"  height={46} width={46} alt="lifestalle-logo" />
        </div>
                <nav className="flex  list-none gap-6">
            <li> <Link href="/"> HOME </Link></li>
            <li id="dropdownButton" onClick={toggleDropdown} className="cursor-pointer relative" >AI News{isDropdownOpen && <div className=" absolute left-[-80px] w-[280px] z-10  mt-6 bg-black text-white  p-2 rounded shadow-lg">
          <ul className="text-center flex flex-col justify-center items-center">
            <li className="p-2"> <Link href="/blog"> Blogs and Articles </Link></li>
            <hr className="w-1/2 " />
            <li className="p-2"><Link href="/video">Videos</Link></li>
            <hr className="w-1/2 " />
            <li className="p-2"><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>}</li>
            <li>Categories</li>
            <li className="relative cursor-pointer" onClick={toggleComparisionDropdownOpen}>Comparision Tool {isComparisionDropdownOpen && <div className=" absolute    mt-6 bg-black text-white  p-2 rounded shadow-lg">
                <div>
                    <button>Add Tool</button>
                </div>
                </div>} </li>
            <li>Invite a friend</li>
            
        </nav>
        
        
        <div className="flex items-center decoration gap-4">
            <span>john doe</span>
            <Image src='/images/Ellipse7.png' alt="ellise" width={50} height={50} />
        <div className="flex flex-col items-center justify-center">
            <span className="h-[2px] w-[24px]  bg-white block"></span>
            <span className="h-[2px] w-[24px] m-[4px] bg-white block"></span>
            <span className="h-[2px] w-[24px]  bg-white block"></span>
        </div>
        </div>
        <div className="absolute top-full left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </header>
}