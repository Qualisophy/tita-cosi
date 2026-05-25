// src/components/react/home/QuienesSomos.tsx
import { ui, defaultLang } from "../../../i18n/ui";

interface QuienesSomosProps {
  currentLang: keyof typeof ui;
}

export default function QuienesSomos({ currentLang }: QuienesSomosProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  return (
    <section className="py-24 bg-white border-b border-titacosi-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-titacosi-primary leading-tight">
            {t("home.quienes_somos.titulo")}
          </h2>
          <div className="space-y-6 text-neutral-600 text-lg md:text-xl leading-relaxed max-w-3xl">
            <p>{t("home.quienes_somos.p1")}</p>
            <p>{t("home.quienes_somos.p2")}</p>
          </div>
          <div className="pt-6">
            <a 
              href={`/${currentLang}/contacto`} 
              className="inline-block px-10 py-4 bg-[#8b3d3d] hover:bg-[#6e2f2f] text-white font-semibold rounded-md transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t("home.quienes_somos.boton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}