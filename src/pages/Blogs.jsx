export default function Blogs() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Blogs</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="p-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition"
            >
              <h3 className="font-medium">Blog post title {i}</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Short summary of the article.
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
