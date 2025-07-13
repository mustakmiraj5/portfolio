import { navigation } from '@/utils/data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation?.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-dimWhite cursor-pointer"
              key={idx}
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link
                  to={item.href}
                  activeclass="active"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="transition-all duration-800"
                >
                  {item.name}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
