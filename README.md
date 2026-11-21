# Portfólio pessoal — Marino Martins Dutra

Site de portfólio pessoal desenvolvido com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**.

## Funcionalidades

- Página única, responsiva e com design moderno
- Tema claro/escuro com alternância no menu
- Menu fixo com destaque da seção ativa e versão hambúrguer no celular
- Animações suaves de entrada ao rolar a página
- Seções: **Início (Hero)**, **Skills**, **Projetos**, **Formação & Certificados**, **Hobbies** e **Contato**
- Seção de contato com links diretos para e-mail, LinkedIn e GitHub
- SEO básico (metadata, Open Graph, Twitter card) e favicon
- Dados centralizados em `/src/data` para edição fácil sem alterar componentes

## Estrutura de pastas

```text
.
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   └── profile-placeholder.svg
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── icon.tsx
    │   ├── layout.tsx
    │   ├── opengraph-image.tsx
    │   └── page.tsx
    ├── components/
    │   ├── CertificateModal.tsx
    │   ├── ContactSection.tsx
    │   ├── EducationCertificatesSection.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── HobbiesSection.tsx
    │   ├── Navbar.tsx
    │   ├── ProjectsSection.tsx
    │   ├── Reveal.tsx
    │   ├── SkillIcon.tsx
    │   ├── SkillsSection.tsx
    │   └── ThemeToggle.tsx
    ├── data/
    │   ├── certificates.ts
    │   ├── contact.ts
    │   ├── education.ts
    │   ├── hobbies.ts
    │   ├── profile.ts
    │   ├── projects.ts
    │   └── skills.ts
    └── types/
        └── index.ts
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18.17 ou superior (recomendado: LTS)
- npm

## Como rodar o projeto

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

- `npm run dev` — inicia o ambiente de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run start` — inicia o servidor de produção
- `npm run lint` — executa o lint do projeto

## Personalização dos dados

Edite os arquivos em `src/data/` para atualizar o conteúdo sem alterar componentes:

- `profile.ts` — nome, título, introdução, apresentação e foto
- `skills.ts` — categorias, habilidades e níveis
- `projects.ts` — projetos (nome, descrição, tecnologias e link)
- `education.ts` — formação e trajetória (linha do tempo)
- `certificates.ts` — certificados (nome, instituição, data, imagem e link de verificação)
- `hobbies.ts` — hobbies (nome, descrição e imagem)
- `contact.ts` — e-mail, LinkedIn e GitHub

## Observações

- Substitua `public/profile-placeholder.svg` pela sua foto (e atualize `photo` em `src/data/profile.ts` se usar outro nome/arquivo).
- Atualize os certificados de exemplo em `src/data/certificates.ts` com seus dados reais.
