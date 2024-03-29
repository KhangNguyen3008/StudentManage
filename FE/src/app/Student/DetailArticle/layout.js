import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DetailsArticleS from './page';

export default function Layout({ children }) {
  return (
      <>
        <Navbar/> 
        <DetailsArticleS/>
        <Footer/>
      </>
  );
}
