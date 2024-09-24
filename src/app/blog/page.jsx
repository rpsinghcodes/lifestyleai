"use client";

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
    thisWeek:[{img: "/images/image1.png", slug:"AI in Finance: The New Frontier", title: "MIT Technology Review", date:"March 30, 2023"}],
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
        title: "I’ve used NextJS for static websites because the experience with amplify hosting is so insanely easy. ",
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
    const [filteredData, setFilteredData] = useState(blogData.quickReads) // for filtering the data base on user search

    function handleOnChange(e) {
      const query = e.target.value;
      if (query) {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = blogData.quickReads.filter((blog) =>
          blog.slug.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(blogData.quickReads);
      }
    }
    
    return (
        <>
        <Header />        

      <section className="text-white px-16 laptopSmall:px-4 my-14 flex gap-14 laptopSmall:gap-7 justify-start items-start">
        {/* This Week section */}
        <Link  href="https://medium.com/age-of-awareness/teaching-during-the-rise-of-ai-and-the-end-of-reading-068a6515318f" target="_blank">
            <h1 className="text-4xl laptop:text-3xl laptopSmall:text-xl">This Week</h1>
            <div className="mt-7">
              <div className="relative laptopSmall:h-[420px] w-[400px]">
                <Image src={blogData.thisWeek[0].img} alt="Blog" fill  />
                </div>
                <h3 className="text-xl laptopSmall:text-base font-sqrt">{blogData.thisWeek[0].slug}</h3>
                <p className="text-base laptopSmall:text-sm font-sqrt-roman">{blogData.thisWeek[0].title}</p>
                <span className="text-base laptopSmall:text-sm  font-sqrt-roman">{blogData.thisWeek[0].date}</span>
            </div>
        </Link>
        {/* Recent Blog section */}
        <div>
        <h1 className="font-sqrt-roman text-3xl laptop:text-2xl laptopSmall:text-lg w-[847px] laptopSmall:w-auto">Recent Blogs and Articles</h1>
        <div className="mt-7">
            {blogData?.recent?.map(item => <Link href={item.url} key={item.slug} className="flex  items-center gap-3 laptopSmall:gap-1 mb-8" target="_blank">
            <Image src={item.img} alt="Blog" width={200} height={200} />
            <div className="flex flex-col font-sqrt p-3 w-[636px] laptopSmall:w-[466px]">
                <h3 className="text-xl last:text-lg laptopSmall:text-base font-sqrt">{item.slug}</h3>
                <p className="text-base laptop:text-sm laptopSmall:text-xs font-sqrt-roman">{item.title}</p>
                <span className="text-base laptop:text-sm laptopSmall:text-xs font-sqrt-roman">{item.date}</span>
            </div>
            </Link>)}
            
        </div>
        </div>
      </section>
              {/* Quick Read Section */}
      <section className="text-white px-16 laptopSmall:px-4 my-14">
        <h1 className="font-sqrt text-3xl laptop:text-2xl laptopSmall:text-xl">Quick Reads</h1>
        <SearchBar  onChange={handleOnChange} />
        <div className="flex justify-center gap-14 laptopSmall:gap-3  p-16 laptopSmall:p-8 flex-wrap">
          {/* Attention: Temporary color i.e bg-green-300 */}
        {filteredData?.map(item => <Link key={item.slug} href={item?.link || "newlink"} target="_blank" className="p-3 pb-20 rounded-[60px] bg-transparent shadow-2xl w-[461px]  max-w-[460px] laptopSmall:max-w-[300px] pricing-gradient overflow-hidden"> 
          <div className="relative min-h-[437px] laptop:min-h-[337px] min-w-[313px] laptop:min-w-[213px] laptopSmall:min-h-[250px]  overflow-hidden rounded-[60px]">
            <Image src={item.img} alt="Blog" className=" object-cover" fill={true}/>
          </div>
          <h2 className="text-xl laptop:text-base laptopSmall:text-sm font-sqrt">{item.slug}</h2>
          <h3 className="text-base laptop:text-sm laptopSmall:text-xs font-sqrt-roman">{ item.title.length > 50 ?  `${item.title.slice(0, 50)}...` : item.title }</h3>
          <span className="text-base laptop:text-sm laptopSmall:text-xs font-sqrt-roman">{item.date}</span>

          </Link>
        )}
        </div>
      </section>
      <Footer />
        </>
    )
}