import React from "react";
import Img1 from "../../assets/shirt/shirt2.png";
import Img2 from "../../assets/shirt/shirt3.png";
import Img3 from "../../assets/shirt/shirt4.png";
import Img4 from "../../assets/shirt/shirt2.png";
import Img5 from "../../assets/shirt/shirt3.png";
import Img6 from "../../assets/shirt/shirt4.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },

  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Shirt",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },
  {
    id: 5,
    img: Img5,
    title: "Women Shirt",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },
  {
    id: 6,
    img: Img6,
    title: "Women Shirt",
    description:
      "Lorem, ipsum dolor sit ametansana consectetur adipisicing elit. Corporis iste dicta ipsam dolor voluptas aliquid.",
  },
];
const TopProducts = () => {
  return (
    <div className="">
      <div className="container">
        {/* header section */}
        <div className="text-left mb-32">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-justify text-xs text-gray-400 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam eius, ullam
            a id laborum pariatur dicta corrupti molestias rem?
          </p>
        </div>
        {/* header section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="mb-36 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center">
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                </div>
                <h1 className="text-xl font-bold mt-5 mb-5 dark:text-white">{data.title}</h1>
                <p className="text-justify text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-white">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-pretty group-hover:text-primary"
                  // onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
