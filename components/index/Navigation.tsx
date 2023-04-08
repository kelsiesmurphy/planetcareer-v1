import GetAccessButton from "./GetAccessButton";
import Logo from "../Logo";

const Navigation = () => {
  return (
    <nav
      id="top"
      className="bg-white border-b border-stone-100 flex justify-between py-4 px-4 md:px-20 transition-all"
    >
      <div className="flex gap-4 items-center">
        <a href="">
          <Logo />
        </a>
        <a href="#faq" className="text-stone-700 font-semibold">
          FAQ
        </a>
      </div>
      <GetAccessButton styling={"btn-primary"} text="Get Free Access" />
    </nav>
  );
};

export default Navigation;
