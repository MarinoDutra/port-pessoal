import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = `${profile.name} | Estudante de Engenharia de Computação e Desenvolvedor Full Stack`;
const description =
  "Portfólio de Marino Martins Dutra com projetos, skills, formação acadêmica, certificados, hobbies e contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Portfólio de Marino Martins Dutra",
  authors: [{ name: profile.name }],
  keywords: [
    "Marino Martins Dutra",
    "portfólio",
    "desenvolvedor full stack",
    "engenharia de computação",
    "Next.js",
    "React",
    "Spring Boot",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title,
    description,
    siteName: `Portfólio de ${profile.name}`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `Portfólio de ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
  },
};

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
