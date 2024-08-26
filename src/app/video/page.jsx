import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
const videoData = {
    featured: [
        {img:"/images/featuredImage1.png", slug:"Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool", channel: "Create Studio Official", views: "109k", date:"March 20 2023"},
        {img:"/images/featuredImage2.png", slug:"This New AI Video Generator can Make Monetized Youtube Shorts, Instagram Reels ...", channel: "Growth with Kaz", views: "134k", date:"June 2 2024"},
        {img:"/images/featuredImage3.png", slug:"This AI Tool Creates Videos in Seconds (No Editing)", channel: "Think Media", views: "682k", date:"April 11 2024"}
    ],
    forYou: [
      {img: "/images/forYou1.png", slug:"How Far is Too Far? | The Age of AI", channel:"Youtube Originals", views:"62M", date:"May 27 2020"}  ,
      {img: "/images/forYou2.png", slug:"Apple’s New ‘4M’ AI Model: The Most Exciting Technology of the Year", channel:"AI Uncovered", views:"25k", date:"July 14 2024"}  ,
      {img: "/images/forYou3.png", slug:"Dead Internet Theory: A.I. Killed the Internet", channel:"Kyle Hill", views:"62M", date:"May 27 2020"}  ,
      {img: "/images/forYou4.png", slug:"AI News: “Hollywood-Grade” AI Video Revealed", channel:"Matt Wolfe", views:"73k", date:"June 23 2024"}  ,
      {img: "/images/forYou5.png", slug:"Open AI Tracking Progress Toward Human-Level AI", channel:"Bloomberg Technology", views:"5.3k", date:"July 15 2024"}  ,
      {img: "/images/forYou6.png", slug:"How AI Is Killing Smartphones", channel:"Hardware Canucks", views:"649k", date:"May 27 2020"}  ,
    ],
    trending:{}
}
export default function VidePage(){
    return (
        <>
        <Header />
        <SearchBar />
        <section className="p-20">
            <h1 className="text-5xl px-16 py-7">Featured</h1>

            <div className="flex gap-7 justify-around p-[84px]">
                <div className="w-[1044px] h-[587px] bg-[url('/images/featuredImageMain.png')] flex  flex-col justify-end ">
                <div className="featured-video-gradient p-0  h-full flex text-3xl">
                    <div className="mt-auto w-[80%] flex flex-col gap-3 pb-3 pl-8">
                        <h2 className="text-4xl">AI Generated Videos Just Changed Forever</h2>
                        <span>Marques Brownlee</span>
                        <span className="flex items-center gap-2  ">
                        <span>8.6M views</span>
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span>Feb 15 2024</span>
                        </span>
                    </div>
                </div>

                </div>
                <div className="flex flex-col gap-8">
                    {videoData?.featured?.map(item => <div key={item.slug} className="flex w-[679px] gap-3">
                        <Image src={item.img} width={315} height={177} alt={item.slug} />
                        <div className="font-sqrt">
                            <h2 className="text-2xl font-bold text-wrap">{item.slug}</h2>
                            <span>{item.channel}</span>
                            <div className="flex items-center gap-3 ">
                                <span>{item.views} views</span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </div>)}
                    
                    
                </div>
            </div>
        </section>

        <section className="px-[162px] py-12">
            <h1 className="text-center text-5xl py-14">For You</h1>
            <div className="flex gap-16 flex-wrap">
                {videoData.forYou.map(item => <div key={item.slug} className="w-[482px]">
                    <Image src={item.img} width={482} height={267} alt={item.slug}/>
                    <div className="px-8 py-3">
                    <h3 className="text-2xl">{item.slug}</h3>
                    <span>{item.channel}</span>                    
                    <span className="flex items-center gap-2 text-xl  ">
                        <span>{item.views}views</span>
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span>{item.date}</span>
                        </span>          
                        </div>          
                </div>

                )}
            </div>
            <div className="flex flex-col justify-center items-center py-28 gap-12">
                <Link href="#lkljk" className="text-3xl ">See more</Link>
                <hr className="h-[2px] w-[480px] bg-white"/>
            </div>
        </section>
        <section className="px-[162px] py-12">
        <h1 className="text-center text-5xl py-14">Trending</h1>
        <div className="flex gap-16 flex-wrap">
                {videoData.forYou.map(item => <div key={item.slug} className="w-[482px]">
                    <Image src={item.img} width={482} height={267} alt={item.slug}/>
                    <div className="px-8 py-3">
                    <h3 className="text-2xl">{item.slug}</h3>
                    <span>{item.channel}</span>                    
                    <span className="flex items-center gap-2 text-xl  ">
                        <span>{item.views}views</span>
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span>{item.date}</span>
                        </span>          
                        </div>          
                </div>

                )}
            </div>
            <div className="flex flex-col justify-center items-center py-28 gap-12">
                <Link href="#lkljk" className="text-3xl ">See more</Link>
                <hr className="h-[2px] w-[480px] bg-white"/>
            </div>
        </section>
        <section className="px-[162px] py-12">
        <h1 className="text-center text-5xl py-14">New Videos</h1>
        <div className="flex gap-16 flex-wrap">
                {videoData.forYou.map(item => <div key={item.slug} className="w-[482px]">
                    <Image src={item.img} width={482} height={267} alt={item.slug}/>
                    <div className="px-8 py-3">
                    <h3 className="text-2xl">{item.slug}</h3>
                    <span>{item.channel}</span>                    
                    <span className="flex items-center gap-2 text-xl  ">
                        <span>{item.views}views</span>
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span>{item.date}</span>
                        </span>          
                        </div>          
                </div>

                )}
            </div>
            <div className="flex flex-col justify-center items-center py-28 gap-12">
                <Link href="#lkljk" className="text-3xl ">See more</Link>
                <hr className="h-[2px] w-[480px] bg-white"/>
            </div>
        </section>
        <Footer />
        </>
    )
}