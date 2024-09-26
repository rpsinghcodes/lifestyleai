"use client"
import Image from "next/image";
import linkedInImage from "../../../public/images/linkedin-icon2.png"
import emailImage from "../../../public/images/email-icon.png"
import xImage from "../../../public/images/x-icon.png"
import facebookImage from "../../../public/images/facebook-icon.png"
import { useGlobalState } from "@/app/state/global-state";
import Link from "next/link";

/*

This component is used in header section to invite the the friends

*/

export default function InviteFriend(){
    const { isInviteOpen, setIsInviteOpen } = useGlobalState();    
    const socialIconsClass = "flex gap-2 items-center  py-[2px] pr-2 rounded-full invite-gradient"
    return(
        <dialog open={isInviteOpen} className="w-[1000px] laptopSmall:w-[850px] z-40 mt-12  my-auto rounded-[73px] overflow-hidden text-white text-base bg-[#116466]">
            <div className="flex justify-around  py-7">
                <span></span>
            <h1 className="text-lg laptop:text-base laptopSmall:text-sm">Invite Friend!</h1>
            <span onClick={() => setIsInviteOpen(false)} className="relative inline-block w-6 h-6 cursor-pointer">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg rotate-45 bg-white"></span>
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg -rotate-45 bg-white"></span>
            </span>

            </div>
            <div className="bg-[#062829] font-sqrt-roman text-center pb-16">
                <p className="text-base laptop:text-sm laptopSmall:text-xs  px-[70px]  text-center pt-[50px]">
                    Know someone curious about AI? Share this website with your friends with your unique referral link
                </p>
                <div className="relative  max-w-2xl laptop:max-w-lg mx-auto mt-8    text-sm laptop:text-xs ">
                <input
                    type="text"
                    placeholder="https://lifstAIle.com/sib3302hb"
                    className="w-full py-5 laptop:py-3 px-6 text-white  bg-transparent border-2 border-white rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent"
                />
                <button className="absolute text-sm laptop:text-xs  right-1 top-1/2 transform -translate-y-1/2 bg-white text-black px-[19px] laptop:px-[12px] py-4 laptop:py-2 rounded-full hover:bg-gray-200">
                    Copy Link
                </button>
            </div>
                <span className="mt-[70px] block">Or share with</span>
                <div className="flex justify-center gap-5 font-sqrt-roman text-sm mt-16 mb-[100px]">

                <span className={socialIconsClass}>
                    <div className="w-[77px] h-[77px]">
                        <Image src={facebookImage} className=" object-contain" alt="Facebook" />
                    </div>
                    <Link href="#insert-url-here" target="_blank">Facebook</Link>
                </span>

                <span className={socialIconsClass}>
                    <div className="w-[75px] h-[75px]">
                    <Image src={linkedInImage} alt="LinkedIn" />
                    </div>
                    <Link href="#insert-url-here" target="_blank">LinkedIn</Link>
                </span>

                <span className={socialIconsClass}>
                    <div className="w-[70px] h-[70px]">
                        <Image src={emailImage} width={70} height={70} alt="Email" />
                    </div>
                    <Link href="#insert-url-here" target="_blank">Email</Link>
                </span>
                <span className={socialIconsClass}>
                    <div className="w-[68px] h-[68px] bg-black flex justify-center items-center rounded-full">
                        <Image src={xImage} width={42} height={40} alt="X.com" />
                    </div>
                    <Link href="#insert-url-here" target="_blank">X.com</Link>
                </span>

            </div>
            </div >
        </dialog>
        
    )
}