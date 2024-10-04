import Header from "@/components/Header/Header";
import Image from "next/image";

export default function SignupPage(){
    const inputClass = "rounded-full  py-2 px-4 bg-transparent border-[4px]";
    return(
        <>
        <Header />
        <div className="flex justify-around items-center py-16">
            <div className="max-w-[500px] text-center flex justify-center items-center flex-col">
                <Image src="/images/fulllogo_whitetransparent.png" width={414} height={158} alt="Logo " />
                <span className="text-3xl  ">FIND THE AI TOOL YOU NEED</span>
            </div>
            <div className="flex gap-[15px] flex-col text-sm">
                <span className="text-lg mb-5">sign up</span>
                <div className="flex gap-5">
                    <input type="text" name="firstName" placeholder="First Name" className={inputClass}/>
                    <input type="text" name="lastName" placeholder="Last Name" className={inputClass} />
                </div>
                <input type="email" name="email" placeholder="Email" className={inputClass } />
                <input type="text" name="username" placeholder="Username" className={inputClass } />
                <input type="password" name="password" placeholder="Password" className={inputClass } />
                <button className="px-[15px] py-[7px] self-center rounded-full bg-green-400">Sign Up</button>
            </div>
        </div>
        </>
    )
}