import Image from "next/image";

export default function SignupPage(){
    return(
        <div className="flex justify-around items-center h-screen">
            <div className="max-w-[663px] text-center flex justify-center items-center flex-col">
                <Image src="/images/fulllogo_whitetransparent.png" width={414} height={158} alt="Logo " />
                <span className="text-4xl  ">FIND THE AI TOOL YOU NEED</span>
            </div>
            <div className="flex gap-[15px] flex-col text-sm">
                <span className="text-xl mb-10">sign up</span>
                <div className="flex gap-5">
                    <input type="text" name="firstName" placeholder="First Name" className="rounded-full  py-5 px-10 bg-transparent border-[4px]"/>
                    <input type="text" name="lastName" placeholder="Last Name" className="rounded-full  py-5 px-10 bg-transparent border-[4px]" />
                </div>
                <input type="email" name="email" placeholder="Email" className="rounded-full border-[4px] w-full py-5 px-10 bg-transparent" />
                <input type="text" name="username" placeholder="Username" className="rounded-full border-[4px] w-full py-5 px-10 bg-transparent" />
                <input type="password" name="password" placeholder="Password" className="rounded-full border-[4px] w-full py-5 px-10 bg-transparent" />
                <button className="px-[15px] py-[7px] self-center rounded-full bg-green-400">Sign Up</button>
            </div>
        </div>
    )
}