/*

This component allow user to search for the desired AI tool and is widely used in many pages

*/

export default function SearchBar({onChange}){
    return <div className="relative w-full max-w-2xl mx-auto mt-8 ">
    <input
      type="text"
      placeholder="I want to create a draft for a presentation"
      className="w-full py-4 px-6 text-white bg-transparent border-2 border-[#FFCB9A] rounded-full outline-none outline-2 placeholder-gray-400 focus:ring-2 focus:ring-[#FFCB9A] focus:border-transparent shadow-glow"
      onChange={onChange}
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
      SEARCH
    </button>
  </div>
}