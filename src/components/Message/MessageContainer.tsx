import { useAuthContext } from "../../context/Authcontext"
import useConversation from "../zustand/useConversation"
import Messageinput from "./Messageinput"
import Messages from "./Messages"

const MessageContainer = () => {
  const{selectedConversation} = useConversation()
  return (
    <div className="w-full flex flex-col">
      {!selectedConversation?(<Nochat/>):(<><div className="">
            <span className="">To:</span> <span className="text-black font-bold">Johndoe </span>
      </div>
      <Messages/>
      <Messageinput/></>)}
    </div>
  )
}
function Nochat(){
  const {authUser}=useAuthContext()
  return <div>
        {authUser?.fullName}
  </div>
}
export default MessageContainer
