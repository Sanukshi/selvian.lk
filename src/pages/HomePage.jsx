import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Architecture from "../components/Architecture";
import Contact from "../components/Contact";
import CtaBanner from "../components/CtaBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Platform from "../components/Platform";
import Pricing from "../components/Pricing";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";
import WhySelvian from "../components/WhySelvian";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platform />
        <HowItWorks />
        <Architecture />
        <Solutions />
        <WhySelvian />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
