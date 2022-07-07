import React from "react";
import Link from "next/link";

const FixedSideBar = () => {
  return (
    <div className="fixed top-[50%] z-[5] translate-y-[-50%] right-[20px]">
      <div className="">
        <div className="mb-[15px] group relative">
          <div className="w-[16px] h-[16px] mb-[15px] group-hover:rotate-[-360deg] bg-black group-hover:scale-[1.5] cursor-pointer group-hover:bg-white transition-all duration-[300ms]  rotate-[-45deg] border-[1px] border-white relative"></div>
          <div className="absolute border-[1px] border-white group-hover:right-[30px] transition-all duration-[300ms]  top-[50%] translate-y-[-50%] right-[-140px]  w-[100px] bg-black text-white">
            <Link href="#Home">
              <a>
                <p className="text-center text-[13px] translate-y-[-1px]">
                  Home
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div className="mb-[15px] group relative">
          <div className="w-[16px] h-[16px] mb-[15px] group-hover:rotate-[-360deg] bg-black group-hover:scale-[1.5] cursor-pointer group-hover:bg-white transition-all duration-[300ms]  rotate-[-45deg] border-[1px] border-white relative"></div>
          <div className="absolute border-[1px] border-white group-hover:right-[30px] transition-all duration-[300ms]  top-[50%] translate-y-[-50%] right-[-140px]  w-[100px] bg-black text-white">
            <Link href="#About">
              <a>
                <p className="text-center text-[13px] translate-y-[-1px]">
                  About Me
                </p>
              </a>
            </Link>{" "}
          </div>
        </div>
        <div className="mb-[15px] group relative">
          <div className="w-[16px] h-[16px] mb-[15px] group-hover:rotate-[-360deg] bg-black group-hover:scale-[1.5] cursor-pointer group-hover:bg-white transition-all duration-[300ms]  rotate-[-45deg] border-[1px] border-white relative"></div>
          <div className="absolute border-[1px] border-white group-hover:right-[30px] transition-all duration-[300ms]  top-[50%] translate-y-[-50%] right-[-140px]  w-[100px] bg-black text-white">
            <Link href="#Tech">
              <a>
                <p className="text-center text-[13px] translate-y-[-1px]">
                  Tech Stack
                </p>
              </a>
            </Link>{" "}
          </div>
        </div>
        <div className="mb-[15px] group relative">
          <div className="w-[16px] h-[16px] mb-[15px] group-hover:rotate-[-360deg] bg-black group-hover:scale-[1.5] cursor-pointer group-hover:bg-white transition-all duration-[300ms]  rotate-[-45deg] border-[1px] border-white relative"></div>
          <div className="absolute border-[1px] border-white group-hover:right-[30px] transition-all duration-[300ms]  top-[50%] translate-y-[-50%] right-[-140px]  w-[100px] bg-black text-white">
            <Link href="#contact">
              <a>
                <p className="text-center text-[13px] translate-y-[-1px]">
                  Contact
                </p>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedSideBar;
