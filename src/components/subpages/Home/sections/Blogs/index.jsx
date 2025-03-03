import { SectionHeader } from '@/components/reusable';
import { PinContainer } from '@/components/ui/Pin';
import { blogsData } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

const Blogs = () => {
  return (
    <section id="blogs" className="py-10 2xsm:py-20 bg-secondary-3 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-blogs  relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-1/2 before:hidden before:2xsm:block bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text  text-transparent">
            My Blogs
          </h2>
          <SectionHeader
            eyebrow={'My Skills'}
            title="
            Explore My Blogs
            "
            description={'Explore my blogs to elevate your development skills'}
          />
          {/* <p className="subtitle font-montserrat">
            Explore our blogs to elevate your development skills, gain clarity
            on various topics, and become a confident developer proficient in
            utilizing diverse technologies. Learn and persevere in discovering
            the essence of engineering excellence at its finest.
          </p> */}
        </div>
        <div className="xl:px-32">
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 ">
            {blogsData?.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer link="">
                  <>
                    <Link href={item.link} target="_blank">
                      <div className="relative flex items-center justify-center overflow-hidden -mb-8 xsm:mb-2 lg:mb-10">
                        <div
                          className="relative  lg:rounded-3xl sm:w-96 w-[80vw] overflow-hidden h-[27vh] lg:h-[30vh]"
                          style={{ backgroundColor: '#13162D' }}
                        >
                          <Image
                            src={'/assets/blogs/bg.png'}
                            alt="bgimg"
                            layout="fill"
                            className=""
                          />
                        </div>
                        <Image
                          src={item.img}
                          layout="fill"
                          alt="cover"
                          // style={{
                          //   width: '80%',
                          //   height: '80%',
                          // }}
                          className="object-cover z-10 rounded-xl origin-bottom-left rotate-[3.1deg] scale-[0.96] rounded-bl-3xl rounded-br-3xl brightness-90 opacity-85"
                        />
                      </div>
                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-sans">
                        {item.title}
                      </h1>
                      <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 font-montserrat"
                        style={{
                          color: '#BEC1DD',
                          margin: '1vh 0',
                        }}
                      >
                        {item.des}
                      </p>

                      <div className="flex flex-col xs:flex-row justify-between mt-7 mb-3">
                        <div className="flex items-center space-x-2">
                          {item.tags.map((item, index) => (
                            <div key={index}>
                              <p className="text-gray-900 font-medium bg-gradient-to-r from-emerald-300 to-sky-400 text-sm px-2 py-[1px] rounded-full font-sans">
                                #{item}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="xs:flex justify-center items-center hidden ">
                          <p className="flex lg:text-xl text-lg text-purple font-sans bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-transparent">
                            Click to Read
                          </p>
                          <FaLocationArrow className="ms-3" color="#1da9e0" />
                        </div>
                        <button className="bg-gradient-to-r from-sky-400 to-emerald-300 xs:hidden  text-gray-950 h-10 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:w-auto px-6 font-montserrat">
                          <span>Click to Read</span>
                          <FaLocationArrow className="ms-3" color="#000" />
                        </button>
                      </div>
                    </Link>
                  </>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-1/2 left-[30%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[30%] top-1/2 blue__gradient" />
      {/* gradient end */}
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" />
      {/* gradient end */}
    </section>
  );
};

export default Blogs;
