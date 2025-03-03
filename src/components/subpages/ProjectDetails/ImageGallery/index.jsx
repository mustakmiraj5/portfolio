import Image from "next/image";
import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

const ImageGallery = ({ photos }) => {
  console.log({ photos });
  const [showModal, setShowModal] = useState(false);
  const [reorderedPhotos, setReorderedPhotos] = useState([]);

  const openModal = (imgObject) => {
    // Get the clicked photo at the first position
    const newOrderedPhotos = photos?.filter(
      (photo) => photo?.id !== imgObject?.id
    );
    newOrderedPhotos.unshift(imgObject);

    setReorderedPhotos(newOrderedPhotos);
    setShowModal(true);
  };
  return (
    <div className=" relative 2xsm:pb-5 xsm:pb-12 sm:pb-0 md:pb-2 lg:pb-12 xl:pb-20 2xl:pb-10 3xl:pb-72">
      <PhotoModal
        showModal={showModal}
        setShowModal={setShowModal}
        photos={reorderedPhotos}
      />
      <div
        onClick={() => openModal(photos[3])}
        className="absolute bottom-0 right-0 z-50 cursor-pointer font-bold font-montserrat text-gray-900 underline md:right-0 lg:text-lg 3xl:text-xl"
      >
        View photos &#40;{photos?.length}&#41;
      </div>

      <div className="relative grid h-52 grid-cols-1 gap-1 xs:h-56 sm:grid-cols-3 sm:gap-1 md:h-80 md:gap-2 lg:h-96 lg:gap-3 xl:h-[450px] 2xl:h-[520px] 3xl:h-[420px]">
        <div
          className="relative h-full w-full cursor-pointer sm:col-span-2 sm:row-span-2"
          onClick={() => openModal(photos[0])}
        >
          <Image
            src={photos[0]?.src}
            alt="photo"
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
        <div
          className="relative hidden h-full w-full cursor-pointer sm:block"
          onClick={() => openModal(photos[1])}
        >
          <Image
            src={photos[1]?.src}
            alt={"Room Display"}
            className="rounded-lg object-cover"
          />
        </div>
        <div
          className="relative hidden h-full w-full cursor-pointer sm:block"
          onClick={() => openModal(photos[2])}
        >
          <Image
            src={photos[2]?.src}
            alt={"Room Display"}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
