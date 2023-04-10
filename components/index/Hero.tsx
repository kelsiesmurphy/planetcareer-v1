import Image from "next/image";
import GetAccessButton from "./GetAccessButton";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";

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
      <div className="flex gap-4">
        <Link href="/demo" className="btn-secondary"><ArrowUpRight /> View Demo</Link>
        <GetAccessButton styling={"btn-primary"} text="Get Free Access" />
      </div>
      <iframe
        src="https://www.planetcareer.co.uk/demo"
        title="description"
        className="flex-1 w-full rounded-lg md:rounded-2xl shadow-2xl border-4 md:border-8 border-stone-800 aspect-[1248/916]"
      ></iframe>
    </section>
  );
};

export default Hero;
