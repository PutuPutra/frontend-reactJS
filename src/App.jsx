import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos"; // npm i aos
import "aos/dist/aos.css"; // Make sure to import the AOS CSS
import TopProducts from "./components/Products/TopProducts";
import Banner from "./components/banner/banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonials/Testimonial";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
    </>
  );
}
