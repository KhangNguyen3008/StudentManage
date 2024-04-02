import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'


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
