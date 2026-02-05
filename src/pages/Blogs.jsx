import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Blogs() {
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-key");
          if (!key) return;
          setVisible((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        });
      },
      { threshold: 0.15 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      title: "Memoization in React: When It Helps (And When It Hurts)",
      summary:
        "A practical guide to when memoization actually improves performance and when it just adds complexity.",
      slug: "blog1",
    },
    {
      title: "Frontend Optimization Playbook: Measurable Wins",
      summary:
        "A focused checklist of tactics to improve LCP, INP, and overall UX with measurable impact.",
      slug: "blog2",
    },
    {
      title: "React Native Performance: 12 Practical Wins",
      summary:
        "Quick, measurable changes to speed up lists, reduce re-renders, and smooth UI interactions.",
      slug: "blog3",
    },
    {
      title: "FlatList Mastery: Rendering Large Lists Smoothly",
      summary:
        "Virtualization tips, key extraction, and layout optimization for fast, memory-friendly lists.",
      slug: "blog4",
    },
    {
      title: "Navigation Patterns That Scale in React Native",
      summary:
        "How to structure stacks, tabs, and deep links without turning routing into a mess.",
      slug: "blog5",
    },
    {
      title: "State Management in React Native: What Actually Works",
      summary:
        "A pragmatic look at Context, Redux Toolkit, Zustand, and when to keep it simple.",
      slug: "blog6",
    },
    {
      title: "Animations in React Native: A Practical Guide",
      summary:
        "Choosing between LayoutAnimation, Animated, and Reanimated with real examples.",
      slug: "blog7",
    },
    {
      title: "Offline-First React Native Apps",
      summary:
        "Caching, persistence, and sync strategies that make your app usable without a network.",
      slug: "blog8",
    },
    {
      title: "Theming and Design Systems in React Native",
      summary:
        "How to build a scalable theme layer with tokens, variants, and dark mode support.",
      slug: "blog9",
    },
    {
      title: "Forms in React Native Without the Pain",
      summary:
        "Validation, performance, and UX patterns for building dependable mobile forms.",
      slug: "blog10",
    },
    {
      title: "Testing React Native: Unit, Integration, E2E",
      summary:
        "A clean testing pyramid with Jest, Testing Library, and Detox best practices.",
      slug: "blog11",
    },
    {
      title: "Release Checklist for React Native Apps",
      summary:
        "Pre-release QA steps, performance checks, and store readiness for smooth launches.",
      slug: "blog12",
    },
    {
      title: "React Native Networking: Resilient API Calls",
      summary:
        "Retry strategies, timeouts, and graceful fallbacks to keep users unblocked on flaky networks.",
      slug: "blog13",
    },
    {
      title: "Building a Fast Search Experience in React Native",
      summary:
        "Debounce, index locally, and keep results smooth even on low-end devices.",
      slug: "blog14",
    },
    {
      title: "Secure Storage in React Native",
      summary:
        "Choosing the right storage layer for tokens, secrets, and user data without compromising UX.",
      slug: "blog15",
    },
    {
      title: "React Native App Architecture That Scales",
      summary:
        "A practical folder structure, feature boundaries, and dependency rules that stay maintainable.",
      slug: "blog16",
    },
    {
      title: "Handling Media in React Native",
      summary:
        "Working with images, video, and uploads while keeping performance predictable.",
      slug: "blog17",
    },
    {
      title: "Push Notifications in React Native",
      summary:
        "Token handling, deep links, and a clean flow for foreground and background messages.",
      slug: "blog18",
    },
    {
      title: "React Native Build Size Reduction",
      summary:
        "Trim dependencies, enable Hermes, and keep bundles lean for faster installs.",
      slug: "blog19",
    },
    {
      title: "Accessibility in React Native",
      summary:
        "Make your app usable for everyone with proper labels, focus management, and contrast.",
      slug: "blog20",
    },
    {
      title: "Crash Reporting and Monitoring in React Native",
      summary:
        "Set up reliable error tracking and triage issues before users report them.",
      slug: "blog21",
    },
    {
      title: "React Native UI Performance Checklist",
      summary:
        "A concise checklist for smooth interactions, clean animations, and stable frame rates.",
      slug: "blog22",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-10 animate-pageFade">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-6">
          {posts.map((p, index) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              data-key={p.slug}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`flex items-start justify-between gap-6 p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 transition-[transform,opacity] duration-600 ease-out origin-center ${
                visible[p.slug]
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-[0.9]"
              }`}
            >
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
                  {p.summary}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-500 self-center"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
