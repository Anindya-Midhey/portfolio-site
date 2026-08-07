import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import BgCanvas from "./components/BgCanvas";
import CircuitBoard from "./components/CircuitBoard";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <>
      <div className="crt-overlay" aria-hidden="true" />
      <CircuitBoard />
      <BgCanvas />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}
