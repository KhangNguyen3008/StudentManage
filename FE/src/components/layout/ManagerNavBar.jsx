import React from 'react'
import NavItem from '../ui/NavItem'
import { FaHome, FaListAlt } from "react-icons/fa";
import '../pages/style.css'
import Link from 'next/link';


export default function ManagerNavBar() {
    const navitem = [
        {
            icon: <FaListAlt />,
            title: 'Statictical',
            path: '/Manager/statistical'
        },
        {
            icon: <FaListAlt />,
            title: 'Faculty',
            path: '/Manager/Index'
        },
    ];

    return (
        <div className='flex'>
            {/* Your existing navigation */}
            <div className='sticky min-h-[100vh] w-[300px] bg-main-gray'>
                <div className="image" style={{ width: '250px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/home/images/logo.png" className="img-circle elevation-2" alt="User Image" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                </div>
                <ul className=''>
                    {navitem.map((item, index) => (
                        <li key={index} className='hover:bg-white-gray text-white p-4'>
                            <NavItem icon={item.icon} title={item.title} path={item.path} />
                        </li>
                    ))}
                </ul>
            </div>

            <nav class="main-header navbar navbar-expand navbar-white navbar-light" >
                <ul className="navbar-nav">
                <li className="nav-item" >
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <Link href='/home' className='text-black hover:border-red-300'>Home</Link>
  
                </li>
                </ul>
            </nav>
        </div>
    );
}