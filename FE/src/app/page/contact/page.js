import React from 'react';
import Header from "@/components/layout/Header"; // Import "Header" nếu nó cần thiết
import Footer from "@/components/layout/Footer"; // Import "Footer" nếu nó cần thiết

export default function Contact() {
  return (
    <div>
      <Header/> {/* Đảm bảo rằng bạn import "Header" nếu bạn cần nó */}
      <section className="page">
        {/* Nội dung trang About của bạn */}
      </section>
      <Footer/> {/* Đảm bảo rằng bạn import "Footer" nếu bạn cần nó */}
    </div>
  );
}
