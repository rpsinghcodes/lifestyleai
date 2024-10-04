import Image from "next/image"
import Link from "next/link"

export default function BlogContainer({url, img, title, slug, date}){
    return (
        <Link  className="w-[482px] laptopSmall:w-[363px]" href={url || "google.com"} target="_blank">
            <div className="relative laptopSmall:w-[363px] laptopSmall:h-[201px]" >
            <Image loading="lazy" src={img} fill alt={slug} className="rounded-[36px] object-cover  overflow-hidden"/>
            </div>
            <div className="px-8 laptopSmall:px-4 py-3">
                <h3 className="text-base laptop:text-sm laptopSmall:text-[16px]">{slug}</h3>
                <h4 className="font-sqrt-roman ">{title}</h4>                    
                <h4 className="text-sm laptop:text-xs font-sqrt-roman  ">{date}</h4>          
            </div>          
        </Link>
     )
}