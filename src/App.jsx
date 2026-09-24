import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DirectorMessage from "./components/DirectorMessage";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WorkProfile from "./components/WorkProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Website */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Sanyog Group */}
        <About />

        {/* Director's Message */}
        <DirectorMessage />

        {/* Services */}
        <Services />

        {/* Projects */}
        <Projects />

        {/* Work Profile */}
        <WorkProfile />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;