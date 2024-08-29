import Image from "next/image";
import googleImage from "../../../public/images/google-icon.png"
import linkedInImage from "../../../public/images/linkedin-icon2.png"
import emailImage from "../../../public/images/email-icon.png"
import xImage from "../../../public/images/x-icon.png"
import facebookImage from "../../../public/images/facebook-icon.png"

export default function InviteFriend(){
    
    return(
        <dialog open={false} className="w-[1000px] z-10 mt-12  my-auto rounded-[73px] overflow-hidden text-white text-2xl bg-[#253579]" >
            <div className="flex justify-around  py-7">
                <span></span>
            <h1 className="text-3xl">Invite A Friend!</h1>
            <span>
            <span className=" inline-block h-6 w-[3px] rounded-lg rotate-45 bg-white"></span>
            <span className=" inline-block h-6 w-[3px] rounded-lg -rotate-45 bg-white"></span>
            </span>
            </div>
            <div className="bg-[#27377D] font-sqrt-roman text-center">
                <p className="text-2xl  px-[70px]  text-center pt-[50px]">
                    Know someone curious about AI? Share this website with your friends with your unique referral link
                </p>
                <div className="relative  max-w-2xl mx-auto mt-8    text-xl ">
                <input
                    type="text"
                    placeholder="https://lifstAIle.com/sib3302hb"
                    className="w-full py-5 px-6 text-white  bg-transparent border-2 border-white rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent"
                />
                <button className="absolute text-xl  right-1 top-1/2 transform -translate-y-1/2 bg-white text-black px-[19px] py-4 rounded-full hover:bg-gray-200">
                    Copy Link
                </button>
            </div>
                <span className="mt-[70px] block">Or share with</span>
                <div className="flex justify-center gap-5 font-sqrt-roman text-xl mt-16 mb-[100px]">

                <span className="flex gap-2 items-center  bg-green-300 py-[2px] pr-2 rounded-full">
                    <div className="w-[77px] h-[77px]">
                        <Image src={facebookImage} className=" object-contain" alt="Facebook" />
                    </div>
                    <span>Facebook</span>
                </span>

                <span className="flex gap-2 items-center  bg-green-300 py-[2px] pr-2 rounded-full">
                    <div className="w-[75px] h-[75px]">
                    <Image src={linkedInImage} alt="LinkedIn" />
                    </div>
                    <span>LinkedIn</span>
                </span>

                <span className="flex gap-2 items-center  bg-green-300 py-[2px] pr-2 rounded-full">
                    <div className="w-[70px] h-[70px]">
                        <Image src={emailImage} width={70} height={70} alt="Email" />
                    </div>
                    <span>Email</span>
                </span>
                <span className="flex gap-2 items-center  bg-green-300 py-[2px] pr-2 rounded-full">
                    <div className="w-[68px] h-[68px] bg-black flex justify-center items-center rounded-full">
                        <Image src={xImage} width={42} height={40} alt="X.com" />
                    </div>
                    <span>X.com</span>
                </span>

            </div>
            </div >
        </dialog>
        
    )
}