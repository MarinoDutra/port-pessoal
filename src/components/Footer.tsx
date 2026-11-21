import { profile } from "@/data/profile";
import { contact } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>
          © {year} {profile.name}. Construído com Next.js, TypeScript e Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn</a>
          <a href={`mailto:${contact.email}`} className="transition hover:text-indigo-600 dark:hover:text-indigo-400">E-mail</a>
        </div>
      </div>
    </footer>
  );
}
