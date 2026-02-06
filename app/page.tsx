import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import VideoShowcase from "./components/VideoShowcase";
import CleaningSolutions from "./components/CleaningSolutions";
import Features from "./components/Features";
import ValueProposition from "./components/ValueProposition";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#f6ecde] min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <VideoShowcase />
      <CleaningSolutions />
      <Features />
      <ValueProposition />
      <About />
      <Footer />
    </main>
  );
}
