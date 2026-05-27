import { useState, useMemo } from "react";
import Input from "../ui/Input";
import { categories, menuItems } from "../../../data/menu";
import { ui, defaultLang } from "../../../i18n/ui";

interface MenuProps {
  currentLang: keyof typeof ui;
}

export default function Menu({ currentLang }: MenuProps) {
  const availableCategories = categories[currentLang] || categories.es;
  const availableItems = menuItems[currentLang] || menuItems.es;
  const [activeCategory, setActiveCategory] = useState(availableCategories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  // Filtramos los platos basándonos en la categoría activa y el buscador
  const filteredItems = useMemo(() => {
    return availableItems.filter((item) => {
      const matchesCategory =
        activeCategory === availableCategories[0] || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, availableItems, availableCategories]);

  // Agrupamos los platos filtrados por categoría para pintarlos ordenados
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
      {/* 1. SECCIÓN DE FILTROS Y BÚSQUEDA */}
      <div className="mb-16 md:mb-20 sticky top-20 z-30 bg-titacosi-base/95 backdrop-blur-md pt-6 pb-8 border-b border-titacosi-surface">
        <div className="flex flex-col md:flex-row gap-8 items-end max-w-6xl mx-auto">
          {/* Buscador */}
          <div className="w-full md:w-80 flex-shrink-0">
            <Input
              label={t('menu.buscador1')}
              type="search"
              placeholder={t('menu.buscador2')}
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

          {/* Categorías */}
          <div className="w-full md:grow overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 md:gap-3">
              {availableCategories.map((category) => (
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

      {/* 2. LISTA DE PRODUCTOS (Grid de Tarjetas) */}
      <div className="max-w-6xl mx-auto space-y-20">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-24 text-titacosi-primary/60 italic font-serif text-2xl border border-dashed border-titacosi-surface rounded-xl">
            No hemos encontrado platos que coincidan con tu búsqueda.
          </div>
        ) : (
          availableCategories.map((category) => {
            const itemsInCategory = groupedItems[category];
            if (!itemsInCategory || itemsInCategory.length === 0) return null;

            return (
              <div key={category}>
                {/* Título de la sección */}
                <h2 className="text-4xl font-serif font-black italic mb-12 flex items-center gap-4 text-titacosi-primary drop-shadow-sm">
                  <span className="w-12 h-px bg-titacosi-accent"></span>
                  {category}
                </h2>

                {/* GRID RESPONSIVO: Mantenemos el grid, pero reducimos un pelín el gap horizontal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {itemsInCategory.map((item) => (
                    <div
                      key={item.id}
                      // CAMBIO: duration-300 por transition-transform y duration-500 en hover para la sombra, y hover:-translate-y-1
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
                      {/* CAMBIO: Reducimos padding interno p-6 -> p-4 */}
                      <div className="p-4 flex flex-col flex-grow text-center items-center">
                        {/* CAMBIO: Título más pequeño text-xl -> text-lg. Menos margen inferior mb-3 -> mb-2 */}
                        <h3 className="text-lg font-serif font-extrabold text-titacosi-primary mb-2 leading-tight">
                          {item.name}
                        </h3>

                        {/* CAMBIO: Descripción más compacta text-sm -> text-xs. Menos margen mb-6 -> mb-4. Line-clamp-2 */}
                        <p className="text-neutral-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                          {item.description}
                        </p>

                        <div className="mt-auto w-full flex flex-col items-center gap-3">
                          {/* CAMBIO: Precio más pequeño text-2xl -> text-xl */}
                          <span className="text-xl font-black text-titacosi-accent drop-shadow-sm">
                            {item.doublePrice === "Por encargo" || item.doublePrice != null ? (
                              `${item.doublePrice}`
                            ) : (
                              `${item.price.toFixed(2)} €`
                            )}
                          </span>

                          {/* Tags */}
                          {item.tags && item.tags.length > 0 && (
                            // CAMBIO: Menos padding superior pt-4 -> pt-3. Gap más pequeño gap-2 -> gap-1.5
                            <div className="flex flex-wrap justify-center gap-1.5 pt-3 border-t border-titacosi-primary/5 w-full">
                              {item.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  // CAMBIO: Texto tags minúsculo text-[10px] -> text-[9px]. Menos padding px-2 py-1 -> px-1.5 py-0.5
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