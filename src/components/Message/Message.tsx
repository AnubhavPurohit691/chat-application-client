import { useAuthContext } from "../../context/Authcontext";

const Message = ({message}:{message:MessageType}) => {
  const{authUser}=useAuthContext()
  const fromMe = message.senderId===authUser?.id;
  const chatClass=fromMe?"text-start":"justify-end"
  const bubbleBg=fromMe?'bg-blue-500 rounded-xl py-2 px-2 my-4 mr-2':""
    return (
    <div className={`flex ${chatClass}`}>
        <p className={`${bubbleBg} text-sm  md:text-md`}> {message.body}</p>
        <span className='flex gap-1 items-center'>{message.createdAt}</span>
    </div>
  )
}

export default Message
