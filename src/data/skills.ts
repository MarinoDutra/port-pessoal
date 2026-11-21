import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Back-end",
    skills: [
      { name: "Python", level: "Intermediário" },
      { name: "PHP", level: "Intermediário" },
      { name: "Spring Boot (Java)", level: "Intermediário" },
      { name: "Java", level: "Intermediário" },
    ],
  },
  {
    category: "Front-end",
    skills: [
      { name: "Next.js", level: "Básico" },
      { name: "React", level: "Intermediário" },
      { name: "HTML/CSS", level: "Intermediário" },
      { name: "TypeScript", level: "Intermediário" },
    ],
  },
  {
    category: "Banco de Dados & Ferramentas",
    skills: [
      { name: "MySQL", level: "Intermediário" },
      { name: "Git/GitHub", level: "Intermediário" },
    ],
  },
];
