export default function Resume() {
  const downloadResume = () => {
    fetch("Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const resumeUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = resumeUrl;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <main className="flex flex-1 pt-24 pb-10 text-white animate-pageFade">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">
            Technical Skills
          </h2>

          <ul className="text-neutral-400 space-y-2 text-sm">
            <li>
              <strong className="text-white">Languages:</strong> JavaScript,
              TypeScript
            </li>
            <li>
              <strong className="text-white">Frameworks:</strong> React Native,
              React.js
            </li>
            <li>
              <strong className="text-white">Developer Tools:</strong> Git, VS
              Code, XCode, Android Studio, Azure DevOps, Firebase Crashlytics
            </li>
            <li>
              <strong className="text-white">Libraries:</strong> Redux Toolkit,
              Styled Components, Jest, Storybook, Reanimated, Turborepo
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">
            Experience
          </h2>

          {/* Job 1 */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Codinova Technologies
                </h3>
                <p className="text-neutral-400 text-sm">Software Engineer L2</p>
              </div>
              <p className="text-neutral-500 text-xs italic">
                Feb 2024 – Present • Hybrid
              </p>
            </div>

            <ul className="list-disc pl-5 mt-3 text-neutral-400 space-y-2 text-sm">
              <li>
                Developed core features for a major Danish finance app using
                React Native.
              </li>
              <li>
                Reduced dashboard load by 50% through performance optimization.
              </li>
              <li>Led monorepo setup, POCs, and tooling decisions.</li>
              <li>Maintained Storybook and full Jest testing suite.</li>
              <li>Served as client-facing dev & mentored juniors.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Zarif Quest International Pvt Ltd
                </h3>
                <p className="text-neutral-400 text-sm">Software Engineer</p>
              </div>
              <p className="text-neutral-500 text-xs italic">
                Apr 2022 – Jan 2024 • Remote
              </p>
            </div>

            <ul className="list-disc pl-5 mt-3 text-neutral-400 space-y-2 text-sm">
              <li>
                Built a full React Native application using Styled Components.
              </li>
              <li>Integrated APIs using Redux Toolkit + Redux Saga.</li>
              <li>Optimized performance via lazy loading & code-splitting.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-lg font-semibold text-white">Codetru</h3>
                <p className="text-neutral-400 text-sm">Software Trainee</p>
              </div>
              <p className="text-neutral-500 text-xs italic">
                Jan 2022 – Mar 2022 • Hyderabad
              </p>
            </div>

            <ul className="list-disc pl-5 mt-3 text-neutral-400 space-y-2 text-sm">
              <li>Worked on a Flutter app utilizing BLoC architecture.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-800 pb-2">
            Education
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">
              Jamia Hamdard University
            </h3>
            <p className="text-neutral-400 text-sm">BCA (8.85 CGPA)</p>
            <p className="text-neutral-500 text-xs italic">
              2018 – 2021 • Delhi
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Salwan Boys Sr. Sec. School
            </h3>
            <p className="text-neutral-400 text-sm">Science Stream</p>
            <p className="text-neutral-500 text-xs italic">
              2016 – 2018 • Delhi
            </p>
          </div>
        </section>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {/* Download */}
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-5 py-2 border border-neutral-700 rounded-md hover:bg-white hover:text-black transition"
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

          {/* View */}
          <button
            onClick={() => window.open("/Resume.pdf", "_blank")}
            className="flex items-center gap-2 px-5 py-2 border border-neutral-700 rounded-md hover:bg-white hover:text-black transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View PDF
          </button>
        </div>
      </div>
    </main>
  );
}
