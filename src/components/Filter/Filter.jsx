"use client"

import { useState } from "react"

export default function Filter({open, close}){
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isPriceOpen, setPriceOpen] = useState(false);
    const [isSupportOpen, setSupportOpen] = useState(false);
    const [isLanguageSupportOpen, setLanguageSupportOpen] = useState(false);
    const [isLicenceTypeOpen, setLicenceTypeOpen] = useState(false);
    const [isSecurityFeatureseOpen, setSecurityFeatureseOpen] = useState(false);
    return (
        <dialog open={open} className="min-w-[1000px] text-white rounded-[77px] overflow-hidden z-20">
            <div className="flex justify-around items-center  py-7 pricing-gradient">
                <span></span>
            <h1 className="text-3xl">Filters</h1>
            <span className="relative inline-block w-6 h-6" onClick={() => close(false)}>
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg rotate-45 bg-white"></span>
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-[3px] rounded-lg -rotate-45 bg-white"></span>
            </span>

            </div>
            <div className="bg-[#116466] font-sqrt-roman text-2xl text-left py-[15px] px-[60px]">
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">Categories</label>
                <div onClick={() => setCategoryOpen(!isCategoryOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white ${isCategoryOpen ? "rotate-[226deg]":"rotate-[deg]"}`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isCategoryOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">ChatBots</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Machine Learning</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Data Analytics</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Healthcare</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Finance</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Marketing</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">E-Commerce</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Education</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Creative Tools</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Legal</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Transportation</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Agriculture</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Computer Vision</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Security</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Human Resources</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Real Estate</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Energy</label>
                    </span>

                </div>
                <hr className="my-5" />
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">Price</label>
                <div onClick={() => setPriceOpen(!isPriceOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white transform ${isPriceOpen?"rotate-[226deg]":"rotate-[45deg]"}`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isPriceOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Free</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Freemium</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Subscription</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">One-time pay</label>
                    </span>                    

                </div>
                <hr className="my-5" />
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">Support</label>
                <div onClick={() => setSupportOpen(!isSupportOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white transform rotate-[${isSupportOpen ? "45" :"226"}deg]`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isSupportOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Email Support</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Live Chat</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Community Forum</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Phone Support</label>
                    </span>                    

                </div>
                <hr className="my-5" />
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">Languages Supported</label>
                <div onClick={() => setLanguageSupportOpen(!isLanguageSupportOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white transform rotate-[${isLanguageSupportOpen ? "45" :"226"}deg]`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isLanguageSupportOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">English</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Spanish</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Chinese</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Multilingual</label>
                    </span>                    

                </div>
                <hr className="my-5" />
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">License type</label>
                <div onClick={() => setLicenceTypeOpen(!isLicenceTypeOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white transform rotate-[${isLicenceTypeOpen ? "45" :"226"}deg]`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isLicenceTypeOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Open Source</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Proprietary</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Subscription</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Freemium</label>
                    </span>                    

                </div>
                <hr className="my-5" />
                <div className="flex justify-between items-center my-[20px]">
                <label htmlFor="Categories">Security Features</label>
                <div onClick={() => setSecurityFeatureseOpen(!isSecurityFeatureseOpen)} className={`w-5 h-5 border-b-4 border-r-4 border-white transform rotate-[${isSecurityFeatureseOpen ? "45" :"226"}deg]`}></div>
                </div>
                <div className={`px-[14px] grid grid-cols-4 gap-y-6 items-center  font-sqrt-roman text-xl ${!isSecurityFeatureseOpen && "hidden"}`}>
                <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Data Encryption</label>
                    </span>
                    <span className="flex items-center ">
                        <input type="radio" name="ChatBots" className="h-7 w-7 bg-transparent border" /> 
                        <label htmlFor="ChatBots">Access Control</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Authentication</label>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <input type="radio" name="ChatBots" className="h-7 w-7" /> 
                        <label htmlFor="ChatBots">Compliance Cert.</label>
                    </span>                    

                </div>
                <hr className="my-5" />

                <div className="flex items-center justify-end  mt-[400px] gap-7">
                    <button className="border-2 rounded-[15px] px-[15px] py-1">Clear</button>
                    <button className="border-2 rounded-[15px] px-[15px] py-1">Done</button>
                </div>
            </div>
        </dialog>
    )
}