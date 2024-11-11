/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Image4 from "../../assets/hero/image4.png";
import Image5 from "../../assets/hero/image5.png";

// Daftar gambar dengan judul dan deskripsi
const originalImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quidem.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis?",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis?",
  },
  {
    id: 4,
    img: Image4,
    title: "20% off on all T-shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis?",
  },
  {
    id: 5,
    img: Image5,
    title: "40% off on all Shoes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis?",
  },
];

// Tambahkan klon di depan dan di belakang untuk loop seamless
const ImageList = [
  originalImageList[originalImageList.length - 1], // Klon slide terakhir di awal
  ...originalImageList,
  originalImageList[0], // Klon slide pertama di akhir
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Dimulai di 1 (slide pertama asli)
  const [isAnimating, setIsAnimating] = useState(true);

  // Fungsi untuk beralih ke slide berikutnya
  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Fungsi untuk beralih ke slide sebelumnya
  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset posisi jika berada di klon (slide pertama atau terakhir palsu)
  useEffect(() => {
    if (currentIndex === ImageList.length - 1) {
      // Jika di klon pertama setelah slide terakhir, reset ke slide pertama asli
      const timeoutId = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else if (currentIndex === 0) {
      // Jika di klon terakhir sebelum slide pertama, reset ke slide terakhir asli
      const timeoutId = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(ImageList.length - 2);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]);

  // Mengatur interval untuk perpindahan slide otomatis
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <div className="relative mt-10 carousel-slide overflow-hidden">
          {/* Kontainer untuk slide yang akan bergeser */}
          <div
            className={`flex transition-transform ${
              isAnimating ? "duration-500" : "duration-0"
            } w-full`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ImageList.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2">
                {/* Tetap gunakan w-full pada tiap slide */}
                {/* Bagian Konten Teks */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    {item.title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full inline-block max-w-max">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Bagian Gambar */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-110 object-contain mx-auto lg:scale-95"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
