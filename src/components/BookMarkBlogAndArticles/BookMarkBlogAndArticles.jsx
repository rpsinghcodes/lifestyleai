import Image from "next/image"
import searchIcon from "../../../public/images/search-icon.svg";

export default function BookMarkBlogAndArticles() {
    return(
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        <div className="p-10 w-full">
            <h1 className="text-5xl font-sqrt-roman text-[#ADADAD]">Bookmarked Blogs and Articles</h1>
            <hr className="w-full mt-10" />
            <section className="flex justify-between font-sqrt-roman my-[50px]">
                <div className="text-[32px] w-[911px]">
                    <div>
                        {/* Today Section */}
                    <div >
                        <hr className="w-full m-5 " />
                        {Array(4).fill().map(item => <div key={item}>
                        <div className=" flex min-w-[679px] gap-5 px-6 my-[30px] ">
                        <Image src="/images/featuredImage1.png" width={152} height={146} alt="ljlk" />
                        <div className="font-sqrt-roman text-xl">
                            <h2 className="text-2xl font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Bernard Marr, Forbes </span>
                            <div className="flex items-center gap-3 text-xl  ">
                                <span>March 30, 2023 </span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full m-5 " />

                        </div>)}
                        
                    </div>
                    
                    </div>
                    
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                    <Image src={searchIcon} alt="search Icon"/>
                    <input type="text" placeholder="Search Tool History" className="text-2xl px-1 bg-transparent outline-none border-none" />
                    </div>
                    <hr className="m-2"/>
                    <div className="flex flex-col items-center my-[45px] gap-7 text-2xl">
                    <button>Clear all Bookmarks</button>
                    <button>Manage Bookmarks</button>
                    </div>
                </div>
            </section>
            </div>
            </div>
    )
}