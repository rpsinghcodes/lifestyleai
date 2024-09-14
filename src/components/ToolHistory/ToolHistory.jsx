/*

This component display bookmark tools that are bookmarked by the user

*/
import ToolCard from "../ToolCard/ToolCard";
import dataBase from "../../../public/data/dataBase.json";
export default function BookmarkTool(){
    return(
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        
        <div className="p-10 w-full">
            <h1 className="text-3xl font-sqrt-roman text-[#ADADAD]">Tool History</h1>
            <hr className="w-full mt-10" />
            <section className="py-[86px] flex gap-5 flex-wrap items-center justify-center">
                {dataBase.slice(0, 8).map(item => <ToolCard key={item.name}  name={item.name} category={item.category} imgUrl={item.imgUrl} />)}

            </section>
        </div>
        </div>
    )
}