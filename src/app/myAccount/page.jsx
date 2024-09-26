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
    const listClass = " w-full text-center font-sqrt-roman  py-[14px] text-xl laptop:text-base laptopSmall:text-xs px-4 laptop:px-2";
    const navLinkStyle = "text-sm laptopSmall:text-[16px] border-b  p-1 hover:bg-slate-200";
    let content = <MyAccount />
    const [section, setSection] = useState("my-account");
    const [bookmarkIsOpen, setBookMarkIsOpen] = useState(false);
    const [historyIsOpen, setHistoryIsOpen] = useState(false);

    function updateSection(section){
        setSection(section)
    }
    switch(section) {
        case "my-account":
            content = <MyAccount />
            break;
        case "bookmark-tools": 
            content = <BookmarkTool />
            break;
        case "tool-history":
            content = <ToolHistory />
            break;
        case "bookmark-history":
            content = <BookmarkVideos />
            break;
        case "blog-article":
            content = <BlogArticles />
            break;
        case "bookmark-blog-and-articles":
            content = <BookMarkBlogAndArticles />
            break;
        case "videos-history":
            content = <VideoHistory />
            break;
        case "history-blog-and-articles": 
            content = <HistoryBlogAndArticles />
            break;
        default:
            content = <MyAccount />
    }

    return(
        <>
            <Header />
            <div className="flex ">
            <div className=" h-screen flex justify-center">
            <div className="max-w-[347px] flex flex-col justify-center items-center  ">
                <span onClick={() => updateSection("my-account")}   className={`${listClass} px-2 ${section === "my-account" && "bg-[#116466]"} `}>My Account</span>
                <div className="relative">
                <button className={`${listClass}  ${(section === "bookmark-tools" || section === "bookmark-history" || section === "bookmark-blog-and-articles") && "bg-[#116466]"} relative`} onClick={() => {setBookMarkIsOpen(!bookmarkIsOpen); setHistoryIsOpen(false)}}>Bookmarks</button>
                    {bookmarkIsOpen && (
                        <div className="absolute bg-[#116466] top-16 flex flex-col gap-3  p-2 z-10">
                            <span className={navLinkStyle} onClick={() => {updateSection("bookmark-tools"); setBookMarkIsOpen(!bookmarkIsOpen);}}>Tools</span>
                            <span className={navLinkStyle}onClick={() => {updateSection("bookmark-history"); setBookMarkIsOpen(!bookmarkIsOpen);}}>Videos</span>
                            <span className={navLinkStyle}onClick={() => {updateSection("bookmark-blog-and-articles"); setBookMarkIsOpen(!bookmarkIsOpen);}}>Blogs and Articles</span>
                        </div>
                    )}
                </div>
                <div className="relative w-full">
                <button className={`${listClass} relative ${(section === "tool-history" || section === "videos-history" || section === "history-blog-and-articles") && "bg-[#116466]"}`} onClick={() => {setHistoryIsOpen(!historyIsOpen); setBookMarkIsOpen(false);}}>History</button>
                    {historyIsOpen && (
                        <div className="absolute bg-[#116466] top-16 flex flex-col gap-3  p-2 z-10">
                            <span className={navLinkStyle} onClick={() => {updateSection("tool-history"); setHistoryIsOpen(!historyIsOpen); }}>Tool</span>
                            <span className={navLinkStyle} onClick={() => {updateSection("videos-history"); setHistoryIsOpen(!historyIsOpen); }}>Video</span>
                            <span className={navLinkStyle} onClick={() => {updateSection("history-blog-and-articles"); setHistoryIsOpen(!historyIsOpen); }}>Blog and Article</span>
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