import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";






const Admin = () => {

    const [active, setActive] = useState(false);
    function outlineClick() {
        setActive(!active);

    }
    return (
        <div className='flex  text-white overflow-y-hidden pr-8'>
            {!active && (<div className='bg-[#2B3F64] w-3/12 min-h-screen'>
                <div className='text-3xl font-bold flex justify-center  pt-4 pb-4 bg-[#364A72]'>
                    <h1>WELLFISH</h1>
                </div>

                <div className='mt-4 ml-12 text-xl'>
                    <ul>
                        <li className='w-64 mb-4'>
                            <MdDashboard className='inline-block mr-2' />
                            Dashboard
                        </li>
                        <li className='w-64 mb-4 mb-2'>
                            <FaDollarSign className='inline-block mr-2 mb-2' />
                            Revenue</li>
                        <li className='w-64 mb-4'>
                            <MdOutlineCategory className='inline-block mr-2 mb-2' />
                            Products</li>
                        <li className='w-64 mb-4'>
                            <BsBasket3Fill className='inline-block mr-2 mb-2' />
                            Orders</li>
                        <li className='w-64 mb-4'>
                            <MdEventAvailable className='inline-block mr-2 mb-2' />
                            Event</li>
                        <li className='w-64 mb-4'>
                            <RiCoupon2Line className='inline-block mr-2 mb-2' />
                            Sales</li>
                        <li className='w-64 mb-4'>
                            <MdAccountBox className='inline-block mr-2 mb-2' />
                            Accounts</li>
                    </ul>

                    <div className='mt-4 flex justify-end'>
                        <button className='bg-[#364A72] text-white px-4 py-2 rounded-md'>
                            <AiOutlineLeft className='inline-block '
                                onClick={() => outlineClick()}
                            />
                        </button>
                    </div>
                </div>
            </div>)}

            {active && (<div className='bg-[#2B3F64] w-12 min-h-screen'>
                <button className='bg-[#364A72] text-white px-4 py-2 rounded-md'>
                    <CiMenuBurger className='inline-block '
                        onClick={() => outlineClick()}
                    />
                </button>

            </div>)}



            <div className='inline:block w-screen ml-8 '>
                <div className='flex justify-end pb-1' >
                    <img
                        className='rounded-full w-16 h-16 '
                        src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />

                    <div>
                        <h1 className='text-2xl font-bold text-blue-500'>Nguyen Van A</h1>
                        <p className='text-sm text-blue-500'>Viet@gmail.com</p>
                    </div>
                </div>

                <div>
                    <div className='mt-8 mb-4 text-black font-bold text-4xl'>
                        <h1>Finance</h1>
                    </div>

                    <div className=' grid grid-cols-3 gap-32 items-center h-48 rounded-lg bg-blue-600 '>
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


                <div className='pt-12'>
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

                    <div className='pt-12'>
                        <div className='text-4xl text-black font-bold'>
                            <h1>Products</h1>
                        </div>

                        <div className='pt-8 relative '>
                            <img src='https://cdn.tgdd.vn/Files/2023/04/02/1522845/199-hinh-anh-ca-koi-dep-den-me-hon-3d-4k-full-hd-trieu-like_1-070423-105052.jpg' alt='product'
                            className='rounded object-cover w-full h-64' />
                            <h3 className='absolute text-white text-2xl font-bold items-center'>Ca koi</h3>
                        </div>

                        
                    </div>
                </div>
            
            </div>



        </div>
    )
}


export default Admin