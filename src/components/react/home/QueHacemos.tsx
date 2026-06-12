// src/components/react/home/QueHacemos.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ui, defaultLang } from "../../../i18n/ui";
import imagenQueHacemos from "../../../assets/cocina.png";

gsap.registerPlugin(ScrollTrigger);

interface QueHacemosProps {
  currentLang: keyof typeof ui;
}

export default function QueHacemos({ currentLang }: QueHacemosProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animamos el Título Principal
      gsap.from(".anim-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // 2. Animamos los puntos clave de la izquierda en cascada
      gsap.from(".anim-item", {
        scrollTrigger: {
          trigger: ".grid-content",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // 3. Animamos la imagen de la derecha
      gsap.from(".anim-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-titacosi-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Asimétrico a 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto y Lista */}
          <div className="grid-content flex flex-col space-y-12">
            
            <h2 className="anim-title text-4xl md:text-5xl font-serif font-bold text-titacosi-primary text-left">
              {t("home.que_hacemos.titulo")}
            </h2>

            <div className="flex flex-col space-y-10">
              
              {/* --- PUNTO 1 --- */}
              <div className="anim-item flex flex-col sm:flex-row gap-6 items-start text-left">
                <div className="shrink-0 w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 15.5h11M5 15.5 a0 0 0 0 1 7 0 M7.5 14 h2.5 M9 14v1 M3 18.5h11"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 6h4l-.45 2.7a1.8 1.8 0 0 1-3.1 0L16 6zM18 18V13M16.5 18.5h3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t("home.que_hacemos.item1.title")}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t("home.que_hacemos.item1.desc")}</p>
                </div>
              </div>

              {/* --- PUNTO 2 --- */}
              <div className="anim-item flex flex-col sm:flex-row gap-6 items-start text-left">
                <div className="shrink-0 w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t("home.que_hacemos.item2.title")}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t("home.que_hacemos.item2.desc")}</p>
                </div>
              </div>

              {/* --- PUNTO 3 --- */}
              <div className="anim-item flex flex-col sm:flex-row gap-6 items-start text-left">
                <div className="shrink-0 w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t("home.que_hacemos.item3.title")}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{t("home.que_hacemos.item3.desc")}</p>
                </div>
              </div>

            </div>
          </div>

         {/* COLUMNA DERECHA: Imagen */}
          <div className="anim-image relative w-full h-[500px] lg:h-[700px] mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-titacosi-accent/10 rounded-2xl transform translate-x-4 -translate-y-4 -z-10"></div>
            <img 
              src={imagenQueHacemos.src} 
              alt="Ambiente y cocina en Taberna Tita Cosi" 
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}