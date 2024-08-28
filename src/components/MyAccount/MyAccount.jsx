import Image from "next/image";
import ChatGpt from "../../../public/images/chatGpt.png";
import huggingFace from "../../../public/images/huggingFace.png"

export default function MyAccount() {
    return (
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
            <div className="p-10 w-full">
                <h1 className="text-5xl font-sqrt-roman text-[#ADADAD]">My Account</h1>
                <hr className="w-full mt-10" />
                <div className="flex  my-[50px] gap-[100px] min-w-[1148px]">
                    <div className="flex-grow ">
                        <h3 className="text-[32px] font-sqrt-roman">Personal Info</h3>
                        <hr className="w-full mt-5" />
                        <div className="flex justify-between py-[30px] px-20 text-2xl font-sqrt-roman">
                            <span>Username</span>
                            <span>John Doe</span>
                            <button className="rounded-full border-[2px] px-4 py-2">Change</button>
                        </div>
                        <hr className="w-full mt-5" />
                        <div className="flex justify-between py-[30px] px-20 text-2xl font-sqrt-roman">
                            <span>Email</span>
                            <span>Johndoe@gmail.com</span>
                            <button className="rounded-full border-[2px] px-4 py-2">Change</button>
                        </div>
                        <hr className="w-full mt-5" />
                        <div className="flex justify-between py-[30px] px-20 text-2xl items-center font-sqrt-roman">
                            <span>Password</span>
                            <span className="flex">
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                                <span className="h-[15px] w-[15px] rounded-full bg-white"></span>
                            </span>
                            <button className="rounded-full border-[2px] px-4 py-2">Change</button>
                        </div>

                        {/* Your Subscription */}

                        <h3 className="text-[32px] font-sqrt-roman mt-[50px]">Your Subscriptions</h3>
                        <hr className="w-full mt-5" />
                        <div className="flex flex-col gap-4 py-[30px] px-20 text-2xl font-sqrt-roman">
                            <div className="flex gap-3 items-center">
                                <Image src={ChatGpt} width={58} height={58} alt="ChatGPT" />
                                <span>Chat GPT</span>
                            </div>
                            <div className="flex justify-between ">
                                <span>Free</span>
                                <span>Free</span>
                                <button className="rounded-full border-[2px] px-4 py-2">Cancel</button>
                            </div>
                        </div>
                        <hr className="w-full mt-5" />
                        <div className="flex flex-col gap-4 py-[30px] px-20 text-2xl font-sqrt-roman">
                            <div className="flex gap-3 items-center">
                                <Image src={huggingFace} width={58} height={58} alt="huggingFace" />
                                <span>Hugging Face</span>
                            </div>
                            <div className="flex justify-between ">
                                <span>Pro Plan</span>
                                <span>$9/Month</span>
                                <button className="rounded-full border-[2px] px-4 py-2">Cancel</button>
                            </div>
                        </div>

                        <hr className="w-full mt-5" />
                        <div className="flex flex-col gap-4 py-[30px] px-20 text-2xl font-sqrt-roman">
                            <div className="flex gap-3 items-center">
                                <Image src={huggingFace} width={58} height={58} alt="huggingFace" />
                                <span>IBM Watson</span>
                            </div>
                            <div className="flex justify-between ">
                                <span>Lite</span>
                                <span>Free</span>
                                <button className="rounded-full border-[2px] px-4 py-2">Cancel</button>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <h3 className="text-[32px] font-sqrt-roman mt-[50px]">Payment Method</h3>
                        <hr className="w-full mt-5" />
                        <div className="flex justify-around items-center py-[30px] pl-20 text-2xl font-sqrt-roman">
                            <span>MasterCard ending in  ****0000</span>
                            <button className="rounded-full border-[2px] px-4 py-2">Edit Payment Method</button>
                        </div>
                        <hr className="w-full mt-[22px]" />

                        <button className="rounded-full border-[2px] px-4 py-2 mt-5 text-2xl font-sqrt">Add Payment Method</button>

                    </div>


                    <div>
                        <span>Profile Picture</span>
                        <div className="h-[165px] w-[165px] bg-green-300 rounded-full mt-[21px]">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}