// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import { IoMdClose } from 'react-icons/io';
import { Autoplay, Navigation } from 'swiper/modules';

const PoolImgSlider = ({ imgList, setShowModal }) => {
  console.log({ imgList });
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div className="relative block h-full w-full">
      {/* Custom Buttons */}
      <div ref={nextRef} className="absolute top-[45%] right-2 z-50">
        <button className="cursor-pointer font-bold text-xl text-gray-800 xs:text-2xl sm:text-3xl lg:text-4xl">
          <AiFillRightCircle />
        </button>
      </div>
      <div ref={prevRef} className="absolute top-[45%] left-2 z-50">
        <button className="cursor-pointer font-bold text-xl text-gray-800 xs:text-2xl sm:text-3xl lg:text-4xl">
          <AiFillLeftCircle />
        </button>
      </div>
      {/* Swiper container */}
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={imgList.length > 1 ? true : false}
        speed={1000}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="h-full w-full px-7 sm:px-9 md:px-11"
      >
        {imgList?.map((photo, index) => (
          <SwiperSlide className="flex items-center justify-center" key={index}>
            <div
              className={`relative  h-full w-full"
              `}
            >
              <div className="absolute top-2 right-2 z-50 cursor-pointer text-xl xs:text-2xl sm:text-3xl lg:text-4xl">
                <IoMdClose
                  className="text-black hover:text-secondary-2"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <Image
                src={photo?.src}
                alt={photo?.src}
                className="depth-reference-bar rounded-lg object-cover"
                layout="fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default PoolImgSlider;
