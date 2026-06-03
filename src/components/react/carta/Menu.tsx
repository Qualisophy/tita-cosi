import { useState, useMemo, useEffect, useRef } from "react";
import Input from "../ui/Input";
import ScrollSlider from "../ui/ScrollSlider"; 
import { categories, menuItems, categories2, categories3 } from "../../../data/menu";
import { ui, defaultLang } from "../../../i18n/ui";

interface MenuProps {
  currentLang: keyof typeof ui;
}

export default function Menu({ currentLang }: MenuProps) {
  const availableCategories = useMemo(() => categories[currentLang] || categories.es, [currentLang]);
  const availableItems = useMemo(() => menuItems[currentLang] || menuItems.es, [currentLang]);
  const availableSabores = useMemo(() => categories2[currentLang] || [], [currentLang]);
  const availableDietas = useMemo(() => categories3[currentLang] || [], [currentLang]);

  const [activeCategory, setActiveCategory] = useState(availableCategories[0]);
  const [activeSabor, setActiveSabor] = useState<string | null>(null);
  const [activeDieta, setActiveDieta] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  useEffect(() => {
    setActiveCategory(availableCategories[0]);
    setActiveSabor(null);                      
    setActiveDieta(null);                      
  }, [currentLang, availableCategories]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
    };
    if (isModalOpen) setTimeout(() => modalCloseRef.current?.focus(), 0);
    
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const startThreshold = menuContainerRef.current 
        ? menuContainerRef.current.offsetTop - 80 
        : 300;

      if (currentScrollY > startThreshold && currentScrollY > lastScrollY.current) {
        setShowFilters(false);
      } 
      else if (currentScrollY < lastScrollY.current || currentScrollY <= startThreshold) {
        setShowFilters(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = useMemo(() => {
    return availableItems.filter((item) => {
      const matchesCategory = activeCategory === availableCategories[0] || item.category === activeCategory;
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch = (item.name && item.name.toLowerCase().includes(searchTerm)) || (item.description && item.description.toLowerCase().includes(searchTerm));
      const matchesSabor = !activeSabor || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeSabor.toLowerCase()) || activeSabor.toLowerCase().includes(tag.toLowerCase())));
      const matchesDieta = !activeDieta || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeDieta.toLowerCase()) || activeDieta.toLowerCase().includes(tag.toLowerCase())));

      return matchesCategory && matchesSearch && matchesSabor && matchesDieta;
    });
  }, [activeCategory, searchQuery, activeSabor, activeDieta, availableItems, availableCategories]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof availableItems> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const getIconForPreference = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("vegan") || lower.includes("vegetariano")) return "eco";
    if (lower.includes("gluten") || lower.includes("celiaco")) return "no_meals";
    if (lower.includes("picante")) return "local_fire_department";
    if (lower.includes("mar")) return "set_meal";
    return "label";
  };

  return (
    <div ref={menuContainerRef} className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      
      <div 
        className={`mb-12 md:mb-20 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-4 md:pt-6 pb-4 md:pb-6 border-b border-titacosi-surface/30 transition-all duration-1800 delay-550 ease-in-out ${
          showFilters ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        
        <div className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-6 md:mb-8 [&_fieldset]:border-none [&_fieldset]:p-0 [&_fieldset]:m-0 [&_fieldset]:shadow-none">
          <Input
            label={t('menu.buscador1')}
            type="search"
            placeholder={t('menu.buscador2')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full shadow-none !border-transparent focus:!border-transparent focus:!ring-0"
            icon={
              <svg className="w-5 h-5 text-titacosi-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            }
          />
        </div>

        {/* Clases restauradas para forzar la ocultación del scrollbar nativo */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-5xl mx-auto [&_*::-webkit-scrollbar]:hidden [&_*]:[-ms-overflow-style:none] [&_*]:[scrollbar-width:none]">
          
          <div className="flex flex-col md:flex-row md:items-center w-full relative">
            <span className="hidden md:block text-[11px] font-normal tracking-[0.15em] text-titacosi-primary uppercase w-36 text-left pr-4 shrink-0">
              Categorías:
            </span>

            {/* OVERLAY SUTIL UI: Sombra difuminada + Mini chevron animado (Estándar iOS/Android) */}
            <div className="md:hidden absolute right-0 top-0 bottom-1 w-14 bg-gradient-to-l from-titacosi-base via-titacosi-base/80 to-transparent z-20 flex items-center justify-end pointer-events-none">
              <span className="material-symbols-outlined text-titacosi-primary/40 text-lg animate-[pulse_1.5s_ease-in-out_infinite]">chevron_right</span>
            </div>

            <div className="w-full flex-1 overflow-hidden pb-1 [&_button.absolute]:!hidden md:[&_button.absolute]:!flex">
              <ScrollSlider>
                {availableCategories.map((cat, index) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-normal transition-colors border ${
                      activeCategory === cat 
                        ? "bg-titacosi-primary text-white border-titacosi-primary" 
                        : "bg-titacosi-surface/50 text-titacosi-primary border-transparent hover:bg-titacosi-surface"
                    } ${index === 0 ? "ml-4 md:ml-0" : ""} ${index === availableCategories.length - 1 ? "mr-4 md:mr-0" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </ScrollSlider>
            </div>
          </div>

          {(availableSabores.length > 0 || availableDietas.length > 0) && (
            <div className="md:hidden flex items-center gap-4 px-4 mt-3 mb-1">
              <div className="flex-1 h-px bg-titacosi-surface/70"></div>
              <span className="text-[10px] font-normal tracking-[0.2em] text-titacosi-primary/60 uppercase">Preferencias</span>
              <div className="flex-1 h-px bg-titacosi-surface/70"></div>
            </div>
          )}

          {availableSabores.length > 0 && (
            <div className="flex flex-col md:flex-row md:items-center w-full relative">
              <span className="hidden md:block text-[11px] font-normal tracking-[0.15em] text-titacosi-primary uppercase w-36 text-left pr-4 shrink-0">
                Sabores:
              </span>

              {/* OVERLAY SUTIL UI */}
              <div className="md:hidden absolute right-0 top-0 bottom-1 w-14 bg-gradient-to-l from-titacosi-base via-titacosi-base/80 to-transparent z-20 flex items-center justify-end pointer-events-none">
                <span className="material-symbols-outlined text-titacosi-primary/40 text-lg animate-[pulse_1.5s_ease-in-out_infinite]">chevron_right</span>
              </div>

              <div className="w-full flex-1 overflow-hidden pb-1 [&_button.absolute]:!hidden md:[&_button.absolute]:!flex">
                <ScrollSlider>
                  {availableSabores.map((sabor, index) => (
                    <button
                      key={sabor}
                      onClick={() => setActiveSabor(activeSabor === sabor ? null : sabor)}
                      className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl text-sm font-normal transition-colors border ${
                        activeSabor === sabor
                          ? "bg-titacosi-primary text-white border-titacosi-primary"
                          : "bg-titacosi-surface/30 text-titacosi-primary border-titacosi-surface hover:bg-titacosi-surface/80"
                      } ${index === 0 ? "ml-4 md:ml-0" : ""} ${index === availableSabores.length - 1 ? "mr-4 md:mr-0" : ""}`}
                    >
                      {sabor}
                    </button>
                  ))}
                </ScrollSlider>
              </div>
            </div>
          )}

          {availableDietas.length > 0 && (
            <div className="flex flex-col md:flex-row md:items-center w-full relative">
              <span className="hidden md:block text-[11px] font-normal tracking-[0.15em] text-titacosi-primary uppercase w-36 text-left pr-4 shrink-0">
                Preferencias:
              </span>

              {/* OVERLAY SUTIL UI */}
              <div className="md:hidden absolute right-0 top-0 bottom-1 w-14 bg-gradient-to-l from-titacosi-base via-titacosi-base/80 to-transparent z-20 flex items-center justify-end pointer-events-none">
                <span className="material-symbols-outlined text-titacosi-primary/40 text-lg animate-[pulse_1.5s_ease-in-out_infinite]">chevron_right</span>
              </div>

              <div className="w-full flex-1 overflow-hidden pb-1 [&_button.absolute]:!hidden md:[&_button.absolute]:!flex">
                <ScrollSlider>
                  {availableDietas.map((dieta, index) => (
                    <button
                      key={dieta}
                      onClick={() => setActiveDieta(activeDieta === dieta ? null : dieta)}
                      className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl text-sm font-normal transition-colors border ${
                        activeDieta === dieta
                          ? "bg-titacosi-primary text-white border-titacosi-primary"
                          : "bg-titacosi-surface/30 text-titacosi-primary border-titacosi-surface hover:bg-titacosi-surface/80"
                      } ${index === 0 ? "ml-4 md:ml-0" : ""} ${index === availableDietas.length - 1 ? "mr-4 md:mr-0" : ""}`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {getIconForPreference(dieta)}
                      </span>
                      {dieta}
                    </button>
                  ))}
                </ScrollSlider>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-24 text-titacosi-primary/60 italic font-serif text-2xl border border-dashed border-titacosi-surface rounded-xl">
            No hemos encontrado platos que coincidan con tu búsqueda.
          </div>
        ) : (
          availableCategories.map((category) => {
            if (category === availableCategories[0]) return null;

            const itemsInCategory = groupedItems[category];
            if (!itemsInCategory || itemsInCategory.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-4xl font-serif font-black italic mb-12 flex items-center gap-4 text-titacosi-primary drop-shadow-sm">
                  <span className="w-12 h-px bg-titacosi-accent"></span>
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {itemsInCategory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                    >
                      <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                        <img
                          src={(item as any).image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 flex flex-col flex-grow text-center items-center">
                        <h3 className="text-lg font-serif font-extrabold text-titacosi-primary mb-2 leading-tight">
                          {item.name}
                        </h3>

                        {item.description && (
                          <p className="text-neutral-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                            {item.description}
                          </p>
                        )}

                        <div className="mt-auto w-full flex flex-col items-center gap-3">
                          <span className="text-xl font-black text-titacosi-accent drop-shadow-sm">
                            {item.doublePrice === "Por encargo" || item.doublePrice != null ? (
                              `${item.doublePrice}`
                            ) : (
                              `${item.price.toFixed(2)} €`
                            )}
                          </span>

                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-1.5 pt-3 border-t border-titacosi-primary/5 w-full">
                              {item.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="text-[9px] uppercase tracking-widest font-black text-titacosi-primary/60 bg-titacosi-surface px-1.5 py-0.5 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}