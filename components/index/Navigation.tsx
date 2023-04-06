import Image from "next/image";
import GetAccessButton from "./GetAccessButton";

const Navigation = () => {
  return (
    <nav
      id="top"
      className="bg-white border-b border-stone-100 flex justify-between py-4 px-4 md:px-20 transition-all"
    >
      <div className="flex gap-4 items-center">
        <Image
          alt="PlanetCareer Logo"
          width={142}
          height={25}
          src="/wordmark.svg"
        />
        <a href="#faq" className="text-stone-700 font-semibold">
          FAQ
        </a>
      </div>
      <GetAccessButton />
    </nav>
  );
};

export default Navigation;
