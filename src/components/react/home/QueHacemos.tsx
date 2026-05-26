// src/components/react/home/QueHacemos.tsx
import { ui, defaultLang } from "../../../i18n/ui";

interface QueHacemosProps {
  currentLang: keyof typeof ui;
}

export default function QueHacemos({ currentLang }: QueHacemosProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  return (
    <section className="py-20 bg-titacosi-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-titacosi-primary">
            {t("home.que_hacemos.titulo")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item1.title")}</h3>
            <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item1.desc")}</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item2.title")}</h3>
            <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item2.desc")}</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item3.title")}</h3>
            <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item3.desc")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}