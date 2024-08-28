"use client";
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MyAccount from "@/components/MyAccount/MyAccount"
import SavedTools from "@/components/Saved Tools/SavedTools"
import ToolHistory from "@/components/ToolHistory/ToolHistory";
import VideoHistory from "@/components/VideoHistory/VideoHistory";
import BlogArticles from "@/components/BlogArticles/BlogArticles";

import { useState } from "react"

export default function Account(){
    const listClass = " w-full text-center font-sqrt-roman  py-[14px] text-[32px]"
    let content = <MyAccount />
    const [section, setSection] = useState("my-account");

    function updateSection(section){
        setSection(section)
    }
    switch(section) {
        case "my-account":
            content = <MyAccount />
            break;
        case "saved-tools":
            content = <SavedTools />
            break;
        case "tool-history":
            content = <ToolHistory />
            break;
        case "video-history":
            content = <VideoHistory />
            break;
        case "blog-article":
            content = <BlogArticles />
            break;
        default:
            content = <MyAccount />
    }

    return(
        <>
            <Header />
            <div className="flex ">
            {/* Side bar Here */}
            <div className=" h-screen flex justify-center">
                <ul className="max-w-[347px] flex flex-col justify-center items-center  ">
                <li onClick={() => updateSection("my-account")}  className={`${listClass} ${section === "my-account" && "bg-[#314499]"} `}>My Account</li>
                <li onClick={() => updateSection("saved-tools")} className={`${listClass}  ${section === "saved-tools" && "bg-[#314499]"}`}>Saved Tools</li>
                <li onClick={() => updateSection("tool-history")} className={`${listClass}  ${section === "tool-history" && "bg-[#314499]"}`}>Tool History</li>
                <li onClick={() => updateSection("video-history")} className={`${listClass}  ${section === "video-history" && "bg-[#314499]"}`}>Video History</li>
                <li onClick={() => updateSection("blog-article")} className={`${listClass}  ${section === "blog-article" && "bg-[#314499]"}`}>Blog and Article
                History</li>
                </ul>
                

            </div>
            
            {/* content goes here */}
            <div className="flex-grow ">
            {/* <MyAccount /> */}
                {content}
            </div>
            </div>
            <Footer />
        </>
    )
}