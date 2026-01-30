export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p className="text-neutral-400">Reach out via email or socials.</p>
        <div className="mt-6 flex gap-6">
          <a href="mailto:you@email.com" className="hover:underline">
            Email
          </a>
          <a
            href="https://linkedin.com/in/tauseefshoaib"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tauseefshoaib"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
