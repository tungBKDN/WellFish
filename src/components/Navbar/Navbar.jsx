
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import img from '../../assets/Hero/1.png'
import { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Img1 from "../../assets/Hero/1.jpg";
import Img2 from "../../assets/Hero/2.jpg";
import Img3 from "../../assets/Hero/3.jpg";
import Img4 from "../../assets/Hero/1.jpg";
import { FaStar } from "react-icons/fa6";
import Cart from '../Cart/Cart'

const Menu = [
  {
    id: 1,
    name: "HOME",
    link: "/homepage ",
  },
  {
    id: 2,
    name: "ABOUT US",
    link: "/about-us",
  },
  {
    id: 3,
    name: "PRODUCTS",
    link: "/products",
  },
  {
    id: 4,
    name: "DEALS",
    link: "#",
  },
  {
    id: 5,
    name: "CONTACT",
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Tiếng Việt",
    link: "/#",
  },
  {
    id: 2,
    name: "English",
    link: "/#",
  },
  {
    id: 3,
    name: "Japanese",
    link: "/#",
  },
];


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "A",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "A",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "A",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "V",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "V",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];



const Navbar = () => {


  const [showLogout, setShowLogout] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showItem, setShowItem] = useState(false);
  const fishList = ['Home'];

  const navigate = useNavigate();

  function cart() {
    navigate('/cart')
  }

  function toggleLogout() {
    setShowLogout(!showLogout);
  }

  function toggleItem() {
    setShowItem(!showItem);
    //print size of array


  }

  function logout() {
    console.log('logout')



    // setIsLoggedIn(false)


    navigate('/login')

  }


  function notification() {

    console.log('notification')

  }




  function search(value) {
    let count = 0;

    ProductsData.forEach((item) => {
      if (item.title.toUpperCase().includes(value.toUpperCase())) {
        count++;
      }
    })

    console.log(value)
  }



  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      <div className="bg-primary/40 py-2 flex ">
        {/* img */}
        <div className='container flex justify-between items-center'>

          <div>
            <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={img} alt=""
                className='w-10' ></img>
              WellFish
            </a>
          </div>
          <div className="flex ">
            {/* button search and login*/}
            <div className='flex gap-2 '>
              {/* button search */}

              <div className="relative group hidden sm:block">
                <input
                  type="text"

                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300  border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />

                  {/* <IoMdSearch onClick={() => search(searchValue)} className="absolute left-56 top-1/2 transform -translate-y-3 text-gray-500 group-hover:text-primary transition-all duration-300" /> */}
                  <button className="mr-4 bg-blue-500 transition-all duration-300 border border-gray-300 px-2 py-1"
                    onClick={() => search(searchValue)}
                  >
                    Search
                    </button>
              </div>

            </div>

            <div className="flex">

              <div>

                <ul className="sm:flex hidden items-center gap-4">
                  {/* Simple Dropdown and Links */}
                  <li className="group relative cursor-pointer">
                    <a>
                      <button>
                        <FaRegUserCircle alt="" className='w-9 h-9 rounded-full' onClick={toggleLogout} />
                      </button>
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-[120px] rounded-md bg-white p-2 text-black shadow-md">
                      <ul>
                        <li>
                          <a
                            href="/profile"
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                          >
                            Profile
                          </a>

                          <a
                            onClick={() => logout()}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>



              </div>

              <div>
                <IoCartOutline onClick={cart} className="sm:items-center h-9 w-9" />


                {/* <div  className="">

              <span className='z-[9999] bg-red-500 text-white rounded-full w-4 h-4 text-xs flex justify-center'>0</span>

                </div> */}
              </div>

              <div>
                <IoIosNotificationsOutline onClick={notification} className="sm:items-center h-9 w-9" />
              </div>


              {showItem && (
                <div class=" absolute z-[9] items-center mt-10 ">
                  <div className="bg-red-500 h-96 ">
                    {
                      props.data
                        ? props.data.map((item) => (
                          <div className="flex items-center gap-2 h-14">
                            <img className="object-cover w-14 h-14" src={item.img} alt="" />
                            <div>
                              <h4 className="text-sm">{item.title}</h4>
                            </div>
                            <div>
                              <h4 className="text-sm">90.000đ</h4>
                            </div>
                            <div><input type="checkbox"></input></div>
                          </div>
                        ))
                        : <p className="font-bold items-center">No product available</p>
                    }
                  </div>
                </div>
              )}
            </div>


          </div>


        </div>
      </div>

     <div className="flex items-center h-8">
     
        <ul className="sm:flex hidden items-center gap-4">
        {fishList.map((item) => (
          <li key={item} className="sm:block hidden">
           <a
            href="/homepage"
            className="inline-block px-4 hover:text-primary duration-200 text-lg "
            >{item}</a>
          </li> 
          
          ))}
        </ul>

      
     </div>

      
{/* 
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id} className="sm:block hidden">
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))} */}
      {/* Simple Dropdown and Links */}
       {/* <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              LANGUAGE
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li> 
       </ul>

      </div>  */}
      

      {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}

    </div>
  )
}
export default Navbar
