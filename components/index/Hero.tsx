import Image from "next/image";
import GetAccessButton from "./GetAccessButton";

const Hero = ({ font }: any) => {
  return (
    <section
      id="hero"
      className="py-24 flex flex-col items-center gap-12 text-center px-4 md:px-20"
    >
      <div className="flex flex-col gap-4 items-center">
        <h1
          className={
            font.className + " text-4xl md:text-6xl font-medium text-stone-900"
          }
        >
          Ethical careers for a better world.
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl">
          Keep track of your job search with our application tracker, built to
          help you secure your dream job. Ethical job board coming soon.
        </p>
      </div>
      <GetAccessButton styling={"btn-primary"} text="Get Free Access" />
      {/* <Image
        alt="PlanetCareer Application Dashboard table"
        priority
        width={1216}
        height={810}
        src="/dashboard.svg"
        className="rounded-lg md:rounded-2xl shadow-2xl border-4 md:border-8 border-stone-800"
      /> */}
      <iframe
        src="http://localhost:3000/demo"
        title="description"
        className="flex-1 w-full rounded-lg md:rounded-2xl shadow-2xl border-4 md:border-8 border-stone-800 aspect-[1248/916]"
      ></iframe>
    </section>
  );
};

export default Hero;
