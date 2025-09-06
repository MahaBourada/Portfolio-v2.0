import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Nav/Footer";
import Header from "./Components/Nav/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
