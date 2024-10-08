import Messageinput from "./Messageinput"
import Messages from "./Messages"

const MessageContainer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="">
            <span className="">To:</span> <span className="text-black font-bold">Johndoe </span>
      </div>
      <Messages/>
      <Messageinput/>
    </div>
  )
}

export default MessageContainer
