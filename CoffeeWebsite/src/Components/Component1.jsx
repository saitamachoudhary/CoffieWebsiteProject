import '../Styles/Component1.css';
import NavBar from './NavBar';
import { IoPlayCircleSharp } from "react-icons/io5";

const Component1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#7F4625] to-[#A77C4E] relative">
      <div className='min-h-[100vh]'>
      <NavBar />
      {/* content1 */}
      <div className='background_img'></div>
        <div className='absolute top-72 left-52'>
          <h2 className=' text-white text-3xl font-extrabold'>Welcome!</h2>
          <h1 className='text-[4.9rem] text-white font-extrabold'>We serve the </h1>
          <h1 className='text-[4.9rem] text-white font-extrabold'>richest coffee</h1>
          <h1 className='text-[4.9rem] text-white font-extrabold'>in the city!</h1>
          <div className='flex items-center justify-center relative'>
            <IoPlayCircleSharp className=' text-white text-[2.5rem]' />
            <div>
              <h2 className='text-[1.5rem] text-white'>High quality in every cup of</h2 >
              <h2 className='text-[1.5rem] text-white'>coffee we serve...</h2>
            </div>
            {/* <img  src='src\image\hero-002-free-img.png' alt="" /> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Component1;