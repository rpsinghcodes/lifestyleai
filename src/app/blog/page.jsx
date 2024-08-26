import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

const blogData = {
    thisWeek:[{img: "/images/image1.png", slug:"AI in Finance: The New Frontier", title: "MIT Technology Review", date:"March 30, 2023"}],
    recent:[
        {img: "/images/image2.png", slug:"The Future of Artificial Intelligence", title: "Bernard Marr, Forbes ", date:"March 30, 2023"},
        {img: "/images/image3.png", slug:"AI and Ethics: Navigating the Moral Landscape", title: "Kate Crawford, Nature", date:"March 30, 2023"},
        {img: "/images/image4.png", slug:"Artificial Intelligence in Healthcare: Transforming Patient Care", title: "John Nosta, Forbes", date:"March 30, 2023"},
    ],
    quickReads: [
      {img: "/images/image5.png", slug:"The Rise of AI-Driven Creative Tools", title: "Will Knight, Wired", date:"February 15, 2023"},
      {img: "/images/image6.png", slug:"AI and the Future of Work: Opportunities and Challenges", title: "Harvard Business Review", date:"January 20, 2023"},
      {img: "/images/image7.png", slug:"Understanding AI Bias and Fairness", title: "Karen Hao, MIT Technology Review", date:"December 10,2022"},
    ]
}

export default function BlogPage(){
    return (
        <>
        <Header />
        <div className="relative w-full max-w-2xl mx-auto mt-8 ">
        <input
          type="text"
          placeholder="I want to create a draft for a presentation"
          className="w-full py-4 px-6 text-white bg-transparent border-2 border-[#FFCB9A] rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
          SEARCH
        </button>
      </div>

      <section className="text-white px-16 my-14 flex gap-14 justify-center">
        {/* This Week section */}
        <div >
            <h1 className="text-6xl">This Week</h1>
            <div className="mt-7">
                <Image src={blogData.thisWeek[0].img} alt="Blog" width={780} height={456}  />
                <h3 className="text-4xl font-sqrt">{blogData.thisWeek[0].slug}</h3>
                <p className="font-sqrt">{blogData.thisWeek[0].title}</p>
                <span className="font-sqrt">{blogData.thisWeek[0].date}</span>
            </div>
        </div>
        {/* Recent Blog section */}
        <div>
        <h1 className="font-sqrt text-4xl">Recent Blogs and Articles</h1>
        <div className="mt-7">
            {blogData?.recent?.map(item => <div key={item.slug} className="flex  items-center gap-3 mb-8">
            <Image src={item.img} alt="Blog" width={255} height={255} />
            <div className="flex flex-col font-sqrt p-3">
                <h3>{item.slug}</h3>
                <p>{item.title}</p>
                <span>{item.date}</span>
            </div>
            </div>)}
            
        </div>
        </div>
      </section>

      <section className="text-white px-16 my-14">
        <h1 className="font-sqrt text-5xl">Quick Reads</h1>
        <div className="flex justify-center gap-14 p-16">
          {/* Attention: Temporary color i.e bg-green-300 */}
        {blogData?.quickReads.map(item => <a key={item.slug} href="lkjl" className="p-3 pb-20 rounded-[60px] bg-[#9747FF] w-[461px]  max-w-[460px]"> 
          <Image src={item.img} alt="Blog" width={437} height={313} />
          <h2>{item.slug}</h2>
          <h3>{item.title}</h3>
          <span>{item.date}</span>

          </a>
        )}
        </div>
      </section>
      <Footer />
        </>
    )
}