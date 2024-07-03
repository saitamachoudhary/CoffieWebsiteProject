import { Link, Outlet,useLocation} from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const linkStyle = 'no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#D8C6B8] hover:transition duration-300';

  return (
    <div className='flex flex-col items-center justify-center absolute translate-x-[-54%] translate-y-[10%] left-[50%] top-[0%] z-[1]'>
      <img className='w-[138px]' src='/src/image/logo-retina-free-img.png' alt="" />
      <div className='w-[450px] flex items-center justify-around mt-[25px] px-[5px] py-[10px]'>
        <Link className={`${linkStyle} ${location.pathname === '/' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/'>Home</Link>
        <Link className={`${linkStyle} ${location.pathname === '/ourmenu' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/ourmenu'>Our Menu</Link>
        <Link className={`${linkStyle} ${location.pathname === '/about' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/about'>About</Link>
        <Link className={`${linkStyle} ${location.pathname === '/gallery' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/gallery'>Gallery</Link>
        <Link className={`${linkStyle} ${location.pathname === '/contact' ? 'text-[#D8C6B8]' : 'text-white'}`} to='/contact'>Contact</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar;
