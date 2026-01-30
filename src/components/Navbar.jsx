export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold">Tauseef Shoaib</span>
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="home" className="hover:text-white">
            Home
          </a>
          <a href="about" className="hover:text-white">
            About
          </a>
          <a href="blogs" className="hover:text-white">
            Blogs
          </a>
          <a href="contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
