import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Add stagger effect to child elements
            const children = entry.target.querySelectorAll(".stagger-item");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("visible");
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("section-transition");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Services /> */}
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
