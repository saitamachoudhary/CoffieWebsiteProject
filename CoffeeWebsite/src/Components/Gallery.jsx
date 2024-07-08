import '../Styles/gallery.css'
import NavBar from './NavBar';
const Gallery = () => {
  const images = [
    'src/image/gallery-01-free-img.jpg', 
    'src/image/gallery-02-free-img.jpg',
    'src/image/gallery-03-free-img.jpg'
  ];
  const coffeeHome=[
    { img: 'src/image/gallery-08-free-img.jpg',color:'bg-[linear-gradient(45deg,#4C8D81_0%,#C39868_100%)]'},
    { img: 'src/image/gallery-09-free-img.jpg',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { img: 'src/image/gallery-06-free-img.jpg',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { img: 'src/image/gallery-07-free-img.jpg',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { img: 'src/image/gallery-05-free-img.jpg',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { img: 'src/image/gallery-04-free-img.jpg',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
  ]
  
  return (
    <div className="galleryParent_div">
    <NavBar/>
    <div className='ourMenuh1 pt-28'>
        <h1 className='text-white lg:text-[5.4rem] md:text-[5rem] text-[4rem] text-center'>Gallery</h1>
      </div>
      {/* cards */}
     <div className="relative bg-hero2-pattern bg-contain bg-center bg-no-repeat flex items-center justify-center">
      <div className="relative flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-12 w-full">
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg overflow-hidden">
          <img src={images[0]} alt="Placeholder 0" className="w-full h-64 lg:h-full md:h-80 object-cover" />
        </div>
        <div className="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 rounded-lg shadow-lg overflow-hidden">
          <img src={images[1]} alt="Placeholder 1" className="w-full h-64 lg:h-full md:h-80 object-cover" />
        </div>
        <div className="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 rounded-lg shadow-lg overflow-hidden">
          <img src={images[2]} alt="Placeholder 2" className="w-full h-64 lg:h-full md:h-80 object-cover" />
        </div>
      </div>
    </div>

    {/* photos section */}
        <div className="flex flex-col items-center justify-center text-white mt-20 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coffeeHome.map((drink, index) => (
              <div key={index} className="rounded-2xl shadow-lg lg:w-[325px] sm:w-auto overflow-hidden">
                <img src={drink.img} alt={drink.name} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center justify-center">
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

export default Gallery