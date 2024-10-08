import MessageContainer from '../Message/MessageContainer'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex h-[80vh] w-full md:max-w-screen-md md:h-[550px] border-2 bg-white border-black rounded-lg overflow-hidden'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
