import { ImageResponse } from "next/og";

export const alt = "Portfólio de Marino Martins Dutra";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#c7d2fe",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#38bdf8",
            }}
          />
          Portfólio pessoal
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            Marino Martins Dutra
          </div>
          <div style={{ fontSize: 36, color: "#e0e7ff", lineHeight: 1.3 }}>
            Estudante de Engenharia de Computação | Desenvolvedor Full Stack
          </div>
          <div style={{ fontSize: 28, color: "#bae6fd" }}>
            Projetos, skills, formação e contato
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#94a3b8" }}>
          marinomartinsd@gmail.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
