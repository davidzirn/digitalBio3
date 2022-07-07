import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
const Hero = () => {
  const trigger = useRef();
  const allRefs = gsap.utils.selector(trigger);
  useEffect(() => {
    gsap.to(allRefs(".background"), {
      clipPath: "polygon(0 0, 60% 0, 80% 100%, 0% 100%)",
      duration: 1,
      delay: 0.5,
    });
    gsap.to(allRefs(".image"), {
      scale: 1,
      duration: 1,
      delay: 3,
    });
    gsap.to(allRefs(".firstText"), {
      x: 0,
      duration: 1,
      delay: 0.7,
    });
    gsap.to(allRefs(".headline"), {
      y: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to(allRefs(".underline"), {
      width: "80%",
      duration: 1,
      delay: 1.5,
    });
    gsap.to(allRefs(".heading2"), {
      y: 0,
      duration: 0.6,
      delay: 2,
    });
    gsap.to(allRefs(".text"), {
      y: 0,
      duration: 0.6,
      delay: 2,
    });
  }, []);

  return (
    <div
      id="Home"
      ref={trigger}
      className="w-[100%] h-[100vh] relative text-white"
    >
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="background w-[100%] h-[100%] bg-black absolute top-0 left-0 z-[1]"
      ></div>

      <div className="w-[100%] h-[100%] absolute z-[1]">
        <div className="absolute iconDown border-2 hover:scale-[1.2] cursor-pointer transition-all duration-[300ms] p-[10px] rounded-[20px] bottom-[20px] left-[50%] translate-x-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-down"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
        <div className="flex items-center max-w-[1420px] mx-[auto] w-[100%]  z-[2] laptop:px-[100px] h-[100%]">
          <div className="flex-1">
            <p className="firstText italic translate-x-[-100%] text-[35px]">
              <span className="font-LG not-italic tracking-[0.2rem] text-[50px]">
                Hi
              </span>
              , my name is:
            </p>
            <div className="overflow-hidden w-fit  mt-[20px]">
              <h1
                style={{
                  "-webkit-text-stroke": "1px white",
                  color: "black",
                }}
                className="headline  translate-y-[-100%] font-LG text-[150px] leading-[180px] tracking-[0rem] mt-[-30px]"
              >
                David Zirnsák
              </h1>
              <div className="underline w-[0%] h-[1px] bg-white" />
            </div>
            <div className="overflow-hidden ">
              <p className="heading2 italic text-[50px] translate-y-[-120%] mt-[20px]">
                & I am{" "}
                <span className="font-LG not-italic text-[70px]">
                  Front-End Developer
                </span>
              </p>
            </div>
            <div className="overflow-hidden ">
              <p className="text  italic translate-y-[-130%] w-[80%] text-[30px] leading-[52px] mt-[50px]">
                This is my{" "}
                <span className=" not-italic font-LG text-[32px] tracking-[0.05rem]">
                  digital biography
                </span>
                . It contains information about{" "}
                <span className="not-italic font-LG text-[32px] tracking-[0.05rem]">
                  me and my work
                </span>
                . I have also included my{" "}
                <span className="not-italic font-LG text-[32px] tracking-[0.05rem]">
                  Tech stack
                </span>{" "}
                here so have a look at that too
              </p>
            </div>
          </div>
          <div className="image w-[30%] scale-0 h-[50%] border-2">
            <div
              style={{ boxShadow: "black 0px 0px 50px" }}
              className="w-[100%]  translate-x-[-40px]  translate-y-[-40px] h-[100%] relative"
            >
              <Image
                layout="fill"
                className="object-cover object-center"
                src="/images/mePlaceholder.jpg"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
