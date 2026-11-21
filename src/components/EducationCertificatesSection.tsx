"use client";

import Image from "next/image";
import { useState } from "react";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";
import CertificateModal from "@/components/CertificateModal";
import type { Certificate } from "@/types";

export default function EducationCertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(
    null
  );

  return (
    <section id="formacao" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Formação acadêmica e certificados
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Minha trajetória acadêmica e certificações. Clique em um certificado para
            ampliá-lo e acessar a verificação.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Formação acadêmica
            </h3>
            <ol className="relative border-l border-slate-200 pl-6 dark:border-slate-700">
              {education.map((item, index) => (
                <li key={`${item.course}-${index}`} className="mb-10 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-slate-950" />
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
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

          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Certificados
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <button
                  key={certificate.id}
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="relative h-36 w-full">
                    <Image
                      src={certificate.image}
                      alt={certificate.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
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
                    <p className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                      Clique para ampliar
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
