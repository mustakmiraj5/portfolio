import { social } from '@/utils/data';
import Link from 'next/link';

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social?.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-secondary"
            key={index}
          >
            <Link target="_blank" className="text-base" href={item.href}>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
