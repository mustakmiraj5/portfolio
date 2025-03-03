import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll';
import aboutIMage from '/public/assets/about/about.svg';
const About = () => {
  return (
    <div>
      <section className="section bg-secondary-2" id="about">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-14 xsm:gap-20 md:gap-24 2xl:gap-28 items-center">
            <Image
              src={aboutIMage}
              alt="logo"
              className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            />
            <div className="flex flex-col items-center text-center zsm:items-start xsm:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:xsm:block ">
                  Mustak Sahariar Miraj
                </h2>
                <h2 className="mb-4 text-lg bg-gradient-to-r from-secondary to-sky-400 bg-clip-text  text-transparent font-semibold font-montserrat">
                  Full Stack Developer
                </h2>
                <hr className="mb-4 opacity-5" />
                <p className="mb-8 text-slate-400 text-justify font-montserrat text-[15px]">
                  Hello! I&apos;m Miraj, a dedicated{' '}
                  <span className="font-semibold ">Web Developer </span>
                  with a strong passion for crafting exceptional digital
                  experiences. With{' '}
                  <span className="text-xl  text-secondary">2.5+</span> years of
                  experience in application development, I thrive on turning
                  ideas into reality through clean code and innovative design.
                  My journey in web development began with a fascination for the
                  intersection of technology and creativity, and since then,
                  I&apos;ve been on a mission to create user-centric solutions
                  that leave a lasting impact. When I&apos;m not coding, you can
                  find me exploring the latest trends in software development,
                  experimenting with new technologies, or simply enjoying a good
                  cup of coffee.
                  {/* I will put my sincere effort to do
                  the best in the technology domain with state of art
                  Excellency. I am hard-working in the individual phase with
                  proficiency in using different technology. I am hungry to
                  learn and determined to find core engineering beauty at best.{" "} */}
                  <br />
                  <br />
                  {/* Let&apos;s connect and build something amazing together! */}
                  {/* <Button
                    text="Let's Connect"
                    styles="btn btn-md hover:bg-secondary-hover transition-all px-8"
                  /> */}
                  <button className="button-shine py-3 px-4 font-montserrat  font-semibold text-[17px] text-tertiary active:scale-75 bg-gradient-to-r from-sky-400 to-emerald-300 rounded-[7px] outline-none btn btn-md hover:bg-secondary-hover transition-all ">
                    <motion.div>
                      <Link
                        to={'contact'}
                        activeclass="active"
                        spy={true}
                        smooth={true}
                        duration={1100}
                        offset={-70}
                        className="transition-all duration-500"
                      >
                        {"Let's Connect"}
                      </Link>
                    </motion.div>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
