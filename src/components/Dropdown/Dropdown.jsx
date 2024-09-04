import { useState } from "react";
import Link from "next/link";

export default function Dropdown(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    function toggleDropdown(){
        setIsDropdownOpen(!isDropdownOpen);
      };
    return(
        <div className="relative">
            <span className="relative" onClick={toggleDropdown}>AI News</span>
            {isDropdownOpen && <div className=" absolute left-[-80px] w-[280px] z-10  mt-6 bg-black text-white  p-2 rounded shadow-lg">
          <ul className="text-center flex flex-col justify-center items-center">
            <li className="p-2"> <Link href="/blog"> Blogs and Articles </Link></li>
            <hr className="w-1/2 " />
            <li className="p-2"><Link href="/video">Videos</Link></li>
            <hr className="w-1/2 " />
            <li className="p-2"><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>}
        </div>
    )
}