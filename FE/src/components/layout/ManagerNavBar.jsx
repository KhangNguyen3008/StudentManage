import React from 'react'
import NavItem from '../ui/NavItem'
import { FaHome, FaListAlt } from "react-icons/fa";
import '../pages/style.css'

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
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">

    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
        </li>
        </ul>
            </nav>
        </div>
    );
}