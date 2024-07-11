import '../Styles/gallery.css'
import Footer from './Footer';
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
        <h1 className='text-white lg:text-[5.4rem] md:text-[4.5rem] text-[3rem] text-center'>Gallery</h1>
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
         <Footer/>
  </div>
  )
}

export default Gallery