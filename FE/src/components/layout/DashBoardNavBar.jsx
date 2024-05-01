import React from 'react'
import NavItem from '../ui/NavItem'
import { FaHome, FaListAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdOutlineViewTimeline } from "react-icons/md";

export default function DashBoardNavBar() {
    const navitem = [{
        icon: <FaHome />,
        title: 'Dashboard',
        path: '/admin'
    },{
        icon: <FaBook />,
        title: 'Manager Faculty',
        path: '/admin/faculty'
    },
    {
        icon: <FaUser />,
        title: 'Manager User',
        path:'/admin/user'
    },
    {
        icon: <FaListAlt />,
        title: 'Manager Contribution',
        path:'/admin/contribution'
    },
    {
        icon: <FaRegCalendarTimes />,
        title: 'Manager Academicyear',
        path:'/admin/academicyear'
    },
    {
        icon: <MdOutlineViewTimeline />,
        title: 'Manager Deadline',
        path:'/admin/deadline'
    }
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
