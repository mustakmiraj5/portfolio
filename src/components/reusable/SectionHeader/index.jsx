export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div>
      <div className="flex justify-center">
        {/* <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-transparent">
          {eyebrow}
        </p> */}
      </div>
      <h2 className=" text-3xl text-center mt-6 md:text-5xl font-body">
        {title}
      </h2>
      <p className="text-center font-montserrat text-white/60 mt-4 md:text-lg  max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
}
