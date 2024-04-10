import React from 'react';
import Footer from "@/components/layout/Footer";
import Index from './page';
import Navbar from '@/components/layout/Navbar';
import CoorNavBar from '@/components/layout/CoorNavBar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex ">
            <CoorNavBar />
            <div className="w-full">
              
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
}