// src/components/react/carta/Menu.tsx
import { useState, useMemo } from "react";
import Input from "../ui/Input";
import { categories, menuItems } from "../../../data/menu";
import { ui, defaultLang } from "../../../i18n/ui";

interface MenuProps {
  currentLang: keyof typeof ui;
}

export default function Menu({ currentLang }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [searchQuery, setSearchQuery] = useState("");

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  // Filtramos los platos basándonos en la categoría activa y el buscador
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Todo" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Agrupamos los platos filtrados por categoría para pintarlos ordenados
  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof menuItems> = {};
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
      {/* 1. SECCIÓN DE FILTROS Y BÚSQUEDA (Sticky para móvil) */}
      <div className="mb-16 md:mb-20 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-6 pb-8 border-b border-titacosi-surface">
        <div className="flex flex-col md:flex-row gap-8 items-end max-w-6xl mx-auto">
          {/* Buscador: Compacto en escritorio */}
          <div className="w-full md:w-80 flex-shrink-0">
            <Input
              label="¿Qué te apetece hoy?"
              type="search"
              placeholder="Ej. Croquetas, Atún, Sin Gluten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="!gap-1.5"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              }
            />
          </div>

          {/* Categorías: Tipo "Pills" horizontales con scroll invisible */}
          <div className="w-full md:grow overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeCategory === category
                      ? "bg-titacosi-accent text-white shadow-lg scale-105"
                      : "bg-titacosi-surface text-titacosi-primary hover:bg-titacosi-primary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. LISTA DE PRODUCTOS (Grid elegante) */}
      <div className="max-w-6xl mx-auto space-y-20">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-24 text-titacosi-primary/60 italic font-serif text-2xl border border-dashed border-titacosi-surface rounded-xl">
            No hemos encontrado platos que coincidan con tu búsqueda.
          </div>
        ) : (
          categories.map((category) => {
            const itemsInCategory = groupedItems[category];
            if (!itemsInCategory || itemsInCategory.length === 0) return null;

            return (
              <div key={category}>
                {/* Título de la sección con línea líder */}
                <h2 className="text-4xl font-serif font-black italic mb-12 flex items-center gap-4 text-titacosi-primary drop-shadow-sm">
                  <span className="w-12 h-px bg-titacosi-accent"></span>
                  {category}
                </h2>

                {/* Grid: 1 columna en móvil, 2 columnas en escritorio con separación amplia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                  {itemsInCategory.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col group border-l-4 border-transparent hover:border-titacosi-accent/30 hover:bg-titacosi-surface/30 p-4 -ml-4 rounded-r-md transition-all"
                    >
                      {/* Línea Principal: Plato y Precio con Puntos Líderes */}
                      <div className="flex justify-between items-baseline mb-2 gap-4">
                        <h3 className="text-xl font-serif font-extrabold text-titacosi-primary group-hover:text-titacosi-accent transition-colors leading-tight">
                          {item.name}
                        </h3>
                        {/* Puntos líderes entre nombre y precio */}
                        <div className="grow border-b border-dotted border-titacosi-primary/20 -translate-y-1 invisible md:visible"></div>
                        <span className="text-xl font-sans font-black text-titacosi-accent whitespace-nowrap drop-shadow-sm">
                          {item.price.toFixed(2)} €
                        </span>
                      </div>

                      {/* Descripción */}
                      <p className="text-titacosi-primary/80 text-base leading-relaxed mb-4 max-w-xl font-sans">
                        {item.description}
                      </p>

                      {/* Tags (ej. Sin Gluten) - Estilo minimalista */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex gap-2.5 mt-auto pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs uppercase tracking-widest font-black text-titacosi-accent/60 bg-titacosi-accent/5 px-2.5 py-1.5 rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
