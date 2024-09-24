/*

This component display details of tools 

*/

"use client"
import Image from "next/image";
import star from "../../../public/icons/star-filled.svg";
import saveIcon from "../../../public/icons/save-icon.svg";
import compareIcon from "../../../public/icons/compare-icon.svg";
import Link from "next/link";



export default function ToolCard({ name = "H20.ai", category = "AutoML", rating = 5, imgUrl }) {
  //**Important** intead of relying on name please add id to all the tools it will make easy to access the tools (in compare, save and history as well );
  function handleSave(){
    // Write save functionality
    alert("saved Succesfully");
  }

  function handleCompare(){
    // Write compare functionality here
  }
  return (
    <div
      className="relative rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${imgUrl}')` }} // background image      
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center gap-10 p-4 backdrop-blur-[5px]">
        <div className="flex flex-col  items-center gap-4 ">
          <span className="text-xl laptop:text-lg laptopSmall:text-sm text-white  font-sqrt text-center">{name}</span>
          <span className="text-white">{category}</span>

          {/* Star Rating */}
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Image key={i} src={star} alt="star-filled" className="size-[28px] laptopSmall:size-[24px]" />
              ))}
          </div>

          {/* Save and Compare Buttons */}
          <div className="flex flex-col items-center gap-2 laptopSmall:gap-1">
            <button onClick={handleSave} className="flex items-center gap-2 border-[3px] rounded-full px-4 laptop:px-2 laptopSmall:px-1 py-2 laptop:py-1 text-white">
              <Image src={saveIcon} height={12} width={12} className="object-contain" alt="save" />
              <span>Save</span>
            </button>
            <button onClick={handleCompare} className="flex items-center border-[3px] rounded-full px-4 laptop:px-2 py-2 laptop:py-1 text-white gap-1">
              <Image src={compareIcon} height={28} width={28} className="object-contain" alt="compare" />
              <span>Compare</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <Link href={`/tool/${name}`} className="size-[297px] laptopSmall:size-[170px] bg-white flex justify-center items-center rounded-[40px] overflow-hidden  ">
          <Image src={imgUrl} width={250} height={250} alt="Tool image" className="object-contain laptopSmall:size-[150px] overflow-hidden  size-[250px] p-3" />
        </Link>
      </div>
    </div>
  );
}
