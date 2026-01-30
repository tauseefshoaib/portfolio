import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function BlogPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/src/blogs/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(marked(text)))
      .catch(() => setContent("<h1>Blog not found</h1>"));
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-28 animate-page-fade flex flex-1">
      <article
        className="prose prose-invert prose-neutral"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
