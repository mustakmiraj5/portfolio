//  icons
import { CgWebsite } from 'react-icons/cg';
import {
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiPenTool,
  FiSettings,
  FiTag,
} from 'react-icons/fi';
import { SiCodeforces, SiLeetcode } from "react-icons/si";

import { IoIosMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
// skills images
import cloud from '/public/assets/blogs/cloud.svg';
import dock from '/public/assets/blogs/dock.svg';
import gsap from '/public/assets/blogs/gsap.svg';
import nextjs from '/public/assets/blogs/next.svg';
import typescript from '/public/assets/blogs/ts.svg';
import css from '/public/assets/tech/css.png';
import framerMotion from '/public/assets/tech/framer-motion.png';
import git from '/public/assets/tech/git.png';
import html from '/public/assets/tech/html.png';
import javascript from '/public/assets/tech/javascript.png';
import mongodb from '/public/assets/tech/mongodb.png';
import nodejs from '/public/assets/tech/nodejs.png';
import reactjs from '/public/assets/tech/reactjs.png';
import redux from '/public/assets/tech/redux.png';
import tailwind from '/public/assets/tech/tailwind.png';

// project images
import Project2 from '/public/assets/projects/fishmyspot.png';
import Project4 from '/public/assets/projects/marriage.png';
import Project1 from '/public/assets/projects/shoprowly.png';
import job from '/public/assets/projects/jobgator.JPG';
import movix from '/public/assets/projects/movix.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blogs',
    href: 'blogs',
  },

  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/mustakmiraj5',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mustakmiraj005/',
  },
  {
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/mustakmiraj5/',
  },
  {
    icon: <SiCodeforces />,
    href: 'https://codeforces.com/profile/mustakmiraj5',
  },
];

// companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: "",
//   },
//   {
//     img: UpworkBrandIcon,
//     href: "",
//   },
//   {
//     img: FiverBrandIcon,
//     href: "",
//   },
//   {
//     img: BehanceBrandIcon,
//     href: "",
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: "",
//   },
// ];

// projects
// export const projectsData = [
//   {
//     id: 1,
//     image: Project1,
//     name: "Parts manufacturing",
//     des: "This is a Parts manufacturing web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link:
//       "https://github.com/NH-Rifat/parts-manufacture-Application-client-side",
//     server_link: "https://github.com/NH-Rifat/parts-manufacturing-server",
//     live_link: "https://car-manufacturing-e90c4.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: "NEW",
//   },
//   {
//     id: 2,
//     image: Project3,
//     name: "Todo App",
//     des: "This is a Todo App web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link: "https://github.com/NH-Rifat/React-todo-App",
//     server_link: "https://github.com/NH-Rifat/todo-app-node-mongo",
//     live_link: "https://todo-app-20b59.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: "NEW",
//   },
//   {
//     id: 3,
//     image: Project2,
//     name: "car dealer warehouse",
//     des: "This is a car dealing inventory web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link: "https://github.com/NH-Rifat/car_warehouse_management",
//     server_link:
//       "https://github.com/NH-Rifat/car-delearshipp_warehouse-server-side",
//     live_link: "https://car-dealer-407f1.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: " month ago",
//   },
//   {
//     id: 4,
//     image: Project4,
//     name: "Travel Guide",
//     des: "This is a Travel Guide web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link: "https://github.com/NH-Rifat/Travel-Guide-Application",
//     live_link: "https://travel-guide-4388b.web.app/",
//     technology: ["React", "firebase", "CSS"],
//     tag: "1 month ago",
//   },
//   {
//     id: 5,
//     image: Project5,
//     name: "Book shopping",
//     des: "This is a Book shopping web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link:
//       "https://github.com/NH-Rifat/javascript-book-shopping-application",
//     live_link: "https://javascrip-book-shopping.netlify.app/",
//     technology: ["React", "firebase", "Bootstrap"],
//     tag: "2 month ago",
//   },
//   {
//     id: 6,
//     image: Project6,
//     name: "Ema-jhon simple",
//     des: "This is a Ema-jhon simple web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link: "https://github.com/NH-Rifat/Travel-Guide-Application",
//     live_link: "https://travel-guide-4388b.web.app/",
//     technology: ["React", "firebase", "localstorage", "API"],
//     tag: "3 month ago",
//   },
//   {
//     id: 7,
//     image: Project7,
//     name: "Smart phone Garage",
//     des: "This is a Smart phone Garage web application where user can manage his/her car product which is more interesting as well as give",
//     category: "JS/API",
//     repo_link: "https://github.com/NH-Rifat/smart__phone__garage-using-api",
//     live_link: "https://phone-garage-with-api.netlify.app/",
//     technology: ["HTML", "CSS", "Javascript", "API"],
//     tag: "4 month ago",
//   },
//   {
//     id: 8,
//     image: Project8,
//     name: "Panda Ecommerce",
//     des: "This is a Panda Ecommerce web application where user can manage his/her car product which is more interesting as well as give",
//     category: "UI/UX design",
//     repo_link: "https://github.com/NH-Rifat/panad-ecommerce",
//     live_link: "https://panda-ecommerce-design.netlify.app/",
//     technology: ["HTML", "CSS", "Bootstrap"],
//     tag: "2 Years ago",
//   },
//   {
//     id: 9,
//     image: Project9,
//     name: "Hot Gadget",
//     des: "This is a Hot Gadget web application where user can manage his/her car product which is more interesting as well as give",
//     category: "UI/UX design",
//     repo_link: "https://github.com/NH-Rifat/Hot-gadget-using-bootstrap",
//     live_link: "https://hot-gadgeted.netlify.app",
//     technology: ["HTML", "CSS", "Bootstrap"],
//     tag: "2 Years ago",
//   },
// ];

export const portfolioProjects = [
  {
    company: 'Fish My Spot',
    year: '2022',
    title: 'Fishing experience marketplace',
    results: [
      {
        title: 'Connect families with unique fishing experiences',
      },
      { title: 'Connects pond owner and families' },
      {
        title:
          'Convenient for adults and children to get outside and enjoy nature',
      },
    ],
    link: 'https://www.fishmyspot.com/',
    image: Project2,
  },{
    company: 'My Job Gator',
    year: '2023',
    title: 'A Job Search Platform',
    results: [
      { title: 'Post jobs and find candidates' },
      { title: 'Find jobs and apply for them' },
      { title: 'Manage your job applications' },
    ],
    link: 'https://job-seeker-2064e.web.app/',
    image: job,
  },{
    company: 'Movix',
    year: '2023',
    title: 'A Movie Search Platform',
    results: [
      { title: 'Search for movies and TV shows' },
      { title: 'Find movies and TV shows by genre' },
      { title: 'Find movies and TV shows by actor' },
    ],
    link: 'https://movie-web-ashen-eight.vercel.app/',
    image: movix,
  },
  // {
  //   company: 'Settle Marriage',
  //   year: '2024',
  //   title: 'A modern Marriage media',
  //   results: [
  //     { title: 'Comprehensive Profiles' },
  //     { title: 'Find Match Discovery' },
  //     { title: 'Secure and Confidential' },
  //   ],
  //   link: 'https://www.settlemarriage.com/',
  //   image: Project4,
  // },
  {
    company: 'Shop Rowley',
    year: '2023',
    title: 'A Versatile Marketplace',
    results: [
      { title: 'Pre-loved wedding wear for every celebration.' },
      {
        title:
          'Connect with fellow brides and chat with buyers interested in your items.',
      },
      { title: 'Offer Negotiation between seller and buyers' },
    ],
    link: 'https://shoprowely.com/',
    image: Project1,
  },
];
export const blogsData = [
  {
    id: 1,
    title: 'JavaScript the big picture',
    des: 'Discover the JavaScript execution, hoisting, closures, scopes, and prototype-based inheritance in depth.',
    img: '/assets/blogs/js-adv.jpg',
    iconLists: [
      '/assets/blogs/next.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/gsap.svg',
    ],
    tags: ['javascript', 'advanced'],
    link: '/',
  },

  {
    id: 2,
    title: 'Beyond things the React',
    des: 'Discover the react beyond basics, under the hood, and advanced concepts to build a modern web app.',
    img: '/assets/blogs/react-adv.jpg',
    iconLists: [
      '/assets/blogs/next.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/stream.svg',
      '/assets/blogs/c.svg',
    ],
    tags: ['react', 'advanced'],
    link: '/',
  },
  {
    id: 3,
    title: 'Fundamentals of Javascript',
    des: 'Master the JavaScript fundamentals, ES6, and ES7 features to build a modern web app with pure JavaScript.',
    img: '/assets/blogs/js-fund.jpg',
    iconLists: [
      '/assets/blogs/re.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/c.svg',
    ],
    tags: ['javascript', 'fundamentals'],
    link: '/',
  },
  {
    id: 4,
    title: 'Understanding the React',
    des: 'Lean React fundamentals, hooks, and context API to build a fully functional app with the latest tech stack.',
    img: '/assets/blogs/react-fund01.png',
    iconLists: [
      '/assets/blogs/re.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/fm.svg',
    ],
    tags: ['react', 'fundamentals'],
    link: '/',
  },
];
// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React/node js',
  },
  {
    name: 'React',
  },
  {
    name: 'JS/API',
  },
  {
    name: 'UI/UX Design',
  },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-2 ',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/assets/blogs/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/assets/blogs/grid.svg',
    spareImg: '/assets/blogs/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a blog site',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/assets/blogs/b5.svg',
    spareImg: '/assets/blogs/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

// skill
export const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Framer Motion',
    icon: framerMotion,
  },
  {
    name: 'GSAP',
    icon: gsap,
  },
  {
    name: 'cloud',
    icon: cloud,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: dock,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Full-Stack Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Back-end Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Problem Solving',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Core Engineering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
// ];

// contact
export const contact = [
  {
    icon: <IoIosMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at msmiraj8@gmail.com',
  },
  {
    icon: <IoLocationOutline />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Full-Stack Developer',
  },
];

export const blogNavigation = [
  {
    name: 'web',
  },
  {
    name: 'programming',
  },
  {
    name: 'others',
  },
];
