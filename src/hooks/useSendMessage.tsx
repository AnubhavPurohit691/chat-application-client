import { useState } from "react"
import useConversation from "../components/zustand/useConversation"

const useSendMessage=()=>{  
    const [loading,setloading]=useState(false)
    const {messages,setMessages,selectedConversation}=useConversation()
    const sendMessages=async(message:string)=>{
        if(!selectedConversation) return;
        setloading(true)
        try {
            const res=await fetch(`http://localhost:3000/api/message/send/${selectedConversation.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            })    
            const data=await res.json()
            if(data.error)throw new Error(data.error)
                setMessages([...messages,data])
        } catch (error) {
            console.log(error)
        }
        finally{
            setloading(false)
        }
    }
    return {sendMessages,loading}
}
export default useSendMessage