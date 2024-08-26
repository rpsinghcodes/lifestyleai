export default function Accordian({question, answer, isOpen, onClick}){
        return (
        <div onClick={onClick}>
                <div className="flex justify-between items-center gap-36">
                    <h1 className="text-4xl font-sqrt">{question}</h1>
                    <div class="relative w-12 h-12  flex justify-center items-center transition-all">
    
                <div class="absolute w-8 h-2 bg-white rounded-full"></div>
                
                <div class={`absolute w-2 h-8 bg-white rounded-full ${isOpen && " rotate-90"}`}></div>
            </div>
                        
                </div>
                <p className={`pt-[15px] pb-[30px] w-[1047px] ${!isOpen ? "hidden" : ''}`}>{answer}</p>
                <hr className="h-0.5 w-[1324px] my-[30px]" />
                </div>
    )
}