
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import NewArtical from "./page";


export default function Layout({ children }) {
  return (
    <>

        <Navbar />
        <NewArtical />
        <Footer />

    </>
  );
}