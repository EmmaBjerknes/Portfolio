import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="scroll-container">
        <Header />
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
