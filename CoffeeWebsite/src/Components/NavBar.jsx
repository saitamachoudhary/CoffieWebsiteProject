import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const linkStyle = 'no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#D8C6B8] hover:transition duration-300';
  const parentStyle = 'flex flex-col items-center justify-center translate-x-[-50%] translate-y-[10%] left-[50%] top-[0%] z-[1] bg-aboutbgimg bg-contain bg-no-repeat w-full';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${parentStyle} ${location.pathname === '/' ? 'absolute' : 'relative bg-navbgimg'}`}>

      <div className="w-full flex justify-between items-center px-4 py-2 md:hidden absolute top-0 left-0">
        <img className='lg:w-[138px] md:w-[138px] w-[90px]' src='/src/image/logo-retina-free-img.png' alt="Logo" />
        <button className="text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <img className='w-[138px] hidden md:block' src='/src/image/logo-retina-free-img.png' alt="Logo" />

      <div className='w-[450px] flex items-center justify-around mt-[25px] px-[5px] py-[10px] hidden md:flex'>
        <Link className={`${linkStyle} ${location.pathname === '/' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/'>Home</Link>
        <Link className={`${linkStyle} ${location.pathname === '/ourmenu' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/ourmenu'>Our Menu</Link>
        <Link className={`${linkStyle} ${location.pathname === '/about' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/about'>About</Link>
        <Link className={`${linkStyle} ${location.pathname === '/gallery' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/gallery'>Gallery</Link>
        <Link className={`${linkStyle} ${location.pathname === '/contact' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/contact'>Contact</Link>
      </div>

      <div className={`absolute top-[60px] right-4 mt-2 w-auto bg-aboutbgimg bg-contain bg-no-repeat flex-col items-end px-4 py-2 ${menuOpen ? 'flex' : 'hidden'} md:hidden`}>
        <Link className={`${linkStyle} ${location.pathname === '/' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/' onClick={toggleMenu}>Home</Link>
        <Link className={`${linkStyle} ${location.pathname === '/ourmenu' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/ourmenu' onClick={toggleMenu}>Our Menu</Link>
        <Link className={`${linkStyle} ${location.pathname === '/about' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/about' onClick={toggleMenu}>About</Link>
        <Link className={`${linkStyle} ${location.pathname === '/gallery' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/gallery' onClick={toggleMenu}>Gallery</Link>
        <Link className={`${linkStyle} ${location.pathname === '/contact' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/contact' onClick={toggleMenu}>Contact</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;





