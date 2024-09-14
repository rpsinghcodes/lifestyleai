import Image from "next/image";
import star from "../../../public/icons/star-filled.svg";
import Review from "../Review/Review";

/*

This component allow us to see the overall rating of a tool

*/

export default function OverAllRating({rating=5}){
    return (
        <div className="flex px-24 gap-28 font-sqrt-roman items-center">
            <div className="flex flex-col justify-center items-center  pricing-gradient shadow-2xl rounded-[60px] py-7 px-6">
                <span className="text-xl laptop:text-lg">Overall Rating</span>
                    <span className="flex">
                    {Array(rating).fill().map((_, i) => (
                <Image key={i} src={star} alt="star-filled"   className="text-glow size-[38px] laptop:size-[28px]"/>
              ))}
                    </span>
                    <span className="text-base laptop:text-xs"> 4.8/5 </span>
                    <div className="flex flex-col gap-[10px]">
                        <span>Out of 196</span>
                        <div className="flex gap-4 items-center">
                            <span>5</span>
                            <div className="w-[317px] h-[46px] bg-transparent rounded-xl overflow-hidden border border-gray-400 relative">
                                <div className="h-full bg-white " style={{ width: "73%" }}>
                                </div>
                            </div>
                            <span>73%</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>4</span>
                            <div className="w-[317px] h-[46px] bg-transparent rounded-xl overflow-hidden border border-gray-400 relative">
                                <div className="h-full bg-white " style={{ width: "7%" }}>
                                </div>
                            </div>
                            <span>7%</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>3</span>
                            <div className="w-[317px] h-[46px] bg-transparent rounded-xl overflow-hidden border border-gray-400 relative">
                                <div className="h-full bg-white " style={{ width: "6%" }}>
                                </div>
                            </div>
                            <span>6%</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>2</span>
                            <div className="w-[317px] h-[46px] bg-transparent rounded-xl overflow-hidden border border-gray-400 relative">
                                <div className="h-full bg-white " style={{ width: "0%" }}>
                                </div>
                            </div>
                            <span>0%</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>1</span>
                            <div className="w-[317px] h-[46px] bg-transparent rounded-xl overflow-hidden border border-gray-400 relative">
                                <div className="h-full bg-white " style={{ width: "14%" }}>
                                </div>
                            </div>
                            <span>14%</span>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-center gap-[10px] items-end py-9">
                        <div className="flex  gap-10 items-center justify-between text-sm ">
                            <span >Value for Money</span>
                            <span className="flex">
                                {Array(rating).fill().map((_, i) => (
                                <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow size-[38px] laptop:size-[28px]"/>
                                ))}
                            </span>
                        </div>
                        <div className="flex  gap-10 items-center text-sm justify-between">
                            <span >Ease of Use</span>
                            <span className="flex">
                                {Array(rating).fill().map((_, i) => (
                                <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow size-[38px] laptop:size-[28px]"/>
                                ))}
                            </span>
                        </div>
                        <div className="flex  gap-10 items-center text-sm">
                            <span>Features</span>
                            <span className="flex">
                                {Array(rating).fill().map((_, i) => (
                                <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow size-[38px] laptop:size-[28px]"/>
                                ))}
                            </span>
                        </div>
                        <div className="flex  gap-10 items-center text-sm">
                            <span>Customer Support</span>
                            <span className="flex">
                                {Array(4).fill().map((_, i) => (
                                <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow size-[38px] laptop:size-[28px]"/>
                                ))}
                            </span>
                        </div>
                    </div>
                    <button className="rounded-[17px] pricing-gradient border px-16 py-2">Write a Review</button>
            </div>
            <div className="grow">
                <button className="rounded-[17px]  border px-6 py-2">Best</button>            
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </div>
    )
}