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
    const socialIconClass = "size-[20px] laptopSmall:size-[18px]"
    return <footer className="flex items-center justify-between px-2 text-white footer-gradient py-8 font-sqrt-roman">
        <div className="flex items-center gap-6">
            <div className=" rounded-full">
                <Image src={logo}  alt="logo" className="size-[46px] laptopSmall:size-[36px]" />
            </div>
            <Image src={heroIcon} height={47} width={135} alt="logo"  className="h-[47px] w-[135px] laptopSmall:h-[37px] laptopSmall:w-[125px]" />
            <p className="w-[504px] text-sm laptop:text-xs laptopSmall:text-[16px] ml-[75px]">Empowering users with the best AI tools and resources, curated for everyday needs. LifestAile, AI for a more productive You</p>
        </div>
        <div className="flex flex-col justify-evenly grow items-center gap-4">
            <span className="text-base laptop:text-sm laptopSmall:text-[16px]">Contact Us</span>
            <div className="flex gap-8">
                <Link href="#lj"><Image src={mailIcon} alt="logo" className={socialIconClass} /></Link>
                <Link href="#lj"><Image src={xIcon} alt="logo" className={socialIconClass} /></Link>
                <Link href="#lj"><Image src={instaIcon} alt="logo" className={socialIconClass} /></Link>
                <Link href="#lj"><Image src={tiktok} alt="logo" className={socialIconClass} /></Link>
                <Link href="#lj"><Image src={linkedIn} alt="logo" className={socialIconClass} /></Link>    
            
            
            
            </div>
        </div>
    </footer>
}