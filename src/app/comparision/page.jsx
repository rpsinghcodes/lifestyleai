import Header from "@/components/Header/Header";
import Image from "next/image";
import baseData from "../../../public/data/dataBase.json";
import Footer from "@/components/Footer/Footer";
import star from "../../../public/icons/star-filled.svg";
import Link from "next/link";

/*

Comparision page to compare different tools listed on the site

*/
export default function Comparision(){
    return(
        <>
        <Header />
        <div className="grid  grid-cols-[270px_repeat(4,1fr)] laptop:grid-cols-[170px_repeat(4, 1fr)] pricing-gradient gap-10 laptop:gap-5 items-center h-[170px] laptop:h-[140px]">
            <div className="border-r"></div>
            <div className="  border-r-2">
                <div className="flex items-center justify-center gap-2 btn-gradient rounded-[60px] px-3 py-4 w-[320px] laptop:w-[220px]">
                    <div className=" size-[75px] laptop:size-[50px] rounded-full bg-white flex justify-center items-center">
                        <Image src={baseData[0].imgUrl} alt="image" width={40} height={40} className="rounded-full" />
                    </div>
                    <div className="flex flex-col ">
                        <span className="laptop:text-xs">{baseData[0].name}</span>
                        <span className="text-base laptop:text-xs">{baseData[0].category}</span>
                    </div>
                </div>
            </div>
            <div className="border-r-2">
                <div className="flex items-center justify-center gap-2 btn-gradient rounded-[60px] px-3 py-4 w-[320px] laptop:w-[220px]">
                    <div className=" size-[75px] laptop:size-[50px] rounded-full bg-white flex justify-center items-center">
                        <Image src={baseData[1].imgUrl} alt="image" width={40} height={40} className="rounded-full" />
                    </div>
                    <div className="flex flex-col ">
                        <span className="laptop:text-xs">{baseData[1].name}</span>
                        <span className="text-base laptop:text-xs">{baseData[1].category}</span>
                    </div>
                </div>
            </div>
            <div className="border-r">
                <div className="flex items-center justify-center gap-2 btn-gradient rounded-[60px] px-3 py-4 w-[320px] laptop:w-[220px]">
                    <div className="flex justify-center items-center border-[2px] size-[68px] laptop:size-[38px] rounded-full">
                        <Link href="/tool-listing/1">
                            <Image src="/images/plus-icon.svg" alt="image" width={20} height={20} className="rounded-full" />
                        </Link>
                    </div>
                    <span>Add Tool</span>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center gap-2 btn-gradient rounded-[60px] px-3 py-4 w-[320px] laptop:w-[220px]">
                    <div className="flex justify-center items-center border-[2px] size-[68px] laptop:size-[38px] rounded-full">
                        <Link href="/tool-listing/1">
                            <Image src="/images/plus-icon.svg" alt="image" width={20} height={20} className="rounded-full" />
                        </Link>
                    </div>
                    <span>Add Tool</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-[270px_repeat(4,1fr)] laptop:grid-cols-[170px_repeat(4, 1fr)] gap-10  border-t-2 ">
            <span className="text-xl laptop:text-lg border-r-2  h-full text-center py-6">Pricing</span>
            <div className="flex flex-col border-r-2 py-6">
                <span className="text-xl laptop:text-lg font-sqrt-roman">Free</span>
                <span className="text-base font-sqrt-roman" >Free</span>
                <hr className="w-[50%] self-center my-5" />
                <span className="text-xl laptop:text-lg font-sqrt-roman">Plus</span>
                <span className="text-base font-sqrt-roman" >$10/month</span>
                <hr className="w-[50%] self-center my-5" />
                <span className="text-xl laptop:text-lg font-sqrt-roman">Team</span>
                <span className="text-base font-sqrt-roman" >$30/person/month</span>
                <hr className="w-[50%] self-center my-5" />
                <span className="text-xl laptop:text-lg font-sqrt-roman">Enterprise</span>
                <span className="text-base font-sqrt-roman" >Contact Sales</span>
            </div>
            <div className="flex flex-col border-r-2   py-6">
                <span className="text-xl laptop:text-lg font-sqrt-roman">Free</span>
                <span className="text-base font-sqrt-roman" >Free</span>
                <hr className="w-[50%] self-center my-5" />
                <span className="text-xl laptop:text-lg font-sqrt-roman">Pro</span>
                <span className="text-base font-sqrt-roman" >$9/month</span>
                <hr className="w-[50%] self-center my-5" />
                <span className="text-xl laptop:text-lg font-sqrt-roman">Enterprise Plan</span>
                <span className="text-base font-sqrt-roman" >Custom Pricing</span>
            </div>
            <div className="border-r-2"></div>
            <div className=""></div>
        </div>
        <div className="grid grid-cols-[270px_repeat(4,1fr)] laptop:grid-cols-[170px_repeat(4, 1fr)] gap-10  border-t-2 mt-[50px] ">
            <span className="text-xl laptop:text-lg border-r-2  h-full text-center py-6">Features</span>
            <ul className="flex flex-col text-base laptop:text-sm border-r-2 py-6">
                <li>- Generating content from scratch based on your keywords or prompts.</li>
                <li>- Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</li>
                <li>- Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</li>
            </ul>
            <div className="flex flex-col border-r-2 text-base laptop:text-sm py-6">
              <ul>
                <li>-Pre-trained models for NLP tasks </li>
                <li>-Easy integration with various platforms</li>
                <li>-Active community and extensive documentation</li>
                <li>-Supports transfer learning and fine-tuning</li>
                <li>-APIs for model inference</li>                
              </ul>
              
            </div>
            <div className="border-r-2"></div>
            <div className=""></div>
        </div>
        <div className="grid grid-cols-[270px_repeat(4,1fr)] laptop:grid-cols-[170px_repeat(4, 1fr)] gap-10  border-t-2 my-[50px]  font-sqrt-roman">
            <span className="text-xl  laptop:text-lg border-r-2  h-full text-center py-6">Reviews</span>
            <div className="border-r-2 border-white pr-6 py-6">
                <div className="flex flex-col gap-4 justify-center items-center text-white">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center text-xl laptop:text-base">
                        <span>Overall Rating</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={25} height={25} />
                            ))}
                        </div>
                        <span className="text-sm mt-2">4.8/5</span>
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
                        <span>{item.label}</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={20} height={20} className={i + 1 > item.rating ? 'opacity-50' : ''} />
                            ))}
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            
            <div className="border-r-2 border-white pr-6 py-6">
                <div className="flex flex-col gap-4 justify-center items-center text-white">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center text-xl laptop:text-base">
                        <span>Overall Rating</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={25} height={25} />
                            ))}
                        </div>
                        <span className="text-sm mt-2">4.8/5</span>
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
                        <span>{item.label}</span>
                        <div className="flex">
                            {Array(5).fill().map((_, i) => (
                            <Image key={i} src={star} alt="Star" width={20} height={20} className={i + 1 > item.rating ? 'opacity-50' : ''} />
                            ))}
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-r-2  py-6"></div>
            <div className=" py-6"></div>
        </div>
        
        <Footer />
        </>
    )
}