import Hero from "../components/Hero";
import DemoCoins from "../components/DemoCoins";
import Market from "../components/Market";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetContainer = document.querySelector(hash);
      if (targetContainer) {
        targetContainer.scrollIntoView({ behavior: "smooth" });
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
