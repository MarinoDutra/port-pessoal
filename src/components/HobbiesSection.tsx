import Image from "next/image";
import { hobbies } from "@/data/hobbies";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hobbies
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Um pouco sobre meus interesses e momentos de lazer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => (
            <article
              key={hobby.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
