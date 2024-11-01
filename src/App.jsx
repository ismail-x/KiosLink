import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "Solusi Pembayaran yang Fleksibel",
  title: "Pengusaha dan Pemilik Bisnis",
  subtitle:
    "Ingin memperluas layanan pembayaran? KIOSLINK menawarkan API yang mudah diintegrasikan, memungkinkan bisnis untuk menawarkan pembayaran tagihan, top-up, dan lainnya langsung dari platform mereka.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "Model O2O untuk Bisnis Kecil",
  title: "Agen",
  subtitle:
    "Baik Anda menjalankan bisnis kecil atau agen individu, model O2O KIOSLINK membantu Anda melayani komunitas lokal dengan menerima pembayaran untuk berbagai layanan.",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* <NavbarBanner /> */}
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
