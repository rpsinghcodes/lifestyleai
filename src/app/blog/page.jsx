"use client";

import BlogContainer from "@/components/BlogContainer/BlogContainer";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


/*

This is a blog page at '/blog' route here are some static blogs listed

*/


// static blogData 
const blogData = {
    thisWeek:[{img: "/images/image1.png", slug:"AI in Finance: The New Frontier", title: "MIT Technology Review", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"}, {img: "/images/image2.png", slug:"The Future of Artificial Intelligence", title: "Bernard Marr, Forbes ", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"},
      {img: "/images/image3.png", slug:"AI and Ethics: Navigating the Moral Landscape", title: "Kate Crawford, Nature", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"}],
    recent:[
        {img: "/images/image2.png", slug:"The Future of Artificial Intelligence", title: "Bernard Marr, Forbes ", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"},
        {img: "/images/image3.png", slug:"AI and Ethics: Navigating the Moral Landscape", title: "Kate Crawford, Nature", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"},
        {img: "/images/image4.png", slug:"Artificial Intelligence in Healthcare: Transforming Patient Care", title: "John Nosta, Forbes", date:"March 30, 2023", url:"https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f"},
    ],
    quickReads: [
      {
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*1p_bsCg0TjR_H3VC",
        slug:"15 Libraries You Should Know if You Build with React",
        title: "Introduction to React", date:"February 15, 2023",
        link:"https://medium.com/@khushi1399gupta/15-libraries-you-should-know-if-you-build-with-react-088d7bb110e8"
      },
      {
        img: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*C0koZiqddVRNo_UTjkreVA.png",
        slug:"Why NextJS Sucks",
        title: "Medium ",
        date:"January 20, 2023",
        link:"https://medium.com/@thecodingteacher_52591/why-nextjs-sucks-0352de93071b"
      },
      {
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YiZksL8bfzbVmq0DM3JHpw.png",
        slug:"4 useState Mistakes You Should Avoid in React",
        title: "Introduction",
        date:"December 10,2022",
        link:"https://medium.com/gitconnected/4-usestate-mistakes-you-should-avoid-in-react-0d9d676869e2"
      },
    ]
}

export default function BlogPage(){
  const headingStyle = "text-center text-3xl laptopSmall:text-xl  py-14";
  const hrStyle = "h-[2px] w-[480px] laptopSmall:w-[380px] bg-white";
  const seeMoreBtnStyle = "text-lg laptopSmall:text-base cursor-pointer";
  const containerClass = "flex gap-16 laptop:gap-6 flex-wrap justify-center";
  const videoParentContainer = "px-[162px] laptopSmall:px-[20px] py-12"

  const [recent, setRecent] = useState(1)
  const [quickReads, setQuickReads ] = useState(1);
  const BlogPerPage = 6;

  

  const [featuredBlog, setFeaturedVideo] = useState(blogData.thisWeek);

  function handleChange(e) {
      let filteredVideos = blogData.recent
      const lowerCaseQuery = e.target.value.toLowerCase();
      if(e.target.value) {
          filteredVideos = blogData.thisWeek.filter(videos => videos.slug.toLowerCase().includes(lowerCaseQuery))
          setFeaturedVideo(filteredVideos);
      }else {
          setFeaturedVideo(blogData.thisWeek);
      }
  }

  

  return (
      <>
      <Header />
      <SearchBar onChange={handleChange} />
      <section className="p-20 laptop:p-10">

          <div className="flex gap-7 justify-around p-[84px] laptop:p-[40px] laptopSmall:p-5 min-h-[587px] laptopSmall:min-h-[450px]">
              <Link href="https://www.youtube.com/watch?v=H-MDGBegBBk" className="w-[1044px] laptop:w-auto h-[587px] laptop:h-auto bg-[url('/images/featuredImageMain.png')]  bg-center flex  flex-col justify-end rounded-[36px] overflow-hidden" target="_blank">
              <div className="featured-video-gradient p-0  h-full flex text-lg laptop:text-sm  laptopSmall:text-[12px]">
                  <div className="mt-auto w-[80%] flex flex-col gap-3 pb-3 pl-8">
                      <h2 className="text-2xl laptop:text-base laptopSmall:text-xs">AI Generated Videos Just Changed Forever</h2>
                      <span className="font-sqrt-roman">Marques Brownlee</span>
                      <span className="flex items-center gap-2  font-sqrt-roman ">Feb 15 2024
                      </span>
                  </div>
              </div>

              </Link>
              <div className="flex flex-col gap-8 laptop:gap-4">
                {featuredBlog.length === 0 && <p>No Blogs Found</p>}
                  {featuredBlog?.slice(0, 3).map(item => <Link href={item?.url} key={item.slug} className="flex w-[679px] laptopSmall:w-[500px] gap-3" target="_blank">
                      <div className="relative rounded-[60px] laptopSmall:rounded-[32px] min-w-[315px] h-[177px] laptopSmall:h-[130px] laptopSmall:min-w-[232px] overflow-hidden">
                          <Image loading="lazy" src={item.img} alt={item.slug} fill className="object-fill" />
                      </div>
                      <div className="font-sqrt laptopSmall:text-[12px]">
                          <h2 className="text-base laptop:text-sm laptopSmall:text-xs font-bold text-wrap">{item.slug}</h2>
                          <span className="font-sqrt-roman">{item.title}</span>
                          <div className="flex items-center gap-3 font-sqrt-roman ">
                              {item.date}
                          </div>
                      </div>
                  </Link>
              )}
                  
                  
              </div>
          </div>
      </section>
      {/* Recent section */}
      <section className={videoParentContainer}>
          <h1 className={headingStyle}>Recent</h1>
          
          <div className={containerClass}>
              {blogData.recent.slice(0, (recent* BlogPerPage)).map(item => <BlogContainer key={item.url} {...item} />              )}
          </div>
          <div className={`flex flex-col justify-center items-center py-28 gap-12 ${(blogData.recent.slice(0, (recent * BlogPerPage))).length >= (blogData.recent).length && "hidden"}`} >
              <span className={seeMoreBtnStyle} onClick={() => setRecent(prevData => prevData + 1)}>See more</span>
              <hr className={hrStyle}/>
          </div>
      </section>

      {/* Quick Reads Section */}
      <section className={videoParentContainer}>
      <h1 className={headingStyle}>Quick Reads</h1>
      
      <div className={containerClass}>
              {blogData.quickReads.slice(0, (quickReads* BlogPerPage)).map(item => <BlogContainer key={item.url} {...item} /> 

              )}
          </div>
          <div className={`flex flex-col justify-center items-center py-28 gap-12 ${(blogData.quickReads.slice(0, (quickReads * BlogPerPage))).length >= (blogData.quickReads).length && "hidden"}`} >
              <button  className={seeMoreBtnStyle} onClick={() => setQuickReads(prevData => prevData + 1)}>See more</button>
              <hr className={hrStyle}/>
          </div>
      </section>
      <Footer />
      </>
    )
}