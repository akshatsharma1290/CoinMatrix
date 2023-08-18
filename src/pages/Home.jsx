import Hero from "../components/Hero";
import DemoCoins from "../components/DemoCoins";
import Market from "../components/Market";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Current hash will be detected and that section container will be selected and get scrolled Into the View.
    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const targetContainer = document.querySelector(hash);
      if (targetContainer) {
        window.scrollTo({
          top: targetContainer.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <DemoCoins />
      <Market />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
}
