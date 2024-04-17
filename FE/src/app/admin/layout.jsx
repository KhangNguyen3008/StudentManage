import DashBoardNavBar from "@/components/layout/DashBoardNavBar";
import TopDashBoard from "@/components/layout/TopDashBoard";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }) {
    return (
        <div className="flex ">
            <TopDashBoard />
            <DashBoardNavBar />
            <div className="w-full">
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
