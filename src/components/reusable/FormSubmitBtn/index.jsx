// import { useClickAnimation } from "hooks/useClickAnimation";
import { useRef } from 'react';

const FormSubmitBtn = ({ text, isLoading }) => {
  const buttonRef = useRef();
  // useClickAnimation(buttonRef, {});

  return (
    <button
      type={isLoading ? 'button' : 'submit'}
      className="button-shine py-3 px-4 font-montserrat  font-semibold text-[17px] text-tertiary active:scale-75 bg-gradient-to-r from-sky-400 to-emerald-300 rounded-[7px] outline-none "
      // ref={buttonRef}
    >
      {isLoading && (
        <span className="flex w-7 animate-spin items-center justify-center">
          <span className="h-5 w-5 rounded-full border-b-2 border-t-2 border-white"></span>
        </span>
      )}
      {isLoading ? 'sending...' : text}
    </button>
  );
};

export default FormSubmitBtn;
