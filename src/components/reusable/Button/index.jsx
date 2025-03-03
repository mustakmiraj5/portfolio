const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`button-shine py-3 px-4 font-montserrat  font-semibold text-[17px] text-tertiary active:scale-75 bg-gradient-to-r from-sky-400 to-emerald-300 rounded-[7px] outline-none ${styles} `}
  >
    {text}
  </button>
);

export default Button;
