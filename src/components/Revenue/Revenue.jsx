import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";


const Revenue = () => {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
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
                </div>)}

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



            <div className='inline:block w-screen'>
                <div className='bg-slate-200 flex'>
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
                            className='rounded-full w-16 h-16 '
                            src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />

                        <div>
                            <h1 className='text-2xl font-bold text-blue-500'>Nguyen Van A</h1>
                            <p className='text-sm text-blue-500'>Viet@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='mr-8 ml-8'>
                    <div className='flex mt-8'>
                        <div className='w-full mt'>
                            <h1 className='text-black font-bold text-4xl'>Total revenue</h1>
                            <div className='mr-4 mt-4 w-full items-center h-16 rounded-lg bg-blue-600 '>
                                <h3 className='text-4xl p-2'>1,720,540đ</h3>
                            </div>
                        </div>

                        <div className='w-full ml-8'>
                            <h1 className='text-black font-bold text-4xl'>Income</h1>
                            <div className='mt-4 w-full items-center h-16 rounded-lg bg-blue-600 '>
                                <h3 className='text-4xl p-2'>1,720,540đ</h3>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-300 text-black rounded-lg mt-8'>
                        <h1 className=' font-bold text-xl p-2'>Total revenue</h1>
                        <div className='ml-2 mb-56'>
                            <h3 className='text-4xl pb-4'>1,720,540đ</h3>
                        </div>
                    </div>


                </div>







            </div>
        </div>

    )
}

export default Revenue