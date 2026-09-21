import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkProfile from "./components/WorkProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <WorkProfile />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;