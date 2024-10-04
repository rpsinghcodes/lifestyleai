"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { useGlobalState } from "@/app/state/global-state";
import dataBase from "../../../public/data/dataBase.json";
import compareIcon from "../../../public/icons/compare-icon.svg";


/*

This is the common component in all the pages where we show the navigation and all stuff

*/

export default function Header() {

    const { setIsInviteOpen } = useGlobalState(); // managing gloabl state to toggle Invite dialog
    
    // Managing state for dropdown menu's
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [isComparisionDropdownOpen, setComparisionDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isUserLogedIn, setUserLogedIn] = useState(false);
    const dropdownRef = useRef(null);

    function toggleDropdown(){
        setIsDropdownOpen(!isDropdownOpen); 
      };
      
    function toggleComparisionDropdownOpen(){
        setComparisionDropdownOpen(!isComparisionDropdownOpen);
    }

    // my-account dropDown
    function toggleUserDropdown(){
        setUserDropdownOpen(prevData => !prevData)
    }

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setComparisionDropdownOpen(false);
        setUserDropdownOpen(false);
      }
    }

    useEffect(() => {
      // if user click outside then the dropdown menu will be closed 
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return <header ref={dropdownRef} className="header-gradient relative text-white flex items-center justify-between px-4 py-2 laptopSmall:px-2 ">        
        <Link href="/">
          <Image src="/images/applogo_whitetransparent.png"  height={30} width={30} alt="lifestalle-logo" className="laptopSmall:size-[25px]" />
        </Link>
                <nav className="flex  list-none gap-6 laptopSmall:text-[16px]">
            <li> <Link href="/"> HOME </Link></li>
            <li onClick={toggleDropdown} className="cursor-pointer relative" >AI News
              { isDropdownOpen && (
                <div className=" absolute left-[-80px] w-[280px] z-10  mt-6 bg-[#062829] text-white  p-2 rounded shadow-lg">
                  <ul className="text-center flex flex-col justify-center items-center">
                    <li className="p-2"> <Link href="/blog"> Blogs and Articles </Link></li>
                    <hr className="w-1/2 " />
                    <li className="p-2"><Link href="/video">Videos</Link></li>
                    <hr className="w-1/2 " />
                    <li className="p-2"><Link href="/faq">FAQs</Link></li>
                  </ul>
                </div>
              )}</li>
            <li><Link href="/categories">Categories </Link></li>
            <li className="relative cursor-pointer" onClick={toggleComparisionDropdownOpen}>Comparision{isComparisionDropdownOpen && <div className=" absolute    mt-6 bg-[#062829] z-10 text-white  p-2 rounded shadow-lg  px-6 rounded-b-[20px]">
                
                    <div className="flex gap-[15px] items-center justify-around font-sqrt-roman text-base laptop:text-sm ">                    
                      <div className="bg-white size-16 laptop:size-12 rounded-full flex  justify-center items-center overflow-hidden ">
                        <Image src={dataBase[0]?.imgUrl} height={40} width={40} alt={dataBase[0].name}  />
                      </div>                        
                        <span>{dataBase[0]?.name}</span>                        
                        <button className="size-[30px] laptop:size-[20px] rounded-full border-[3px] flex justify-center items-center text-center">-</button>
                      </div>

                      <hr className="my-[10px]" />

                      <div className="flex gap-[15px] items-center justify-around font-sqrt-roman text-base laptop:text-sm  ">                    
                        <div className="bg-white size-16 laptop:size-12 rounded-full flex  justify-center items-center overflow-hidden ">
                          <Image src={dataBase[1]?.imgUrl} height={40} width={40} alt={dataBase[1].name}  />
                        </div>                        
                        <span >{dataBase[1]?.name}</span>                        
                        <button className="size-[30px] laptop:size-[20px] rounded-full border-[3px] flex justify-center items-center text-center">-</button>
                      </div>

                      <hr className="my-[10px]" />

                      <Link href="/comparision" className="flex gap-[15px] items-center justify-center font-sqrt-roman text-base laptop:text-sm  ">                                              
                        <button className="size-[30px] laptop:size-[20px] rounded-full border-[3px] flex justify-center items-center text-center ">+</button>
                        <span>Add Tool</span>
                      </Link>

                      <hr className="my-[10px]" />
                      
                      <div className="flex gap-[15px] items-center justify-center font-sqrt-roman text-base laptop:text-sm  ">                                              
                        <button className="size-[30px] laptop:size-[20px] rounded-full border-[3px] flex justify-center items-center text-center">+</button>
                        <span>Add Tool</span>
                      </div>
                      <div className="flex justify-center my-6">
                        <Link href="/comparision" className="flex  items-center border-[3px] rounded-full px-4 py-2 text-white ">
                          <Image src={compareIcon} className="object-contain" alt="compare" />
                          <span>Compare</span>
                        </Link>
                      </div>
                </div>
                } 
                <span className="absolute size-[26px] rounded-full -right-[26px] -top-[8px]">2</span>
                 </li>
            <li onClick={() => setIsInviteOpen(true)} className=" cursor-pointer">Invite friend</li>
            
        </nav>
        
        <div className="flex items-center decoration gap-4">
          {isUserLogedIn ? <div className="flex items-center decoration gap-4">
            <span>john doe</span>
            <Image src='/images/Ellipse7.png' alt="ellise" width={50} height={50} />
          </div> : <Link href="/login"><span>Login/sign up</span></Link>}
          
        <div className="flex flex-col items-center justify-center relative" >
          <div onClick={toggleUserDropdown} className="flex flex-col items-center justify-center relative cursor-pointer">
            <span  className="h-[2px] w-[24px]  bg-white block cursor-pointer"></span>
            <span className="h-[2px] w-[24px] m-[4px] bg-white block cursor-pointer"></span>
            <span  className="h-[2px] w-[24px]  bg-white block cursor-pointer"></span>
          </div>
            {isUserDropdownOpen && <div className=" absolute right-[2px] top-3 w-[419px] laptopSmall:w-[320px]   z-10  mt-6  bg-[#062829] text-white  p-2 rounded shadow-lg">
          <ul className="flex flex-col px-[50px] laptopSmall:px-[40px] text-base laptopSmall:text-xs  ">
            <li className="p-2" onClick={toggleUserDropdown}> <Link href="/myAccount"> My Account </Link></li>
            <hr className="w-1/2 mx-auto " />
            <li className="p-2" onClick={toggleUserDropdown}><Link href="/myAccount/bookmark">Bookmarks</Link></li>
            <hr className="w-1/2 mx-auto " />
            <li className="p-2" onClick={toggleUserDropdown}><Link href="/myAccount/history">History</Link></li>
            <hr className="w-1/2 mx-auto " />
            <li className="p-2" onClick={toggleUserDropdown}><Link href="/submit-tool">Submit an AI Tool</Link></li>
            
          </ul>
        </div>
        }
        </div>
        </div>
        <div className="absolute top-full left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </header>
}