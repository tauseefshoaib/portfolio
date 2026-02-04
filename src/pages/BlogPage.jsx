import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function BlogPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch(`/blogs/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(marked(text)))
      .catch(() => setContent("<h1>Blog not found</h1>"));
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-transparent">
        <div
          className="h-full bg-white/80"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-28 animate-pageFade flex flex-1">
        <article
          className="prose prose-invert prose-neutral"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
