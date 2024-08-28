export default function SavedTools(){
    return(
        <div className="flex h-full w-full">
            <span className="h-[95%] w-[2px] my-[50px] bg-white "> </span>
        
        <div className="p-10 w-full">
            <h1 className="text-5xl font-sqrt-roman text-[#ADADAD]">Saved Tools</h1>
            <hr className="w-full mt-10" />
            <section className="py-[86px]">
            <div class="flex items-center bg-gradient-to-r from-[#1a2e7b] to-[#2b4398] text-white px-4 py-2 rounded-full relative shadow-lg">
    {/* <!-- Logo --> */}
    <div class="bg-white rounded-full p-2">
        <p>Image</p>
    </div>
    
    {/* <!-- Text Content --> */}
    <div class="ml-4">
        <p class="font-sqrt font-bold text-lg">Chat GPT</p>
        <p class="font-sqrt-roman text-sm">Conversational</p>
    </div>
    
    {/* <!-- Dots --> */}
    <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>
    
    {/* <!-- Flag Tail --> */}
    <div class="absolute right-[-10px] h-full w-10 bg-gradient-to-r from-[#2b4398] to-transparent clip-path-tail"></div>
</div>

            </section>
        </div>
        </div>
    )
}