import Image from "next/image";
import { X } from "react-feather";
import demoProfileImg from "../../assets/demo-user-profile.png";
import menuIcon from "../../assets/menu.svg";
import briefcaseIcon from "../../assets/briefcase.svg";
import homeIcon from "../../assets/home-smile.svg";
import settingsIcon from "../../assets/settings.svg";
import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 md:hidden px-4 py-3 bg-white border-b text-stone-500 border-stone-200">
        <div className="flex flex-1 gap-4 justify-between items-center">
          <Link href="/">
            <Image
              alt="PlanetCareer Logo without text"
              width="0"
              height="0"
              className="w-10 aspect-square"
              src="/logomark.svg"
            />
          </Link>
          <div className="p-2" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            {mobileNavOpen ? (
              <X />
            ) : (
              <Image
                alt="Menu Icon"
                width="0"
                height="0"
                className="w-6"
                src={menuIcon}
              />
            )}
          </div>
        </div>
        {mobileNavOpen && (
          <ul className="flex flex-col gap-2">
            <li className="flex-1 font-medium text-stone-900 flex gap-3 py-3 px-2 rounded-lg hover:bg-stone-50">
              <Image
                alt="Home Icon"
                width="0"
                height="0"
                className="w-6"
                src={homeIcon}
              />
              Home
            </li>
            <li className="flex-1 font-medium text-stone-900 flex gap-3 py-3 px-2 rounded-lg hover:bg-stone-50">
              <Image
                alt="Briefcase Icon"
                width="0"
                height="0"
                className="w-6"
                src={briefcaseIcon}
              />
              Application Tracker
            </li>
            <li className="flex-1 font-medium text-stone-900 flex gap-3 py-3 px-2 rounded-lg hover:bg-stone-50">
              <Image
                alt="Settings Icon"
                width="0"
                height="0"
                className="w-6"
                src={settingsIcon}
              />
              Settings
            </li>
          </ul>
        )}
      </div>

      <div className="hidden md:flex fixed min-h-screen px-4 py-10 bg-white border-r text-stone-500 border-stone-200 w-[80px] flex-col gap-4 justify-between">
        <div className="flex flex-col gap-6 items-center">
          <Link href="/">
            <Image
              alt="PlanetCareer Logo without text"
              width="0"
              height="0"
              className="w-10 aspect-square"
              src="/logomark.svg"
            />
          </Link>
          <div className="space-y-1">
            <button className="p-3 hover:text-stone-800 transition-colors">
              <Image
                alt="Home Icon"
                width="0"
                height="0"
                className="w-6"
                src={homeIcon}
              />
            </button>
            <button className="p-3 hover:text-stone-800 transition-colors">
              <Image
                alt="Briefcase Icon"
                width="0"
                height="0"
                className="w-6"
                src={briefcaseIcon}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button className="p-3 hover:text-stone-800 transition-colors">
            <Image
              alt="Settings Icon"
              width="0"
              height="0"
              className="w-6"
              src={settingsIcon}
            />
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
    </>
  );
};

export default Navigation;
