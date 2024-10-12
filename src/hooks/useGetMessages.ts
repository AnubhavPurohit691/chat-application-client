import { useEffect, useState } from "react"
import useConversation from "../components/zustand/useConversation"

const useGetMessages=()=>{
const[loading,setloading]=useState(false)
const{messages,selectedConversation,setMessages}=useConversation()

useEffect(()=>{
    const getMessages=async()=>{
        if(!selectedConversation)return;
        setloading(true)
        setMessages([])
        try {
            const res=await fetch(`http://localhost:3000/api/messages/${selectedConversation.id}`)
            const data=await res.json()
            if(!res.ok)throw new Error(data.error||"an error occured")
                setMessages(data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setloading(false)
        }
    }
    getMessages()
},[selectedConversation,setMessages])
return {messages,loading}
}
export default useGetMessages