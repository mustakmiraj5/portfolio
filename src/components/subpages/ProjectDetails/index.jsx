/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import TechnologyUsed from "./TechnologyUsed";
import KeyFeatures from "./KeyFeatures";
import ImageGallery from "./ImageGallery";
import Contribution from "./Contribution";

import { projectDetailsData } from "./utils/projectDetailsData";
import { Triangle } from "react-loader-spinner";

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState({});
  const [titleColors, setTitleColors] = useState([]);
  const [loading, setLoading] = useState(false);

  // data for the project details
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const project = projectDetailsData?.find(
        (project) => project?.name === slug
      );
      setData(project);
      setLoading(false);
    }, 1000);
  }, [slug]);

  // color array for set the color of the title of the key features
  const colors = [
    "#bcd65f",
    "#62df5d",
    "#8669df",
    "#6586e2",
    "#e2c565",
    "#5ab6bd",
  ];

  useEffect(() => {
    const randomColors = data?.keyFeatures?.map(
      () => colors[Math.floor(Math.random() * colors.length)]
    );
    setTitleColors(randomColors);
  }, [data?.keyFeatures]);

  return !loading && data?.photos?.length > 1 ? (
    <div className="bg-[#1A191D] w-full h-full py-5 sm:py-10">
      <div className="container mx-auto space-y-9">
        <div
          className="p-5 bg-[rgba(90,89,89,0.05)] w-14 h-14 rounded-full cursor-pointer "
          title="back"
        >
          <Link href={`/`} className=" text-center text-xl ">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-body">Web Development</h1>
          <Link
            href={`${data?.live_link}`}
            target="_blank"
            className="flex items-center space-x-3"
            title="live link"
          >
            <h1 className="text-3xl xsm:text-3xl sm:text-4xl lg:text-5xl font-body font-bold capitalize">
              {data?.title}
            </h1>
            <div className="text-3xl text-blue-300">
              <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-medium font-body">Project Overview</h1>
          <p className="text-slate-300 text-sm font-montserrat md:text-base leading-7 first-letter:text-2xl first-letter:font-semibold text-justify md:leading-8">
            {data?.description}
          </p>
        </div>
        <div className="space-y-4">
          <KeyFeatures
            keyFeatures={data?.keyFeatures}
            titleColors={titleColors}
          />
        </div>
        {data?.photos && data?.photos.length > 0 && (
          <div className="block">
            <ImageGallery photos={data?.photos} />
          </div>
        )}
        <div className="space-y-4">
          <TechnologyUsed technologies={data?.technologies} />
        </div>
        <div className="pb-10 space-y-4">
          <Contribution
            responsibilities={data?.responsibilities}
            titleColors={titleColors}
          />
          <p></p>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-white  h-[100vh] flex items-center justify-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#1A191D"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default ProjectDetails;
