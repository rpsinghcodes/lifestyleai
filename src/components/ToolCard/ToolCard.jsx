import Image from "next/image";
import star from "../../../public/icons/star-filled.svg";
import saveIcon from "../../../public/icons/save-icon.svg";
import compareIcon from "../../../public/icons/compare-icon.svg";
import h20 from "../../../public/images/h20.png";

export default function ToolCard({ name = "H20.ai", category = "AutoML", rating = 5, imgUrl = h20 }) {
  return (
    <div
      className="relative w-[575px] h-[350px] rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${imgUrl}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center gap-10 p-4 backdrop-blur-[5px]">
        <div className="flex flex-col  items-center gap-4">
          <span className="text-[32px] text-white  font-sqrt text-center">{name}</span>
          <span className="text-white">{category}</span>

          {/* Star Rating */}
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Image key={i} src={star} alt="star-filled" width={38} height={38}  className="text-glow"/>
              ))}
          </div>

          {/* Save and Compare Buttons */}
          <div className="flex flex-col items-center gap-2">
            <button className="flex items-center gap-2 border-[3px] rounded-full px-4 py-2 text-white">
              <Image src={saveIcon} className="object-contain" alt="save" />
              <span>Save</span>
            </button>
            <button className="flex items-center border-[3px] rounded-full px-4 py-2 text-white">
              <Image src={compareIcon} className="object-contain" alt="compare" />
              <span>Compare</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="h-[297px] w-[297px] bg-white flex justify-center rounded-[40px] overflow-hidden  ">
          <Image src={imgUrl} width={250} height={250} alt="Tool image" className="object-contain overflow-hidden rounded-[40px]" />
        </div>
      </div>
    </div>
  );
}
