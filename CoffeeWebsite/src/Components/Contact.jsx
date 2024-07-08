import '../Styles/contact.css'
import NavBar from './NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = () => {
  return (
    <div className="contactParent_div">
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="max-w-5xl w-full p-8 rounded">
        <h1 className="text-7xl font-bold mb-20 mt-20 text-center">Contact</h1>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <div className="flex flex-col items-start md:items-start md:text-left space-y-4">
            <h2 className="text-5xl font-bold">Get in touch</h2>
            <p className="text-[0.9rem] text-[#D8C6B8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
            <div className="space-y-2 text-white">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone-alt"></i>
                <span className="">929-242-6868</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span className="">contact@info.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span className="">123 Fifth Avenue, New York, NY 10160</span>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"><i className="fab fa-twitter"></i></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-8 md:mt-0">
            <form className="space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-4 border rounded-md w-full" />
                <input type="text" placeholder="Last Name" className="p-4 border rounded-md w-full" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-md" />
              <textarea placeholder="Your Message" className="w-full p-4 border rounded-md h-32"></textarea>
              <button type="submit" className="w-40 p-4 bg-white text-black border rounded-md hover:bg-gray-200 mx-auto block">
                Send Message
              </button>
            </form>
          </div>
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

export default Contact