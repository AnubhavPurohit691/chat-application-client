import Searchinput from './Searchinput'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='border-r border-black p-1 md:p-4 flex flex-col w-44 md:w-1/2'>
       <Searchinput/>
       <div className=' px-3 border-2 border-black'></div>
       <Conversations/>
        <Logout/>
       
    </div>
  )
}

export default Sidebar
