import "../Styles/Component1.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from './NavBar';
import { IoPlayCircleSharp } from "react-icons/io5";

const Component1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#7F4625] to-[#A77C4E] relative">
      <div className='min-h-screen'>
        <NavBar />
        {/* <div className=''>
        <div className='background_img'></div>
        <div className='relative top-72 left-40 inline-block'>
          <h2 className=' text-white text-3xl font-extrabold'>Welcome!</h2>
          <h1 className='text-[4.7rem] text-white font-extrabold'>We serve the </h1>
          <h1 className='text-[4.7rem] text-white font-extrabold'>richest coffee in</h1>
          <h1 className='text-[4.7rem] text-white font-extrabold'>the city!</h1>
          <div className='flex items-center justify-center relative top-[-130px]'>
            <IoPlayCircleSharp className=' text-white text-[2.5rem]' />
            <div className='ml-4'>
              <h2 className='text-[1.4rem] text-white'>High quality in every cup of coffee we serve...</h2 >
              {/* <h2 className='text-[1.4rem] text-white'>coffee we serve...</h2> */}
            </div>
            <img className='relative left-40 z-[1]' src='src\image\hero-002-free-img.png' alt="" />
          </div>
        </div>
       </div> */}
      </div>
      {/* drinks section */}
      <div className='min-h-screen flex justify-center items-center px-40'>
        <div className='h-[100vh] w-[100vw]'>
          <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='text-[4.7rem] text-white'>Drinks</h1>
            <div className='h-[0.8px] w-[60px] bg-white mb-3'></div>
            <p className='text-[#D8C6B8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,</p>
            <p className='text-[#D8C6B8] mb-3'>luctus nec ullamcorper mattis.</p>
            <div className='flex items-center'>
              <FaAngleRight className='text-white' />
              <p className='text-white'>All Drinks</p>
            </div>
          </div>
          <div className="flex justify-between item-center">
            <div className="h-[540px] w-[350px] bg-gradient-to-tr from-[#9B6638] to-[#C8A277] flex flex-col items-center justify-center rounded-[20px] px-3">
              <img
                className=" mb-5"
                src="src\image\product-01-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 4.20</h3>
              <h1 className="text-white text-[3rem] mb-3">Cappuccino</h1>
              <p className="text-center text-[#D8C6B8] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
            <div className="h-[540px] w-[350px] bg-gradient-to-tr from-[#4F9486] to-[#C8A277] flex flex-col items-center justify-center rounded-[20px] px-3">
              <img
                className=" mb-5"
                src="src\image\product-02-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 3.15</h3>
              <h1 className="text-white text-[3rem] mb-3">Cafe Latte</h1>
              <p className="text-center text-[#D8C6B8] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
            <div className="h-[540px] w-[350px] bg-gradient-to-tr from-[#27201E] to-[#453C3A] flex flex-col items-center justify-center rounded-[20px] px-3">
              <img
                className=" mb-5"
                src="src\image\product-03-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 2.75</h3>
              <h1 className="text-white text-[3rem] mb-3">Dark Coffee</h1>
              <p className="text-center text-[#D8C6B8] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Croissants Section */}

      <div className='flex items-center justify-center px-40'>
       <div className='w-[100vw] flex items-center justify-between'>
       <div>
          <h4 className='text-[#D8C6B8] text-[1.2rem] font-semibold'>From $2.50</h4>
          <h1 className='text-white text-[4rem] font-semibold mb-3'>Croissants</h1>
          <div className='h-[0.8px] w-[60px] bg-white mb-6'></div>
          <h2 className='text-white text-[1.8rem] font-semibold'>Duis aute irure quasi</h2>
          <p className='text-[#D8C6B8] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
          <div className='flex items-center'>
            <FaAngleRight className='text-white' />
            <p className='text-white'> All Croissants</p>
          </div>
        </div>
        <div>
          <img src="src\image\croissant-01-free-img.png" alt="" />
        </div>
       </div>
      </div>

      {/* Buy from Home section */}

      <div className='px-40 flex items-center justify-center'>
        <div className='bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] flex items-center justify-center rounded-[20px] shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px,rgba(0,0,0,0.3)_0px_18px_36px_-18px]'>
          <div>
            <img src="src\image\coffee-01-free-img.png" alt="" />
          </div>
          <div>
          <div className='w-[500px]'>
          <h4 className='text-[#D8C6B8] text-[1.2rem] font-semibold'>From $19.50</h4>
          <h1 className='text-white text-[4rem] font-semibold'>Buy for</h1>
          <h1 className='text-white text-[4rem] font-semibold mb-3'>Home</h1>
          <div className='h-[0.8px] w-[60px] bg-white mb-6'></div>
          <h2 className='text-white text-[1.8rem] font-semibold'>Totam rem aperiam</h2>
          <p className='text-[#D8C6B8]'>Lorem ipsum dolor sit amet, consectetur</p>
          <p className='text-[#D8C6B8] mb-8'>adipiscing elit. Ut elit tellus.</p>

              <div className="flex items-center">
                <FaAngleRight className="text-white" />
                <p className="text-white">All Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Component1;
