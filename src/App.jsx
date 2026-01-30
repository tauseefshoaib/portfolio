import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}
