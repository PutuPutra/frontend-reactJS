import React from "react";
import BannerImg from "../../assets/hero/image4.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdMoney, MdPayments } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[500px] flex justify-center py-12 sm:p-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-justify text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur dolorem dolore
              impedit a natus. Tenetur ipsam enim nobis repellat?
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <MdPayments className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;