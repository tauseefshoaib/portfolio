export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold animate-fadeUp">
          Hi, I’m Tauseef Shoaib
        </h1>
        <p
          className="mt-6 text-neutral-400 max-w-xl animate-fadeUp"
          style={{ animationDelay: "0.1s" }}
        >
          Software developer focused on building fast, accessible, and scalable
          applications.
        </p>
      </div>
    </main>
  );
}
