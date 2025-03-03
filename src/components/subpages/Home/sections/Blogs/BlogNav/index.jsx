import React, { useEffect, useState } from "react";
import { blogNavigation } from "@/utils/data";
import { blogsData } from "@/utils/data";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Blog from "../Blog";
import { motion } from "framer-motion";

const BlogNav = () => {
  const [item, setItem] = useState({ name: "web" });
  const [blogs, setBlogs] = useState([]);
  const [active, setActive] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // get projects based on item
    const newBlogs = blogsData.filter((blog) => {
      return blog.category.toLowerCase() === item.name;
    });
    setBlogs(newBlogs);
  }, [item]);

  const handleClick = (e, index) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      setItem({ name: e.target.textContent.toLowerCase() });
      setActive(index);
    }, 500);
  };

  return (
    <div>
      {/* projects nav */}
      <Tab.Group>
        {({ selectedIndex }) => (
          <div className="">
            {/* Buttons */}
            <div className="flex justify-center">
              <Tab.List className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">
                {blogNavigation?.map((tab, index) => (
                  <Tab key={index} as={Fragment}>
                    <button
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      className={`flex-1 text-base font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                        selectedIndex === index
                          ? "bg-white text-primary-2 font-bold "
                          : "text-slate-600 hover:text-slate-900 "
                      }}`}
                    >
                      {tab.name}
                    </button>
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
        )}
      </Tab.Group>
      {/* projects */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="blogs-container-animation"
      >
        <section className="grid gap-y-12 4xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 3xl:grid-cols-3">
          {blogs?.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })}
        </section>
      </motion.div>
    </div>
  );
};

export default BlogNav;
