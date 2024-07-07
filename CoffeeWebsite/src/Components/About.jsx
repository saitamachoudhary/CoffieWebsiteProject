import '../Styles/about.css'
import NavBar from './NavBar';
import { FaAngleRight } from "react-icons/fa6";
const About = () => {
  return (
    <div className="aboutParent_div">
      <NavBar />
      <div className='ourMenuh1 pt-28'>
        <h1 className='text-white lg:text-[5.4rem] md:text-[5rem] sm:text[4rem] text-center'>About</h1>
      </div>
      {/* Tailored-Made Coffee */}
      <div className="bg-contain bg-center bg-hero-pattern w-full">
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
    </div>
  )
}

export default About