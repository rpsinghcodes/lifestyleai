import Header from "@/components/Header/Header";
import Image from "next/image";
import googleImage from "../../../public/images/google-icon.png"
import linkedInImage from "../../../public/images/linkedin-icon2.png"
import emailImage from "../../../public/images/email-icon.png"

export default function Login(){
    return(
        <>
            <Header />
            <div className="flex flex-col justify-center items-center my-20 w-[764px] mx-auto px-[77px] ">
            <Image src="/images/fulllogo_whitetransparent.png"  width={196} height={75} alt="logo" className="mb-5"/>
            <span className="text-4xl">Sign Up</span>

            <div className="flex gap-5 font-sqrt-roman text-xl mt-16">

                <span className="flex gap-2 items-center  bg-green-300 p-[2px] rounded-full">
                    <div className="w-[68px] h-[68px]">
                        <Image src={googleImage} className=" object-contain" alt="Google" />
                    </div>
                    <span>Google</span>
                </span>

                <span className="flex gap-2 items-center  bg-green-300 p-[2px] rounded-full">
                    <div className="w-[75px] h-[75px]">
                    <Image src={linkedInImage} alt="LinkedIn" />
                    </div>
                    <span>LinkedIn</span>
                </span>

                <span className="flex gap-2 items-center  bg-green-300 p-[2px] rounded-full">
                    <div className="w-[70px] h-[70px]">
                        <Image src={emailImage} width={70} height={70} alt="Email" />
                    </div>
                    <span>Email</span>
                </span>

            </div>

            <span className="text-3xl font-sqrt-roman mt-[60px] mb-[27px]">Already have an account?</span>
            <input type="email" name="email" placeholder="Email" className="rounded-full border-[4px] w-full py-5 px-10 bg-transparent mb-[15px] font-sqrt-roman text-xl" />
            <input type="text" name="username" placeholder="Username" className="rounded-full border-[4px] w-full py-5 px-10 bg-transparent font-sqrt-roman text-xl" />
            <button className="px-[15px] py-[7px] self-center rounded-full bg-green-400 my-[30px]">Login</button>
            <span className="text-2xl font-sqrt-roman ">                
                <u>Forgot Password</u> or <u> Forgot Username </u>
            </span>
            <span className="text-2xl font-sqrt-roman my-[60px] ">                
            Don’t have an account? <u> Click here  </u>
            </span>
            </div>
        </>
    )
}