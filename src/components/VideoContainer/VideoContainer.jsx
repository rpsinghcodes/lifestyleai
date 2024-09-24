import Link from "next/link";
import Image from "next/image";
export default function VideoContainer({href, img, slug, channel, views, date}){
     return (
        <Link  className="w-[482px] laptopSmall:w-[363px]" href={href || "google.com"} target="_blank">
                    <Image loading="lazy" src={img} width={482} height={267} alt={slug} className="rounded-[36px] laptopSmall:w-[363px] laptopSmall:h-[201px] overflow-hidden"/>
                    <div className="px-8 laptopSmall:px-4 py-3">
                        <h3 className="text-base laptop:text-sm laptopSmall:text-[16px]">{slug}</h3>
                        <span className="font-sqrt-roman ">{channel}</span>                    
                        <span className="flex items-center gap-2 text-sm laptop:text-xs font-sqrt-roman  ">
                            <span>{views}views</span>
                            <span className="h-2 w-2 rounded-full bg-white"></span>
                            <span>{date}</span>
                        </span>          
                        </div>          
                </Link>
     )
}