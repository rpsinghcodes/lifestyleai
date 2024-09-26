import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function SubmitTool() {
    const inputClassName = "w-full py-4 rounded-[82px] bg-transparent border-[3px] px-[50px] font-sqrt-roman text-sm laptopSmall:text-xs";
    function Input({placeholder, name}){
        return <input type="text" placeholder={placeholder} name={name} className="w-full py-4 rounded-[82px] bg-transparent border-[3px] px-[50px] font-sqrt-roman text-sm" />
    }
    return(
        <>
            <Header />
            <section className="py-[50px] px-[500px] laptopSmall:px-[200px]">
                <h1 className="text-xl ">Guidelines</h1>
                <ul className="text-sm font-sqrt-roman flex flex-col gap-10 py-[30px] list-disc">
                    <li>Provide a detailed description of your AI tool, covering its main features, functionalities, and use cases. Explain what problems it solves and how it benefits users.</li>

                    <li>Include thorough user documentation, such as installation guides, usage instructions, and FAQs.</li>

                    <li>Specify compatibility requirements, Detail any integration options with other tools or platforms, including APIs, SDKs, and plug-ins.</li>

                    <li>Clearly state the licensing terms and conditions, Provide details on different pricing plans, including any free trials or premium features.</li>

                    <li>Ensure users have clear instructions on how to get help and provide feedback. Include contact details and response time expectations.</li>
                </ul>
            </section>
            <section className="py-[50px] px-[500px] laptopSmall:px-[200px]">
                <h1 className="text-center text-2xl laptopSmall:text-base pb-[30px]">Submit a Tool</h1>
                <div className="flex flex-col gap-[30px] text-sm">
                    <input type="text" placeholder="Full Name" name="fullName" className={inputClassName} />
                    <input type="email" placeholder="Email" name="email" className={inputClassName} />
                    <input type="text" placeholder="Tool Name" name="toolName" className={inputClassName} />
                    <input type="url" placeholder="Tool URL" name="toolUrl" className={inputClassName} />
                    <input type="text" placeholder="Tool Tags" name="toolTags" className={inputClassName} />
                    <input type="text" placeholder="Pricing Models" name="pricingModels" className={inputClassName} />
                    <textarea  placeholder="Tool Description" name="toolDescription" className={inputClassName} />
                
                
                </div>
                <div className="flex justify-center">
                    <button className="px-[15px] py-[7px] self-center rounded-full invite-gradient my-[30px]">Submit</button>
                </div>
            </section>
            <Footer />
        </>
    )
}