import { twMerge } from 'tailwind-merge';
import grainImage from '/public/assets/images/grain.jpg';

export default function Card({ className, children, index }) {
  return (
    <div
      className={twMerge(
        "bg-secondary-2 rounded-3xl sticky z-[100] after:z-[100] overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-white/20 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: `url(${grainImage?.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}
