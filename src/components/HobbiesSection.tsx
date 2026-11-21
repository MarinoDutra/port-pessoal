import Image from "next/image";
import { hobbies } from "@/data/hobbies";
import Reveal from "@/components/Reveal";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Além do código
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hobbies
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Um pouco do que me inspira, recarrega as energias e faz parte de quem eu sou.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <Reveal key={hobby.name} delay={index * 70} className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={hobby.image}
                    alt={hobby.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {hobby.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {hobby.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
