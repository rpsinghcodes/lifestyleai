/*

This component display the pros and cons of a tool and is being used in the 'tool/[toolName]' route

*/

export default function ProsAndCons(){
    return(
        <div className="px-32  text-base laptop:text-xs font-sqrt-roman">
              <span className="font-sqrt text-xl laptop:text-base">Pros</span>
              <p className="py-5">- Generating content from scratch based on your keywords or prompts.</p>
              <p className="py-5">- Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</p>
              <p className="py-5">- Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</p>
              <p className="py-5 mb-[65px]">- Enhancing your texts with synonyms, adjectives, or metaphors to make them more expressive or persuasive.</p>

              <span className="font-sqrt text-xl">Cons</span>
              <p className="py-5">- Generating content from scratch based on your keywords or prompts.</p>
              <p className="py-5">- Rewriting or summarizing your existing texts to make them more clear, concise, or engaging.</p>
              <p className="py-5">- Checking your texts for grammar, spelling, or punctuation errors and suggesting corrections.</p>
              <p className="py-5">- Enhancing your texts with synonyms, adjectives, or metaphors to make them more expressive or persuasive.</p>

              </div>
    )
}