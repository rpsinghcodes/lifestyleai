
"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import VideoContainer from "@/components/VideoContainer/VideoContainer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


/*

This is a video page at '/video' route here are some static videos listed

*/


// static video Data
const videoData = {
    featured: [
        {
            img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
            slug:"Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool",
            channel: "Create Studio Official",
            views: "109k",
            date:"March 20 2023",
            link:"https://www.youtube.com/watch?v=0NbCjw00FxM"
        },
        {
            img:"https://i.ytimg.com/vi/H-MDGBegBBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7fBPiYtfHwx3mGMWU69tNo_h3bg",
            slug:"Hope",
            channel: "Nolan On The Run",
            views: "134k",
            date:"June 2 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
        {
            img:"https://i.ytimg.com/vi/KKNCiRWd_j0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBRmGdu3iC_SiHY-51qBgNydsg-Ww",
            slug:"This AI Tool Creates Videos in Seconds (No Editing)",
            channel: "Think Media",
            views: "682k",
            date:"April 11 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
        {
            img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
            slug:"Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool",
            channel: "Create Studio Official",
            views: "109k",
            date:"March 20 2023",
            link:"https://www.youtube.com/watch?v=0NbCjw00FxM"
        },
        {
            img:"https://i.ytimg.com/vi/H-MDGBegBBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7fBPiYtfHwx3mGMWU69tNo_h3bg",
            slug:"Hope",
            channel: "Nolan On The Run",
            views: "134k",
            date:"June 2 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
        {
            img:"https://i.ytimg.com/vi/KKNCiRWd_j0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBRmGdu3iC_SiHY-51qBgNydsg-Ww",
            slug:"This AI Tool Creates Videos in Seconds (No Editing)",
            channel: "Think Media",
            views: "682k",
            date:"April 11 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
        {
            img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
            slug:"Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool",
            channel: "Create Studio Official",
            views: "109k",
            date:"March 20 2023",
            link:"https://www.youtube.com/watch?v=0NbCjw00FxM"
        },
        {
            img:"https://i.ytimg.com/vi/H-MDGBegBBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7fBPiYtfHwx3mGMWU69tNo_h3bg",
            slug:"Hope",
            channel: "Nolan On The Run",
            views: "134k",
            date:"June 2 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
        {
            img:"https://i.ytimg.com/vi/KKNCiRWd_j0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBRmGdu3iC_SiHY-51qBgNydsg-Ww",
            slug:"This AI Tool Creates Videos in Seconds (No Editing)",
            channel: "Think Media",
            views: "682k",
            date:"April 11 2024",
            link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
        },
    ],
    forYou: [
      {
        img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
        slug:"How Far is Too Far? | The Age of AI",
        channel:"Youtube Originals",
        views:"62M",
        date:"May 27 2020",
        link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
    }  ,
      {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024"}  ,
      {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020"}  ,
      {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024"}  ,
      {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024"}  ,
      {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020"}  ,
      {
        img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
        slug:"How Far is Too Far? | The Age of AI",
        channel:"Youtube Originals",
        views:"62M",
        date:"May 27 2020",
        link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
    }  ,
      {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024"}  ,
      {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020"}  ,
      {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024"}  ,
      {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024"}  ,
      {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020"}  ,
    ],
    trending:[
        {
          img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
          slug:"How Far is Too Far? | The Age of AI",
          channel:"Youtube Originals",
          views:"62M",
          date:"May 27 2020",
          link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
      }  ,
        {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {
          img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
          slug:"How Far is Too Far? | The Age of AI",
          channel:"Youtube Originals",
          views:"62M",
          date:"May 27 2020",
          link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
      }  ,
        {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
      ],
    newVideo: [
        {
          img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
          slug:"How Far is Too Far? | The Age of AI",
          channel:"Youtube Originals",
          views:"62M",
          date:"May 27 2020",
          link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
      }  ,
        {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {
          img:"https://i.ytimg.com/vi/0NbCjw00FxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJYDp01nF4DnC8XghYfAUgPb7Ong",
          slug:"How Far is Too Far? | The Age of AI",
          channel:"Youtube Originals",
          views:"62M",
          date:"May 27 2020",
          link:"https://www.youtube.com/watch?v=H-MDGBegBBk"
      }  ,
        {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
        {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020", link:"https://www.youtube.com/watch?v=H-MDGBegBBk"}  ,
      ]
}


export default function VidePage(){
    const headingStyle = "text-center text-3xl laptopSmall:text-xl  py-14";
    const hrStyle = "h-[2px] w-[480px] laptopSmall:w-[380px] bg-white";
    const seeMoreBtnStyle = "text-lg laptopSmall:text-base cursor-pointer";
    const [forYouPageNumber, setForYouPageNumber] = useState(1)
    const [trendingVideoPageNumber, setTrendingVideoPageNumber ] = useState(1);
    const [newVideoPageNumber, setNewVideoPageNumber] = useState(1);
    const videoPerPage = 6;

    

    const [featuredVideos, setFeaturedVideo] = useState(videoData.featured);

    function handleChange(e) {
        let filteredVideos = videoData.featured
        const lowerCaseQuery = e.target.value.toLowerCase();
        if(e.target.value) {
            filteredVideos = videoData.featured.filter(videos => videos.slug.toLowerCase().includes(lowerCaseQuery))
            setFeaturedVideo(filteredVideos);
        }else {
            setFeaturedVideo(videoData.featured);
        }
    }

    

    return (
        <>
        <Header />
        <SearchBar onChange={handleChange} />
        <section className="p-20 laptop:p-10">

            <div className="flex gap-7 justify-around p-[84px] laptop:p-[40px] laptopSmall:p-5">
                <Link href="https://www.youtube.com/watch?v=H-MDGBegBBk" className="w-[1044px] laptop:w-auto h-[587px] laptop:h-auto bg-[url('/images/featuredImageMain.png')]  bg-center flex  flex-col justify-end rounded-[36px] overflow-hidden" target="_blank">
                <div className="featured-video-gradient p-0  h-full flex text-lg laptop:text-sm  laptopSmall:text-[12px]">
                    <div className="mt-auto w-[80%] flex flex-col gap-3 pb-3 pl-8">
                        <h2 className="text-2xl laptop:text-base laptopSmall:text-xs">AI Generated Videos Just Changed Forever</h2>
                        <span className="font-sqrt-roman">Marques Brownlee</span>
                        <span className="flex items-center gap-2  font-sqrt-roman ">
                        <span>8.6M views</span>
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span>Feb 15 2024</span>
                        </span>
                    </div>
                </div>

                </Link>
                <div className="flex flex-col gap-8 laptop:gap-4">
                    {featuredVideos?.slice(0, 3).map(item => <Link href={item?.link} key={item.slug} className="flex w-[679px] laptopSmall:w-[500px] gap-3" target="_blank">
                        <div className="relative rounded-[60px] laptopSmall:rounded-[32px] min-w-[315px] h-[177px] laptopSmall:h-[130px] laptopSmall:min-w-[232px] overflow-hidden">
                            <Image loading="lazy" src={item.img} alt={item.slug} fill className="object-fill" />
                        </div>
                        <div className="font-sqrt laptopSmall:text-[12px]">
                            <h2 className="text-base laptop:text-sm laptopSmall:text-xs font-bold text-wrap">{item.slug}</h2>
                            <span className="font-sqrt-roman">{item.channel}</span>
                            <div className="flex items-center gap-3 font-sqrt-roman ">
                                <span>{item.views} views</span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </Link>
                )}
                    
                    
                </div>
            </div>
        </section>
        {/* For you section */}
        <section className="px-[162px] laptopSmall:px-[40px] py-12">
            <h1 className={headingStyle}>For You</h1>
            
            <div className="flex gap-16 flex-wrap justify-center">
                {videoData.forYou.slice(0, (forYouPageNumber* videoPerPage)).map(item => <VideoContainer key={item.link} img={item.img} href={item.link} slug={item.slug} channel={item.channel} views={item.views} date={item.date} />              )}
            </div>
            <div className={`flex flex-col justify-center items-center py-28 gap-12 ${(videoData.forYou.slice(0, (forYouPageNumber * videoPerPage))).length >= (videoData.forYou).length && "hidden"}`} >
                <span className={seeMoreBtnStyle} onClick={() => setForYouPageNumber(prevData => prevData + 1)}>See more</span>
                <hr className={hrStyle}/>
            </div>
        </section>

        {/* Trending Section */}
        <section className="px-[162px] laptopSmall:px-[40px] py-12">
        <h1 className={headingStyle}>Trending</h1>
        
        <div className="flex gap-16 laptop:gap-8 flex-wrap justify-center">
                {videoData.trending.slice(0, (trendingVideoPageNumber* videoPerPage)).map(item => <VideoContainer key={item.link} img={item.img} href={item.link} slug={item.slug} channel={item.channel} views={item.views} date={item.date} /> 

                )}
            </div>
            <div className={`flex flex-col justify-center items-center py-28 gap-12 ${(videoData.trending.slice(0, (trendingVideoPageNumber * videoPerPage))).length >= (videoData.trending).length && "hidden"}`} >
                <button  className={seeMoreBtnStyle} onClick={() => setTrendingVideoPageNumber(prevData => prevData + 1)}>See more</button>
                <hr className={hrStyle}/>
            </div>
        </section>
        {/* New Video Section */}
        <section className="px-[162px] laptopSmall:px-[40px] py-12">
        <h1 className={headingStyle}>New Videos</h1>
        
        <div className="flex gap-16 flex-wrap justify-center">
                {videoData.newVideo.slice(0, (newVideoPageNumber*videoPerPage)).map(item => <VideoContainer key={item.link} img={item.img} href={item.link} slug={item.slug} channel={item.channel} views={item.views} date={item.date} /> 

                )}
            </div>
            <div className={`flex flex-col justify-center items-center py-28 gap-12 ${(videoData.forYou.slice(0, (newVideoPageNumber * videoPerPage))).length >= (videoData.newVideo).length && "hidden"}`} >
                <button className={seeMoreBtnStyle} onClick={() => setNewVideoPageNumber(prevData => prevData + 1)}>See more</button>
                <hr className={hrStyle}/>
            </div>
        </section>
        <Footer />
        </>
    )
}