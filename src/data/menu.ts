// src/data/menu.ts

export const categories = [
  "Todo",
  "Empezamos",
  "Croquetas",
  "Tostas",
  "Bocados",
  "Especialidades",
  "Carnes",
  "Arroces",
  "Postres",
  "Bebidas", // Agruparemos la bebida aquí por ahora para no saturar los filtros principales
];

export const menuItems = [
  {
    id: 1,
    name: "Ensaladilla Rusa Trufada",
    description:
      "Con ventresca de atún, mayonesa ligera y un toque de trufa negra.",
    price: 12.5,
    category: "Empezamos",
    tags: ["Sin Gluten"],
  },
  {
    id: 2,
    name: "Croquetas de Jamón Ibérico",
    description:
      "Extra cremosas, receta tradicional de la abuela (6 unidades).",
    price: 11.0,
    category: "Croquetas",
    tags: [],
  },
  {
    id: 3,
    name: "Croquetas de Carabinero",
    description:
      "Sabor intenso a mar con emulsión de su propio coral (6 unidades).",
    price: 14.0,
    category: "Croquetas",
    tags: ["Novedad"],
  },
  {
    id: 4,
    name: "Tosta de Tartar de Atún",
    description: "Sobre pan brioche tostado, aguacate y mayonesa de sriracha.",
    price: 16.0,
    category: "Tostas",
    tags: [],
  },
  {
    id: 5,
    name: "Presa Ibérica a la Brasa",
    description: "Con puré de boniato asado y chimichurri casero.",
    price: 22.0,
    category: "Carnes",
    tags: ["Sin Gluten"],
  },
  {
    id: 6,
    name: "Tarta de Queso Fluida",
    description:
      "Al horno, mezcla de quesos curados y cremosos. Se deshace sola.",
    price: 7.5,
    category: "Postres",
    tags: ["Vegetariano"],
  },
];
