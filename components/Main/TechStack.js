import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
const TechStack = () => {
  const trigger = useRef();
  const trigger2 = useRef();
  const allRefs = gsap.utils.selector(trigger);
  const allRefs2 = gsap.utils.selector(trigger2);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(allRefs(".headline"), {
      duration: 0.8,
      y: 0,
    });
    tl.to(
      allRefs(".underline"),
      {
        duration: 0.5,
        width: "100%",
      },
      "-=0.2s"
    );
    tl.to(
      allRefs(".paragraph"),
      {
        duration: 1,
        scale: "1",
      },
      "-=0.2s"
    );
  }, []);
  const Techs = [
    {
      id: 1,
      title: "Lorem Ipsum",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 2,
      title: "Dolor ea",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 3,
      title: "Esse incididunt",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 4,
      title: "Consectetur labore",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
  ];

  return (
    <div
      id="Tech"
      style={{
        clipPath: "polygon(20% 0, 100% 0, 100% 20%, 100% 100%, 0 100%, 0 20%)",
      }}
      className="relative w-[100%] mt-[0px] pb-[150px] bg-black"
    >
      <div className="text-white mx-auto max-w-[1420px] laptop:px-[40px] pt-[150px]">
        <div ref={trigger} className="w-[100%]">
          <div className="w-fit overflow-hidden mx-auto">
            <h3 className="headline translate-y-[-100%] text-center font-LG text-[90px]">
              Tech Stack
            </h3>
            <div className="w-[0%] underline h-[2px] bg-white"></div>
          </div>

          <p className="paragraph scale-[0] text-center w-[50%] mx-auto mt-[30px] text-[25px]">
            This is my current Tech Stack. As I said before my main
            specialization is in React JS, Javascript and Next.js. Not every
            tech mentioned below is on the same level of experience so feel free
            to visit{" "}
            <span>
              <Link href="#contact">
                <a className="font-LG cursor-pointer">contact section</a>
              </Link>
            </span>{" "}
            and write me an email for more info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
