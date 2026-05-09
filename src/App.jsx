import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-dark-background text-black dark:text-white font-main text-xl max-lg:text-lg font-semibold tracking-wider leading-loose">
      <Header />
      <main
        role="main"
        className="mt-24 mx-40 flex-grow max-lg:mt-24 max-lg:mx-5 max-xl:mx-20 readerMode:px-56"
      >
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
