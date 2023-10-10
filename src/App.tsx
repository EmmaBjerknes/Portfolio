import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="scroll-container" >
        <Header />
        <Home />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
