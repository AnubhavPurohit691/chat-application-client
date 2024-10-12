import { useState } from "react"
import useSendMessage from "../../hooks/useSendMessage"

const Messageinput = () => {
  const [message,setmessage]=useState("")
 const{loading,sendMessages}= useSendMessage()
 async function handlesubmit (e:React.FormEvent){
e.preventDefault()
if(!message.trim())return;
 await sendMessages(message)
 setmessage("")
  }
  return (
    <div>
      <form className='px-4 mb-3' onSubmit={handlesubmit}>
        <div className='w-full flex'>
            <input type="text" className='border-2 border-black w-full ' value={message} onChange={(e)=>setmessage(e.target.value)} />
            <button className='bg-black text-white '>{loading?(<div>loading...</div>):(<div>Send</div>)}</button>
        </div>
      </form>
    </div>
  )
}

export default Messageinput
