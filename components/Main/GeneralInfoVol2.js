import React, { useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import gsap from "gsap";
const GeneralInfoVol2 = () => {
  const trigger = useRef();
  const allRefs = gsap.utils.selector(trigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 50%",
        toggleActions: "play none none reset",
      },
    });
    tl.to(allRefs(".textBox"), {
      stagger: 0.5,
      duration: 1,
      y: 0,
    });
  }, []);

  return (
    <div
      id="About"
      ref={trigger}
      style={{
        clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)",
      }}
      className="w-[100%] bg-black text-white   relative"
    >
      <div className="w-[100%]   laptop:py-[150px] relative max-w-[1420px] mx-auto laptop:px-[40px] ">
        <div className="w-[1px]  bg-white h-[50%] rotate-[-10deg] left-[15%] top-[50%] translate-y-[-50%] absolute ">
          <div className="h-[100%]  relative">
            <Parallax translateY={[-0, 2000]}>
              <div className=" left-[50%] rounded-[10px] translate-x-[-50%] w-[20px] h-[20px] bg-white "></div>
            </Parallax>
          </div>
        </div>

        <div className="flex overflow-hidden w-[100%]">
          <div className="w-[15%]"></div>
          <div className="textBox flex-1 translate-y-[-100%] ">
            <div className="w-fit mb-[30px]">
              <h3 className=" font-LG text-[70px]">Growing up</h3>
              <div className="w-[100%] h-[3px] bg-white"></div>
            </div>
            <p className="text-[35px]">
              I was born and raised in Prague in Czech Republic where I studied
              and became a front-end developer. I've applied and got my first
              job here as a junior FE developer, where I became midior
            </p>
          </div>
          <div className="w-[30%]"></div>
        </div>
        <div className="flex w-[100%] overflow-hidden mt-[100px]">
          <div className="w-[25%]"></div>
          <div className="textBox flex-1 translate-y-[-100%] ">
            <div className="w-fit mb-[30px]">
              <h3 className=" font-LG text-[70px]">My expertise</h3>
              <div className="w-[100%] h-[3px] bg-white"></div>
            </div>
            <p className="text-[35px]">
              My main specialization is in React.js and coding Web Presentations
              or simple apps with modern design and animations. I also extend my
              experience with Mobile Apps using hybrid technologies like React
              Native
            </p>
          </div>
          <div className="w-[20%]"></div>
        </div>
        <div className="flex w-[100%] overflow-hidden mt-[100px]">
          <div className="w-[35%]"></div>
          <div className="textBox flex-1 translate-y-[-100%]  ">
            <div className="w-fit mb-[30px]">
              <h3 className=" font-LG text-[70px]">Something extra</h3>
              <div className="w-[100%] h-[3px] bg-white"></div>
            </div>
            <p className="text-[35px]">
              I am a big fan of modern design and creating unique design
              elements using slick animations. Beside this my interests are in
              video games and basketball in free time.
            </p>
          </div>
          <div className="w-[10%]"></div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfoVol2;
