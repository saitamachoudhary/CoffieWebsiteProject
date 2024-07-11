import '../Styles/about.css'
import Footer from './Footer';
import NavBar from './NavBar';
import { FaAngleRight } from "react-icons/fa6";
const About = () => {
  return (
    <div className="aboutParent_div">
     <div className='bg-aboutbgimg bg-contain bg-no-repeat bg-center'>
     <NavBar />
     </div>
      <div className='ourMenuh1 pt-24'>
        <h1 className='text-white lg:text-[5.4rem] md:text-[5rem] text-[4rem] text-center'>About</h1>
      </div>
      {/* Tailored-Made Coffee */}
      <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern w-full">
        <div className="container mx-auto px-6 py-16 lg:py-24 text-white lg:w-[900px]">
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
    <Footer/>
    </div>
  )
}

export default About