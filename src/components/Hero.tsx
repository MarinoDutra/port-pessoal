import Image from "next/image";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
          <Reveal>
            <div>
              <p className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300">
                Portfólio pessoal
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-lg font-semibold text-indigo-700 dark:text-indigo-300 sm:text-xl">
                {profile.headline}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {profile.intro}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {profile.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md"
                >
                  Ver projetos
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-700 dark:hover:text-indigo-300"
                >
                  Entrar em contato
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mx-auto w-full max-w-sm">
            <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-100 via-white to-sky-100 p-3 shadow-inner dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-950/40">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={profile.photo}
                  alt={`Foto de ${profile.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 320px"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-sky-400/20 blur-2xl" />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
              Espaço para sua foto de perfil
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
