/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../../assets/hero/women.png";
import Img2 from "../../assets/hero/shopping.png";
import Img3 from "../../assets/hero/sale.png";
import Img4 from "../../assets/hero/image4.png";
import Img5 from "../../assets/hero/image5.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Woman Ethnic",
    color: "White",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Glasses",
    color: "Yellow",
    rating: 4.5,
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Fashin T-Shirt",
    color: "Brown",
    rating: 4.7,
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    color: "Green",
    rating: 4.6,
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Goggles",
    color: "Black",
    rating: 4.0,
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="">
      <div className="mt-14 mb-12 ">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm mt-36 text-primary">
              Top Selling Products for you
            </p>
            <h1 className="text-3xl mt-1 mb-3 font-bold" data-aos="fade-up">
              Products
            </h1>
            <p data-aos="fade-up" className="text-justify text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam eius,
              ullam a id laborum pariatur dicta corrupti molestias rem?
            </p>
          </div>
          {/* Body Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card Section */}
              {ProductsData.map((data) => (
                <div
                  key={data.id}
                  className="space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[200px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* view all */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
