import "./App.css";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header theme="bg-dark" />
      <About theme="bg-white" />
      <Skills theme="bg-secondary" />
      <Portfolio theme="bg-light" />
      <Footer theme="nav bg-black sticky-bottom " />
    </div>
  );
}

export default App;
