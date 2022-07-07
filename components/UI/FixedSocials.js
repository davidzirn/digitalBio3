import React from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import classes from "../Main/Main.module.css";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FixedSocials = () => {
  const [cursorIn, setCursorIn] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cachedPosition = useRef(0);
  useEffect(() => {
    if (scrollPosition === 0) {
      setButtonClick(false);
      setCollapsed(true);
    }
    if (scrollPosition > 100 && buttonClick === false) {
      setCollapsed(false);
    } else if (buttonClick === false) {
      setCollapsed(true);
    }

    console.log(scrollPosition);
  }, [scrollPosition]);
  const triggerRef = useRef();
  const allRefs = gsap.utils.selector(triggerRef);
  useEffect(() => {
    gsap.to(allRefs(".button"), {
      x: "0%",
      duration: 0.5,
      delay: 1,
    });
  }, []);
  return (
    <div
      ref={triggerRef}
      style={{
        transition: "all 300ms",
        height: collapsed ? "210px" : "60px",
      }}
      className={`${classes.socials} fixed bottom-[20px]  z-[5] overflow-hidden right-[20px] bg-white pt-[10px] pb-[0px] px-[10px] rounded-[20px]`}
    >
      <div className="button translate-x-[150%] h-[100%]">
        <div
          onClick={() => {
            setCollapsed(!collapsed);
            setButtonClick(true);
          }}
          className="bg-white cursor-pointer absolute bottom-[-10px] left-[0px]  flex items-center justify-center w-[100%] mb-[10px]  h-[60px] rounded-[0px] rounded-t-[20px]"
        >
          <svg
            style={{
              transform: `rotate(${collapsed ? "-225deg" : "0deg"})`,
              transition: "all 300ms",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <Link target="_blank" href="https://www.facebook.com/david.zirnsak.3/">
          <a target="_blank">
            <div className="bg-black flex items-center justify-center w-[40px] mb-[10px] h-[40px] rounded-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </a>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/zirnsuck/">
          <a target="_blank">
            <div className="bg-black flex items-center justify-center w-[40px] mb-[10px] h-[40px] rounded-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/david-zirns%C3%A1k-6b2505220/"
        >
          <a target="_blank">
            <div className="bg-black flex items-center justify-center w-[40px] mb-[10px] h-[40px] rounded-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FixedSocials;
