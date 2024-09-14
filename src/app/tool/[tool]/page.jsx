import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Tabs from "@/components/Tabs/Tabs";
import Footer from "@/components/Footer/Footer";
import ToolCard from "@/components/ToolCard/ToolCard";
import star from "../../../../public/icons/star-filled.svg"
import saveIcon from "../../../../public/icons/save-icon.svg";
import compareIcon from "../../../../public/icons/compare-icon.svg";
import chatGpt from "../../../../public/images/chatGPT-large.png";
import toolbase from "../../../../public/data/dataBase.json";
import dataBase from "../../../../public/data/dataBase.json";

/*

Custome page for an individual tool and related to that tools

*/

export default function Tool({params}){

    const toolName = decodeURI(params.tool)
    const toolData = toolbase.filter(item => item.name === toolName)
    const relatedData = dataBase.filter(item => item.category === toolData[0].category) // finding related tool which have same category

    return <>
    <Header />
    {/* main section */}
    <section className="flex justify-center items-center py-[100px] gap-[50px]">
        <div className="w-[823px] flex flex-col gap-[46px]">
            <div className="flex gap-8">
                <div className="relative rounded-full size-[200px] laptop:size-[150px]">                    
                    <Image src={toolData[0].imgUrl} fill alt="chatGPT" className="rounded-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-[26px]   ">
                        <span className="text-3xl laptop:text-2xl font-sqrt">
                            {toolData[0].name}
                        </span>
                        <div className="flex bg-transparent">
                            <Image src={star}  alt="star-filled"/>
                            <Image src={star} alt="star-filled"/>
                            <Image src={star} alt="star-filled" />
                            <Image src={star} alt="star-filled" />
                            <Image src={star} alt="star-filled" />
                        </div>
                    </div>
                    <span className="font-sqrt-roman text-xl laptop:text-base">
                        Conversational{toolData[0].category}
                    </span>
                    <Link href={toolData[0].toolUrl} target="_blank"  className="font-sqrt-roman text-xl laptop:text-base mb-[32px] text-[#FFCB9A] underline">
                    {`${ (toolData[0].toolUrl).length >= 22 ? (toolData[0].toolUrl).slice(0, 22) + "..." : toolData[0].toolUrl}`}
                    </Link>
                    <div className="flex items-center gap-[10px]">
                        <button className="flex items-center border-[3px] rounded-full px-[15px]  py-2 ">
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
                <span className="font-sqrt text-xl laptop:text-base">Description</span>
                <p className="font-sqrt-roman text-base laptop:text-sm mt-3">{toolData[0].desc}</p>
            </div>

        </div>
        <div>
            {/* image */}
            <Image src={chatGpt} alt="chatGPT images" className=" w-[836px] h-[471px] laptop:w-[607px] laptop:h-[342px]" />
        </div>
    </section>
       <Tabs />
    <section className="relative">
    <div className="absolute top-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#FFCB9A]  to-[#FFCB9A] shadow-glow"></div>
    <div className="py-14 flex flex-wrap gap-10 justify-center items-center">
        <span className=" text-3xl font-sqrt-roman  text-wrap">
        Related
        Tools
        </span>
        <ToolCard {...relatedData[0]} />
        <ToolCard {...relatedData[1]} />
        <ToolCard {...relatedData[2]}/>
        <ToolCard {...relatedData[3]}/>
        <ToolCard {...relatedData[4]}/>
        
    </div>
    </section>
    <Footer />
    </>
}