"use client";
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MyAccount from "@/components/MyAccount/MyAccount"
import BookmarkTool from "@/components/Bookmark Tools/BookmarkTool"
import ToolHistory from "@/components/ToolHistory/ToolHistory";
import BookmarkVideos from "@/components/BookmarkVideos/BookmarkVideos";
import BlogArticles from "@/components/BlogArticles/BlogArticles";
import BookMarkBlogAndArticles from "@/components/BookMarkBlogAndArticles/BookMarkBlogAndArticles";

import { useState } from "react"
import VideoHistory from "@/components/VideoHistory/VideoHistory";
import HistoryBlogAndArticles from "@/components/HistoryBlogAndArticles/HistoryBlogAndArticles";

export default function Account(){
    const listClass = " w-full text-center font-sqrt-roman  py-[14px] text-[32px] px-4"
    let content = <MyAccount />
    const [section, setSection] = useState("saved-tools");
    const [bookmarkIsOpen, setBookMarkIsOpen] = useState(false);
    const [historyIsOpen, setHistoryIsOpen] = useState(false);

    function updateSection(section){
        setSection(section)
    }
    switch(section) {
        case "my-account":
            content = <MyAccount />
            break;
        case "saved-tools":
            content = <BookmarkTool />
            break;
        case "tool-history":
            content = <ToolHistory />
            break;
        case "video-history":
            content = <BookmarkVideos />
            break;
        case "blog-article":
            content = <BlogArticles />
            break;
        case "bookmark-blog-and-articles":
            content = <BookMarkBlogAndArticles />
            break;
        case "video-history":
            content = <VideoHistory />
            break;
        case "history-blog-and-articles": 
            content = <HistoryBlogAndArticles />
            break;
        default:
            content = <BookmarkTool />
    }

    return(
        <>
            <Header />
            <div className="flex ">
            {/* Side bar Here */}
            {/* <div className=" h-screen flex justify-center">
                <ul className="max-w-[347px] flex flex-col justify-center items-center  ">
                <li onClick={() => updateSection("my-account")}  className={`${listClass} ${section === "my-account" && "bg-[#314499]"} `}>My Account</li>
                <li onClick={() => updateSection("saved-tools")} className={`${listClass}  ${section === "saved-tools" && "bg-[#314499]"}`}>Saved Tools</li>
                <li onClick={() => updateSection("tool-history")} className={`${listClass}  ${section === "tool-history" && "bg-[#314499]"}`}>Tool History</li>
                <li onClick={() => updateSection("video-history")} className={`${listClass}  ${section === "video-history" && "bg-[#314499]"}`}>Video History</li>
                <li onClick={() => updateSection("blog-article")} className={`${listClass}  ${section === "blog-article" && "bg-[#314499]"}`}>Blog and Article
                History</li>
                </ul>
                

            </div> */}
            <div className=" h-screen flex justify-center">
            <div className="max-w-[347px] flex flex-col justify-center items-center  ">
                <span onClick={() => updateSection("my-account")}   className={`${listClass} px-2 ${section === "my-account" && "bg-[#116466]"} `}>My Account</span>
                <div className="relative">
                <button className={`${listClass}  ${section === ("saved-tools" || "video-history") && "bg-[#116466]"} relative`} onClick={() => setBookMarkIsOpen(!bookmarkIsOpen)}>Bookmarks</button>
                    {bookmarkIsOpen && (
                        <div className="absolute bg-[#116466] top-16 flex flex-col gap-3  rounded p-2 z-10">
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200" onClick={() => {updateSection("saved-tools"); setBookMarkIsOpen(!bookmarkIsOpen)}}>Bookmarked Tools</span>
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200"onClick={() => {updateSection("video-history"); setBookMarkIsOpen(!bookmarkIsOpen)}}>Bookmarked Videos</span>
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200"onClick={() => {updateSection("bookmark-blog-and-articles"); setBookMarkIsOpen(!bookmarkIsOpen)}}>Bookmarked Blogs and Articles</span>
                        </div>
                    )}
                </div>
                <div className="relative w-full">
                <button className={`${listClass} relative ${section === "tool-history" && "bg-[#116466]"}`} onClick={() => setHistoryIsOpen(!historyIsOpen)}>History</button>
                    {historyIsOpen && (
                        <div className="absolute bg-[#116466] top-16 flex flex-col gap-3  rounded p-2 z-10">
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200" onClick={() => {updateSection("tool-history"); setHistoryIsOpen(!historyIsOpen)}}>Tool History</span>
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200" onClick={() => {updateSection("video-history"); setHistoryIsOpen(!historyIsOpen)}}>Video History</span>
                            <span className="text-[20px] border-b rounded p-1 hover:bg-slate-200" onClick={() => {updateSection("history-blog-and-articles"); setHistoryIsOpen(!historyIsOpen)}}>Blog and Article History</span>
                        </div>
                    )}
                </div>
                
                </div>
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