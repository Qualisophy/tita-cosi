import { useState, useMemo, useEffect, useRef } from "react";
import Input from "../ui/Input";
import ScrollSlider from "../ui/ScrollSlider"; 
import { categories, menuItems, categories2, categories3 } from "../../../data/menu";
import { ui, defaultLang } from "../../../i18n/ui";

interface MenuProps {
  currentLang: keyof typeof ui;
}

export default function Menu({ currentLang }: MenuProps) {
  // 1. Carga de datos dinámicos según el idioma actual
  const availableCategories = useMemo(() => categories[currentLang] || categories.es, [currentLang]);
  const availableItems = useMemo(() => menuItems[currentLang] || menuItems.es, [currentLang]);
  const availableSabores = useMemo(() => categories2[currentLang] || [], [currentLang]);
  const availableDietas = useMemo(() => categories3[currentLang] || [], [currentLang]);

  // 2. Estados de los filtros
  const [activeCategory, setActiveCategory] = useState(availableCategories[0]);
  const [activeSabor, setActiveSabor] = useState<string | null>(null);
  const [activeDieta, setActiveDieta] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  // 3. Sincronizar filtros al cambiar de idioma
  useEffect(() => {
    setActiveCategory(availableCategories[0]);
    setActiveSabor(null);                      
    setActiveDieta(null);                      
  }, [currentLang, availableCategories]);

  // Bloqueo de scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Cerrar modal con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
    };
    if (isModalOpen) {
      setTimeout(() => modalCloseRef.current?.focus(), 0);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  // 4. LÓGICA DE FILTRADO INTERNIVEL
  const filteredItems = useMemo(() => {
    return availableItems.filter((item) => {
      
      const matchesCategory =
        activeCategory === availableCategories[0] || item.category === activeCategory;
      
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch =
        (item.name && item.name.toLowerCase().includes(searchTerm)) ||
        (item.description && item.description.toLowerCase().includes(searchTerm));
      
      const matchesSabor = !activeSabor || (
        Array.isArray(item.tags) && item.tags.some((tag: string) => 
          tag.toLowerCase().includes(activeSabor.toLowerCase()) ||
          activeSabor.toLowerCase().includes(tag.toLowerCase())
        )
      );
      
      const matchesDieta = !activeDieta || (
        Array.isArray(item.tags) && item.tags.some((tag: string) => 
          tag.toLowerCase().includes(activeDieta.toLowerCase()) ||
          activeDieta.toLowerCase().includes(tag.toLowerCase())
        )
      );

      return matchesCategory && matchesSearch && matchesSabor && matchesDieta;
    });
  }, [activeCategory, searchQuery, activeSabor, activeDieta, availableItems, availableCategories]);

  // 5. Agrupación por categorías
  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof availableItems> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      
      {/* SECCIÓN DE FILTROS */}
      <div className="mb-12 md:mb-20 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-4 md:pt-6 pb-6 md:pb-8 border-b border-titacosi-surface space-y-4 md:space-y-6 px-2 md:px-0 -mx-2 md:mx-0">
        
        {/* Buscador */}
        <div className="w-full max-w-md px-2 md:px-0">
          <Input
            label={t('menu.buscador1')}
            type="search"
            placeholder={t('menu.buscador2')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="gap-1.5 w-full"
            icon={
              <svg className="w-5 h-5 text-titacosi-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            }
          />
        </div>

        {/* Filas de Botones */}
        <div className="flex flex-col gap-3 md:gap-5">
          
          {/* Fila 1: Categorías Principales */}
          <div className="w-full">
            <ScrollSlider>
              {availableCategories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all ${
                    activeCategory === cat 
                      ? "bg-titacosi-accent text-white shadow-lg scale-105" 
                      : "bg-titacosi-surface text-titacosi-primary hover:bg-titacosi-accent/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </ScrollSlider>
          </div>

          {/* Fila 2: Sabores (categories2) */}
          {availableSabores.length > 0 && (
            <div className="w-full">
              <ScrollSlider>
                {availableSabores.map((sabor) => (
                  <button
                    key={sabor}
                    onClick={() => setActiveSabor(activeSabor === sabor ? null : sabor)}
                    className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all ${
                      activeSabor === sabor
                        ? "bg-titacosi-accent text-white shadow-lg scale-105"
                        : "bg-titacosi-surface text-titacosi-primary hover:bg-titacosi-accent/20"
                    }`}
                  >
                    {sabor}
                  </button>
                ))}
              </ScrollSlider>
            </div>
          )}

          {/* Fila 3: Dietas (categorias3) */}
          {availableDietas.length > 0 && (
            <div className="w-full">
              <ScrollSlider>
                {availableDietas.map((dieta) => (
                  <button
                    key={dieta}
                    onClick={() => setActiveDieta(activeDieta === dieta ? null : dieta)}
                    className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all ${
                      activeDieta === dieta
                        ? "bg-titacosi-accent text-white shadow-lg scale-105"
                        : "bg-titacosi-surface text-titacosi-primary hover:bg-titacosi-accent/20"
                    }`}
                  >
                    {dieta}
                  </button>
                ))}
              </ScrollSlider>
            </div>
          )}

        </div>
      </div>

      {/* RENDERIZADO DE LAS TARJETAS DE PLATOS (DISEÑO TARJETAS) */}
      <div className="max-w-6xl mx-auto space-y-20">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-24 text-titacosi-primary/60 italic font-serif text-2xl border border-dashed border-titacosi-surface rounded-xl">
            No hemos encontrado platos que coincidan con tu búsqueda.
          </div>
        ) : (
          availableCategories.map((category) => {
            // EXCLUSIÓN: No renderizamos una sección para el botón "Todo"
            if (category === availableCategories[0]) return null;

            const itemsInCategory = groupedItems[category];
            if (!itemsInCategory || itemsInCategory.length === 0) return null;

            return (
              <div key={category}>
                {/* Título de la sección */}
                <h2 className="text-4xl font-serif font-black italic mb-12 flex items-center gap-4 text-titacosi-primary drop-shadow-sm">
                  <span className="w-12 h-px bg-titacosi-accent"></span>
                  {category}
                </h2>

                {/* GRID RESPONSIVO: Tarjetas con imágenes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {itemsInCategory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                    >
                      {/* Imagen de la tarjeta */}
                      <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                        <img
                          src={(item as any).image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Contenido de la tarjeta */}
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

                          {/* Tags */}
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