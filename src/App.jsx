import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-white bg-animated">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
