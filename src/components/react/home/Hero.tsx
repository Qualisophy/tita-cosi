// src/components/react/home/Hero.tsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { ImageMetadata } from "astro";
import { ui, defaultLang } from "../../../i18n/ui";
import Button from "../ui/Button";

gsap.registerPlugin(useGSAP);

interface HeroProps {
  currentLang: keyof typeof ui;
  backgroundImage: ImageMetadata;
}

export default function Hero({ currentLang, backgroundImage }: HeroProps) {
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
      // CAMBIO AQUÍ: Sustituimos h-[90vh] por h-[100dvh]
      className="relative w-full h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden bg-titacosi-primary"
    >
      {/* 1. IMAGEN DE FONDO LIGERAMENTE DESENFOCADA
          Reducimos el blur drásticamente para que se reconozca el fondo.
          Mantenemos un ligero scale-105 para ocultar los bordes difuminados.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />

      {/* 2. OVERLAY OPACO DE MARCA
          Color base de la marca al 75% de opacidad. Suficiente contraste para el texto,
          pero deja ver la vida de la foto debajo.
      */}
      <div
        className="absolute inset-0 bg-titacosi-primary/75"
        aria-hidden="true"
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center mt-10">
        <h1 className="gsap-reveal font-['Anton'] text-6xl md:text-8xl lg:text-9xl text-titacosi-base mb-6 leading-[0.95] tracking-tight">
          {t("home.hero.title")}
        </h1>

        <p className="gsap-reveal text-xl md:text-2xl text-titacosi-base/90 mb-12 max-w-3xl font-sans leading-relaxed whitespace-pre-line">
          {t("home.hero.text")}
        </p>

        <div className="gsap-reveal flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Button
            variant="accent"
            onClick={() => (window.location.href = `/${currentLang}/reservas`)}
            className="text-lg px-12 py-4"
          >
            {t("nav.reservar")}
          </Button>
          <Button
            variant="outline-white"
            onClick={() => (window.location.href = `/${currentLang}/carta`)}
            className="text-lg px-12 py-4"
          >
            {t("nav.carta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
