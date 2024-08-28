import Image from "next/image";
import h20 from "../../../public/images/h20.png";
import deleteIcon from "../../../public/images/delete-icon.svg";
import searchIcon from "../../../public/images/search-icon.svg";


const history = {
    today:[
        {img:"/images/h20.png", toolName:"H20.ai"},
        {img:"/images/pyTorch.png", toolName:"PyTorch"},
        {img:"/images/rapidMiner.png", toolName:"RapidMiner"},
        {img:"/images/mlFlow.png", toolName:"MLFlow"},
    ]
}

export default function ToolHistory(){
    return(
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        <div className="p-10 w-full">
            <h1 className="text-5xl font-sqrt-roman text-[#ADADAD]">Tool History</h1>
            <hr className="w-full mt-10" />
            <section className="flex justify-between font-sqrt-roman my-[50px]">
                <div className="text-[32px] w-[739px]">
                    <div>
                    <h1 className="px-[30px]">Today</h1>
                    {history.today.map(item => <div key={item.toolName}>
                        <hr className="w-full m-5 " />
                        <div className="px-[43px] flex justify-between">
                            <div className="flex items-center gap-[18px]">
                                <Image src={item.img} height={49} width={49} alt="h20" className="rounded-full " />
                                <span className="text-2xl">{item.toolName}</span>
                            </div>
                            <button>
                                <Image  src={deleteIcon} alt="delete Icon"/>
                            </button>
                        </div>
                        <hr className="w-full m-5 " />
                        
                    </div>)}
                    
                    </div>
                    <div className="my-[50px]">
                    <h1 className="px-[30px]">Yesterday</h1>
                    {history.today.map(item => <div key={item.toolName}>
                        <hr className="w-full m-5 " />
                        <div className="px-[43px] flex justify-between">
                            <div className="flex items-center gap-[18px]">
                                <Image src={item.img} height={49} width={49} alt="h20" className="rounded-full " />
                                <span className="text-2xl">{item.toolName}</span>
                            </div>
                            <button>
                                <Image  src={deleteIcon} alt="delete Icon"/>
                            </button>
                        </div>
                        <hr className="w-full m-5 " />
                        
                    </div>)}
                    
                    </div>
                    
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                    <Image src={searchIcon} alt="search Icon"/>
                    <input type="text" placeholder="Search Tool History" className="text-2xl px-1 bg-transparent outline-none border-none" />
                    </div>
                    <hr className="m-2"/>
                    <div className="flex flex-col items-center my-[45px] gap-7 text-2xl">
                    <button>Clear all History</button>
                    <button>Manage History</button>
                    </div>
                </div>
            </section>
            </div>
            </div>
    )
}