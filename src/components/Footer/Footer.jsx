import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/applogo_whitetransparent.png"
import heroIcon from "../../../public/images/fulllogo_whitetransparent.png"
import mailIcon from "../../../public/images/mail-icon.png";
import xIcon from "../../../public/images/x-icon.png";
import instaIcon from "../../../public/images/insta-icon.png";
import tiktok from "../../../public/images/TikTok-icon.png";
import linkedIn from "../../../public/images/linkedin-icon.png";

/*

This component is widely used in all the pages 

*/

export default function Footer(){
    return <footer className="flex items-center justify-between px-2 text-white footer-gradient py-8 font-sqrt-roman">
        <div className="flex items-center gap-6">
            <div className=" rounded-full">
                <Image src={logo} height={46} width={46} alt="logo" />
            </div>
            <Image src={heroIcon} height={47} width={135} alt="logo" />
            <p className="w-[504px] text-sm laptop:text-xs ml-[75px]">Empowering users with the best AI tools and resources, curated for everyday needs. LifestAile, AI for a more productive You</p>
        </div>
        <div className="flex flex-col justify-evenly grow items-center gap-4">
            <span className="text-base laptop:text-sm">Contact Us</span>
            <div className="flex gap-8">
                <Link href="#lj"><Image src={mailIcon} height={20} width={20} alt="logo" /></Link>
                <Link href="#lj"><Image src={xIcon} height={20} width={20} alt="logo" /></Link>
                <Link href="#lj"><Image src={instaIcon} height={20} width={20} alt="logo" /></Link>
                <Link href="#lj"><Image src={tiktok} height={20} width={20} alt="logo" /></Link>
                <Link href="#lj"><Image src={linkedIn} height={20} width={20} alt="logo" /></Link>    
            
            
            
            </div>
        </div>
    </footer>
}