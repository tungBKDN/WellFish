import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const AdminNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    function clickNav(value) {
        navigate('/' + value);
    }
    return (
        <div>
            <div className='bg-[#2B3F64] w-64 min-h-screen'>
                <div className='text-3xl font-bold flex justify-center  pt-4 pb-4 bg-[#364A72]'>
                    <h1>WELLFISH</h1>
                </div>

                <div className='mt-4 ml-12'>
                    <ul className='hover:cursor-pointer'>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('dashboard')}>
                            <MdDashboard className='inline-block mr-2 mb-2' size={28} />
                            Dashboard
                        </li>

                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/revenue' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('revenue')}>
                            <FaDollarSign className='inline-block mr-2 mb-2' size={28} />
                            Revenue</li>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/products' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('products')}>
                            <MdOutlineCategory className='inline-block mr-2 mb-2' size={28} />
                            Products</li>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/orders' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('orders')}>
                            <BsBasket3Fill className='inline-block mr-2 mb-2' size={28} />
                            Orders</li>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/event' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('event')}>
                            <MdEventAvailable className='inline-block mr-2 mb-2' size={28} />
                            Event</li>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/sales' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('sales')}>
                            <RiCoupon2Line className='inline-block mr-2 mb-2' size={28} />
                            Sales</li>
                        <li className={`w-64 mb-4 text-xl ${location.pathname === '/accounts' ? 'font-bold' : ''}`}
                            onClick={() => clickNav('accounts')}>
                            <MdAccountBox className='inline-block mr-2 mb-2' size={28} />
                            Accounts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar