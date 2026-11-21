import { profile } from "@/data/profile";
import { contact } from "@/data/contact";

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-10 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Portfólio pessoal
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.about}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Entrar em contato
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
