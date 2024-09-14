/*

This component display the review of a tool and is being used in the 'tool/[toolName]' route

*/

import Image from "next/image";
import star from "../../../public/icons/star-filled.svg";
import upArrow from "../../../public/images/up-arrow.svg";
import downArrow from "../../../public/images/down-arrow.svg";
export default function Review({rating=4}){
    return(
        <div className="py-14 flex flex-col gap-4 laptop:gap-2">
                <div className="flex gap-4 items-center ">
                    <div className="h-[68px] w-[68px] rounded-full border"></div>
                    <span className="text-base laptop:text-sm">John Doe</span>
                </div>
                <div className="flex items-center gap-9">
                    <span className="flex">
                        {Array(rating).fill().map((_, i) => (
                            <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow size-[38px] laptop:size-[28px]"/>
                        ))}
                    </span>
                    <span className="text-xl laptop:text-base">Everything works fine for me</span> 
                </div>
                <p className="text-base laptop:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className="text-base laptop:text-xs flex items-center justify-between">
                    <span>Posted on 6/25/2024</span>
                    <span className="h-[18px] w-1 bg-slate-700"></span>
                    <span>See Replies</span>
                    <span className="h-[18px] w-1 bg-slate-700"></span>
                    <span className="flex gap-3 items-center">
                        <Image src={upArrow} alt="Up arrow" />
                        <span>153</span>
                        <Image src={downArrow} alt="Down arrow" />
                        <span>14</span>
                        <button className="border rounded-[17px] px-4 py-1">Reply</button>

                    </span>
                </div>
            </div>
    )
}