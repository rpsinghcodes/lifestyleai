import Image from "next/image";

import saveIcon from "../../../public/icons/save-icon.svg";
import star from "../../../public/icons/star-filled.svg"

/*

This component is not in use

*/

export default function Card({img, title, type}) {
    return <div className="flex flex-col items-center gap-2 border-2 rounded-lg px-8 py-2 ">
        <Image src={img} width={123} height={123} alt="" />
        <div className="flex items-center gap-2">
            <div className="flex flex-col">
                <span>
                    {title}
                </span>
                <span>
                    {type}
                </span>
            </div>
            <div>
                <div className="flex justify-center">
                    <Image src={star} alt="star" width={28} height={28} />
                    <Image src={star} alt="star" width={28} height={28} />
                    <Image src={star} alt="star" width={28} height={28} />
                    <Image src={star} alt="star" width={28} height={28} />
                    <Image src={star} alt="star" width={28} height={28} />
                </div>
                <div className="flex gap-2">
                    <button className="px-2 border border-white rounded-full">Compare</button>
                    <button className="flex items-center border-2 rounded-full px-4 py-2"> <Image src={saveIcon} className=" object-contain" alt="save" />  <span>Save</span></button>
                </div>
            </div>
        </div>
    </div>
}