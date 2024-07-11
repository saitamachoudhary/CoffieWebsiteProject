// import '../Styles/ourmenu.css'
import Footer from './Footer';
import NavBar from './NavBar';
const OurMenu = () => {
  const drinks = [
    { name: 'Cappuccino', price: '$4.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-01-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { name: 'Cafe Latte', price: '$3.15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-02-free-img.png',color:'bg-[linear-gradient(45deg,#4C8D81_0%,#C39868_100%)]'},
    { name: 'Dark Coffee', price: '$2.75', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-03-free-img.png',color:'bg-[linear-gradient(45deg,#211B1A_0%,#3F3735_100%)]'},
    { name: 'Cappuccino', price: '$4.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-01-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { name: 'Cafe Latte', price: '$3.15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-02-free-img.png',color:'bg-[linear-gradient(45deg,#4C8D81_0%,#C39868_100%)]'},
    { name: 'Dark Coffee', price: '$2.75', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-03-free-img.png',color:'bg-[linear-gradient(45deg,#211B1A_0%,#3F3735_100%)]'},
    { name: 'Cappuccino', price: '$4.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-01-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { name: 'Cafe Latte', price: '$3.15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-02-free-img.png',color:'bg-[linear-gradient(45deg,#4C8D81_0%,#C39868_100%)]'},
  ];

  const coffeeHome=[
    { name: 'Liberica', price: '$19.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-07-free-img.png',color:'bg-[linear-gradient(45deg,#4C8D81_0%,#C39868_100%)]'},
    { name: 'Arabica', price: '$24.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-06-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { name: 'Robusta', price: '$29.50', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-05-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
    { name: 'Excelsa', price: '$34.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-04-free-img.png',color:'bg-[linear-gradient(45deg,#A77443_0%,#C39868_100%)]'},
  ]
  return (
    <div className="h-auto w-full bg-[linear-gradient(to_right,#7F4625,#A77C4E)]">
      <NavBar />
      <div className='ourMenuh1 pt-28'>
        <h1 className='text-white lg:text-[5.6rem] md:text-[4rem] text-[3rem] text-center'>Our Menu</h1>
      </div>
      {/* Drinks section */}
      <div className="DrinkSection w-full text-white">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-[4.6666666666667rem] md:text-[3.9rem] text-[2.7rem] font-bold mt-8">Drinks</h1>
          <div className="h-[0.8px] w-[60px] bg-white mb-3"></div>
          <p className="text-[#D8C6B8] text-center text-[0.9rem] mb-16 lg:w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {drinks.map((drink, index) => (
              <div key={index} className={`${drink.color} p-4 rounded-2xl shadow-lg flex flex-col items-center lg:w-[250px] sm:w-auto`}>
                <img src={drink.img} alt={drink.name} className="w-44 mb-1" />
                <p className="text-[1.3333333333333rem] font-semibold">{drink.price}</p>
                <h2 className="text-[2rem] font-bold">{drink.name}</h2>
                <p className="text-center text-[0.9rem] text-[#D8C6B8] ">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*Coffee For Home*/}
      <div className="DrinkSection bg-ourMenuCoffeeForHome bg-contain bg-no-repeat text-white mt-20 mb-20">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-[4rem] font-bold md:text-[3.5rem]">Coffee For Home</h1>
          <div className="h-[0.8px] w-[60px] bg-white mb-3"></div>
          <p className="text-[#D8C6B8] text-center text-[0.9rem] mb-16 lg:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {coffeeHome.map((drink, index) => (
              <div key={index} className={`${drink.color} p-4 rounded-2xl shadow-lg flex flex-col items-center lg:w-[250px] sm:w-auto`}>
                <img src={drink.img} alt={drink.name} className="w-60 mb-1" />
                <p className="text-[1.3333333333333rem] font-semibold">{drink.price}</p>
                <h2 className="text-[2rem] font-bold">{drink.name}</h2>
                <p className="text-center text-[0.9rem] text-[#D8C6B8] ">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}

      <Footer/>
    </div>
  )
}

export default OurMenu