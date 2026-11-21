"use client";

import Image from "next/image";
import { useState } from "react";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";
import CertificateModal from "@/components/CertificateModal";
import Reveal from "@/components/Reveal";
import type { Certificate } from "@/types";

export default function EducationCertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="formacao" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Trajetória
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Formação acadêmica e certificados
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              Minha jornada de aprendizado, experiências acadêmicas e certificações. Clique em um certificado para ampliar e acessar a verificação.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Formação acadêmica
              </h3>
              <ol className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-slate-700">
                {education.map((item, index) => (
                  <li key={`${item.course}-${item.institution}-${index}`} className="relative">
                    <span className="absolute -left-[33px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-indigo-600 ring-4 ring-indigo-100 dark:border-slate-950 dark:ring-indigo-950/50" />
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {item.period}
                      </p>
                      <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                        {item.course}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.institution}
                      </p>
                      {item.description && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Certificados
              </h3>
              {certificates.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
                  Nenhum certificado adicionado ainda. Edite <code className="font-mono">src/data/certificates.ts</code> para incluir seus certificados.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {certificates.map((certificate) => (
                    <button
                      key={certificate.id}
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-offset-slate-950"
                    >
                      <div className="relative h-36 w-full overflow-hidden">
                        <Image
                          src={certificate.image}
                          alt={certificate.name}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {certificate.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                          {certificate.institution}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                          {certificate.date}
                        </p>
                        <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          Clique para ampliar
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
