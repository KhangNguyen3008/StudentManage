import React from 'react';
import Footer from "@/components/layout/Footer";
import Index from './page';
import Navbar from '@/components/layout/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}