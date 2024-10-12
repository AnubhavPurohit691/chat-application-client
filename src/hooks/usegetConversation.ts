import  { useEffect, useState } from 'react'

const usegetConversation = () => {
  const [loading,setloading]=useState(false)
  const[conversation,setconversation]= useState<ConversationType[]>([])

  useEffect( ()=>{
    const getConversation=async()=>{
    setloading(true)
    try {
        const res=await fetch("http://localhost:3000/api/message/conversations")
        const data=await res.json()
        if(data.error){
            throw new Error(data.error)
        } 
        setconversation(data)
    } catch (error) {
        console.log(error)
    }
finally{
    setloading(false)
}
}
    getConversation()
  },[])

  return {loading,conversation}
}

export default usegetConversation
