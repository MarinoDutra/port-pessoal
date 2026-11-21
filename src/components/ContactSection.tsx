import { contact } from "@/data/contact";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Vamos conversar
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Contato
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Fale comigo diretamente pelos canais abaixo.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">E-mail</span>
                    <span className="block break-all font-semibold text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">{contact.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</span>
                    <span className="block font-semibold text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">linkedin.com/in/marinodutra</span>
                  </span>
                </a>
              </li>
              <li className="sm:col-span-2 lg:col-span-1">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">GitHub</span>
                    <span className="block font-semibold text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">github.com/MarinoDutra</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
