// src/components/react/home/HeroCarta.tsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { ImageMetadata } from "astro";
import { ui, defaultLang } from "../../../i18n/ui";

gsap.registerPlugin(useGSAP);

interface HeroCartaProps {
  currentLang: keyof typeof ui;
  backgroundImage: ImageMetadata;
}

export default function HeroCarta({
  currentLang,
  backgroundImage,
}: HeroCartaProps) {
  const container = useRef<HTMLDivElement>(null);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  useGSAP(
    () => {
      gsap.from(".gsap-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      // Usamos full screen y dvh, igual que en la homepage
      className="relative w-full h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden bg-titacosi-primary"
    >
      {/* 1. IMAGEN DE FONDO LIGERAMENTE DESENFOCADA (estilo homepage) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />

      {/* 2. OVERLAY OPACO DE MARCA (estilo homepage) */}
      <div
        className="absolute inset-0 bg-titacosi-primary/75"
        aria-hidden="true"
      />

      {/* CONTENIDO PRINCIPAL (estructura homepage) */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center mt-10">
        {/* Título - grande, serif, italic, text-base, con gsap */}
       <h1 className="gsap-reveal font-['Anton'] text-6xl md:text-8xl lg:text-9xl text-titacosi-base mb-6 leading-[0.95] tracking-tight">
          {t("carta.header2")}
        </h1>

        {/* Texto/Subtítulo - font-sans, texto medio, text-base/90, con gsap */}
        <p className="gsap-reveal text-xl md:text-2xl text-titacosi-base/90 mb-12 max-w-3xl font-sans leading-relaxed whitespace-pre-line">
          {t("carta.header1")}
        </p>

        {/* wrapper para animar con gsap si en el futuro añades algo aquí */}
        <div className="gsap-reveal"></div>
      </div>
    </section>
  );
}
