import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#f6ecde] min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <About />
      <Footer />
    </main>
  );
}
