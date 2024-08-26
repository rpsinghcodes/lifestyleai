"use client";
import Header from "@/components/Header/Header"
import SearchBar from "@/components/SearchBar/SearchBar"
import Accordian from "@/components/Accordian/Accordian"
import { useState } from "react"
import Footer from "@/components/Footer/Footer";
const accordianData = [
        {question:"Can I contribute my own AI tools, videos, blogs, or articles?", answer:"We welcome contributions from the AI community. You can submit your own AI tools for consideration on the website."},
        {question:"How frequently is the content updated?", answer:"Our content is regularly updated to provide users with the latest tools, videos, blogs, and articles in the field of artificial intelligence."},
        {question:"How can I stay updated on new additions?", answer:"You can subscribe to our newsletter or follow us on social media to receive updates on new AI tools, videos, blogs, and articles added to the website."},
        {question:"Can I search for specific AI tools or content?", answer:"Yes, We provides a search function that allows users to easily find specific AI tools, videos, blogs, or articles based on keywords or categories."},
        {question:"Is there a community or forum for users to interact with each other?", answer:"We have a community or forum section where users can interact, share insights, ask questions, and collaborate on AI-related projects."},
        {question:"Is there a support team available to assist with any issues or questions I may have?", answer:"We have a dedicated support team that can assist users with any technical issues, questions, or feedback related to the website and its content."},    
]

export default function FAQ(){    
    const [isOpen, setIsOpen] = useState(null);
    function handleAccordian(index){
        setIsOpen((prevIndex) => (prevIndex === index ? null : index));
    }
    return(
        <>
        <Header />
        <SearchBar />
        <section className="px-[298px] py-[100px] text-white">
            <h1 className="text-5xl pb-[85px]">FAqs</h1>
            {/* Accordian */}
            <div>
                {accordianData.map((item, index) =>  <Accordian key={item.question} {...item} isOpen={isOpen === index}  onClick={() =>handleAccordian(index)} />)}
               
            </div>

        </section>
        <Footer />
        </>
    )
}