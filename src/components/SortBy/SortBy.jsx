import Image from "next/image"
import ToolCard from "../ToolCard/ToolCard";
import star from "../../../public/icons/star-filled.svg";
import { useState } from "react";
import baseData from "../../../public/data/dataBase.json";

export default function SortBy(){
    
    const [active, setActive] = useState("Price");
    function toggleActive(category){
        setActive(category)
    }
    return (
        <>
        <div className="py-10 flex justify-center items-center gap-[30px] text-sm font-sqrt-roman">
                <button className={`border-4 rounded-full py-2 px-3 ${active === "Price" && "bg-glow-light  border-glow-dark shadow-glow"} `} onClick={() => toggleActive("Price")}>Price</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Features" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Features")}>Features</button>
                <button className={`border-4 rounded-full py-2 px-3 ${active ==="Reviews" && "bg-glow-light  border-glow-dark shadow-glow"} ` } onClick={() => toggleActive("Reviews")}>Reviews</button>
            </div>
            <div className="flex gap-[15px] laptop:gap-[6px] px-[67px] laptop:px-[27px] items-stretch justify-center">
                <div>
                
                    <ToolCard {...baseData[0]}  />
                
                    {active === "Price" &&  <div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Free</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Plus</span>
                        <span className="text-base font-sqrt-roman" >$10/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Team</span>
                        <span className="text-base font-sqrt-roman" >$30/person/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise</span>
                        <span className="text-base font-sqrt-roman" >Contact Sales</span>
                    </div>}
                    {active === "Features" && <div className="text-xl laptopSmall:text-[16px] font-sqrt-roman">
                        <ul className="flex flex-col gap-3 mt-[52px]">
                            <li>- Generating content from scratch based on your keywords or prompts.</li>
                            <li> - Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</li>
                            <li> - Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</li>
                        </ul>
                        </div>}

                        {active === "Reviews" && <div className="flex flex-col gap-4 justify-center items-center text-white mt-[52px]">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center text-xl laptop:text-base laptopSmall:text-[16px]">
                        <span>Overall Rating</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={25} height={25} />
                            ))}
                        </div>
                        <span className="text-sm mt-2 laptopSmall:text-[16px]">4.8/5</span>
                    </div>

                    {/* Detailed Ratings */}
                    <div className="flex flex-col gap-2 w-full">
                        {[
                            { label: 'Value for Money', rating: 5 },
                            { label: 'Ease of Use', rating: 5 },
                            { label: 'Features', rating: 5 },
                            { label: 'Customer Support', rating: 4.5 }
                        ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                        <span className="laptopSmall:text-[12px]">{item.label}</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={20} height={20} className={'size-[18px]'+ i + 1 > item.rating ? 'opacity-50' : ''} />
                            ))}
                        </div>
                        </div>
                        ))}
                    </div>
                </div>}
                </div>


                <div className="border-l-2 border-gray-600" />
                <div>
                    <ToolCard {...baseData[1]} />
                    {active === "Price" &&<div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Free</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Pro Plan</span>
                        <span className="text-base font-sqrt-roman" >$9/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise Plan</span>
                        <span className="text-base font-sqrt-roman" >Custom Pricing</span>
                    </div>}

                    {active === "Features" && <div className="text-xl laptopSmall:text-[16px] font-sqrt-roman  mt-[52px]">
                        <ul className="flex flex-col gap-3">
                            <li> -Pre-trained models for NLP tasks -Easy integration with various platforms</li>
                            <li> -Active community and extensive documentation</li>
                            <li> -Supports transfer learning and fine-tuning</li>
                            <li> -APIs for model inference</li>
                        </ul>
                        </div>}

                        {active === "Reviews" && <div className="flex flex-col gap-4 justify-center items-center text-white mt-[52px]">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center text-xl laptop:text-base laptopSmall:text-[16px]">
                        <span>Overall Rating</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={25} height={25} />
                            ))}
                        </div>
                        <span className="text-sm mt-2 laptopSmall:text-[16px]">4.8/5</span>
                    </div>

                    {/* Detailed Ratings */}
                    <div className="flex flex-col gap-2 w-full">
                        {[
                            { label: 'Value for Money', rating: 5 },
                            { label: 'Ease of Use', rating: 5 },
                            { label: 'Features', rating: 5 },
                            { label: 'Customer Support', rating: 4.5 }
                        ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                        <span className="laptopSmall:text-[12px]">{item.label}</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={20} height={20} className={'size-[18px]'+ i + 1 > item.rating ? 'opacity-50' : ''} />
                            ))}
                        </div>
                        </div>
                        ))}
                    </div>
                </div>}
                </div>

                <div className="border-l-2 border-gray-600" />
                <div>
                   <ToolCard {...baseData[8]}  />

                    {active === "Price" &&<div className="flex flex-col mt-[52px]">
                        <span className="text-xl laptop:text-base font-sqrt-roman">Lite</span>
                        <span className="text-base font-sqrt-roman" >Free</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Plus</span>
                        <span className="text-base font-sqrt-roman" >$140/month</span>
                        <hr className="w-[50%] self-center my-5" />
                        <span className="text-xl laptop:text-base font-sqrt-roman">Enterprise</span>
                        <span className="text-base font-sqrt-roman" >Custom Pricing</span>
                    </div>}

                    {active === "Features" && <div className="text-xl laptopSmall:text-[16px] font-sqrt-roman  mt-[52px]">
                        <ul className="flex flex-col gap-3">
                            <li>-Conversational AI for customer support</li>
                            <li> -Multi-channel support (web, mobile, messaging platforms)</li>
                            <li> -Pre-built industry-specific content Integration with IBM Cloud services</li>
                            <li> -Advanced analytics and reporting</li>
                        </ul>
                        </div>}

                    {active === "Reviews" && <div className="flex flex-col gap-4 justify-center items-center text-white mt-[52px]">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center text-xl laptop:text-base laptopSmall:text-[16px]">
                        <span>Overall Rating</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={25} height={25} />
                            ))}
                        </div>
                        <span className="text-sm mt-2 laptopSmall:text-[16px]">4.8/5</span>
                    </div>

                    {/* Detailed Ratings */}
                    <div className="flex flex-col gap-2 w-full">
                        {[
                            { label: 'Value for Money', rating: 5 },
                            { label: 'Ease of Use', rating: 5 },
                            { label: 'Features', rating: 5 },
                            { label: 'Customer Support', rating: 4.5 }
                        ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                        <span className="laptopSmall:text-[12px]">{item.label}</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={20} height={20} className={'size-[18px]'+ i + 1 > item.rating ? 'opacity-50' : ''} />
                            ))}
                        </div>
                        </div>
                        ))}
                    </div>
                </div>}


                </div>
            </div>
        </>
    )
}