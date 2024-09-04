import Link from "next/link";
import Header from "@/components/Header/Header";
import Image from "next/image";
import chatGPT from "../../../public/images/chatGpt.png"
import star from "../../../public/icons/star-filled.svg"
import saveIcon from "../../../public/icons/save-icon.svg";
import compareIcon from "../../../public/icons/compare-icon.svg";
import chatGpt from "../../../public/images/chatGPT-large.png";
import Tabs from "@/components/Tabs/Tabs";
import Footer from "@/components/Footer/Footer";
import ToolCard from "@/components/ToolCard/ToolCard";

export default function ToolDetail(){
    return <>
    <Header />
    {/* main section */}
    <section className="flex justify-center items-center py-[100px] gap-[50px]">
        <div className="w-[823px] flex flex-col gap-[46px]">
            <div className="flex gap-8">
                <div>                    
                    <Image src={chatGPT} height={200} width={200} alt="chatGPT" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-[26px]  ">
                        <span className="text-5xl font-sqrt">
                            Chat GPT
                        </span>
                        <div className="flex bg-transparent">
                            <Image src={star}  alt="star-filled"/>
                            <Image src={star} alt="star-filled"/>
                            <Image src={star} alt="star-filled" />
                            <Image src={star} alt="star-filled" />
                            <Image src={star} alt="star-filled" />
                        </div>
                    </div>
                    <span className="font-sqrt-roman text-[32px]">
                        Conversational
                    </span>
                    <Link href="https://chatgpt.com/" className="font-sqrt-roman text-[32px] mb-[32px] text-[#FFCB9A] underline">
                    https://chatgpt.com/
                    </Link>
                    <div className="flex items-center gap-[10px]">
                        <button className="flex items-center border-[3px] rounded-full px-[15px] py-2 ">
                            <Image src={compareIcon} className=" object-contain" alt="save" />
                            <span>Compare</span>
                        </button>
                        <button className="flex items-center gap-[1px]  border-[3px] rounded-full px-[15px] py-2"> 
                            <Image src={saveIcon} className=" object-contain" alt="save" />
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <span className="font-sqrt text-[32px]">Description</span>
                <p className="font-sqrt-roman text-2xl mt-3">ChatGPT is an advanced conversational AI developed by OpenAI, based on the GPT-4 architecture. It is designed to understand and generate human-like text, making it suitable for a wide range of applications such as customer support, content creation, tutoring, and more.</p>
            </div>

        </div>
        <div>
            {/* image */}
            <Image src={chatGpt} width={836} height={471} alt="chatGPT images" />
        </div>
    </section>
       <Tabs />
    <section className="relative">
    <div className="absolute top-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#FFCB9A]  to-[#FFCB9A] shadow-glow"></div>
    <div className="py-14 flex flex-wrap gap-10 justify-center items-center">
        <span className=" text-5xl font-sqrt-roman  text-wrap">
        Related
        Tools
        </span>
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        
    </div>
    </section>
    <Footer />
    </>
}