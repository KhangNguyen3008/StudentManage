import Home from "@/components/pages/Home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Image from "next/image";


export default function page() {
  return (
    <div>

        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}
