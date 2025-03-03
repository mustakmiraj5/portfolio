import { SectionHeader } from '@/components/reusable';
import { portfolioProjects } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import grainImage from '/public/assets/images/grain.jpg';
const Works = () => {
  return (
    <>
      <section id="portfolio" className="section bg-secondary-2  relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[108%] before:lg:-left-[50%]  before:hidden before:sm:block bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-center text-transparent font-body">
              Real World Results
            </h2>
            <SectionHeader
              eyebrow={'My Skills'}
              title={'Featured Projects'}
              description={
                'See how I transformed concept into digital reality with my skills and experience.'
              }
            />
            {/* <p className="subtitle font-montserrat">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p> */}
          </div>
          {/* gradient start */}
          <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 white__gradient bottom-40" />
          <div className="absolute z-[0] w-[20%] h-[20%] left-10 top-0 blue__gradient" />
          {/* gradient end */}
          <div className="flex flex-col gap-20 mt-5 md:mt-10">
            {portfolioProjects?.map((project, index) => (
              <div
                className="bg-secondary-2 rounded-3xl sticky z-[0] after:-z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20       after:pointer-events-none"
                key={project?.title}
                style={{
                  top: `calc(94px + ${index * 75}px)`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-[0.07]"
                  style={{
                    backgroundImage: `url(${grainImage?.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="px-8 lg:px-20 md:px-10 py-12">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text items-center">
                      <span className="font-sans">{project?.company}</span>
                      <span>
                        <LuDot className="text-secondary" />
                      </span>
                      <span className="font-sans">{project?.year}</span>
                    </div>
                    <h3 className="font-sans text-2xl mt-2 md:mt-5 md:text-4xl capitalize">
                      {project?.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5 font-montserrat">
                      {project?.results?.map((result) => (
                        <li
                          key={result?.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <span>
                            <IoCheckmarkCircleOutline className="text-lg sm:text-xl" />
                          </span>
                          <span className="">{result?.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={project?.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 font-montserrat">
                        <span>Visit Live Site</span>
                        <MdOutlineArrowOutward className="text-lg sm:text-xl ml-2" />
                      </button>
                    </Link>
                  </div>
                  <div className="lg:pt-12 px-8 lg:px-0">
                    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover lg:h-full bg-black/20  rounded-tl-2xl lg:rounded-tr-none lg:rounded-br-2xl rounded-tr-2xl border-2 shadow-2xl border-gray-600">
                      <Image
                        className=" object-cover h-auto lg:absolute lg:h-auto lg:right-0 bottom-0 top-0 lg:pl-4 pt-3 sm:pt-4 px-2 sm:px-4 lg:px-0   "
                        src={project?.image}
                        alt={project?.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
