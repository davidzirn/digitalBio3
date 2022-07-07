import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function MyApp({ Component, pageProps }) {
  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    gsap.registerPlugin(ScrollTrigger);
  }
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
