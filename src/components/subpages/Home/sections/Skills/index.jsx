import { Card, SectionHeader } from '@/components/reusable';
import { technologies } from '@/utils/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import CardHeader from './CardHeader';
import BookCover from '/public/assets/images/book-cover.png';
import mapImage from '/public/assets/images/map.png';
import smileEmoji from '/public/assets/images/memoji-smile.png';

const hobbies = [
  {
    title: 'Reading',
    emoji: '📚',
    left: '80%',
    top: '80%',
  },
  {
    title: 'Writing',
    emoji: '✍️',
    left: '',
    top: '',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Movies',
    emoji: '🎥',
    left: '',
    top: '',
  },
];

const Skills = () => {
  const constraintRef = useRef(null);
  return (
    <section className="bg-secondary-3 py-10 xsm:py-20 relative" id="skills">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-title before:content-skills relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-[35%] before:hidden before:xsm:block bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-center text-transparent uppercase font-semibold">
          My Skills
        </h2>
        {/* <p className="subtitle">
          Everyday I am trying to learn something new & Explore different
          something new which is getting fit to the technology domain.
        </p> */}
      </div>
      {/* <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies?.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas iconType={technology?.iconType?.src} />
            </div>
          ))}
        </div>
      </div> */}
      {/* gradient start */}
      {/* <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" /> */}
      {/* gradient end */}
      <div className="container mx-auto">
        <div className=" px-0 lg:px-16 xl:px-24 2xl:px-40">
          <SectionHeader
            eyebrow={'My Skills'}
            title={'A glimpse into my world'}
            description={
              'Learn more about who I am, what I do, and what inspires me.'
            }
          />
          <div className="mt-10 md:mt-14 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspective"
                />
                <div className="w-40 mx-auto mt-7 md:-mt-0 lg:-mt-3 relative h-44 overflow-hidden z-[20]">
                  <Image
                    src={BookCover}
                    alt="Books"
                    // layout="fill"
                    className="object-cover z-[21]"
                  />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft expectation
                digital experiences"
                  className=""
                />
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_50%,transparent)]">
                  <div className="flex flex-none py-0.5 gap-x-3 animate-move-left [animation-duration:30s]">
                    {/* {[...new Array(2)].map((_, index) => ( */}
                    {/* <div key={index}> */}
                    {technologies?.map((item, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
                      >
                        <Image
                          src={item.icon}
                          alt="Technology Icon"
                          className="size-10"
                          layout="fixed"
                        />
                      </div>
                    ))}
                    {/* </div> */}
                    {/* ))} */}
                  </div>
                </div>
                <div className="flex mt-5 [mask-image:linear-gradient(to_right,transparent,black_50%,transparent)] ">
                  <div className="flex flex-none py-0.5 gap-x-3 -translate-x-1/2 animate-move-right [animation-duration:30s]">
                    {technologies.map((item, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
                      >
                        <Image
                          src={item.icon}
                          alt="Technology Icon"
                          className="size-10"
                          layout="fixed"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the realm of technology"
                  className="px-6 py-6"
                />
                <div className="relative px-2 flex-1" ref={constraintRef}>
                  {hobbies?.map((hobby, index) => (
                    <motion.dev
                      key={index}
                      className="inline-flex items-center m-1 gap-2 px-4 md:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950 ">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.dev>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Books"
                  layout="fill"
                  className="w-full h-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <Image
                    src={smileEmoji}
                    alt="Books"
                    layout="fill"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
