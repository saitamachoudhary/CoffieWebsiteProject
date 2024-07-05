import "../Styles/Component1.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from './NavBar';
import { IoPlayCircleSharp } from "react-icons/io5";

const Component1 = () => {
  return (
    <div className="h-auto w-full bg-gradient-to-r from-[#7F4625] to-[#A77C4E] relative">
      <div className=' pb-40'>
        <NavBar />
        <div className='flex'>
        <div className='relative top-72 left-40 inline-block'>
          <h2 className=' text-white text-3xl font-extrabold'>Welcome!</h2>
          <h1 className='text-[4.7rem] text-white font-extrabold'>We serve the </h1>
          <h1 className='text-[4.7rem] text-white font-extrabold'>richest coffee in</h1>
          <h1 className='text-[4.7rem] text-white font-extrabold'>the city!</h1>
          <div className='flex items-center justify-center relative top-[-130px]'>
            <IoPlayCircleSharp className=' text-white text-[2.5rem]' />
            <div className='ml-4'>
              <h2 className='text-[1.4rem] text-white'>High quality in every cup of coffee we serve...</h2 >
            </div>
            <img className='relative left-40 z-[1]' src='src\image\hero-002-free-img.png' alt="" />
          </div>
        </div>
        <div className='background_img'></div>
       </div>
      </div>
      {/* drinks section */}
      <div className="flex justify-center items-center px-40">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-10">
            <h1 className="text-[4.7rem] text-white">Drinks</h1>
            <div className="h-[0.8px] w-[60px] bg-white mb-3"></div>
            <p className="text-[#D8C6B8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus,
            </p>
            <p className="text-[#D8C6B8] mb-3">
              luctus nec ullamcorper mattis.
            </p>
            <div className="flex items-center">
              <FaAngleRight className="text-white" />
              <p className="text-white">All Drinks</p>
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

      <div className="flex items-center justify-center px-40">
        <div className="w-full flex items-center justify-between">
          <div className="pl-16">
            <h4 className="text-[#D8C6B8] text-[1.2rem] font-semibold">
              From $2.50
            </h4>
            <h1 className="text-white text-[4rem] font-semibold mb-3">
              Croissants
            </h1>
            <div className="h-[0.8px] w-[60px] bg-white mb-6"></div>
            <h2 className="text-white text-[1.8rem] font-semibold">
              Duis aute irure quasi
            </h2>
            <p className="text-[#D8C6B8] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
            <div className="flex items-center">
              <FaAngleRight className="text-white" />
              <p className="text-white"> All Croissants</p>
            </div>
          </div>
          <div>
            <img
              className=" ml-40"
              src="src\image\croissant-01-free-img.png"
              alt=""
            />
          </div>
        </div>
        {/* <div className="bg-[url('src/image/croissant-01-free-img.png')]"></div> */}
      </div>

      {/* Buy from Home section */}

      <div className="px-40 flex items-center justify-center">
        <div className="w-full bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] flex items-center justify-center rounded-[20px] shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px,rgba(0,0,0,0.3)_0px_18px_36px_-18px]">
          <div>
            <img src="src\image\coffee-01-free-img.png" alt="" />
          </div>
          <div>
            <div className="w-[500px]">
              <h4 className="text-[#D8C6B8] text-[1.2rem] font-semibold">
                From $19.50
              </h4>
              <h1 className="text-white text-[4rem] font-semibold">
                Buy for Home
              </h1>
              {/* <h1 className='text-white text-[4rem] font-semibold mb-3'>Home</h1> */}
              <div className="h-[0.8px] w-[60px] bg-white mb-6"></div>
              <h2 className="text-white text-[1.8rem] font-semibold">
                Totam rem aperiam
              </h2>
              <p className="text-[#D8C6B8]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-[#D8C6B8] mb-8">
                adipiscing elit. Ut elit tellus.
              </p>

              <div className="flex items-center">
                <FaAngleRight className="text-white" />
                <p className="text-white">All Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="min-h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat mt-20 flex items-center justify-center pb-10">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[4.7rem] text-white">About</h1>
            <div className="h-[0.8px] w-[60px] bg-white mb-3"></div>
            <p className="text-[#D8C6B8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus,
            </p>
            <p className="text-[#D8C6B8] mb-3">
              luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="w-[300px] grid gap-1">
              <h4 className="text-white text-lg font-bold">
                Tailored-Made Coffee
              </h4>
              <h1 className="text-white text-5xl font-bold leading-snug">
                We offer a unique coffee house environment unlike any other in
                N.Y.
              </h1>
            </div>
            <div className="grid gap-8 w-[400px]">
              <h3 className="text-white text-xl font-bold">
                The perfect place to enjoy your coffee
              </h3>
              <p className="text-[#D8C6B8]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-[#D8C6B8]">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p className="text-[#D8C6B8]">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex items-center">
                <FaAngleRight className="text-white" />
                <p className="text-white">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {brista party section} */}

      <div className="bg-hero2-pattern bg-center bg-no-repeat pb-36">
        <div className="rounded-lg max-w-[1200px] mx-auto flex  shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px,rgba(0,0,0,0.3)_0px_18px_36px_-18px] relative">
          <div className="rounded-l-2xl flex items-center bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] pl-[50px] pr-[20px] py-[40px] w-[60%]">
            <div className="w-[58%]">
              <h1 className="text-white text-[6.2rem] font-semibold leading-none mb-10">
                Barista Party
              </h1>
              <div className="h-[0.8px] w-[60px] bg-white mb-10"></div>
              <h2 className="text-white text-[2rem] font-semibold">
                Every Friday & Saturday
              </h2>
              <p className="text-[#D8C6B8] text-[1.1rem] mb-10">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex items-center">
                <FaAngleRight className="text-white" />
                <p className="text-white text-[1.1rem] ml-2">
                  Make Reservation
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-64 top-[-20px] w-[60%] flex justify-center">
            <img
              className="w-[650px] h-auto"
              src="src/image/bg-02-free-img (1).png"
              alt="Cup of coffee"
            />
          </div>

          <div className="rounded-r-2xl bg-gradient-to-tr from-[#C8A277] to-[#4F9486] p-14 w-[40%]">
            <h1 className="text-white text-[3.3rem]">Location</h1>
            <div className="h-[2px] w-full bg-white mb-6"></div>
            <p className="text-[#D8C6B8] text-[1.1rem] mb-6">
              You can find us consectetur elit, sed do eiusmod tempor incididun.
            </p>
            <div className="flex items-center mb-6">
              <FaLocationDot className="text-white text-[1.5rem] mr-2" />
              <div>
                <h3 className="text-white text-[1.3rem]">Address</h3>
                <p className="text-white text-[1.1rem]">
                  123 Fifth Avenue, New York, NY 10160
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaAngleRight className="text-white" />
              <p className="text-white text-[1.1rem] ml-2">
                See On Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* footer section */}

       <div className="flex items-center justify-center">
       <footer className="text-white py-8 w-[1000px] border-t border-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <h2 className="text-xl font-semibold mb-4">About us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="bg-white p-2 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="bg-white p-2 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="bg-white p-2 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p>13 Fifth Avenue, New York, NY 10160</p>
            <p>929-242-6868</p>
            <p>contact@info.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Opening hours</h2>
            <p>Mon – Fri — 8AM – 8PM</p>
            <p>Saturday — 8AM – 4PM</p>
            <p>Sunday — 8AM – 2PM</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>Copyright © 2024 Coffee Shop | Powered by Coffee Shop</p>
        </div>
      </footer>
       </div>
      </div>
  );
};

export default Component1;
