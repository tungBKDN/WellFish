import React, { useState, useEffect } from 'react';
import img from '../../assets/Img/user.jpg'
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from '../Popup/Popup'

const listUser = [
    {
        id: 1,
        name: 'Nguyen Van A',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 4,
        name: 'Nguyen Van D',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 5,
        name: 'Nguyen Van E',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 6,
        name: 'Nguyen Van F',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 7,
        name: 'Nguyen Van G',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 8,
        name: 'Nguyen Van H',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 9,
        name: 'Nguyen Van I',
        age: 20,
        address: 'Ha Noi',
    },
    {
        id: 10,
        name: 'Nguyen Van J',
        age: 20,
        address: 'Ha Noi',
    }
]


let listProduct = []
        fetch('https://b1dm1kn2-3333.asse.devtunnels.ms/api/items/getAllItems?offset=0', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                listProduct = data.data
                console.log(listProduct)

            
            })
            .catch(error => {
                //da lai trang login   
                console.error('Error:', error);
            });



const Admin = () => {
    const [displayContent, setDisplayContent] = useState(null);


    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
        
      setOrderPopup(!orderPopup);
    };
  
  
  



    function renderListUser() {
        return (
            <div>
                <h1 className='text-2xl font-bold text-center'>List User</h1>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border-2'>ID</th>
                            <th className='border-2'>Name</th>
                            <th className='border-2'>Age</th>
                            <th className='border-2'>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map((item) => {
                                return (
                                    <tr className='border-2'>
                                        <td className='border-2'>{item.id}</td>
                                        <td className='border-2'>{item.name}</td>
                                        <td className='border-2'>{item.age}</td>
                                        <td className='border-2'>{item.address}</td>
                                        <td className='border-2 flex justify-center items-center'>
                                            <button className='h-full w-full'>Delete</button>
                                        </td>
                                        <td className='border-2 flex justify-center items-center'>
                                            <button className='h-full w-full'>Update</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='py-2'>
                    <button 
                   
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Add Admin</button>
                </div>
            </div>
        )
    }


    function renderListProduct() {
        return (
            <div>
                <h1 className='text-2xl font-bold text-center'>List Product</h1>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border-2'>ID</th>
                            <th className='border-2'>Name</th>
                            <th className='border-2'>Description</th>
                            <th className='boder-2'>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listProduct.map((item,) => {
                                return (
                                    <tr className='border-2'>
                                        <td className='border-2'>{item.id}</td>
                                        <td className='border-2'>{item.name}</td>
                                        <td className='border-2'>{item.price}</td>
                                        <td className='border-2 flex justify-center items-center'>
                                            <button className='h-full w-full'>Delete</button>
                                        </td>
                                        <td className='border-2 flex justify-center items-center'>
                                            <button className='h-full w-full'>Update</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='py-2'>
                    <button
                        onClick={() => handleOrderPopup()} 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Add Product</button>
                </div>
            </div>
        )
    }

    function dropDown(value) {
        if (value === 'Users') {
            setDisplayContent(renderListUser());
        }
        if (value === 'Products') {
            setDisplayContent(renderListProduct());
        }
    }

    function addProduct(){
       
        <div>
            <h1 className='text-2xl font-bold text-center'>Add Product</h1>
        </div>


    }



    return (
        <div>
            <div className='flex'>
                <div className=' w-1/6 min-h-screen '>
                    <div className='bg-blue-500 space-y-5'>
                        <div>
                            <h1 className='text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold'>Dashboard</h1>
                        </div>

                        <div className='flex  justify-center '>
                            <img src={img} alt=''
                                className='w-14 h-14 rounded-full '
                            ></img>
                        </div>

                        <div>
                            <h1 className='text-sm text-center'>Hello Admin</h1>
                        </div>

                        <div className='grid grid-cols-2 content-center divide-x divide-double border-2'>
                            <div className='flex justify-center items-center'>
                                <IoIosNotifications className="h-9 w-9" />
                            </div>

                            <div className='flex justify-center items-center'>
                                <CiSettings className="h-9 w-9" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-300 h-screen py-5'>
                        <details className='mt-4'>
                            <summary className='text-md font-bold cursor-pointer'>DashBoard</summary>
                            <div className='pl-8 text-sm'>
                                <div className=' text-sm '>
                                    <p className='hover:bg-blue-500 cursor-pointer' onClick={() => dropDown('Users')}>Users</p>
                                    <p className='hover:bg-blue-500 cursor-pointer' onClick={() => dropDown('Products')}>Products</p>
                                    <p className='hover:bg-blue-500 cursor-pointer' onClick={() => dropDown('User 3')}>User 3</p>
                                </div>
                            </div>
                        </details>
                    </div>

                </div>


                <div className='flex-grow bg-white-500 '>
                    <div className='bg-blue-500 h-16'>

                    </div>
                    <div id='display'>
                        {displayContent}


                    </div>

                </div>

            </div>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
        
    )
}

export default Admin