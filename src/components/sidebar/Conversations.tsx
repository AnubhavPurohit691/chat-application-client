import usegetConversation from '../../hooks/usegetConversation'
import Conversation from './Conversation'
const Conversations = () => {
  const{conversation,loading}=usegetConversation()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversation.map((Conver)=>(
        <Conversation key={Conver.id} Conversation={Conver}/>
      ))}
      {loading?(<span>loading</span>):null}
    </div>
  )
}

export default Conversations
