import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>

    )
}
