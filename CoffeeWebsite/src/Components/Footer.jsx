

const Footer = () => {
  return (
    <div className="flex items-center justify-center px-8">
    <footer className="text-white py-8 w-[1000px] border-t border-white">
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       <div className="">
         <h2 className="text-xl font-semibold mb-4">About us</h2>
         <p className="text-[#D8C6B8]">
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
         <p className="text-[#D8C6B8]">13 Fifth Avenue, New York, NY 10160</p>
         <p className="text-[#D8C6B8]">929-242-6868</p>
         <p className="text-[#D8C6B8]">contact@info.com</p>
       </div>
       <div>
         <h2 className="text-xl font-semibold mb-4">Opening hours</h2>
         <p className="text-[#D8C6B8]">Mon – Fri — 8AM – 8PM</p>
         <p className="text-[#D8C6B8]">Saturday — 8AM – 4PM</p>
         <p className="text-[#D8C6B8]">Sunday — 8AM – 2PM</p>
       </div>
     </div>
     <div className="mt-8 border-t border-white pt-4 text-center">
       <p>Copyright © 2024 Coffee Shop | Powered by Coffee Shop</p>
     </div>
   </footer>
    </div>
  )
}

export default Footer