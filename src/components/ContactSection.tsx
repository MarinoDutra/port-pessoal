"use client";

import { useState } from "react";
import { contact } from "@/data/contact";
import Reveal from "@/components/Reveal";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "loading" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Informe seu nome.";
  }

  if (!values.email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!values.message.trim()) {
    errors.message = "Escreva uma mensagem.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";
  }

  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "success" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar sua mensagem.");
      }

      setStatus("success");
      setFeedback(data.message || "Mensagem enviada com sucesso! Em breve entrarei em contato.");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar sua mensagem. Tente novamente."
      );
    }
  };

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
              Envie uma mensagem pelo formulário ou fale comigo diretamente pelos canais abaixo.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 dark:bg-slate-950 dark:text-slate-100 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900/40"
                        : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-slate-700 dark:focus:ring-indigo-900/40"
                    }`}
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 dark:bg-slate-950 dark:text-slate-100 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900/40"
                        : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-slate-700 dark:focus:ring-indigo-900/40"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 dark:bg-slate-950 dark:text-slate-100 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900/40"
                        : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-slate-700 dark:focus:ring-indigo-900/40"
                    }`}
                    placeholder="Como posso ajudar?"
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </button>

                {status === "loading" && (
                  <p className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/30 dark:text-indigo-300" aria-live="polite">
                    Enviando sua mensagem, aguarde um instante...
                  </p>
                )}
                {status === "success" && (
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300" aria-live="polite">
                    {feedback}
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300" aria-live="polite">
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Outros canais</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Prefere falar diretamente? Você também pode me encontrar por aqui.
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>
                    <span>
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
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</span>
                      <span className="block font-semibold text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">linkedin.com/in/marinodutra</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/20"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">GitHub</span>
                      <span className="block font-semibold text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">github.com/MarinoDutra</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
