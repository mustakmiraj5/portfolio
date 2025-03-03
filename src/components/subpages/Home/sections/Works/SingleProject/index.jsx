import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/utils/motion";
import github from "/public/assets/github.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const SingleProject = ({
  index,
  name,
  title,
  description,
  tags,
  image,
  live_link,
}) => {
  const [scale, setScale] = useState(1.08);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt scale={scale} transitionSpeed={2500}>
        <Link href={`/project-details/${name}`} target="_blank">
          <div
            className="bg-primary-2 p-2 rounded-2xl sm:w-[360px] w-full font-montserrat"
            title="view details"
          >
            <div className="relative w-full h-[230px]">
              <Image
                src={image}
                alt="logo"
                className="w-full h-full object-cover rounded-2xl "
              />

              <div className="absolute inset-0 flex justify-end m-3 ">
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  title="live link"
                >
                  <FaExternalLinkAlt className="text-lg " />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-semibold text-[24px] font-montserrat capitalize">
                {title}
              </h3>
              <p className="mt-2 text-white text-[14px] font-montserrat">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default SingleProject;
