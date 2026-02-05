import ResumeSection from "../components/ResumeSection";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-12 text-center md:text-left">
            <img
              src="/avatar.png"
              alt="Tauseef Shoaib portrait"
              className="w-28 h-28 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full object-cover border border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.35)] opacity-0 animate-fadeUp"
              style={{ animationDelay: "0s" }}
            />

            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold opacity-0 animate-fadeUp whitespace-nowrap"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I’m <span className="text-white/90">Tauseef Shoaib</span>
              </h1>

              <p
                className="mt-6 text-neutral-400 max-w-xl opacity-0 animate-fadeUp"
                style={{ animationDelay: "0.25s" }}
              >
                Software developer focused on building clean, scalable,
                high-quality applications for the web and mobile.
              </p>

              <Socials className="mt-8 justify-center md:justify-start" />
            </div>
          </div>
        </div>
      </section>

      <ResumeSection />
    </div>
  );
}
