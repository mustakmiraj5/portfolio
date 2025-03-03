import { twMerge } from 'tailwind-merge';

// import StarIcon from '/public/assets/icons/star.svg';
export default function CardHeader({ title, description, className }) {
  return (
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
      <div className="inline-flex items-center gap-2">
        {/* <StarIcon className="size-9 text-emerald-300 " /> */}
        <h3 className="font-sans text-3xl">{title}</h3>
      </div>
      <p className="text-sm font-montserrat lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
}
