/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Image4 from "../../assets/hero/image4.png";
import Image5 from "../../assets/hero/image5.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non molestiae, excepturi dolorum nemo voluptate sit laboriosam sapiente placeat officiis. Labore laboriosam voluptas doloremque id voluptatum consequuntur sed? Dignissimos, ratione? Quaerat, consectetur. Odio ipsam a totam. Alias voluptas quis nesciunt fuga dignissimos autem quisquam ut fugit natus! Blanditiis, sequi nostrum dolore laborum eaque iusto tempora unde eveniet doloremque necessitatibus voluptas amet suscipit, sit exercitationem id ipsum voluptatum dolor. Similique dolorum ab rem ratione, molestias a necessitatibus dolores officia quas error, velit accusamus, repudiandae cupiditate consectetur vitae beatae voluptates suscipit autem facere non asperiores odit? In dolorem cum illum commodi sed.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ratione laborum voluptas adipisci numquam, totam sed ullam vero officia cum vel iste nemo deleniti fuga ducimus optio voluptates quia nisi nulla sint, accusamus consequuntur. Excepturi sapiente earum repellendus minima! Molestiae soluta rem explicabo similique eligendi magnam harum minus dignissimos neque inventore, facilis eum, quis in praesentium atque quam doloremque alias exercitationem modi corporis accusamus iste nam aperiam? Modi, incidunt, aliquid itaque maxime fugit quo voluptates, libero delectus ullam laborum ea sed reprehenderit quasi quis commodi quibusdam expedita totam? At repudiandae aperiam praesentium quam ipsum nostrum assumenda dolore saepe aut laudantium.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis aspernatur, enim est itaque rem error vitae voluptatibus recusandae sit architecto et reprehenderit. Quae reprehenderit quis facilis odit laudantium nulla vel ipsum dolor quasi laborum odio unde fugiat expedita, sapiente optio fuga dolorum dolores consequuntur qui ad iste quibusdam doloremque consectetur commodi. Provident laudantium voluptatem alias laboriosam a non maiores illo dolorum fuga quasi. Esse sapiente dolor possimus error odit neque velit sunt? Impedit esse excepturi rerum cupiditate quibusdam, sit possimus dicta. Quibusdam ipsa, veniam non blanditiis minus sed ad doloribus enim unde dolores soluta, et nihil, illum maiores vel",
  },
  {
    id: 4,
    img: Image4,
    title: "20% off on all T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum cumque adipisci dolores numquam aut velit nulla maiores magnam nisi.",
  },
  {
    id: 5,
    img: Image5,
    title: "40% off on all Shoes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sunt obcaecati laboriosam labore dicta totam iure quidem veniam aperiam? Saepe?",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ImageList.length) % ImageList.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        {/* Carousel start */}
        <div className="relative mt-10 carousel-slide">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Content section */}
            <div className="flex flex-col  justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1
                className="text-5xl sm:text-6xl text-justify lg:text-7xl font-bold"
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-duration="500"
              >
                {ImageList[currentIndex].title}
              </h1>
              <p
                className="text-sm text-justify"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                {ImageList[currentIndex].description}
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="order-1 sm:order-2">
              <div className="relative z-10" data-aos="zoom-in" data-aos-once="true">
                <img
                  src={ImageList[currentIndex].img}
                  alt=""
                  className="w-[300px] h-[300px]  sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Carousel end */}
      </div>
    </div>
  );
};

export default Hero;
