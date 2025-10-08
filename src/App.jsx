import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/navigation/Footer";
import Header from "./Components/navigation/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-dark-background text-black dark:text-white font-main text-2xl tracking-wider leading-loose max-md:text-xl">
      <Header />
      <main className="mt-24 mx-40 flex-grow max-lg:mt-24 max-lg:mx-5 max-xl:mx-20 readerMode:px-56">
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
