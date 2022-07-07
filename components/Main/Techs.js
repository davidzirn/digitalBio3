import { useRef, useEffect } from "react";
import React from "react";
import gsap from "gsap";
import Image from "next/image";
const Techs = (props) => {
  const trigger = useRef();
  const allRefs = gsap.utils.selector(trigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.to(allRefs(".headline2"), {
      duration: 0.8,
      x: 0,
    });
    tl.to(
      allRefs(".image"),
      {
        scale: 1,
        stagger: 0.2,
        duration: 0.3,
      },
      "-=1s"
    );
    tl.to(allRefs(".underline2"), {
      width: "40%",
      duration: 1,
    });
    tl.to(
      allRefs(".circle"),
      {
        duration: 0.3,
        scale: 1,
        stagger: 0.2,
      },
      "-=0.5s"
    );
    tl.to(
      allRefs(".textik"),
      {
        y: 0,
        duration: 0.2,
        stagger: 0.2,
      },
      "-=1s"
    );
  }, []);

  return (
    <div className="bg-black px-[40px] pr-[50px] pb-[50px] ">
      <div
        ref={trigger}
        className="text-white relative max-w-[1380px] mx-auto "
      >
        <h4
          style={{
            textAlign: props.reverse ? "right" : "left",
          }}
          className="headline2 mr-[20px] translate-x-[-120%] text-white font-LG text-[50px]"
        >
          {props.title}
        </h4>
        <div
          style={{ marginLeft: props.reverse ? "auto" : "0" }}
          className="w-[0%]  underline2 h-[2px] bg-white"
        ></div>
        <div
          style={{ justifyContent: props.reverse ? "flex-end" : "flex-start" }}
          className="flex flex-wrap mt-[50px] gap-[100px]"
        >
          {props.techs.map((object) => {
            return (
              <div key={object.id}>
                <div className="circle bg-black flex items-center justify-center mx-auto scale-0 w-[60px] h-[60px] border-[1px] relative rounded-[50%]">
                  <div
                    className={`w-[30px] ${
                      object.title === "Next.js" ? "h-[10px]" : "h-[30px]"
                    } relative`}
                  >
                    <Image
                      width={80}
                      height={80}
                      layout="fill"
                      className="object-cover"
                      src={object.src}
                    />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <h5 className="textik translate-y-[100%]  text-white text-center mt-[20px]  text-[16px]">
                    {object.title}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techs;
