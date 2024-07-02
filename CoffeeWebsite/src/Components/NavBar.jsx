import '../Styles/Navbar.css'
import { Link,Outlet} from "react-router-dom";
const NavBar = () => {
  return (
    <div className='navbar img1'>
      <img style={{width:'138px'}} src='\src\image\logo-retina-free-img.png' alt="" />
      <div className='navbar_linktags'>
      <Link className='link_style' to='/'>Home</Link>
      <Link className='link_style' to='/ourmenu'>OurMenu</Link>
      <Link className='link_style' to='/about'>About</Link>
      <Link className='link_style' to='/gallery '>Gallery</Link>
      <Link className='link_style' to='/contact'>Contact</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default NavBar;