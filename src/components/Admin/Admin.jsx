import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import  AdminNavbar  from '../AdminNavbar/AdminNavbar';









const Admin = () => {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const [username, setusername] = useState('Nguyen Van A')
    const [email, setemail] = useState('Viet@gmail.com')

    function outlineClick() {
        setActive(!active);
    }

    function clickNav(value) {

        navigate('/' + value);
    }
    return (
        <div className='flex  text-white overflow-y-hidden '>
            {!active && (
                    <div className='bg-[#2B3F64] w-64 min-h-screen'>
                        <AdminNavbar outlineClick={outlineClick} />
                    </div>
                )
            }

            {active && (<div className='bg-[#2B3F64] w-16 min-h-screen'>
                <div className='text-3xl font-bold flex justify-center  pt-4 pb-4 bg-[#364A72]'>
                    <h1>W</h1>
                </div>

                <div className='mt-4 ml-4 '>
                    <ul className='hover:cursor-pointer'>
                        <li className='w-64 mb-4 font-bold text-xl'
                            onClick={() => clickNav('dashboard')}>
                            <MdDashboard className='inline-block mr-2 mb-2' size={28} />
                         
                        </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('revenue')}>
                            <FaDollarSign className='inline-block mr-2 mb-2' size={28} />
                           </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('products')}>
                            <MdOutlineCategory className='inline-block mr-2 mb-2' size={28} />
                            </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('orders')}>
                            <BsBasket3Fill className='inline-block mr-2 mb-2' size={28} />
                            </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('event')}>
                            <MdEventAvailable className='inline-block mr-2 mb-2' size={28} />
                            </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('sales')}>
                            <RiCoupon2Line className='inline-block mr-2 mb-2' size={28} />
                            </li>
                        <li className='w-64 mb-4 text-xl'
                            onClick={() => clickNav('accounts')}>
                            <MdAccountBox className='inline-block mr-2 mb-2' size={28} />
                            </li>
                    </ul>


                </div>
            </div>)
            }



            <div className='inline:block w-screen  '>
                <div className=' bg-slate-200 flex' >
                    <div>
                        <button className='px-4 rounded-md h-full'>
                            <IoMenu className='inline-block text-black'
                                fontSize='2rem'
                                onClick={() => outlineClick()}
                            />
                        </button>
                    </div>

                    <div className=' flex justify-end pb-1 mr-8 w-full'>

                        
                        <img
                            className='rounded-full w-16 h-16'
                            src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />

                        <div>
                            <h1 className='text-2xl font-bold text-blue-500'>{username}</h1>
                            <p className='text-sm text-blue-500'>{email}</p>
                        </div>
                    </div>
                </div>

                <div className='ml-8 mr-8'>
                    <div className='mt-8 mb-4 text-black font-bold text-4xl'>
                        <h1>Finance</h1>
                    </div>

                    <div className='grid  grid-cols-3 items-center gap-4 h-48 rounded-lg bg-blue-600 '>
                        <div className='mr-32 ml-8 w-full '>
                            <h1 className=''>Total income</h1>
                            <h3 className='text-4xl'>1,720,540đ</h3>
                        </div>

                        <div className='w-full'>
                            <h1>Total orders</h1>
                            <h3 className='text-4xl'>1000</h3>
                        </div>

                        <div className='w-full'>
                            <h1>Total customers</h1>
                            <h3 className='text-4xl'>1000</h3>
                        </div>
                    </div>
                </div>


                <div className='pt-12 mr-8 ml-8'>
                    <div className='text-black font-bold text-4xl pb-8'>
                        <h1>Order</h1>
                    </div>

                    <div className='grid grid-cols-4'>
                        <div className='bg-blue-500 rounded-lg mr-4 '>
                            <h1 className='text-sm p-2'>On shipping</h1>
                            <h3 className='text-4xl pl-2 pb-2'>100</h3>
                        </div>

                        <div className='bg-green-300 rounded-lg mr-4'>
                            <h1 className='text-sm p-2'>Received</h1>
                            <h3 className='text-4xl pl-2 pb-2'>100</h3>
                        </div>

                        <div className='bg-red-500 rounded-lg mr-4'>
                            <h1 className='text-sm p-2'>Cancelled</h1>
                            <h3 className='text-4xl pl-2 pb-2'>100</h3>
                        </div>

                        <div className='bg-yellow-500 rounded-lg mr-4'>
                            <h1 className='text-sm p-2'>Returned</h1>
                            <h3 className='text-4xl pl-2 pb-2'>100</h3>
                        </div>
                    </div>

                    <div className='pt-12 '>
                        <div className='text-4xl text-black font-bold'>
                            <h1>Products</h1>
                        </div>

                        <div className='pt-8 flex '>

                            <img src='https://cdn.tgdd.vn/Files/2023/04/02/1522845/199-hinh-anh-ca-koi-dep-den-me-hon-3d-4k-full-hd-trieu-like_1-070423-105052.jpg' alt='product'
                                className='rounded   object-cover w-full h-64 pb-8 mr-6' />
                            <div className='absolute pt-48'>
                                <h3 className='text-white text-2xl font-bold items-center'>Fish</h3>
                            </div>

                            <div className='text-black '>
                                <h1>Reorder rate:</h1>
                                <div className='flex pb-8'>
                                    <h1 className='font-bold mr-2' >3.28/5</h1>
                                    <h1>(-0.22)</h1>
                                </div>

                                <div className='flex'>
                                    <h1 className=' mr-2'>Overall</h1>
                                    <h1>Rating:</h1>
                                </div>


                                <div className='flex pb-8'>
                                    <h1 className='font-bold mr-2' >3.28/5</h1>
                                    <h1>(-0.22)</h1>
                                </div>

                                <h1>New Product</h1>
                                <h1 className='font-bold text-xl'>1000</h1>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default Admin