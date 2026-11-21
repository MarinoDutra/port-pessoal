import { skillCategories } from "@/data/skills";

const levelStyles: Record<string, string> = {
  Básico:
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Intermediário:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Avançado:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Habilidades organizadas por categoria, com o nível de cada uma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
          ))}
        </div>
      </div>
    </section>
  );
}
