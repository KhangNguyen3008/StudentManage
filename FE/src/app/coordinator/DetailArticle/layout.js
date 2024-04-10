import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CoorNavBar from '@/components/layout/CoorNavBar';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className='mb-[200px]'>

        {children}
      </div>
      <Footer />
    </>
  );
}
