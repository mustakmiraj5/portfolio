import { useState } from 'react';

import { HiOutlineXMark } from 'react-icons/hi2';
import { IoMenuSharp } from 'react-icons/io5';

import { navigation } from '@/utils/data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Socials from '../Socials';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <IoMenuSharp className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-gray-900 fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <HiOutlineXMark className="w-8 h-8" />
        </div>
        {navigation?.map((item, idx) => {
          return (
            <li key={idx} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                duration={1100}
                offset={-70}
                className="text-xl cursor-pointer capitalize"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
