import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import useClickOutSide from '../../../../../../hook/closeSelectBoxOutsiceClick';
import PoolImgSlider from './PoolImgSlider';

const PhotoModal = ({ showModal, setShowModal, photos }) => {
  const dropdown = useRef();
  useClickOutSide(dropdown, () => setShowModal(false));

  const backdrop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const photoModal = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 z-[501] flex h-full w-full items-center justify-center bg-[#111827a8]"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            ref={dropdown}
            transition={{ duration: 0.1 }}
            className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-lg bg-transparent p-4 xs:p-5 sm:max-w-lg sm:p-0 md:aspect-[16/9] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-screen-2xl"
            variants={photoModal}
          >
            <div className="h-full w-full">
              <PoolImgSlider imgList={photos} setShowModal={setShowModal} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;
