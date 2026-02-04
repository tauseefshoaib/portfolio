export default function Resume() {
  const experiences = [
    {
      role: "Software Engineer L2",
      company: "Codinova Technologies",
      period: "Feb 2024 – Present • Hybrid",
      bullets: [
        "Developed core features for a major Danish finance app using React Native.",
        "Reduced dashboard load by 50% through performance optimization.",
        "Led monorepo setup, POCs, and tooling decisions.",
        "Maintained Storybook and full Jest testing suite.",
        "Served as client-facing dev & mentored juniors.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Zarif Quest International Pvt Ltd",
      period: "Apr 2022 – Jan 2024 • Remote",
      bullets: [
        "Built a full React Native application using Styled Components.",
        "Integrated APIs using Redux Toolkit + Redux Saga.",
        "Optimized performance via lazy loading & code-splitting.",
      ],
    },
    {
      role: "Software Trainee",
      company: "Codetru",
      period: "Jan 2022 – Mar 2022 • Hyderabad",
      bullets: ["Worked on a Flutter app utilizing BLoC architecture."],
    },
  ];

  const education = [
    {
      school: "Jamia Hamdard University",
      program: "BCA (8.85 CGPA)",
      period: "2018 – 2021 • Delhi",
    },
    {
      school: "Salwan Boys Sr. Sec. School",
      program: "Science Stream",
      period: "2016 – 2018 • Delhi",
    },
  ];

  return (
    <main className="flex flex-1 pt-24 pb-10 text-white animate-pageFade">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Technical Skills */}
        <section className="mt-6 mb-20">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">
            Technical Skills
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">Languages</h3>
              <p className="text-sm text-neutral-400 mt-2">
                JavaScript, TypeScript
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">Frameworks</h3>
              <p className="text-sm text-neutral-400 mt-2">
                React Native, React.js
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">
                Developer Tools
              </h3>
              <p className="text-sm text-neutral-400 mt-2">
                Git, VS Code, XCode, Android Studio, Azure DevOps, Firebase
                Crashlytics
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">Libraries</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Redux Toolkit, Styled Components, Jest, Storybook, Reanimated,
                Turborepo
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-6 bottom-6 hidden w-px -translate-x-1/2 bg-neutral-700 md:block" />
            <ul className="space-y-10">
              {experiences.map((exp, index) => {
                const left = index % 2 === 0;
                return (
                  <li key={exp.role} className="relative">
                    <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.35)] md:block" />
                    <div className="grid gap-6 md:grid-cols-2">
                      <div
                        className={
                          left
                            ? "md:pr-8 md:text-right"
                            : "md:col-start-2 md:pl-8"
                        }
                      >
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                          <h3 className="text-lg font-semibold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-neutral-300 mt-1">
                            {exp.company}
                          </p>
                          <p className="text-xs text-neutral-400 mt-1">
                            {exp.period}
                          </p>
                          <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                            {exp.bullets.join(" ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-6 bottom-6 hidden w-px -translate-x-1/2 bg-neutral-700 md:block" />
            <ul className="space-y-10">
              {education.map((edu, index) => {
                const left = index % 2 === 0;
                return (
                  <li key={edu.school} className="relative">
                    <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.35)] md:block" />
                    <div className="grid gap-6 md:grid-cols-2">
                      <div
                        className={
                          left
                            ? "md:pr-8 md:text-right"
                            : "md:col-start-2 md:pl-8"
                        }
                      >
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                          <h3 className="text-lg font-semibold text-white">
                            {edu.school}
                          </h3>
                          <p className="text-sm text-neutral-300 mt-1">
                            {edu.program}
                          </p>
                          <p className="text-xs text-neutral-400 mt-1">
                            {edu.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Buttons */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => window.open("/Resume.pdf", "_blank")}
            className="flex items-center gap-2 px-8 py-2 border border-neutral-700 rounded-md hover:bg-white hover:text-black transition min-w-[180px] justify-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v14m0 0l-4-4m4 4l4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M4 21h16" strokeLinecap="round" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
