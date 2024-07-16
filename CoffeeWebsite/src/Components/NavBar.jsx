import { Link, Outlet, useLocation } from "react-router-dom";
import { useState,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Badge, Modal, Avatar, List,Button} from "antd";
import { IoCartSharp } from "react-icons/io5";
import{DeleteFilled} from '@ant-design/icons';
const NavBar = ({ values }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);  
  const [cartValues,setcartValues]=useState([]);
  
  useEffect(()=>{
   if(values) setcartValues(values.items);
  },[values]);

  const location = useLocation();
  const linkStyle =
    "no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#D8C6B8] hover:transition duration-300";
  const parentStyle =
    "flex flex-col items-center justify-start translate-x-[-50%] translate-y-[0%] left-[50%] top-[0%] z-[1] w-full lg:h-96 pt-5";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 function Total(){
   let totalsum=0;
   const removeDollarSignAndConvert = (value) => parseFloat(value.replace('$', ''));
   const numericValues = cartValues.map(val=>removeDollarSignAndConvert(val.price));
   totalsum=numericValues.reduce((acc, curr) => acc + curr, 0);
  return totalsum;
 }

 const deletecartItem=(itemindex)=>{
 const updatecartItem=cartValues.filter((val,index)=>index!==itemindex?val:null);
  setcartValues(updatecartItem);
 }

  return (
    <div
      className={`${parentStyle} ${
        location.pathname === "/"
          ? "absolute"
          : "relative bg-navbg-img bg-contain bg-no-repeat"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 py-2 md:hidden absolute top-0 left-0">
        <img
          className="lg:w-[138px] md:w-[138px] w-[90px]"
          src="/src/image/logo-retina-free-img.png"
          alt="Logo"
        />
        <button className="text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <img
        className="w-[138px] hidden md:block"
        src="/src/image/logo-retina-free-img.png"
        alt="Logo"
      />

      <div className="w-[450px] flex items-center justify-around mt-[25px] px-[5px] py-[10px] hidden md:flex">
        <Link
          className={`${linkStyle} ${
            location.pathname === "/" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/ourmenu" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/ourmenu"
        >
          Our Menu
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/about" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/gallery" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/contact" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/contact"
        >
          Contact
        </Link>

       {location.pathname==='/ourmenu'? <div>
       <a href="#">
          <Badge count={(values)?cartValues.length:0}>
            <IoCartSharp
              className="text-white text-2xl"
              onClick={() => setModal1Open(true)}
            />
          </Badge>
        </a>
        <Modal
          title="Cart"
          style={{
            top: 230,
            left: 330,
          }}
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          onCancel={() => setModal1Open(false)}
          footer={[
            <p className=" font-bold text-[1.1rem]" key="">Total:${Total()}</p>,
            <Button className="" key="back" onClick={() => setModal1Open(false)}>Cancel</Button>,
            <Button key="submit" onClick={() => setModal1Open(false)}>Buy</Button>,
          ]}
        >
          <List
            itemLayout="horizontal"
            dataSource={cartValues}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={cartValues[index].img}
                    />
                  }
                  title={cartValues[index].name}
                  description={cartValues[index].price}
                />
              <DeleteFilled onClick={()=>deletecartItem(index)} />
              </List.Item>
            )}
          />
        </Modal>
       </div>:null}
      </div>

      <div
        className={`absolute top-[60px] right-4 mt-2 w-auto bg-aboutbgimg bg-contain bg-no-repeat flex-col items-end px-4 py-2 ${
          menuOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <Link
          className={`${linkStyle} ${
            location.pathname === "/" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/ourmenu" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/ourmenu"
          onClick={toggleMenu}
        >
          Our Menu
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/about" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/about"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/gallery" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/gallery"
          onClick={toggleMenu}
        >
          Gallery
        </Link>
        <Link
          className={`${linkStyle} ${
            location.pathname === "/contact" ? "text-[#D8C6B8]" : "text-white"
          }`}
          to="/contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
