import { skillCategories } from "@/data/skills";
import SkillIcon from "@/components/SkillIcon";
import Reveal from "@/components/Reveal";

const levelStyles: Record<string, string> = {
  Básico:
    "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
  Intermediário:
    "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60",
  Avançado:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-900/60",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Competências
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Tecnologias e ferramentas que utilizo, organizadas por categoria.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 80} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/40 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900/50 dark:hover:bg-indigo-950/20"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:text-indigo-400 dark:ring-slate-700">
                          <SkillIcon name={skill.name} className="h-5 w-5" />
                        </span>
                        <span className="truncate font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                          levelStyles[skill.level] ??
                          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
