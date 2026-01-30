export default function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tauseefshoaib",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5s-2-.9-2-2 1-2 2-2 1.98.9 1.98 2zM.5 8h5v16h-5V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.3V24h-5V16c0-2-.03-4.6-3-4.6-3 0-3.5 2.2-3.5 4.4V24h-5V8z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/tauseefshoaib",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.4-3.87-1.4-.52-1.3-1.28-1.7-1.28-1.7-1.04-.7.08-.68.08-.68 1.15.1 1.76 1.2 1.76 1.2 1.02 1.8 2.67 1.3 3.32 1 .1-.75.4-1.3.72-1.6-2.55-.3-5.23-1.3-5.23-5.9 0-1.3.47-2.4 1.2-3.3-.12-.3-.52-1.5.1-3 0 0 .97-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.62 1.5.22 2.7.1 3 .75.9 1.2 2 1.2 3.3 0 4.7-2.7 5.6-5.3 5.9.4.35.77 1.04.77 2.1v3.1c0 .3.2.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/tauseefshoaib",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M17.2 2L9.3 12l8 10 1.5-1.3-6.6-8.7 6.7-8.7z" />
          <path d="M10.1 14.5L5.4 12l4.7-2.5-.8-1.4L2 12l7.6 3.9.5-.4z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-4">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4 text-neutral-400">
        <div className="flex gap-6">
          {socials.map((s) => (
            <div
              key={s.name}
              onClick={() =>
                window.open(s.href, "_blank", "noopener,noreferrer")
              }
              className="hover:text-white transition cursor-pointer flex items-center"
            >
              {s.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
