import { useState, useMemo, useEffect, useRef } from "react";
import Input from "../ui/Input";
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
  const allCategory = availableCategories[0];
  const filterColumns = 1 + (availableSabores.length > 0 ? 1 : 0) + (availableDietas.length > 0 ? 1 : 0);

  const [activeCategory, setActiveCategory] = useState("");
  const [activeSabor, setActiveSabor] = useState<string | null>(null);
  const [activeDieta, setActiveDieta] = useState<string | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const categoryDropdownRef = useRef<HTMLDivElement | null>(null);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  useEffect(() => {
    setActiveCategory("");
    setActiveSabor(null);                      
    setActiveDieta(null);                      
    setIsCategoryOpen(false);
  }, [currentLang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!categoryDropdownRef.current) return;
      if (!categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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

  const filteredItems = useMemo(() => {
    return availableItems.filter((item) => {
      const matchesCategory = !activeCategory || activeCategory === allCategory || item.category === activeCategory;
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch = (item.name && item.name.toLowerCase().includes(searchTerm)) || (item.description && item.description.toLowerCase().includes(searchTerm));
      const matchesSabor = !activeSabor || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeSabor.toLowerCase()) || activeSabor.toLowerCase().includes(tag.toLowerCase())));
      const matchesDieta = !activeDieta || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeDieta.toLowerCase()) || activeDieta.toLowerCase().includes(tag.toLowerCase())));

      return matchesCategory && matchesSearch && matchesSabor && matchesDieta;
    });
  }, [activeCategory, searchQuery, activeSabor, activeDieta, availableItems, allCategory]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof availableItems> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      
      <div 
          className="mb-8 md:mb-20 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-2.5 md:pt-6 pb-2.5 md:pb-6 border-b border-titacosi-surface/30"
      >
        
        <div className="w-full max-w-2xl mx-auto px-4 md:px-0 mb-4 md:mb-8 [&_fieldset]:border-none [&_fieldset]:p-0 [&_fieldset]:m-0 [&_fieldset]:shadow-none">
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

        <div className="max-w-5xl mx-auto px-1 md:px-0">
          <div className="grid w-full max-w-4xl mx-auto items-center gap-2 md:gap-3 pb-1" style={{ gridTemplateColumns: `repeat(${filterColumns}, minmax(0, 1fr))` }}>
            <div ref={categoryDropdownRef} className="relative w-full min-w-0">
              <button
                type="button"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                className="cursor-pointer h-9 md:h-11 w-full min-w-0 rounded-md border border-titacosi-accent bg-titacosi-accent px-2.5 md:px-3 pr-8 md:pr-9 text-left text-xs md:text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-titacosi-accent/90 focus:outline-none focus:ring-2 focus:ring-titacosi-accent focus:ring-offset-2"
                aria-haspopup="listbox"
                aria-expanded={isCategoryOpen}
                aria-label="Categorías"
              >
                <span className="block truncate">{activeCategory || "Categorías"}</span>
              </button>
              <span className={`material-symbols-outlined pointer-events-none absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 text-[18px] text-white/80 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}>expand_more</span>

              {isCategoryOpen && (
                <div className="absolute left-0 mt-1 z-40 w-[calc(100vw-2rem)] max-w-[28rem] md:w-[26rem] rounded-md border border-titacosi-accent bg-titacosi-accent p-2 shadow-xl">
                  <div className="grid grid-cols-2 gap-1 max-h-60 overflow-y-auto">
                    {availableCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full rounded-md px-2 py-1.5 text-left text-xs md:text-sm leading-tight transition-colors ${activeCategory === cat ? "bg-white text-titacosi-accent" : "bg-titacosi-accent text-white hover:bg-titacosi-accent/85"}`}
                      >
                        <span className="block whitespace-normal break-words">{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {availableSabores.length > 0 && (
              <div className="relative w-full min-w-0">
                <label htmlFor="sabor-filter" className="sr-only">Sabores</label>
                <select
                  id="sabor-filter"
                  value={activeSabor ?? ""}
                  onChange={(e) => setActiveSabor(e.target.value || null)}
                  className="appearance-none cursor-pointer h-9 md:h-11 w-full min-w-0 rounded-md border border-titacosi-accent bg-titacosi-accent px-2.5 md:px-3 pr-8 md:pr-9 text-xs md:text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-titacosi-accent/90 focus:outline-none focus:ring-2 focus:ring-titacosi-accent focus:ring-offset-2"
                >
                  <option value="" disabled hidden>Sabores</option>
                  {availableSabores.map((sabor) => (
                    <option key={sabor} value={sabor}>{sabor}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 text-[18px] text-white/80">expand_more</span>
              </div>
            )}

            {availableDietas.length > 0 && (
              <div className="relative w-full min-w-0">
                <label htmlFor="dieta-filter" className="sr-only">Preferencias</label>
                <select
                  id="dieta-filter"
                  value={activeDieta ?? ""}
                  onChange={(e) => setActiveDieta(e.target.value || null)}
                  className="appearance-none cursor-pointer h-9 md:h-11 w-full min-w-0 rounded-md border border-titacosi-accent bg-titacosi-accent px-2.5 md:px-3 pr-8 md:pr-9 text-xs md:text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-titacosi-accent/90 focus:outline-none focus:ring-2 focus:ring-titacosi-accent focus:ring-offset-2"
                >
                  <option value="" disabled hidden>Preferencias</option>
                  {availableDietas.map((dieta) => (
                    <option key={dieta} value={dieta}>{dieta}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 text-[18px] text-white/80">expand_more</span>
              </div>
            )}
          </div>
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