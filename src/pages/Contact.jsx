import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const subject = `Let's Collaborate`;
    const to = "tauseefshoaib@gmail.com";

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hey, I am ${name}.\n\n${message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="flex flex-1 items-center pt-20 animate-page-fade">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-semibold mb-4 tracking-tight">Contact</h2>

        <p className="text-neutral-400 mb-10">
          Feel free to drop your message below. It will open your email app with
          the text pre-filled.
        </p>

        <form onSubmit={handleSendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-neutral-300 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white focus:border-white focus:outline-none"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-neutral-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white focus:border-white focus:outline-none"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-md border border-neutral-700 text-white hover:bg-white hover:text-black transition font-medium mx-auto block"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
