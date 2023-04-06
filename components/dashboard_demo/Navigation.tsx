import Image from "next/image";
import { Briefcase, Home, Settings } from "react-feather";
import demoProfileImg from "../../assets/demo-user-profile.png";

const Navigation = () => {
  return (
    <div className="hidden md:flex px-4 py-10 bg-white border-r text-stone-500 border-stone-200 w-[80px] flex-col gap-4 justify-between">
      <div className="flex flex-col gap-6 items-center">
        <Image
          alt="PlanetCareer Logo without text"
          width="0"
          height="0"
          className="w-10 aspect-square"
          src="/logomark.svg"
        />
        <div className="space-y-1">
          <button className="p-3 hover:text-stone-800 transition-colors">
            <Home />
          </button>
          <button className="p-3 hover:text-stone-800 transition-colors">
            <Briefcase />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button className="p-3 hover:text-stone-800 transition-colors">
          <Settings />
        </button>
        <Image
          alt="User Image"
          width="0"
          height="0"
          className="w-12 rounded-full aspect-square"
          src={demoProfileImg}
        />
      </div>
    </div>
  );
};

export default Navigation;
