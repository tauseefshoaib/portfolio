export default function Home() {
  return (
    <main className="flex-1 flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-5xl md:text-6xl font-bold opacity-0 animate-fadeUp"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I’m <span className="text-white/90">Tauseef Shoaib</span>
        </h1>

        <p
          className="mt-6 text-neutral-400 max-w-xl opacity-0 animate-fadeUp"
          style={{ animationDelay: "0.25s" }}
        >
          Software developer focused on building clean, scalable, high-quality
          applications for the web and mobile.
        </p>
      </div>
    </main>
  );
}
