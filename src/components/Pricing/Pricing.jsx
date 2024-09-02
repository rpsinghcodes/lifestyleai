export default function Pricing(){
    return(
        <div className="px-32  flex justify-between font-sqrt-roman">
          <div className="rounded-[60px] w-[471px] flex flex-col space-between items-center justify-between pricing-gradient px-10 py-6">
            <span className="text-4xl">Basic</span>
            <ul className="text-2xl pt-12 ">
              <li className="pb-10">- Generating content from scratch </li>
            </ul>
            <div className="w-full flex flex-col items-center">
              <hr className="w-full" />
              <span className="text-4xl pt-6">Free</span>
            </div>
          </div>
          <div className="rounded-[60px] w-[471px] flex flex-col space-between items-center justify-between pricing-gradient px-10 py-6 ">
            <span className="text-4xl ">Standard</span>
            <ul className="text-2xl pt-12 ">
              <li className="pb-10">- Generating content from scratch </li>
              <li className="pb-10">- Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</li>
              <li className="pb-10">- Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</li>
            </ul>
            <div className="w-full flex flex-col items-center">
              <hr className="w-full" />
              <span className="text-4xl pt-6">$5/month</span>
            </div>
          </div>
          <div className="rounded-[60px] w-[471px] flex flex-col space-between items-center justify-between pricing-gradient px-10 py-6 ">
            <span className="text-4xl">Premium</span>
            <ul className="text-2xl pt-12 ">
              <li className="pb-10">- Generating content from scratch </li>
<li className="pb-10">- Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</li>
<li className="pb-10">- Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</li>

<li className="pb-10">- Enhancing your texts with synonyms, adjectives, or metaphors to make them more expressive or persuasive.</li>
            </ul>
            <div className="w-full flex flex-col items-center">
              <hr className="w-full" />
              <span className="text-4xl pt-6">$10/month</span>
            </div>
          </div>

        </div>
    )
}