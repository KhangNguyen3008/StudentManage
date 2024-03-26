
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NewArticle from "./page";


export default function Layout({ children }) {
  return (
    <>
        <Navbar/>
        <NewArticle />
        <Footer/>
    </>
  );
}