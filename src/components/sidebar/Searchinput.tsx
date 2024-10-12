import { useState } from "react"
import usegetConversation from "../../hooks/usegetConversation"
import useConversation from "../zustand/useConversation"
const{setSelectedConversation}=useConversation()

const Searchinput = () => {
  const[search,setsearch]=useState("")
  const{conversation} =usegetConversation()
  async function handlesubmit(e:React.FormEvent){
e.preventDefault()
if(!search)return
const Conversation=conversation.find((c:ConversationType)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
if(Conversation){
  setSelectedConversation(Conversation)
  setsearch("")
}
  }
  return (
    <form className='flex items-center justify-center gap-2 mb-3' onSubmit={handlesubmit}>
        <input type="text" placeholder='Search' className=' text-center border-black border-2 rounded-lg'
        value={search} onChange={(e)=>setsearch(e.target.value)}
        />
        <button type='submit' className=' text-center bg-black text-white px-4 rounded-lg'>Search</button>
    </form>
  )
}

export default Searchinput
