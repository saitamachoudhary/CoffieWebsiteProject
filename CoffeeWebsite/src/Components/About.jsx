import '../Styles/about.css'
import NavBar from './NavBar';
import { FaAngleRight } from "react-icons/fa6";
const About = () => {
  return (
    <div className="aboutParent_div">
     <div className='bg-aboutbgimg bg-contain bg-no-repeat bg-center'>
     <NavBar />
     </div>
      <div className='ourMenuh1 pt-28'>
        <h1 className='text-white lg:text-[5.4rem] md:text-[5rem] text-[4rem] text-center'>About</h1>
      </div>
      {/* Tailored-Made Coffee */}
      <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern w-full">
        <div className="container mx-auto px-6 py-16 lg:py-32 text-white lg:w-[900px]">
          <header className=" mb-9">
            <p className="mt-4 text-[1rem] font-bold mb-7">Tailored-Made Coffee</p>
            <h1 className="text-4xl lg:text-6xl font-bold">We offer a unique coffee house environment unlike any other in N.Y.</h1>
          </header>
          <div className='h-[2px] w-full bg-white mb-28'></div>
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6">We are excited to introduce our Coffee Shop magna aliqua.</h2>
              <p className="text-[1rem] lg:text-[1rem] font-bold">Tailored-Made Coffee</p>
            </div>
            <div className="lg:w-1/2 space-y-6 text-lg lg:text-xl">
              <div>
                <h3 className="font-bold mb-2">The perfect place to enjoy your coffee</h3>
                <p className='text-[#D8C6B8] text-[0.9rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div>
                <p className='text-[#D8C6B8] text-[0.9rem]'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div>
                <p className='text-[#D8C6B8] text-[0.9rem]'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our coffee offering */}
      <div className="flex items-center justify-center container mx-auto px-6">
        <div className='lg:w-[800px]'>
        <h1 className="text-white text-4xl lg:text-5xl md:text-4xl font-semibold mb-3">
        Our coffee offering include a wide variety of lorem ipusm dolor.
        </h1>
        <div className="h-[0.8px] w-[60px] bg-white mb-6"></div>
        <p className="text-[#D8C6B8] mb-8 font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Consectetur adipisicing elit.
        </p>
        <div className="flex items-center">
          <FaAngleRight className="text-white" />
          <p className="text-white">Our Gallery</p>
        </div>
        </div>
      </div>
      {/* collage */}
      <div className="flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto p-8">
        <div className="absolute top-0 left-0 w-full h-full bg-hero2-pattern bg-cover bg-center opacity-10"></div>
         <div className="relative grid grid-cols-3 grid-rows-1 gap-x-4 gap-y-4">
          <img src="src\image\about-01-free-img.jpg" alt="Image 1" className="rounded-lg shadow-lg row-span-1 col-span-1"/>
          <img src="src\image\about-02-free-img.jpg" alt="Image 4" className="rounded-lg shadow-lg col-span-1 row-span-3 h-full" />
          <img src="src\image\about-03-free-img.jpg" alt="Image 2" className="rounded-lg shadow-lg col-span-1 row-span-1" />
          <div className='grid grid-cols-3 gap-3'>
            <div></div>
          <img src="src\image\about-05-free-img.jpg" alt="Image 5" className="rounded-lg shadow-lg col-span-1 row-span-1" />
          <img src="src\image\about-06-free-img.jpg" alt="Image 6" className="rounded-lg shadow-lg col-span-1 row-span-1 h-full" />
          </div>
          <img src="src\image\about-04-free-img.jpg" alt="Image 3" className="rounded-lg shadow-lg col-span-1 row-span-1" />
        </div>
      </div>
    </div>
    {/* footer */}
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
  )
}

export default About