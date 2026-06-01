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
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  
  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const filtersModalCloseRef = useRef<HTMLButtonElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Tipado flexible para evitar errores de compilación con las llaves de traducción
  const t = (key: any) =>
    (ui[currentLang] as any)?.[key] || (ui[defaultLang] as any)?.[key] || key;

  useEffect(() => {
    setActiveCategory(availableCategories[0]);
    setActiveSabor(null);                      
    setActiveDieta(null);                      
  }, [currentLang, availableCategories]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen || isFiltersModalOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen, isFiltersModalOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFiltersModalOpen) setIsFiltersModalOpen(false);
        else if (isModalOpen) setIsModalOpen(false);
      }
    };
    if (isModalOpen) setTimeout(() => modalCloseRef.current?.focus(), 0);
    if (isFiltersModalOpen) setTimeout(() => filtersModalCloseRef.current?.focus(), 0);
    
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen, isFiltersModalOpen]);

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
    return availableItems.filter((item: any) => {
      const matchesCategory = activeCategory === availableCategories[0] || item.category === activeCategory;
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch = (item.name && item.name.toLowerCase().includes(searchTerm)) || (item.description && item.description.toLowerCase().includes(searchTerm));
      const matchesSabor = !activeSabor || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeSabor.toLowerCase()) || activeSabor.toLowerCase().includes(tag.toLowerCase())));
      const matchesDieta = !activeDieta || (Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(activeDieta.toLowerCase()) || activeDieta.toLowerCase().includes(tag.toLowerCase())));

      return matchesCategory && matchesSearch && matchesSabor && matchesDieta;
    });
  }, [activeCategory, searchQuery, activeSabor, activeDieta, availableItems, availableCategories]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, any[]> = {};
    filteredItems.forEach((item: any) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <div ref={menuContainerRef} className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      
      {/* CONTENEDOR FLOTANTE */}
      <div 
        className={`mb-8 md:mb-12 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-4 md:pt-6 pb-4 md:pb-6 border-b border-titacosi-surface/30 transition-all duration-500 ease-in-out ${
          showFilters ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Fila de Controles */}
        <div className="flex flex-col items-start gap-5 sm:gap-8 w-full px-4 md:px-0 pb-4 md:pb-8">
          
          {/* Botón de Filtros*/}
          <div className="shrink-0">
            <button
              onClick={() => setIsFiltersModalOpen(true)}
              className="h-12 px-4 sm:px-5 bg-titacosi-accent hover:bg-titacosi-accent/90 text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              <span className="hidden sm:inline-block text-sm md:text-base">Filtros</span>
            </button>
          </div>

          {/* Buscador */}
          <div className="w-full max-w-xl [&_fieldset]:border-none [&_fieldset]:p-0 [&_fieldset]:m-0 [&_fieldset]:shadow-none">
            <div className="h-12 w-full flex items-center">
              <Input
                label=""
                type="search"
                placeholder={t('menu.buscador2')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full shadow-none border-transparent! focus:border-transparent! focus:ring-0!"
                icon={
                  <svg className="w-5 h-5 text-titacosi-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                }
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* MODAL DE FILTROS */}
      {isFiltersModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-start md:justify-center overflow-hidden">
          <div className="h-[100dvh] md:h-auto w-full md:w-full md:max-w-2xl bg-titacosi-base rounded-3xl shadow-2xl max-h-[100dvh] md:max-h-[90vh] overflow-y-auto overflow-x-hidden modal-slide-left md:modal-slide-top modal-discrete-scroll -webkit-overflow-scrolling-touch">
            
            {/* Header del Modal */}
            <div className="sticky top-0 bg-titacosi-base border-b border-titacosi-surface/30 px-6 py-4 md:py-5 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-titacosi-primary">Filtros</h2>
              <button
                ref={filtersModalCloseRef}
                onClick={() => setIsFiltersModalOpen(false)}
                className="p-2 hover:bg-titacosi-surface rounded-full transition-colors"
                aria-label="Cerrar filtros"
              >
                <svg className="w-6 h-6 text-titacosi-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Categorías */}
              <div>
                <h3 className="text-lg font-bold text-titacosi-primary mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-titacosi-accent rounded-full"></span>
                  Platos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        activeCategory === cat
                          ? "bg-titacosi-accent text-white shadow-md scale-105"
                          : "bg-titacosi-surface/60 text-titacosi-primary hover:bg-titacosi-surface hover:scale-102"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sabores */}
              {availableSabores.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-titacosi-primary mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-titacosi-accent rounded-full"></span>
                    Sabores
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableSabores.map((sabor) => (
                      <button
                        key={sabor}
                        onClick={() => setActiveSabor(activeSabor === sabor ? null : sabor)}
                        className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          activeSabor === sabor
                            ? "bg-titacosi-accent text-white shadow-md scale-105"
                            : "bg-titacosi-surface/60 text-titacosi-primary hover:bg-titacosi-surface hover:scale-102"
                        }`}
                      >
                        {sabor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dietas */}
              {availableDietas.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-titacosi-primary mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-titacosi-accent rounded-full"></span>
                    Dietas
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableDietas.map((dieta) => (
                      <button
                        key={dieta}
                        onClick={() => setActiveDieta(activeDieta === dieta ? null : dieta)}
                        className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          activeDieta === dieta
                            ? "bg-titacosi-accent text-white shadow-md scale-105"
                            : "bg-titacosi-surface/60 text-titacosi-primary hover:bg-titacosi-surface hover:scale-102"
                        }`}
                      >
                        {dieta}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Botón de Cerrar */}
              <button
                onClick={() => setIsFiltersModalOpen(false)}
                className="w-full mt-6 px-6 py-3 bg-titacosi-accent hover:bg-titacosi-accent/90 text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RENDERIZADO DE LAS TARJETAS DE PLATOS */}
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
                  {itemsInCategory.map((item: any) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                    >
                      <div className="w-full aspect-4/3 bg-neutral-100 overflow-hidden relative">
                        <img
                          src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 flex flex-col grow text-center items-center">
                        <h3 className="text-lg font-serif font-extrabold text-titacosi-primary mb-2 leading-tight">
                          {item.name}
                        </h3>

                        {item.description && (
                          <p className="text-neutral-600 text-xs leading-relaxed mb-4 grow line-clamp-2">
                            {item.description}
                          </p>
                        )}

                        <div className="mt-auto w-full flex flex-col items-center gap-3">
                          <span className="text-xl font-black text-titacosi-accent drop-shadow-sm">
                            {item.doublePrice === "Por encargo" || item.doublePrice != null ? (
                              `${item.doublePrice}`
                            ) : (
                              `${Number(item.price || 0).toFixed(2)} €`
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