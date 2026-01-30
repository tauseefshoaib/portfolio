import { Link } from "react-router-dom";

export default function Blogs() {
  const posts = [
    { title: "My First Blog", slug: "blog1" },
    { title: "Second Article", slug: "blog2" },
  ];

  return (
    <main className="min-h-screen pt-28 animate-page-fade">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 tracking-tight">Blogs</h2>

        <div className="space-y-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition"
            >
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-neutral-400 text-sm mt-2">Click to read →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
