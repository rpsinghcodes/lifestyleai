import Image from "next/image"
import searchIcon from "../../../public/images/search-icon.svg";



/*

This component is used in my-account section

*/

export default function HistoryBlogAndArticles() {
    return ( 
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        <div className="p-10 w-full">
            <h1 className="text-3xl laptopSmall:text-xl font-sqrt-roman text-[#ADADAD]">History Blogs and Articles</h1>
            <hr className="w-full mt-10" />
            <section className="flex justify-between font-sqrt-roman my-[50px]">
                <div className="text-xl w-[911px] laptopSmall:w-auto">
                    <div>
                        {/* Today Section */}
                    <div >
                        <hr className="w-full laptopSmall:w-[80%] m-5 " />
                        {Array(4).fill().map(item => <div key={item}>
                            <div className=" flex  gap-5 px-6 ">
                        <Image src="/images/featuredImage1.png" width={315} height={177} className="laptopSmall:w-[208px] laptopSmall:h-[117px]" alt="ljlk" />
                        <div className="font-sqrt-roman text-sm laptopSmall:text-[12px]">
                            <h2 className="text-base laptopSmall:text-xs font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Create Studio Official</span>
                            <div className="flex items-center gap-3 ">
                                <span>109k views </span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>March 20 2023</span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full laptopSmall:w-[80%] m-5 " />

                        </div>)}
                        
                    </div>
                    
                    </div>
                    
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                    <Image src={searchIcon} alt="search Icon" className=" laptopSmall:size-[20px]"/>
                    <input type="text" placeholder="Search Tool History" className="text-base laptopSmall:text-[14px] px-1 bg-transparent outline-none border-none" />
                    </div>
                    <hr className="m-2"/>
                    <div className="flex flex-col items-center my-[45px] gap-7 laptopSmall:gap-2 text-base laptop:text-xs laptopSmall:text-[14px]">
                    <button>Clear all History</button>
                    <button>Manage History</button>
                    </div>
                </div>
            </section>
            </div>
            </div>
    )
}