import '../Styles/Component1.css';
import NavBar from './NavBar';
const Component1 = () => {
  return (
    <div className="Parent_div">
      <img className='img1' src='\src\image\logo-retina-free-img.png' alt="" />
      <div className="na">
        <NavBar/>
      </div>
      <div className='background_img'></div>
    </div>
  )
}

export default Component1;