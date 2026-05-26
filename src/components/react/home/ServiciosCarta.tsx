// src/components/react/home/ServiciosCarta.tsx
import { ui, defaultLang } from "../../../i18n/ui";

import Button from "../ui/Button"; 

interface ServiciosCartaProps {
  currentLang: keyof typeof ui;
  image1: string;
  image2: string;
  image3: string;
}

export default function ServiciosCarta({ currentLang, image1, image2, image3 }: ServiciosCartaProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Centrada */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-titacosi-primary mb-6 leading-tight">
            {t("home.servicios.titulo")}
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-8">
            {t("home.servicios.desc")}
          </p>
          
          {/* Componente Button implementado con su variante accent */}
          <a href={`/${currentLang}/carta`}>
            <Button variant="accent">
              {t("home.servicios.boton")}
            </Button>
          </a>
        </div>

        {/* Grid de 3 Imágenes REALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Foto 1 - Croquetas */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group">
            <img 
              src={image1} 
              alt="Plato de Croquetas Caseras de Taberna Tita Cosi" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="text-white text-lg font-bold">{t("home.servicios.foto.1")}</span>
            </div>
          </div>

          {/* Foto 2 - Tostas */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group">
            <img 
              src={image2} 
              alt="Selección de Tostas y Bocados" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="text-white text-lg font-bold">{t("home.servicios.foto.2")}</span>
            </div>
          </div>

          {/* Foto 3 - Carnes */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group">
            <img 
              src={image3} 
              alt="Carnes Jugosas a la Parrilla" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="text-white text-lg font-bold">{t("home.servicios.foto.3")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}