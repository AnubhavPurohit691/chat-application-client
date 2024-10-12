import useConversation from "../zustand/useConversation"

const Conversation = ({Conversation}:{Conversation:ConversationType}) => {
  const {setSelectedConversation,selectedConversation}=useConversation()
  const isSelected=selectedConversation?.id === Conversation.id
  const isOnline =false
  return (
    <div className=' flex border-2 mb-2   border-black hover:text-white hover:bg-black'>
      <div className={`flex  items-center rounded p-2 py-1 cursor-pointer${isSelected?"bg-sky-500":""}`} 
      onClick={()=>setSelectedConversation(Conversation)}
      >
        <div className={`${isOnline?"":""}`}> 
            <div className='w-8 md:w-12 rounded-full'>
                <img src={Conversation.profilePic} alt='user'/>
            </div>
        </div>
      </div>
      <div className=' '>
        <div className='flex py-4 justify-between'>
            <p className='font-bold   text-sm md:text-md'>
                {Conversation.fullName}
            </p>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Conversation
