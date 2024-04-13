import React from 'react';
import Footer from "@/components/layout/Footer";
import Index from './[id]/page';
import Navbar from '@/components/layout/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <div className='py-[200px]'>
      {children}
      </div>
      <Footer />
    </>
  );
}