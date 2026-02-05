import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4 text-neutral-400">
        <Socials />
      </div>
    </footer>
  );
}
