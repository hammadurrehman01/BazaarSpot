import { Link } from "react-router-dom";
import { LanguageChanger } from "../index";

const HeaderTop = () => {
  return (
    <div className="flex justify-center items-center bg-[var(--mainTextBlack)] w-full">
      <div className="flex items-center justify-between text-[var(--mainTextWhiteColor)] gap-4 md:gap-10 relative w-full max-w-screen-xl py-2 px-4">
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-center md:text-left">
          <p className="whitespace-nowrap">
            Summer Sale For All Swim Suits And Free Express Delivery - <em>OFF 50%!</em>
          </p>
          <Link to='#' className="text-white">
            Shop Now
          </Link>
        </div>
        <div className="absolute right-4 md:right-10 text-[var(--mainTextWhiteColor)] text-black">
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
