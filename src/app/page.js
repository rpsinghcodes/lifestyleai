import Image from "next/image";
import Header from "@/components/Header/Header";
import star from "../../public/icons/star-filled.svg"
import unfilledStar from "../../public/icons/star-unfilled.svg"
import bottomArrow from "../../public/icons/bottom-arrow.svg"
import tensorFlow from "../../public/images/tensorFlow.png";
import h20 from "../../public/images/h20.png";
import pyTorch from "../../public/images/pyTorch.png";
import rapidMiner from "../../public/images/rapidMiner.png";
import dataRobot from "../../public/images/DataRobot.png";
import mlFlow from "../../public/images/mlFlow.png";
// import backgroundImage from "../../public/images/background.png";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
   <Header />
   <section className={`text-white  `} >
    <div  className="flex   items-center justify-around">
    <div className="p-24">
      <div className="flex flex-col gap-11 justify-center items-center mt-8">
      <Image src="/images/fulllogo_whitetransparent.png" width={500} height={500} alt="Hero-Image" className="text-center" />
      <div className="relative w-full min-w-[829px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full py-4 px-6 text-white bg-transparent border-2 border-[#FFCB9A] rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent shadow-glow"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
          SEARCH
        </button>
      </div>
      
    </div>
    </div>
    <div className="flex flex-col gap-12  px-24 py-10  ">
      
 
  <div className="w-[484px] text-center flex flex-col justify-center items-center gap-4 border border-[#FFCB9A] rounded-lg px-12 py-8">
    <div className="flex bg-transparent">
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={unfilledStar} height={38} width={38} alt="star-filled" />
    </div>
    <p className="text-white">“Never found an easier website to find and discover AI tools”</p>
    <span className="self-end text-[#5271FF]">- John Doe</span>
  </div>


  <div className="w-[484px] text-center flex flex-col justify-center items-center ml-16 gap-4 border border-[#FFCB9A] rounded-lg px-12 py-8">
    <div className="flex bg-transparent">
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={unfilledStar} height={38} width={38} alt="star-filled" />
    </div>
    <p className="text-white">“intuitive user interface and very easy to navigate”</p>
    <span className="self-end text-[#5271FF]">- John Doe</span>
  </div>



  <div className="w-[484px] text-center flex flex-col justify-center items-center gap-4 border border-[#FFCB9A] rounded-lg px-12 py-8">
    <div className="flex bg-transparent">
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={star} height={38} width={38} alt="star-filled" />
      <Image src={unfilledStar} height={38} width={38} alt="star-filled" />
    </div>
    <p className="text-white">“Best website for everything AI”</p>
    <span className="self-end text-[#5271FF]">- John Doe</span>
  </div>


      </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Find more AI tools</p>
        <Image src={bottomArrow}  alt="bottom-arrow" />
      </div>
   </section>
   <section className=" text-white py-4 px-10 my-60">
    <div className="flex justify-evenly items-center rounded-lg py-5 background-gradient-left-to-right">
    <span className="text-5xl text-glow">Trending</span>
    <Card  img={tensorFlow} title="Tensor Flow" type="ML"/>
    <Card img={h20}  title="H20.ai" type="AutoML"/>
    </div>

    <div className="flex justify-evenly items-center  rounded-lg py-5 background-gradient-right-to-left my-10">
    <Card img={pyTorch}  title="PyTorch" type="DeepLearning"/>
    <Card img={rapidMiner}  title="RapidMiner" type="Analytics"/>
    <span className="text-5xl text-glow">For You</span>
    </div>
    <div className="flex justify-evenly items-center p-4 rounded-lg py-5 background-gradient-left-to-right">
    <span className="text-5xl text-glow">Featured</span>
    <Card img={dataRobot}  title="DataRobot" type="Automated"/>
    <Card img={mlFlow}  title="TensorFlow" type="ML"/>
    </div>

   </section>
   <Footer />
   </>
  );
}
