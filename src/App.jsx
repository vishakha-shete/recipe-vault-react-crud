import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  
  return (
    <div className='py-10 px-[10%] w-100vw h-100vh text-white font-thin bg-gray-800'>
      <ToastContainer />
      <Navbar/>
      <MainRoutes />   
     </div>
  )
}

export default App
