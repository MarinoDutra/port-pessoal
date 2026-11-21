import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>
          © {year} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
