import Image from "next/image";
import searchIcon from "../../../public/images/search-icon.svg";


/*

This component is being used in the my account section

*/

export default function BlogArticles(){
    return(
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        <div className="p-10 w-full">
            <h1 className="text-3xl font-sqrt-roman text-[#ADADAD]">Video History</h1>
            <hr className="w-full mt-10" />
            <section className="flex justify-between font-sqrt-roman my-[50px]">
                <div className="text-xl w-[911px]">
                    <div>
                        {/* Today Section */}
                    <div >
                    <h1 className="px-[30px]">Today</h1>
                        <hr className="w-full m-5 " />
                        <div className=" flex min-w-[679px] gap-5 px-[52px]">
                        <Image src="/images/featuredImage1.png" width={152} height={146} alt="ljlk" />
                        <div className="font-sqrt-roman text-sm">
                            <h2 className="text-base font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Create Studio Official</span>
                            <div className="flex items-center gap-3 text-sm  ">
                                <span>109k views </span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>March 20 2023</span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full m-5 " />
                        <div className=" flex min-w-[679px] gap-5 px-[52px] ">
                        <Image src="/images/featuredImage1.png" width={152} height={146} alt="ljlk" />
                        <div className="font-sqrt-roman text-sm">
                            <h2 className="text-base font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Create Studio Official</span>
                            <div className="flex items-center gap-3 text-sm  ">
                                <span>109k views </span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>March 20 2023</span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full m-5 " />
                        
                    </div>
                    
                    </div>
                    <div className="my-[50px]">
                    <div >
                    <h1 className="px-[30px]">Yesterday</h1>
                        <hr className="w-full m-5 " />
                        <div className=" flex min-w-[679px] gap-5 px-[52px] ">
                        <Image src="/images/featuredImage1.png" width={152} height={146} alt="ljlk" />
                        <div className="font-sqrt-roman text-sm">
                            <h2 className="text-base font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Create Studio Official</span>
                            <div className="flex items-center gap-3 text-sm  ">
                                <span>109k views </span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>March 20 2023</span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full m-5 " />
                        <div className=" flex min-w-[679px] gap-5 px-[52px] ">
                        <Image src="/images/featuredImage1.png" width={152} height={146} alt="ljlk" />
                        <div className="font-sqrt-roman text-sm">
                            <h2 className="text-base font-sqrt font-bold text-wrap">Easily build Stunning Video Content With Our Intuitive Drag and Drop Tool</h2>
                            <span className="font-sqrt-roman ">Create Studio Official</span>
                            <div className="flex items-center gap-3 text-sm  ">
                                <span>109k views </span>
                                <span className="h-2 w-2 rounded-full bg-white"></span>
                                <span>March 20 2023</span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full m-5 " />
                        
                    </div>


                    
                     </div>
                    
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                    <Image src={searchIcon} alt="search Icon"/>
                    <input type="text" placeholder="Search Tool History" className="text-base px-1 bg-transparent outline-none border-none" />
                    </div>
                    <hr className="m-2"/>
                    <div className="flex flex-col items-center my-[45px] gap-7 text-base">
                    <button>Clear all History</button>
                    <button>Manage History</button>
                    </div>
                </div>
            </section>
            </div>
            </div>
    )
}