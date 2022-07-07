import Head from "next/head";
import Image from "next/image";
import FixedSocials from "../components/UI/FixedSocials";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Hero from "../components/Main/Hero";
import GeneralInfo from "../components/Main/GeneralInfo";
import FixedBackground from "../components/UI/FixedBackground";
import Header from "../components/Header/Header";
import GeneralInfoVol2 from "../components/Main/GeneralInfoVol2";
import FixedSideBar from "../components/UI/FixedSideBar";
import TechStack from "../components/Main/TechStack";
import Techs from "../components/Main/Techs";
import { Parallax } from "react-scroll-parallax";
import ContactForm from "../components/Main/ContactForm";
import CoolPicture from "../components/Main/CoolPicture";
import Footer from "../components/Main/Footer";

export default function Home() {
  const mainTechs = [
    {
      id: 1,
      title: "React JS",
      src: "/icons/technology/React.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 2,
      title: "JavaScript",
      src: "/icons/technology/JavaScript.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 3,
      title: "Next.js",
      src: "/icons/technology/NextDark.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 6,
      title: "React Native",
      src: "/icons/technology/React.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 4,
      title: "TypeScript",
      src: "/icons/technology/TypeScript.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 5,
      title: "Tailwind",
      src: "/icons/technology/Tailwind.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
  ];
  const infrastructe = [
    {
      id: 1,
      title: "GitLab",
      src: "/icons/technology/GitLab.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 2,
      title: "Netlify",
      src: "/icons/technology/Netlify.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 3,
      title: "Slack",
      src: "/icons/technology/Slack.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 4,
      title: "Jira",
      src: "/icons/technology/Jira.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 5,
      title: "Trello",
      src: "/icons/technology/Trello.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 6,
      title: "Confluence",
      src: "/icons/technology/Confluence.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
  ];
  const others = [
    {
      id: 1,
      title: "Figma",
      src: "/icons/technology/Figma.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 2,
      title: "REST API",
      src: "/icons/technology/rest.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 3,
      title: "Swift",
      src: "/icons/technology/swift-icon.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 4,
      title: "GSAP",
      src: "/icons/technology/gsap-greensock.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
    {
      id: 5,
      title: "Webpack",
      src: "/icons/technology/Webpack.svg",
      descript:
        "Esse incididunt dolore nulla ad excepteur amet excepteur dolor eu. Consectetur labore ea magna est do eiusmod non quis labore. Consectetur anim ea ullamco aliqua exercitation nostrud exercitation ad officia excepteur est.",
    },
  ];
  return (
    <>
      <Head>
        <title>David Zirnsák - Digital Biography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Hero />
      <FixedSocials />
      <GeneralInfoVol2 />
      <FixedSideBar />
      <div className="relative overflow-hidden">
        <TechStack />

        <Techs title={"Development"} techs={mainTechs} />
        <Techs title={"Infrastructure"} reverse techs={infrastructe} />

        <Techs title="Others" techs={others} />
        <ContactForm />
      </div>
      {/* <Footer /> */}
      {/* <GeneralInfo /> */}
    </>
  );
}
