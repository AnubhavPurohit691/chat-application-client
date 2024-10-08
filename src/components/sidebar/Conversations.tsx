import { DUMMY_CONVERSATIONS } from '../dummydata'
import Conversation from './Conversation'
const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {DUMMY_CONVERSATIONS.map((Conver)=>(
        <Conversation key={Conver.id} Conversation={Conver}/>
      ))}
    </div>
  )
}

export default Conversations
