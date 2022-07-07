import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="header fixed bg-gradient-to-b from-[rgba(0,0,0,1)] top-0 left-0 w-[100%] text-white z-[3]">
      <div className="w-[100%]   laptop:py-[10px] flex items-center laptop:px-[40px] max-w-[1420px] mx-auto">
        <div className="flex-1">
          <div className="border-2 w-fit border-white laptop:px-[40px] laptop:py-[1px]">
            <p className="uppercase font-LG text-[30px]">Logo</p>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="w-fit group  cursor-pointer">
            <Link href="#Home">
              <a>
                <p className="font-LG text-[25px]">Home</p>
              </a>
            </Link>

            <div className="w-[0%] transition-all duration-[300ms] group-hover:w-[100%] bg-white h-[2px]"></div>
          </div>
          <div className="w-fit group  cursor-pointer">
            <Link href="#About">
              <a>
                <p className="font-LG text-[25px]">About Me</p>
              </a>
            </Link>
            <div className="w-[0%] transition-all duration-[300ms] group-hover:w-[100%] bg-white h-[2px]"></div>
          </div>
          <div className="w-fit group  cursor-pointer">
            <Link href="#Tech">
              <a>
                <p className="font-LG text-[25px]">Tech Stack</p>
              </a>
            </Link>
            <div className="w-[0%] transition-all duration-[300ms] group-hover:w-[100%] bg-white h-[2px]"></div>
          </div>
          <div className="w-fit group  cursor-pointer">
            <Link href="#contact">
              <a>
                <p className="font-LG text-[25px]">Contact</p>
              </a>
            </Link>
            <div className="w-[0%] transition-all duration-[300ms] group-hover:w-[100%] bg-white h-[2px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
