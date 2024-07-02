import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className='navbar' style={{}}>
      <Link style={{color:'white',textDecoration:'none'}}>Home</Link>
      <Link>OurMenu</Link>
      <Link>About</Link>
      <Link>Gallery</Link>
      <Link>Contact</Link>
    </div>
  )
}

export default NavBar;