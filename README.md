# Portfólio pessoal — Marino Martins Dutra

Site de portfólio pessoal desenvolvido com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**.

## Funcionalidades

- Página única e responsiva
- Tema claro/escuro com alternância no menu
- Menu fixo com navegação por seções
- **Skills** organizadas por categoria com nível
- **Formação acadêmica** em linha do tempo e **certificados** em grade (clique para ampliar e acessar verificação)
- **Hobbies** em cards com imagem e descrição
- **Contato** com formulário validado (nome, e-mail e mensagem) e links para e-mail, LinkedIn e GitHub
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
└── src
    ├── app
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── CertificateModal.tsx
    │   ├── ContactSection.tsx
    │   ├── EducationCertificatesSection.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── HobbiesSection.tsx
    │   ├── Navbar.tsx
    │   ├── SkillsSection.tsx
    │   └── ThemeToggle.tsx
    ├── data
    │   ├── certificates.ts
    │   ├── contact.ts
    │   ├── education.ts
    │   ├── hobbies.ts
    │   ├── profile.ts
    │   └── skills.ts
    └── types
        └── index.ts
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18.17 ou superior (recomendado: versão LTS recente)
- npm (incluído com o Node.js)

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
- `npm run build` — gera a versão de produção
- `npm run start` — inicia o servidor com a build de produção
- `npm run lint` — executa o lint do projeto

## Personalização dos dados

Edite os arquivos em `src/data/` para atualizar o conteúdo sem mexer nos componentes:

- `profile.ts` — nome, título e apresentação
- `skills.ts` — categorias e níveis de habilidades
- `education.ts` — formação acadêmica (linha do tempo)
- `certificates.ts` — certificados (nome, instituição, data, imagem e link de verificação)
- `hobbies.ts` — hobbies (nome, descrição e imagem)
- `contact.ts` — e-mail, LinkedIn e GitHub

## Observações

- O formulário de contato possui validação no cliente e, ao enviar com sucesso, abre o aplicativo de e-mail padrão via `mailto:` para concluir o envio.
- Imagens de certificados e hobbies usam URLs de exemplo/remotas; você pode substituí-las por imagens próprias (locais em `public/` ou URLs).
