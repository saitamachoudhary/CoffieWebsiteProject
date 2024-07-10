import "../Styles/Component1.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from "./NavBar";
import { IoPlayCircleSharp } from "react-icons/io5";

const Component1 = () => {
  return (
    <div className="h-auto w-full bg-gradient-to-r from-[#7F4625] to-[#A77C4E] relative">
      {/* Hero section */}
      <div className="h-auto lg:pb-36 md:pb-44 pb-24">
        <NavBar />
        <div className="flex justify-between lg:max-w-full w-full">
          <div className="relative  lg:top-72 md:top-60 top-36 lg:left-20 inline-block lg:w-[50%] lg:p-0 md:pl-3 p-3">
            <h2 className=" text-white text-3xl font-extrabold w-[70%]">Welcome!</h2>
            <h1 className="lg:text-[4.7rem] md:text-[3.5rem] text-[2.2rem] lg:mb-0 md:mb-0 mb-10 text-white font-extrabold">
              We serve the richest coffee in the city!
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between lg:relative top-[-130px]">
              <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center">
              <IoPlayCircleSharp className=" text-white text-[2.5rem]" />
                <h2 className="lg:ml-4 text-[1.2rem] text-white inline-block">
                  High quality in every cup of coffee we serve...
                </h2>
              </div>
              <img
                className="lg:relative w-[400px] top-[-40px] left-72 z-[1]"
                src="src\image\hero-002-free-img.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-hero3-pattern bg-white lg:relative absolute min-h-screen lg:w-[43%] w-full bg-cover bg-no-repeat opacity-25 z-0"></div>
        </div>
      </div>




      {/* drinks section */}
      <div className="flex flex-col min-h-screen lg:flex-row md:flex-row items-center justify-center px-5 py-10 w-full">
        <div className="lg:max-w-[1200px] w-full">
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <h1 className="text-6xl lg:text-[4.7rem] font-bold text-white mb-5">
              Drinks
            </h1>
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
              <p className="text-white ml-1">All Drinks</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center space-y-5 lg:space-y-0 lg:space-x-5 md:space-x-5">
            <div className="w-full lg:mx-w-1/4 h-auto bg-gradient-to-tr from-[#9B6638] to-[#C8A277] flex flex-col items-center justify-center rounded-[20px] px-3 py-3">
              <img
                className="mb-3 h-auto"
                src="src/image/product-01-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 4.20</h3>
              <h1 className="text-white text-[2rem] lg:text-[3rem] mb-3">
                Cappuccino
              </h1>
              <p className="text-center text-[#D8C6B8] mb-10 md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[45px] lg:h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
            <div className="w-full lg:mx-w-1/4 h-auto bg-gradient-to-tr from-[#4F9486] to-[#C8A277] flex flex-col items-center justify-center rounded-[20px] px-3 py-3">
              <img
                className="mb-3 h-auto"
                src="src/image/product-02-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 3.15</h3>
              <h1 className="text-white text-[2rem] lg:text-[3rem] mb-3">
                Cafe Latte
              </h1>
              <p className="text-center text-[#D8C6B8] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[45px] lg:h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
            <div className="w-full lg:mx-w-1/4 h-auto bg-gradient-to-tr from-[#27201E] to-[#453C3A] flex flex-col items-center justify-center rounded-[20px] px-3 py-3">
              <img
                className="mb-3 h-auto"
                src="src/image/product-03-free-img.png"
                alt=""
              />
              <h3 className="text-white text-[1.5rem]">$ 2.75</h3>
              <h1 className="text-white text-[2rem] lg:text-[3rem] mb-3">
                Dark Coffee
              </h1>
              <p className="text-center text-[#D8C6B8] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <button className="bg-white w-full h-[45px] lg:h-[55px] rounded-[10px]">
                Get Delivery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Croissants Section */}

      <div className="flex items-center justify-center w-full pb-10">
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between px-10 lg:max-w-full">
          <div className="left_div  md:pl-5 text-center lg:text-left md:text-left">
            <h4 className="text-[#D8C6B8] text-[1.2rem] font-semibold">
              From $2.50
            </h4>
            <h1 className="text-white text-[4rem] font-semibold mb-3">
              Croissants
            </h1>
            <div className="h-[0.8px] w-[60px] bg-white mb-6 mx-auto lg:mx-0 md:mx-0"></div>
            <h2 className="text-white text-[1.8rem] font-semibold">
              Duis aute irure quasi
            </h2>
            <p className="text-[#D8C6B8] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
            <div className="flex items-center justify-center lg:justify-start md:justify-start">
              <FaAngleRight className="text-white" />
              <p className="text-white"> All Croissants</p>
            </div>
          </div>
          <div className="right-div">
            <img
              className="h-auto"
              src="src\image\croissant-01-free-img.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Buy from Home section */}

      <div className="px-4 flex items-center justify-center">
        <div className=" w-full lg:max-w-6xl bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] flex flex-col md:flex-row items-center justify-center rounded-[20px] shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px,rgba(0,0,0,0.3)_0px_18px_36px_-18px] p-6">
          <div className="w-auto h-auto">
            <img
              src="src/image/coffee-01-free-img.png"
              alt=""
              className="w-full max-w-md md:max-w-none"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col lg:items-start md:items-start items-center lg:justify-start md:justify-start justify-center">
              <h4 className="text-[#D8C6B8] text-[1rem] sm:text-[1.2rem] font-semibold">
                From $19.50
              </h4>
              <h1 className="text-white text-[3rem] md:text-[4rem] font-semibold">
                Buy for Home
              </h1>
              <div className="h-[0.8px] w-[40px] sm:w-[60px] bg-white mb-4 sm:mb-6"></div>
              <h2 className="text-white text-[1.5rem] md:text-[1.8rem] font-semibold">
                Totam rem aperiam
              </h2>
              <p className="text-[#D8C6B8] text-[1rem] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>

              <div className="flex items-center">
                <FaAngleRight className="text-white" />
                <p className="text-white ml-2">All Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
     
      <div className="min-h-screen bg-hero-pattern bg-center bg-contain bg-no-repeat mt-20 flex items-center justify-center pb-10">
        <div className="w-full max-w-5xl px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[3.5rem] md:text-[4.7rem] text-white">
              About
            </h1>
            <div className="h-[0.8px] w-[60px] bg-white mb-3"></div>
            <p className="text-[#D8C6B8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus,
            </p>
            <p className="text-[#D8C6B8] mb-3">
              luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:px-0 md:px-36 px-7">
            <div className="w-full lg:w-[300px] grid gap-1">
              <h4 className="text-white text-lg font-bold">
                Tailored-Made Coffee
              </h4>
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                We offer a unique coffee house environment unlike any other in
                N.Y.
              </h1>
            </div>
            <div className="grid gap-4 lg:gap-8 md:gap-8 w-full lg:w-[400px] lg:px-0 md:px-0 px-10">
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
                <p className="text-white ml-2">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {brista party section} */}

      <div className="bg-hero2-pattern bg-center bg-no-repeat pb-36 px-3 md:px-3 lg:px-0">
        <div className=" lg:max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row shadow-[rgba(0,0,0,0.3)_0px_18px_36px_-18px] relative">
         <div className="md:flex lg:bg-gradient-to-r from-[#C59D70] to-[#C59D70] md:bg-gradient-to-r from-[#C59D70] to-[#C59D70] bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] bg lg:rounded-l-2xl rounded-t-2xl">
         <div className="lg:rounded-l-2xl rounded-t-2xl flex items-center bg-gradient-to-r from-[#AE7E4E] to-[#C59D70] lg:pl-[50px] pl-5 lg:pr-[20px] py-[40px] lg:w-[60%] w-full">
            <div className="lg:w-[58%]">
              <h1 className="text-white lg:text-[6.2rem] md:text-[6.2rem] text-[4.6rem] font-semibold leading-none lg:mb-10 md:mb-10 mb-5 ">
                Barista Party
              </h1>
              <div className="h-[0.8px] w-[60px] bg-white lg:mb-10 md:mb-10 mb-5 "></div>
              <h2 className="text-white lg:text-[2rem] md:text-[2rem] text-[1.2rem] font-semibold">
                Every Friday & Saturday
              </h2>
              <p className="text-[#D8C6B8] lg:text-[1.1rem] md:text-[1.1rem] lg:mb-10 md:mb-10 mb-5">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex items-center lg:text-[1.1rem] md:text[1.1rem]">
                <FaAngleRight className="text-white" />
                <p className="text-white ml-2">
                  Make Reservation
                </p>
              </div>
            </div>
          </div>

          <div className="lg:absolute right-64 top-[-20px] lg:w-[60%] w-full flex justify-center">
            <img
              className="w-[650px] h-auto md:w-full"
              src="src/image/bg-02-free-img (1).png"
              alt="Cup of coffee"
            />
          </div>
         </div>

          <div className="lg:rounded-r-2xl rounded-b-2xl bg-gradient-to-tr from-[#C8A277] to-[#4F9486] lg:p-14 lg:w-[35%] md:p-14 p-6 w-full">
            <h1 className="text-white lg:text-[3.3rem] md:text-[3.3rem] text-[2rem]">Location</h1>
            <div className="h-[2px] w-full bg-white mb-6"></div>
            <p className="text-[#D8C6B8] lg:text-[1.1rem] md:text-[1.1rem] text-[0.9rem] mb-6">
              You can find us consectetur elit, sed do eiusmod tempor incididun.
            </p>
            <div className="flex items-center mb-6">
              <FaLocationDot className="text-white lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] mr-2" />
              <div>
                <h3 className="text-white lg:text-[1.3rem] md:text-[1.3rem] text-[0.9rem]">Address</h3>
                <p className="text-white lg:text-[1.1rem] md:text-[1.1rem] text-[0.9rem]">
                  123 Fifth Avenue, New York, NY 10160
                </p>
              </div>
            </div>
            <div className="flex items-center lg:text-[1.1rem] md:text-[1.1rem] text-[0.9rem]">
              <FaAngleRight className="text-white" />
              <p className="text-white ml-2">
                See On Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>




      {/* footer section */}

      <div className="flex items-center justify-center px-4">
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
