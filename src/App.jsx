import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { NavProvider } from "./components/context/context";

function App() {
  return (
    <NavProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </NavProvider>
  );
}

export default App;
