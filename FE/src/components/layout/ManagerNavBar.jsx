import React from 'react'
import NavItem from '../ui/NavItem'
import { FaHome, FaListAlt } from "react-icons/fa";
export default function ManagerNavBar() {
    const navitem = [{
        icon: <FaListAlt />,
        title: 'Statictical',
        path: '/Manager/statistical'
    },
    {
        icon: <FaListAlt />,
        title: 'Faculty',
        path:'/Manager/Index'
    },
    ]
    return (
        <div className=' sticky min-h-[100vh] w-[300px] bg-main-gray'>
            <div className='text-white text-center py-5'>
                Logo
            </div>
            <ul className=''>

                {navitem.map(item => {
                    return (
                        <li className='hover:bg-white-gray text-white p-4'>
                            <NavItem icon={item.icon} title={item.title} path={item.path} />
                        </li>
                    )


                })}

            </ul>
        </div>
    )
}
