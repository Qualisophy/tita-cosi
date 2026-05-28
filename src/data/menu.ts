 export const categories: Record<string, string[]> = {
  
  es: [
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
  ],

  en: [
    "All",
    "Starters",
    "Croquettes",
    "Toasts",
    "Bites",
    "Specialties",
    "Meats",
    "Rice Dishes",
    "Desserts",
    "Drinks",
  ],

  fr: [
    "Tout",
    "Pour commencer",
    "Croquettes",
    "Toasts",
    "Bouchées",
    "Spécialités",
    "Viandes",
    "Riz",
    "Desserts",
    "Boissons",
  ],

  de: [
    "Alle",
    "Zum Starten",
    "Kroketten",
    "Belegte Brote",
    "Häppchen",
    "Spezialitäten",
    "Fleisch",
    "Reisgerichte",
    "Nachspeisen",
    "Getränke",
  ],

};

// src/data/menu.ts

export const categories2: Record<string, string[]> = {
  es: [
    "Picante",
    "Ácido",
    "Dulce",
    "Salado"
  ],

  en: [
    "Spicy",
    "Sour",
    "Sweet",
    "Salty"
  ],

  fr: [
    "Épicé",
    "Acide",
    "Sucré",
    "Salé"
  ],

  de: [
    "Scharf",
    "Sauer",
    "Süß",
    "Salzig"
  ]
};



export const categorias3: Record<string, string[]> = {
  es: [
    "Vegetarianos",
    "Sin gluten"
  ],

  en: [
    "Vegetarian",
    "Gluten-free"
  ],

  fr: [
    "Végétalien",
    "Sans gluten"
  ],
  
  de: [
    "Vegetarisch",
    "Glutenfrei"
  ]
};




export const menuItems: Record<string, any[]> = {
  
  es: [
    /// COMIDAS ///
    
    // EMPEZAMOS
    {
      id: 1,
      name: "Jamón ibérico de bellota",
      description: "",
      price: 17,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Salado", "Sin Gluten"],
      image: "/src/assets/carta/comidas/empezamos/jamon-iberico.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/jamon-iberico.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 2,
      name: "Torreznos",
      description: "Con ralladura de lima.",
      price: 6.5,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Salado", "Ácido", "Sin Gluten"],
      image: "/src/assets/carta/comidas/empezamos/torreznos-lima.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/torreznos-lima.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 3,
      name: "Brocheta de langostinos",
      description: "Con salsa merrins.",
      price: 3.8,
      category: "Empezamos",
      tags: [],
      image: "/carta/comidas/empezamos/brocheta-langostinos.jpg",
    },
    {
      id: 4,
      name: "Lagrimitas de pollo crunch",
      description: "Con mayo japo.",
      price: 9.5,
      category: "Empezamos",
      tags: [],
      image: "/carta/comidas/empezamos/lagrimitas-pollo.jpg",
    },
    {
      id: 5,
      name: "Totopos caseros",
      description: "Con carne, guacamole y salsa cheddar.",
      price: 8.5,
      category: "Empezamos",
      tags: [],
      image: "/carta/comidas/empezamos/totopos-caseros.jpg",
    },
    {
      id: 6,
      name: "Ensaladilla rusa",
      description: "Con melva y langostinos.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Empezamos",
      tags: [],
      image: "/carta/comidas/empezamos/ensaladilla-rusa.jpg",
    },
    {
      id: 7,
      name: "Tartar de salchichón de Málaga",
      description: "Con aguacate marinado en salsa de miel y mostaza.",
      doublePrice: "8.00€ - 14.00€",
      price: 0,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/comidas/empezamos/tartar-salchichon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tartar-salchichon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 8,
      name: "Papas arrugás con salsa chipotle",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Picante", "Sin Gluten", "Vegetariano"],
      image: "/src/assets/carta/comidas/empezamos/papas-chipotle.jpg",
=======
      tags: ["Picante"],
      image: "/carta/comidas/empezamos/papas-chipotle.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 9,
      name: "Papas arrugás con salsa brava",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Muy Picante", "Sin Gluten", "Vegetariano"],
      image: "/src/assets/carta/comidas/empezamos/papas-bravas.jpeg",
=======
      tags: ["Muy Picante"],
      image: "/carta/comidas/empezamos/papas-bravas.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 10,
      name: "Patatas Tita Cosi",
      description: "Con salsa kimche.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Picante", "Vegetariano"],
      image: "/src/assets/carta/comidas/empezamos/papas-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/papas-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 11,
      name: "Tomate aliñado y melva",
      description: "Con crema balsámica y merrins.",
      price: 8,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Dulce", "Ácido", "Sin Gluten"],
      image: "/src/assets/carta/comidas/empezamos/tomate-melva.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-melva.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 12,
      name: "Tomate aliñado, aguacate y melva",
      description: "Con crema balsámica y merrins.",
      price: 10,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Dulce", "Ácido", "Sin Gluten"],
      image: "/src/assets/carta/comidas/empezamos/tomate-aguacate.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-aguacate.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 13,
      name: "Ensalada Tita Cosi",
      description: "Lechuga, rúcula, tomate cherry, cebolla morada, langostinos, queso de cabra y salsa miel y mostaza.",
      price: 12,
      category: "Empezamos",
<<<<<<< HEAD
      tags: ["Dulce", "Sin Gluten"],
      image: "/src/assets/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // CROQUETAS
    {
      id: 14,
      name: "Choco",
      description: "Decoradas con base de salsa (trufa o japo).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/croquetas/choco.jpg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/choco.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 15,
      name: "Puchero",
      description: "Decoradas con base de salsa (trufa o japo).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/croquetas/puchero.jpeg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/puchero.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 16,
      name: "Manzana caramelizada, queso azul y nueces",
      description: "Decoradas con base de salsa (trufa o japo).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Gourmet", "Dulce", "Salado", "Vegetariano"],
      image: "/src/assets/carta/comidas/croquetas/manzana.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/manzana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 17,
      name: "Tex Mex",
      description: "Rebozado ligeramente picante. Decoradas con salsa.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Gourmet", "Picante"],
      image: "/src/assets/carta/comidas/croquetas/texmex.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/texmex.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 18,
      name: "Jamón ibérico de bellota",
      description: "Panko sin gluten. Decoradas con base de salsa.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Gourmet", "Sin Gluten", "Salado"],
      image: "/src/assets/carta/comidas/croquetas/jamon.jpeg",
=======
      tags: ["Gourmet", "Sin Gluten"],
      image: "/carta/comidas/croquetas/jamon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 19,
      name: "Berenjena con miel",
      description: "Panko sin gluten. Decoradas con base de salsa.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Gourmet", "Sin Gluten", "Dulce", "Vegetariano"],
      image: "/src/assets/carta/comidas/croquetas/berenjena.jpg",
=======
      tags: ["Gourmet", "Sin Gluten"],
      image: "/carta/comidas/croquetas/berenjena.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 20,
      name: "Vaca madurada",
      description: "Decoradas con base de salsa.",
      doublePrice: "7.00€ / 12.00€",
      price: 0,
      category: "Croquetas",
<<<<<<< HEAD
      tags: ["Nuevo", "Gourmet", "Salado"],
      image: "/src/assets/carta/comidas/croquetas/vaca.jpg",
=======
      tags: ["Nuevo", "Gourmet"],
      image: "/carta/comidas/croquetas/vaca.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // TOSTAS
    {
      id: 21,
      name: "Salmón",
      description: "Base de alioli, rúcula, langostinos y gulas.",
      price: 9.5,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/tostas/salmon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/salmon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 22,
      name: "Presa ibérica",
      description: "Base de alioli, rúcula, culís de frutos rojos y queso.",
      price: 9.5,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Dulce", "Salado"],
      image: "/src/assets/carta/comidas/tostas/presa.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/presa.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 23,
      name: "Carrillada",
      description: "Con salsa en su jugo y cebolla caramelizada.",
      price: 10,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/comidas/tostas/carrillada.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/carrillada.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 24,
      name: "Serrana",
      description: "Base de alioli, rúcula, pluma, pimiento y jamón serrano.",
      price: 12,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/tostas/serrana.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/serrana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 25,
      name: "Vegetariana",
      description: "Base de alioli, rúcula, mix de setas y tomate cherry.",
      price: 8,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Vegetariano"],
      image: "/src/assets/carta/comidas/tostas/vegetariana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/vegetariana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 26,
      name: "Atún Rojo",
      description: "Base de crema de queso trufado.",
      price: 13,
      category: "Tostas",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/tostas/atun-rojo.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/atun-rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BOCADOS
    {
      id: 27,
      name: "Mini burger",
      description: "Ternera 80gr, cheddar, bacon, huevo y salsa bbq.",
      price: 7.5,
      category: "Bocados",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/comidas/bocados/mini-burger.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/mini-burger.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 28,
      name: "Taco amor",
      description: "Carrillada a la miel, guacamole y coulis de frutos rojos.",
      price: 6,
      category: "Bocados",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/comidas/bocados/taco-amor.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/taco-amor.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 29,
      name: "Brioche",
      description: "Salmón, cebolla morada, aguacate, rábano y mayo japo.",
      price: 6,
      category: "Bocados",
      tags: [],
      image: "/carta/comidas/bocados/brioche.jpg",
    },
    {
      id: 30,
      name: "Burger Americana",
      description: "Ternera 200gr, bacon, cheddar, huevo y salsa bbq.",
      price: 14,
      category: "Bocados",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/comidas/bocados/burger-americana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-americana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 31,
      name: "Burger Cabrita",
      description: "Ternera 200gr, cecina, queso de cabra y mayo trufa.",
      price: 14,
      category: "Bocados",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/bocados/burger-cabrita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-cabrita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 32,
      name: "Burger Españolita",
      description: "Ternera 200gr, alioli, pimiento, cheddar, jamón y huevo.",
      price: 15,
      category: "Bocados",
<<<<<<< HEAD
      tags: ["Salado"],
      image: "/src/assets/carta/comidas/bocados/burger-espanolita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-espanolita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ESPECIALIDADES
    {
      id: 33,
      name: "Huevos rotos con cecina",
      description: "Con salsa de mayo trufa.",
      price: 14,
      category: "Especialidades",
<<<<<<< HEAD
      tags: ["Sin Gluten", "Salado"],
      image: "/src/assets/carta/comidas/especialidades/huevos-cecina.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-cecina.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 34,
      name: "Huevos rotos con langostinos y gulas",
      description: "Con alioli de perejil.",
      price: 14,
      category: "Especialidades",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/especialidades/huevos-langostinos.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-langostinos.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 35,
      name: "Huevos rotos con carabineros",
      description: "Con alioli de perejil.",
      price: 16,
      category: "Especialidades",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/especialidades/huevos-carabineros.jpeg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-carabineros.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 36,
      name: "Fideos tostados con langostinos",
      description: "Con alioli en su jugo.",
      price: 12,
      category: "Especialidades",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-langostinos.jpg",
    },
    {
      id: 37,
      name: "Fideos tostados con carabineros",
      description: "Con alioli en su jugo.",
      price: 16,
      category: "Especialidades",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-carabineros.jpeg",
    },

    // CARNES
    {
      id: 38,
      name: "Carrillada de Angus al Pedro Ximénez",
      description: "Acompañada de patatas o verduras.",
      price: 17.5,
      category: "Carnes",
<<<<<<< HEAD
      tags: ["Dulce", "Sin Gluten"],
      image: "/src/assets/carta/comidas/carnes/carrillada-angus.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/carrillada-angus.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 39,
      name: "Presa ibérica de bellota",
      description: "Acompañada de patatas o verduras.",
      price: 15,
      category: "Carnes",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/carnes/presa-iberica.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/presa-iberica.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 40,
      name: "Pluma ibérica marinada en salsa miso",
      description: "Acompañada de patatas o verduras.",
      price: 16,
      category: "Carnes",
<<<<<<< HEAD
      tags: ["Ácido", "Salado"],
      image: "/src/assets/carta/comidas/carnes/pluma-iberica.png",
=======
      tags: [],
      image: "/carta/comidas/carnes/pluma-iberica.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 41,
      name: "Cochinillo Lechal",
      description: "Acompañado de patatas o verduras.",
      doublePrice: "Por encargo",
      price: 0,
      category: "Carnes",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/carnes/cochinillo-lechal.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/cochinillo-lechal.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ARROCES (Por defecto suelen ser sin gluten, pero consúltalo)
    {
      id: 42,
      name: "Arroz a banda",
      description: "Decorado con alioli. Mínimo 2 personas.",
      price: 16,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/banda.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/banda.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 43,
      name: "Arroz negro con bacalao",
      description: "Con salsa merrins. Decorado con alioli.",
      price: 19,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/negro-bacalao.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-bacalao.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 44,
      name: "Arroz negro con carabineros",
      description: "Decorado con alioli. Mínimo 2 personas.",
      price: 24,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/negro-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-carabineros.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 45,
      name: "Arroz de marisco con pulpo",
      description: "Decorado con alioli. Mínimo 2 personas.",
      price: 22,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/marisco-pulpo.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-pulpo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 46,
      name: "Arroz de marisco con carabineros",
      description: "Decorado con alioli. Mínimo 2 personas.",
      price: 24,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/marisco-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 47,
      name: "Arroz de carne",
      description: "Por temporada. Decorado con alioli.",
      price: 24,
      category: "Arroces",
<<<<<<< HEAD
      tags: ["Sin Gluten"],
      image: "/src/assets/carta/comidas/arroces/carne.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/carne.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // POSTRES
    {
      id: 48,
      name: "Tartas",
      description: "Pregunta por nuestras tartas.",
      price: 6,
      category: "Postres",
<<<<<<< HEAD
      tags: ["Dulce", "Sin Gluten"],
      image: "/src/assets/carta/comidas/postres/tartas.jpg",
=======
      tags: ["Sin Gluten"],
      image: "/carta/comidas/postres/tartas.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 49,
      name: "Tiramisú",
      description: "",
      price: 6,
      category: "Postres",
<<<<<<< HEAD
      tags: ["Dulce", "Sin Gluten", "Sin Lactosa"],
      image: "/src/assets/carta/comidas/postres/tiramisu.jpg",
=======
      tags: ["Sin Gluten", "Sin Lactosa"],
      image: "/carta/comidas/postres/tiramisu.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    /// BEBIDAS ///
    // He mantenido las de "Sin Gluten" y "Sin Alcohol" que tenías, e incluido "Dulce" a los Vermuts y Semidulces.
    
    // CERVEZAS
    {
      id: 50,
      name: "Águila Dorada",
      description: "Caña (30cl) o copa (56cl).",
      doublePrice: "2.30€ / 3.30€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-dorada.jpg",
    },
    {
      id: 51,
      name: "La Rubia 18/70",
      description: "Caña (30cl) o copa (56cl).",
      doublePrice: "2.60€ / 3.60€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/cervezas/la-rubia.jpg",
    },
    {
      id: 52,
      name: "Águila sin filtrar",
      description: "",
      price: 3,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-sin-filtrar.jpg",
    },
    {
      id: 53,
      name: "Alcázar",
      description: "",
      price: 3,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/cervezas/el-alcazar.jpg",
    },
    {
      id: 54,
      name: "Amstel",
      description: "",
      price: 3,
      category: "Bebidas",
      tags: ["Sin Alcohol"],
      image: "/carta/bebidas/cervezas/amstel-0.jpg",
    },
    {
      id: 55,
      name: "Amstel Tostada",
      description: "",
      price: 3.3,
      category: "Bebidas",
      tags: ["Sin Alcohol"],
      image: "/carta/bebidas/cervezas/amstel-tostada-0.jpg",
    },
    {
      id: 56,
      name: "Quinto Estrella Galicia",
      description: "",
      price: 2,
      category: "Bebidas",
      tags: ["Sin Gluten"],
      image: "/carta/bebidas/cervezas/estrella-sin-gluten.png",
    },

    // VERMUTS
    {
      id: 57,
      name: "Vermut rojo tradicional",
      description: "El clásico de toda la vida.",
      price: 4,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/bebidas/vermuts/rojo.jpg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 58,
      name: "Vermut afrutado naranja",
      description: "Refrescante y con intenso sabor a frutas.",
      price: 4.5,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce", "Ácido"],
      image: "/src/assets/carta/bebidas/vermuts/naranja.jpeg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/naranja.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ROSADO
    {
      id: 59,
      name: "Frissé Rosé Frizzante",
      description: "Raspberry & Grapefruit. Copa o botella.",
      doublePrice: "3.20€ / 12.00€",
      price: 0,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce", "Ácido"],
      image: "/src/assets/carta/bebidas/rosado/frisse-rose.jpg",
=======
      tags: [],
      image: "/carta/bebidas/rosado/frisse-rose.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BLANCOS
    {
      id: 60,
      name: "Barbadillo VI Cool",
      description: "Frizzante. Copa o botella.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/bebidas/blancos/barbadillo-vi.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/barbadillo-vi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 61,
      name: "Embrumas Rueda 100% Verdejo",
      description: "Copa o botella.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-verdejo.png",
    },
    {
      id: 62,
      name: "Embrumas Rueda Semidulce Afrutado",
      description: "Copa o botella.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/bebidas/blancos/embrumas-semidulce.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-semidulce.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 63,
      name: "Diez Siglos",
      description: "Sauvignon Blanc 2024. Copa o botella.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/blancos/diez-siglos.png",
    },

    // TINTOS (Ribera & Rioja se mantienen igual, al ser clásicos)
    {
      id: 64,
      name: "Finca Engalia",
      description: "Roble Tempranillo 2023. Copa o botella.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/finca-engalia.jpg",
    },
    {
      id: 65,
      name: "Tarino",
      description: "Roble Tempranillo 2023. Copa o botella.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/tarino.png",
    },
    {
      id: 66,
      name: "Carramimbre Roble",
      description: "Ribera del Duero 2023. Copa o botella.",
      doublePrice: "4.00€ / 20.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-roble.png",
    },
    {
      id: 67,
      name: "Carramimbre Crianza",
      description: "Ribera del Duero 2021. Botella.",
      price: 25,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-crianza.png",
    },
    {
      id: 68,
      name: "Azabache",
      description: "Crianza 2021. Copa o botella.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/azabache.jpg",
    },
    {
      id: 69,
      name: "Carlos Serres",
      description: "Crianza 2021. Copa o botella.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/carlos-serres.png",
    },
    {
      id: 70,
      name: "Campillo",
      description: "Crianza 2022. Botella",
      price: 22,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/campillo.webp",
    },

    // REFRESCOS (Aquí he preferido no saturarlos con "Dulce" porque es obvio, pero sí etiquetarlos como Sin Gluten para alergias cruzadas si lo deseas). 
    // Lo dejo con la configuración original limpia por legibilidad.
    {
      id: 71,
      name: "Agua",
      description: "",
      price: 2,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/agua.jpg",
    },
    {
      id: 72,
      name: "Agua con gas",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/agua-gas.png",
    },
    {
      id: 73,
      name: "Coca Cola",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola.jpeg",
    },
    {
      id: 74,
      name: "Coca Cola Zero",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero.jpg",
    },
    {
      id: 75,
      name: "Coca Cola Zero Zero",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero-zero.jpg",
    },
    {
      id: 76,
      name: "Fanta de Naranja",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-naranja.jpg",
    },
    {
      id: 77,
      name: "Fanta de Limón",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-limon.jpeg",
    },
    {
      id: 78,
      name: "Sprite",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/sprite.webp",
    },
    {
      id: 79,
      name: "Tinto de Verano",
      description: "",
      price: 3.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-verano.jpg",
    },
    {
      id: 80,
      name: "Tinto Racing",
      description: "",
      price: 4.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-racing.jpg",
    },
    {
      id: 81,
      name: "Royal Bliss",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/royal-bliss.png",
    },
    {
      id: 82,
      name: "Fuze Tea Limón",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-limon.png",
    },
    {
      id: 83,
      name: "Fuze Tea Maracuyá",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-maracuya.jpg",
    },
    {
      id: 84,
      name: "Aquarius Limón",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-limon.webp",
    },
    {
      id: 85,
      name: "Aquarius Naranja",
      description: "",
      price: 2.5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-naranja.png",
    },

    // BEBIDAS (ALCOHÓLICAS)
    {
      id: 86,
      name: "Larios",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/larios.jpg",
    },
    {
      id: 87,
      name: "Tanqueray",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/tanqueray.jpg",
    },
    {
      id: 88,
      name: "Beefeater",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/beefeater.jpg",
    },
    {
      id: 89,
      name: "Seagram's",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/seagrams.png",
    },
    {
      id: 90,
      name: "Martin Miller's",
      description: "",
      price: 10,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/martin-millers.jpg",
    },
    {
      id: 91,
      name: "Legendario",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/legendario.jpg",
    },
    {
      id: 92,
      name: "Barceló",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/barcelo.jpg",
    },
    {
      id: 93,
      name: "Brugal",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/brugal.jpg",
    },
    {
      id: 94,
      name: "Red Label",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/red-label.jpg",
    },
    {
      id: 95,
      name: "Black Label",
      description: "",
      price: 8,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/black-label.png",
    },
    {
      id: 96,
      name: "Ballantines",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/ballantines.jpg",
    },
    {
      id: 97,
      name: "Macallan 12",
      description: "",
      price: 10,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/macallan.jpg",
    },
    {
      id: 98,
      name: "Vodka Absolut",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/vodka-absolut.jpg",
    },
    {
      id: 99,
      name: "Baileys",
      description: "",
      price: 4,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/bebidas/bebidas/baileys.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/baileys.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 100,
      name: "Disaronno",
      description: "",
      price: 4,
      category: "Bebidas",
<<<<<<< HEAD
      tags: ["Dulce"],
      image: "/src/assets/carta/bebidas/bebidas/disaronno.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/disaronno.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 101,
      name: "Copa de licor",
      description: "",
      price: 4,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/copa-licor.jpg",
    },
    {
      id: 102,
      name: "Jägermeister",
      description: "",
      price: 5,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/jagermeister.jpg",
    },
    {
      id: 103,
      name: "Fernet Branca",
      description: "",
      price: 6,
      category: "Bebidas",
      tags: [],
      image: "/carta/bebidas/bebidas/fernet.jpg",
    }
  ],

  en: [
    /// FOOD ///
    
    // STARTERS
    {
      id: 1,
      name: "Acorn-fed Iberian Ham",
      description: "",
      price: 17,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Salty", "Gluten-free"],
      image: "/src/assets/carta/comidas/empezamos/jamon-iberico.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/jamon-iberico.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 2,
      name: "Torreznos (Crispy Pork Belly)",
      description: "With lime zest.",
      price: 6.5,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Salty", "Sour", "Gluten-free"],
      image: "/src/assets/carta/comidas/empezamos/torreznos-lima.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/torreznos-lima.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 3,
      name: "Prawn Skewer",
      description: "With Merrins sauce.",
      price: 3.8,
      category: "Starters",
      tags: [],
      image: "/carta/comidas/empezamos/brocheta-langostinos.jpg",
    },
    {
      id: 4,
      name: "Crunchy Chicken Tenders",
      description: "With Japanese mayo.",
      price: 9.5,
      category: "Starters",
      tags: [],
      image: "/carta/comidas/empezamos/lagrimitas-pollo.jpg",
    },
    {
      id: 5,
      name: "Homemade Nachos",
      description: "With meat, guacamole, and cheddar sauce.",
      price: 8.5,
      category: "Starters",
      tags: [],
      image: "/carta/comidas/empezamos/totopos-caseros.jpg",
    },
    {
      id: 6,
      name: "Russian Potato Salad",
      description: "With frigate tuna (melva) and prawns.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Starters",
      tags: [],
      image: "/carta/comidas/empezamos/ensaladilla-rusa.jpg",
    },
    {
      id: 7,
      name: "Málaga Sausage Tartare",
      description: "With avocado marinated in honey mustard sauce.",
      doublePrice: "8.00€ - 14.00€",
      price: 0,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/comidas/empezamos/tartar-salchichon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tartar-salchichon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 8,
      name: "Wrinkly Potatoes with Chipotle Sauce",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Spicy", "Gluten-free", "Vegetarian"],
      image: "/src/assets/carta/comidas/empezamos/papas-chipotle.jpg",
=======
      tags: ["Spicy"],
      image: "/carta/comidas/empezamos/papas-chipotle.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 9,
      name: "Wrinkly Potatoes with Brava Sauce",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Very Spicy", "Gluten-free", "Vegetarian"],
      image: "/src/assets/carta/comidas/empezamos/papas-bravas.jpeg",
=======
      tags: ["Very Spicy"],
      image: "/carta/comidas/empezamos/papas-bravas.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 10,
      name: "Tita Cosi Potatoes",
      description: "With kimchi sauce.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Spicy", "Vegetarian"],
      image: "/src/assets/carta/comidas/empezamos/papas-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/papas-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 11,
      name: "Dressed Tomato & Frigate Tuna",
      description: "With balsamic cream and Merrins sauce.",
      price: 8,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Sweet", "Sour", "Gluten-free"],
      image: "/src/assets/carta/comidas/empezamos/tomate-melva.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-melva.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 12,
      name: "Dressed Tomato, Avocado & Frigate Tuna",
      description: "With balsamic cream and Merrins sauce.",
      price: 10,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Sweet", "Sour", "Gluten-free"],
      image: "/src/assets/carta/comidas/empezamos/tomate-aguacate.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-aguacate.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 13,
      name: "Tita Cosi Salad",
      description: "Lettuce, arugula, cherry tomato, red onion, prawns, goat cheese, and honey mustard sauce.",
      price: 12,
      category: "Starters",
<<<<<<< HEAD
      tags: ["Sweet", "Gluten-free"],
      image: "/src/assets/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // CROQUETTES
    {
      id: 14,
      name: "Cuttlefish",
      description: "Served on a sauce base (truffle or Japanese mayo).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/croquetas/choco.jpg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/choco.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 15,
      name: "Traditional Stew (Puchero)",
      description: "Served on a sauce base (truffle or Japanese mayo).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/croquetas/puchero.jpeg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/puchero.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 16,
      name: "Caramelized Apple, Blue Cheese & Walnuts",
      description: "Served on a sauce base (truffle or Japanese mayo).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Sweet", "Salty", "Vegetarian"],
      image: "/src/assets/carta/comidas/croquetas/manzana.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/manzana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 17,
      name: "Tex Mex",
      description: "Slightly spicy batter. Served on a sauce base.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Spicy"],
      image: "/src/assets/carta/comidas/croquetas/texmex.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/texmex.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 18,
      name: "Acorn-fed Iberian Ham",
      description: "Gluten-free panko. Served on a sauce base.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Gluten-free", "Salty"],
      image: "/src/assets/carta/comidas/croquetas/jamon.jpeg",
=======
      tags: ["Gourmet", "Gluten Free"],
      image: "/carta/comidas/croquetas/jamon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 19,
      name: "Eggplant with Honey",
      description: "Gluten-free panko. Served on a sauce base.",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Gluten-free", "Sweet", "Vegetarian"],
      image: "/src/assets/carta/comidas/croquetas/berenjena.jpg",
=======
      tags: ["Gourmet", "Gluten Free"],
      image: "/carta/comidas/croquetas/berenjena.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 20,
      name: "Aged Beef",
      description: "Served on a sauce base.",
      doublePrice: "7.00€ / 12.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["New", "Gourmet", "Salty"],
      image: "/src/assets/carta/comidas/croquetas/vaca.jpg",
=======
      tags: ["New", "Gourmet"],
      image: "/carta/comidas/croquetas/vaca.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // TOASTS
    {
      id: 21,
      name: "Salmon",
      description: "Aioli base, arugula, prawns, and baby eels (gulas).",
      price: 9.5,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/tostas/salmon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/salmon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 22,
      name: "Iberian Pork Shoulder",
      description: "Aioli base, arugula, red berry coulis, and cheese.",
      price: 9.5,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Sweet", "Salty"],
      image: "/src/assets/carta/comidas/tostas/presa.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/presa.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 23,
      name: "Pork Cheek",
      description: "With gravy and caramelized onion.",
      price: 10,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/comidas/tostas/carrillada.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/carrillada.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 24,
      name: "Serrana",
      description: "Aioli base, arugula, Iberian pluma, bell pepper, and Serrano ham.",
      price: 12,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/tostas/serrana.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/serrana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 25,
      name: "Vegetarian",
      description: "Aioli base, arugula, mixed mushrooms, and cherry tomato.",
      price: 8,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Vegetarian"],
      image: "/src/assets/carta/comidas/tostas/vegetariana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/vegetariana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 26,
      name: "Red Tuna",
      description: "Truffle cheese cream base.",
      price: 13,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/tostas/atun-rojo.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/atun-rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BITES
    {
      id: 27,
      name: "Mini Burger",
      description: "80g beef, cheddar, bacon, quail egg, and BBQ sauce.",
      price: 7.5,
      category: "Bites",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/comidas/bocados/mini-burger.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/mini-burger.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 28,
      name: "Love Taco",
      description: "Honey pork cheek, guacamole, and red berry coulis.",
      price: 6,
      category: "Bites",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/comidas/bocados/taco-amor.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/taco-amor.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 29,
      name: "Brioche",
      description: "Salmon, red onion, avocado, radish, and Japanese mayo.",
      price: 6,
      category: "Bites",
      tags: [],
      image: "/carta/comidas/bocados/brioche.jpg",
    },
    {
      id: 30,
      name: "American Burger",
      description: "200g beef, bacon, cheddar, egg, and BBQ sauce.",
      price: 14,
      category: "Bites",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/comidas/bocados/burger-americana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-americana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 31,
      name: "Goat Cheese Burger",
      description: "200g beef, cecina (cured beef), goat cheese, and truffle mayo.",
      price: 14,
      category: "Bites",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/bocados/burger-cabrita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-cabrita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 32,
      name: "Spanish Burger",
      description: "200g beef, aioli, bell pepper, cheddar, ham, and egg.",
      price: 15,
      category: "Bites",
<<<<<<< HEAD
      tags: ["Salty"],
      image: "/src/assets/carta/comidas/bocados/burger-espanolita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-espanolita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // SPECIALTIES
    {
      id: 33,
      name: "Broken Eggs with Cecina",
      description: "With truffle mayo sauce.",
      price: 14,
      category: "Specialties",
<<<<<<< HEAD
      tags: ["Gluten-free", "Salty"],
      image: "/src/assets/carta/comidas/especialidades/huevos-cecina.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-cecina.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 34,
      name: "Broken Eggs with Prawns & Baby Eels",
      description: "With parsley aioli.",
      price: 14,
      category: "Specialties",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/especialidades/huevos-langostinos.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-langostinos.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 35,
      name: "Broken Eggs with Red King Prawns",
      description: "With parsley aioli.",
      price: 16,
      category: "Specialties",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/especialidades/huevos-carabineros.jpeg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-carabineros.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 36,
      name: "Toasted Noodles with Prawns",
      description: "With gravy aioli.",
      price: 12,
      category: "Specialties",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-langostinos.jpg",
    },
    {
      id: 37,
      name: "Toasted Noodles with Red King Prawns",
      description: "With gravy aioli.",
      price: 16,
      category: "Specialties",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-carabineros.jpeg",
    },

    // MEATS
    {
      id: 38,
      name: "Angus Beef Cheek in Pedro Ximénez",
      description: "Served with potatoes or vegetables.",
      price: 17.5,
      category: "Meats",
<<<<<<< HEAD
      tags: ["Sweet", "Gluten-free"],
      image: "/src/assets/carta/comidas/carnes/carrillada-angus.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/carrillada-angus.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 39,
      name: "Acorn-fed Iberian Pork Shoulder",
      description: "Served with potatoes or vegetables.",
      price: 15,
      category: "Meats",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/carnes/presa-iberica.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/presa-iberica.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 40,
      name: "Iberian Pluma Marinated in Miso Sauce",
      description: "Served with potatoes or vegetables.",
      price: 16,
      category: "Meats",
<<<<<<< HEAD
      tags: ["Sour", "Salty"],
      image: "/src/assets/carta/comidas/carnes/pluma-iberica.png",
=======
      tags: [],
      image: "/carta/comidas/carnes/pluma-iberica.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 41,
      name: "Suckling Pig",
      description: "Served with potatoes or vegetables.",
      doublePrice: "Pre-order only",
      price: 0,
      category: "Meats",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/carnes/cochinillo-lechal.jpg",
=======
      tags: ["By order"],
      image: "/carta/comidas/carnes/cochinillo-lechal.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // RICE DISHES
    {
      id: 42,
      name: "Arroz a Banda (Seafood Rice)",
      description: "Garnished with aioli. Minimum 2 people.",
      price: 16,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/banda.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/banda.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 43,
      name: "Black Rice with Cod",
      description: "With Merrins sauce. Garnished with aioli.",
      price: 19,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/negro-bacalao.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-bacalao.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 44,
      name: "Black Rice with Red King Prawns",
      description: "Garnished with aioli. Minimum 2 people.",
      price: 24,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/negro-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 45,
      name: "Seafood Rice with Octopus",
      description: "Garnished with aioli. Minimum 2 people.",
      price: 22,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/marisco-pulpo.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-pulpo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 46,
      name: "Seafood Rice with Red King Prawns",
      description: "Garnished with aioli. Minimum 2 people.",
      price: 24,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/marisco-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 47,
      name: "Meat Rice",
      description: "Seasonal. Garnished with aioli.",
      price: 24,
      category: "Rice Dishes",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/comidas/arroces/carne.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/carne.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // DESSERTS
    {
      id: 48,
      name: "Cakes",
      description: "Ask about our available cakes.",
      price: 6,
      category: "Desserts",
<<<<<<< HEAD
      tags: ["Sweet", "Gluten-free"],
      image: "/src/assets/carta/comidas/postres/tartas.jpg",
=======
      tags: ["Gluten Free"],
      image: "/carta/comidas/postres/tartas.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 49,
      name: "Tiramisu",
      description: "",
      price: 6,
      category: "Desserts",
<<<<<<< HEAD
      tags: ["Sweet", "Gluten-free", "Lactose Free"],
      image: "/src/assets/carta/comidas/postres/tiramisu.jpg",
=======
      tags: ["Gluten Free", "Lactose Free"],
      image: "/carta/comidas/postres/tiramisu.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    /// DRINKS ///
    
    // BEERS
    {
      id: 50,
      name: "Águila Dorada",
      description: "Draft (30cl) or pint (56cl).",
      doublePrice: "2.30€ / 3.30€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-dorada.jpg",
    },
    {
      id: 51,
      name: "La Rubia 18/70",
      description: "Draft (30cl) or pint (56cl).",
      doublePrice: "2.60€ / 3.60€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/cervezas/la-rubia.jpg",
    },
    {
      id: 52,
      name: "Águila Unfiltered",
      description: "",
      price: 3,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-sin-filtrar.jpg",
    },
    {
      id: 53,
      name: "Alcázar",
      description: "",
      price: 3,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/cervezas/la-alcazar.jpg",
    },
    {
      id: 54,
      name: "Amstel",
      description: "",
      price: 3,
      category: "Drinks",
      tags: ["Alcohol Free"],
      image: "/carta/bebidas/cervezas/amstel-0.jpg",
    },
    {
      id: 55,
      name: "Amstel Toasted",
      description: "",
      price: 3.3,
      category: "Drinks",
      tags: ["Alcohol Free"],
      image: "/carta/bebidas/cervezas/amstel-tostada-0.jpg",
    },
    {
      id: 56,
      name: "Estrella Galicia (Small)",
      description: "",
      price: 2,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Gluten-free"],
      image: "/src/assets/carta/bebidas/cervezas/estrella-sin-gluten.png",
=======
      tags: ["Gluten Free"],
      image: "/carta/bebidas/cervezas/estrella-sin-gluten.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // VERMOUTHS
    {
      id: 57,
      name: "Traditional Red Vermouth",
      description: "The classic choice.",
      price: 4,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/bebidas/vermuts/rojo.jpg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 58,
      name: "Fruity Orange Vermouth",
      description: "Refreshing with an intense fruit flavor.",
      price: 4.5,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet", "Sour"],
      image: "/src/assets/carta/bebidas/vermuts/naranja.jpeg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/naranja.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ROSÉ
    {
      id: 59,
      name: "Frissé Rosé Frizzante",
      description: "Raspberry & Grapefruit. Glass or bottle.",
      doublePrice: "3.20€ / 12.00€",
      price: 0,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet", "Sour"],
      image: "/src/assets/carta/bebidas/rosado/frisse-rose.jpg",
=======
      tags: [],
      image: "/carta/bebidas/rosado/frisse-rose.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // WHITES
    {
      id: 60,
      name: "Barbadillo VI Cool",
      description: "Frizzante. Glass or bottle.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/bebidas/blancos/barbadillo-vi.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/barbadillo-vi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 61,
      name: "Embrumas Rueda 100% Verdejo",
      description: "Glass or bottle.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-verdejo.png",
    },
    {
      id: 62,
      name: "Embrumas Rueda Fruity Semi-Sweet",
      description: "Glass or bottle.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/bebidas/blancos/embrumas-semidulce.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-semidulce.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 63,
      name: "Diez Siglos",
      description: "Sauvignon Blanc 2024. Glass or bottle.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/blancos/diez-siglos.png",
    },

    // REDS
    {
      id: 64,
      name: "Finca Engalia",
      description: "Roble Tempranillo 2023. Glass or bottle.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/finca-engalia.jpg",
    },
    {
      id: 65,
      name: "Tarino",
      description: "Roble Tempranillo 2023. Glass or bottle.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/tarino.png",
    },
    {
      id: 66,
      name: "Carramimbre Roble",
      description: "Ribera del Duero 2023. Glass or bottle.",
      doublePrice: "4.00€ / 20.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-roble.png",
    },
    {
      id: 67,
      name: "Carramimbre Crianza",
      description: "Ribera del Duero 2021. Bottle.",
      price: 25,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-crianza.png",
    },
    {
      id: 68,
      name: "Azabache",
      description: "Crianza 2021. Glass or bottle.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/azabache.jpg",
    },
    {
      id: 69,
      name: "Carlos Serres",
      description: "Crianza 2021. Glass or bottle.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/carlos-serres.png",
    },
    {
      id: 70,
      name: "Campillo",
      description: "Crianza 2022. Bottle.",
      price: 22,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/campillo.webp",
    },

    // SOFT DRINKS
    {
      id: 71,
      name: "Water",
      description: "",
      price: 2,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/agua.jpg",
    },
    {
      id: 72,
      name: "Sparkling Water",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/agua-gas.png",
    },
    {
      id: 73,
      name: "Coca Cola",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola.jpeg",
    },
    {
      id: 74,
      name: "Coca Cola Zero",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero.jpg",
    },
    {
      id: 75,
      name: "Coca Cola Zero Zero",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero-zero.jpg",
    },
    {
      id: 76,
      name: "Orange Fanta",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-naranja.jpg",
    },
    {
      id: 77,
      name: "Lemon Fanta",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-limon.jpeg",
    },
    {
      id: 78,
      name: "Sprite",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/sprite.webp",
    },
    {
      id: 79,
      name: "Tinto de Verano",
      description: "",
      price: 3.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-verano.jpg",
    },
    {
      id: 80,
      name: "Tinto Racing",
      description: "",
      price: 4.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-racing.jpg",
    },
    {
      id: 81,
      name: "Royal Bliss",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/royal-bliss.png",
    },
    {
      id: 82,
      name: "Fuze Tea Lemon",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-limon.png",
    },
    {
      id: 83,
      name: "Fuze Tea Passion Fruit",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-maracuya.jpg",
    },
    {
      id: 84,
      name: "Aquarius Lemon",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-limon.webp",
    },
    {
      id: 85,
      name: "Aquarius Orange",
      description: "",
      price: 2.5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-naranja.png",
    },

    // SPIRITS & LIQUORS
    {
      id: 86,
      name: "Larios",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/larios.jpg",
    },
    {
      id: 87,
      name: "Tanqueray",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/tanqueray.jpg",
    },
    {
      id: 88,
      name: "Beefeater",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/beefeater.jpg",
    },
    {
      id: 89,
      name: "Seagram's",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/seagrams.png",
    },
    {
      id: 90,
      name: "Martin Miller's",
      description: "",
      price: 10,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/martin-millers.jpg",
    },
    {
      id: 91,
      name: "Legendario",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/legendario.jpg",
    },
    {
      id: 92,
      name: "Barceló",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/barcelo.jpg",
    },
    {
      id: 93,
      name: "Brugal",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/brugal.jpg",
    },
    {
      id: 94,
      name: "Red Label",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/red-label.jpg",
    },
    {
      id: 95,
      name: "Black Label",
      description: "",
      price: 8,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/black-label.png",
    },
    {
      id: 96,
      name: "Ballantine's",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/ballantines.jpg",
    },
    {
      id: 97,
      name: "Macallan 12",
      description: "",
      price: 10,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/macallan.jpg",
    },
    {
      id: 98,
      name: "Absolut Vodka",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/vodka-absolut.jpg",
    },
    {
      id: 99,
      name: "Baileys",
      description: "",
      price: 4,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/bebidas/bebidas/baileys.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/baileys.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 100,
      name: "Disaronno",
      description: "",
      price: 4,
      category: "Drinks",
<<<<<<< HEAD
      tags: ["Sweet"],
      image: "/src/assets/carta/bebidas/bebidas/disaronno.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/disaronno.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 101,
      name: "Liquor Shot",
      description: "",
      price: 4,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/copa-licor.jpg",
    },
    {
      id: 102,
      name: "Jägermeister",
      description: "",
      price: 5,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/jagermeister.jpg",
    },
    {
      id: 103,
      name: "Fernet Branca",
      description: "",
      price: 6,
      category: "Drinks",
      tags: [],
      image: "/carta/bebidas/bebidas/fernet.jpg",
    }
  ],

  fr: [
    /// REPAS ///
    
    // POUR COMMENCER
    {
      id: 1,
      name: "Jambon ibérique de bellota",
      description: "",
      price: 17,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Salé", "Sans Gluten"],
      image: "/src/assets/carta/comidas/empezamos/jamon-iberico.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/jamon-iberico.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 2,
      name: "Torreznos",
      description: "Avec zeste de citron vert.",
      price: 6.5,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Salé", "Acide", "Sans Gluten"],
      image: "/src/assets/carta/comidas/empezamos/torreznos-lima.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/torreznos-lima.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 3,
      name: "Brochette de crevettes",
      description: "Avec sauce merrins.",
      price: 3.8,
      category: "Pour commencer",
      tags: [],
      image: "/carta/comidas/empezamos/brocheta-langostinos.jpg",
    },
    {
      id: 4,
      name: "Larmes de poulet croustillantes",
      description: "Avec mayo japonaise.",
      price: 9.5,
      category: "Pour commencer",
      tags: [],
      image: "/carta/comidas/empezamos/lagrimitas-pollo.jpg",
    },
    {
      id: 5,
      name: "Totopos maison",
      description: "Avec viande, guacamole et sauce cheddar.",
      price: 8.5,
      category: "Pour commencer",
      tags: [],
      image: "/carta/comidas/empezamos/totopos-caseros.jpg",
    },
    {
      id: 6,
      name: "Salade russe",
      description: "Avec melva et crevettes.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Pour commencer",
      tags: [],
      image: "/carta/comidas/empezamos/ensaladilla-rusa.jpg",
    },
    {
      id: 7,
      name: "Tartare de saucisson de Malaga",
      description: "Avec avocat mariné à la sauce miel et moutarde.",
      doublePrice: "8.00€ - 14.00€",
      price: 0,
      category: "Pour commencer",
      tags: [],
      image: "/carta/comidas/empezamos/tartar-salchichon.jpeg",
    },
    {
      id: 8,
      name: "Papas arrugás sauce chipotle",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Épicé", "Sans Gluten", "Végétarien"],
      image: "/src/assets/carta/comidas/empezamos/papas-chipotle.jpg",
=======
      tags: ["Épicé"],
      image: "/carta/comidas/empezamos/papas-chipotle.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 9,
      name: "Papas arrugás sauce brava",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Très Épicé", "Sans Gluten", "Végétalien"],
      image: "/src/assets/carta/comidas/empezamos/papas-bravas.jpeg",
=======
      tags: ["Très Épicé"],
      image: "/carta/comidas/empezamos/papas-bravas.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 10,
      name: "Pommes de terre Tita Cosi",
      description: "Avec sauce kimchi.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Épicé", "Végétarien"],
      image: "/src/assets/carta/comidas/empezamos/papas-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/papas-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 11,
      name: "Tomate assaisonnée et melva",
      description: "Avec crème balsamique et merrins.",
      price: 8,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Sucré", "Acide", "Sans Gluten"],
      image: "/src/assets/carta/comidas/empezamos/tomate-melva.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-melva.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 12,
      name: "Tomate assaisonnée, avocat et melva",
      description: "Avec crème balsamique et merrins.",
      price: 10,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Sucré", "Acide", "Sans Gluten"],
      image: "/src/assets/carta/comidas/empezamos/tomate-aguacate.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-aguacate.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 13,
      name: "Salade Tita Cosi",
      description: "Laitue, roquette, tomates cerises, oignon rouge, crevettes, fromage de chèvre et sauce miel et moutarde.",
      price: 12,
      category: "Pour commencer",
<<<<<<< HEAD
      tags: ["Sucré", "Sans Gluten"],
      image: "/src/assets/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // CROQUETTES
    {
      id: 14,
      name: "Seiche",
      description: "Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/croquetas/choco.jpg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/choco.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 15,
      name: "Puchero",
      description: "Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/croquetas/puchero.jpeg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/puchero.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 16,
      name: "Pomme caramélisée, fromage bleu et noix",
      description: "Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Sucré", "Salé", "Végétarien"],
      image: "/src/assets/carta/comidas/croquetas/manzana.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/manzana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 17,
      name: "Tex Mex",
      description: "Panure légèrement épicée. Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Épicé"],
      image: "/src/assets/carta/comidas/croquetas/texmex.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/texmex.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 18,
      name: "Jambon ibérique de bellota",
      description: "Panko sans gluten. Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Sans Gluten", "Salé"],
      image: "/src/assets/carta/comidas/croquetas/jamon.jpeg",
=======
      tags: ["Gourmet", "Sans Gluten"],
      image: "/carta/comidas/croquetas/jamon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 19,
      name: "Aubergine au miel",
      description: "Panko sans gluten. Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Gourmet", "Sans Gluten", "Sucré", "Végétarien"],
      image: "/src/assets/carta/comidas/croquetas/berenjena.jpg",
=======
      tags: ["Gourmet", "Sans Gluten"],
      image: "/carta/comidas/croquetas/berenjena.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 20,
      name: "Bœuf maturé",
      description: "Décorées d'une base de sauce (truffe ou japonaise). Options : Demi (4 pcs) ou Portion (8 pcs).",
      doublePrice: "7.00€ / 12.00€",
      price: 0,
      category: "Croquettes",
<<<<<<< HEAD
      tags: ["Nouveau", "Gourmet", "Salé"],
      image: "/src/assets/carta/comidas/croquetas/vaca.jpg",
=======
      tags: ["Nouveau", "Gourmet"],
      image: "/carta/comidas/croquetas/vaca.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // TOASTS
    {
      id: 21,
      name: "Saumon",
      description: "Base d'aïoli, roquette, crevettes et civelles.",
      price: 9.5,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/tostas/salmon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/salmon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 22,
      name: "Presa ibérique",
      description: "Base d'aïoli, roquette, coulis de fruits rouges et fromage.",
      price: 9.5,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Sucré", "Salé"],
      image: "/src/assets/carta/comidas/tostas/presa.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/presa.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 23,
      name: "Joue de porc",
      description: "Avec sauce dans son jus et oignon caramélisé.",
      price: 10,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/comidas/tostas/carrillada.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/carrillada.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 24,
      name: "Serrana",
      description: "Base d'aïoli, roquette, pluma, poivron et jambon serrano.",
      price: 12,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/tostas/serrana.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/serrana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 25,
      name: "Végétarienne",
      description: "Base d'aïoli, roquette, mélange de champignons et tomates cerises.",
      price: 8,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Végétarien"],
      image: "/src/assets/carta/comidas/tostas/vegetariana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/vegetariana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 26,
      name: "Thon rouge",
      description: "Base de crème de fromage truffé.",
      price: 13,
      category: "Toasts",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/tostas/atun-rojo.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/atun-rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BOUCHÉES
    {
      id: 27,
      name: "Mini burger",
      description: "Bœuf 80g, cheddar, bacon, œuf de caille et sauce bbq.",
      price: 7.5,
      category: "Bouchées",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/comidas/bocados/mini-burger.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/mini-burger.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 28,
      name: "Taco amor",
      description: "Joue de porc au miel, guacamole et coulis de fruits rouges.",
      price: 6,
      category: "Bouchées",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/comidas/bocados/taco-amor.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/taco-amor.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    // BOUCHEES (part 2)
    {
      id: 29,
      name: "Brioche",
      description: "Saumon, oignon rouge, avocat, radis et mayo japonaise.",
      price: 6,
      category: "Bouchées",
      tags: [],
      image: "/carta/comidas/bocados/brioche.jpg",
    },
    {
      id: 30,
      name: "Burger Américain",
      description: "Bœuf 200g, bacon, cheddar, œuf et sauce bbq.",
      price: 14,
      category: "Bouchées",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/comidas/bocados/burger-americana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-americana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 31,
      name: "Burger Cabrita",
      description: "Bœuf 200g, cecina, fromage de chèvre et mayo truffe.",
      price: 14,
      category: "Bouchées",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/bocados/burger-cabrita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-cabrita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 32,
      name: "Burger Españolita",
      description: "Bœuf 200g, aïoli, poivron, cheddar, jambon et œuf.",
      price: 15,
      category: "Bouchées",
<<<<<<< HEAD
      tags: ["Salé"],
      image: "/src/assets/carta/comidas/bocados/burger-espanolita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-espanolita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // SPÉCIALITÉS
    {
      id: 33,
      name: "Œufs cassés avec cecina",
      description: "Avec sauce mayo à la truffe.",
      price: 14,
      category: "Spécialités",
<<<<<<< HEAD
      tags: ["Sans Gluten", "Salé"],
      image: "/src/assets/carta/comidas/especialidades/huevos-cecina.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-cecina.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 34,
      name: "Œufs cassés avec crevettes et civelles",
      description: "Avec aïoli au persil.",
      price: 14,
      category: "Spécialités",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/especialidades/huevos-langostinos.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-langostinos.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 35,
      name: "Œufs cassés avec carabineros",
      description: "Avec aïoli au persil.",
      price: 16,
      category: "Spécialités",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/especialidades/huevos-carabineros.jpeg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-carabineros.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 36,
      name: "Nouilles grillées aux crevettes",
      description: "Avec aïoli dans son jus.",
      price: 12,
      category: "Spécialités",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-langostinos.jpg",
    },
    {
      id: 37,
      name: "Nouilles grillées aux carabineros",
      description: "Avec aïoli dans son jus.",
      price: 16,
      category: "Spécialités",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-carabineros.jpeg",
    },

    // VIANDES
    {
      id: 38,
      name: "Joue de bœuf Angus au Pedro Ximénez",
      description: "Accompagnée de pommes de terre ou légumes.",
      price: 17.5,
      category: "Viandes",
<<<<<<< HEAD
      tags: ["Sucré", "Sans Gluten"],
      image: "/src/assets/carta/comidas/carnes/carrillada-angus.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/carrillada-angus.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 39,
      name: "Presa ibérique de bellota",
      description: "Accompagnée de pommes de terre ou légumes.",
      price: 15,
      category: "Viandes",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/carnes/presa-iberica.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/presa-iberica.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 40,
      name: "Pluma ibérique marinée à la sauce miso",
      description: "Accompagnée de pommes de terre ou légumes.",
      price: 16,
      category: "Viandes",
<<<<<<< HEAD
      tags: ["Acide", "Salé"],
      image: "/src/assets/carta/comidas/carnes/pluma-iberica.png",
=======
      tags: [],
      image: "/carta/comidas/carnes/pluma-iberica.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 41,
      name: "Cochon de lait",
      description: "Accompagné de pommes de terre ou légumes.",
      doublePrice: "Por encargo",
      price: 0,
      category: "Viandes",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/carnes/cochinillo-lechal.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/cochinillo-lechal.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // RIZ
    {
      id: 42,
      name: "Riz a banda",
      description: "Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 16,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/banda.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/banda.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 43,
      name: "Riz noir à la morue",
      description: "Avec sauce merrins. Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 19,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/negro-bacalao.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-bacalao.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 44,
      name: "Riz noir aux carabineros",
      description: "Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 24,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/negro-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 45,
      name: "Riz aux fruits de mer et poulpe",
      description: "Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 22,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/marisco-pulpo.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-pulpo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 46,
      name: "Riz aux fruits de mer et carabineros",
      description: "Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 24,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/marisco-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 47,
      name: "Riz à la viande",
      description: "De saison. Décoré avec aïoli. Minimum 2 personnes (prix par personne).",
      price: 24,
      category: "Riz",
<<<<<<< HEAD
      tags: ["Sans Gluten"],
      image: "/src/assets/carta/comidas/arroces/carne.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/carne.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // DESSERTS
    {
      id: 48,
      name: "Gâteaux",
      description: "Renseignez-vous sur nos gâteaux.",
      price: 6,
      category: "Desserts",
<<<<<<< HEAD
      tags: ["Sucré", "Sans Gluten"],
      image: "/src/assets/carta/comidas/postres/tartas.jpg",
=======
      tags: ["Sans Gluten"],
      image: "/carta/comidas/postres/tartas.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 49,
      name: "Tiramisu",
      description: "",
      price: 6,
      category: "Desserts",
<<<<<<< HEAD
      tags: ["Sucré", "Sans Gluten", "Sans Lactose"],
      image: "/src/assets/carta/comidas/postres/tiramisu.jpg",
=======
      tags: ["Sans Gluten", "Sans Lactose"],
      image: "/carta/comidas/postres/tiramisu.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },


    /// BOISSONS ///
    
    // BIÈRES
    {
      id: 50,
      name: "Águila Dorada",
      description: "Demi (30cl) ou pinte (56cl).",
      doublePrice: "2.30€ / 3.30€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-dorada.jpg",
    },
    {
      id: 51,
      name: "La Rubia 18/70",
      description: "Demi (30cl) ou pinte (56cl).",
      doublePrice: "2.60€ / 3.60€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/cervezas/la-rubia.jpg",
    },
    {
      id: 52,
      name: "Águila non filtrée",
      description: "",
      price: 3,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-sin-filtrar.jpg",
    },
    {
      id: 53,
      name: "Alcázar",
      description: "",
      price: 3,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/cervezas/la-alcazar.jpg",
    },
    {
      id: 54,
      name: "Amstel",
      description: "",
      price: 3,
      category: "Boissons",
      tags: ["Sans Alcool"],
      image: "/carta/bebidas/cervezas/amstel-0.jpg",
    },
    {
      id: 55,
      name: "Amstel Tostada",
      description: "",
      price: 3.3,
      category: "Boissons",
      tags: ["Sans Alcool"],
      image: "/carta/bebidas/cervezas/amstel-tostada-0.jpg",
    },
    {
      id: 56,
      name: "Quinto Estrella Galicia",
      description: "",
      price: 2,
      category: "Boissons",
      tags: ["Sans Gluten"],
      image: "/carta/bebidas/cervezas/estrella-sin-gluten.png",
    },

    // VERMOUTHS
    {
      id: 57,
      name: "Vermouth rouge traditionnel",
      description: "Le classique de toujours.",
      price: 4,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/bebidas/vermuts/rojo.jpg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 58,
      name: "Vermouth fruité à l'orange",
      description: "Rafraîchissant et avec une saveur intense de fruits.",
      price: 4.5,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré", "Acide"],
      image: "/src/assets/carta/bebidas/vermuts/naranja.jpeg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/naranja.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ROSÉ
    {
      id: 59,
      name: "Frissé Rosé Frizzante",
      description: "Framboise & Pamplemousse. Verre ou bouteille.",
      doublePrice: "3.20€ / 12.00€",
      price: 0,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré", "Acide"],
      image: "/src/assets/carta/bebidas/rosado/frisse-rose.jpg",
=======
      tags: [],
      image: "/carta/bebidas/rosado/frisse-rose.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BLANCS
    {
      id: 60,
      name: "Barbadillo VI Cool",
      description: "Frizzante. Verre ou bouteille.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/bebidas/blancos/barbadillo-vi.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/barbadillo-vi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 61,
      name: "Embrumas Rueda 100% Verdejo",
      description: "Verre ou bouteille.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-verdejo.png",
    },
    {
      id: 62,
      name: "Embrumas Rueda Moelleux Fruité",
      description: "Verre ou bouteille.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/bebidas/blancos/embrumas-semidulce.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-semidulce.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 63,
      name: "Diez Siglos",
      description: "Sauvignon Blanc 2024. Verre ou bouteille.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/blancos/diez-siglos.png",
    },

    // ROUGES
    /* Ribera */
    {
      id: 64,
      name: "Finca Engalia",
      description: "Roble Tempranillo 2023. Verre ou bouteille.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/finca-engalia.jpg",
    },
    {
      id: 65,
      name: "Tarino",
      description: "Roble Tempranillo 2023. Verre ou bouteille.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/tarino.png",
    },
    {
      id: 66,
      name: "Carramimbre Roble",
      description: "Ribera del Duero 2023. Verre ou bouteille.",
      doublePrice: "4.00€ / 20.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-roble.png",
    },
    {
      id: 67,
      name: "Carramimbre Crianza",
      description: "Ribera del Duero 2021. Bouteille.",
      price: 25,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-crianza.png",
    },
    /* Rioja */
    {
      id: 68,
      name: "Azabache",
      description: "Crianza 2021. Verre ou bouteille.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/azabache.jpg",
    },
    {
      id: 69,
      name: "Carlos Serres",
      description: "Crianza 2021. Verre ou bouteille.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/carlos-serres.png",
    },
    {
      id: 70,
      name: "Campillo",
      description: "Crianza 2022. Bouteille.",
      price: 22,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/campillo.webp",
    },

    // BOISSONS FRAÎCHES
    {
      id: 71,
      name: "Eau",
      description: "",
      price: 2,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/agua.jpg",
    },
    {
      id: 72,
      name: "Eau pétillante",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/agua-gas.png",
    },
    {
      id: 73,
      name: "Coca Cola",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola.jpeg",
    },
    {
      id: 74,
      name: "Coca Cola Zero",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero.jpg",
    },
    {
      id: 75,
      name: "Coca Cola Zero Zero",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero-zero.jpg",
    },
    {
      id: 76,
      name: "Fanta Orange",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-naranja.jpg",
    },
    {
      id: 77,
      name: "Fanta Citron",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-limon.jpeg",
    },
    {
      id: 78,
      name: "Sprite",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/sprite.webp",
    },
    {
      id: 79,
      name: "Tinto de Verano",
      description: "",
      price: 3.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-verano.jpg",
    },
    {
      id: 80,
      name: "Tinto Racing",
      description: "",
      price: 4.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-racing.jpg",
    },
    {
      id: 81,
      name: "Royal Bliss",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/royal-bliss.png",
    },
    {
      id: 82,
      name: "Fuze Tea Citron",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-limon.png",
    },
    {
      id: 83,
      name: "Fuze Tea Fruit de la Passion",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-maracuya.jpg",
    },
    {
      id: 84,
      name: "Aquarius Citron",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-limon.webp",
    },
    {
      id: 85,
      name: "Aquarius Orange",
      description: "",
      price: 2.5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-naranja.png",
    },

    // BOISSONS (ALCOOLISÉES)
    {
      id: 86,
      name: "Larios",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/larios.jpg",
    },
    {
      id: 87,
      name: "Tanqueray",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/tanqueray.jpg",
    },
    {
      id: 88,
      name: "Beefeater",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/beefeater.jpg",
    },
    {
      id: 89,
      name: "Seagram's",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/seagrams.png",
    },
    {
      id: 90,
      name: "Martin Miller's",
      description: "",
      price: 10,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/martin-millers.jpg",
    },
    {
      id: 91,
      name: "Legendario",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/legendario.jpg",
    },
    {
      id: 92,
      name: "Barceló",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/barcelo.jpg",
    },
    {
      id: 93,
      name: "Brugal",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/brugal.jpg",
    },
    {
      id: 94,
      name: "Red Label",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/red-label.jpg",
    },
    {
      id: 95,
      name: "Black Label",
      description: "",
      price: 8,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/black-label.png",
    },
    {
      id: 96,
      name: "Ballantines",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/ballantines.jpg",
    },
    {
      id: 97,
      name: "Macallan 12",
      description: "",
      price: 10,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/macallan.jpg",
    },
    {
      id: 98,
      name: "Vodka Absolut",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/vodka-absolut.jpg",
    },
    {
      id: 99,
      name: "Baileys",
      description: "",
      price: 4,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/bebidas/bebidas/baileys.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/baileys.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 100,
      name: "Disaronno",
      description: "",
      price: 4,
      category: "Boissons",
<<<<<<< HEAD
      tags: ["Sucré"],
      image: "/src/assets/carta/bebidas/bebidas/disaronno.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/disaronno.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 101,
      name: "Verre de liqueur",
      description: "",
      price: 4,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/copa-licor.jpg",
    },
    {
      id: 102,
      name: "Jägermeister",
      description: "",
      price: 5,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/jagermeister.jpg",
    },
    {
      id: 103,
      name: "Fernet Branca",
      description: "",
      price: 6,
      category: "Boissons",
      tags: [],
      image: "/carta/bebidas/bebidas/fernet.jpg",
    }
  ],

  de: [
    /// SPEISEN ///
    
    // ZUM STARTEN
    {
      id: 1,
      name: "Iberischer Eichelschinken",
      description: "",
      price: 17,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Salzig", "Glutenfrei"],
      image: "/src/assets/carta/comidas/empezamos/jamon-iberico.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/jamon-iberico.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 2,
      name: "Torreznos",
      description: "Mit Limettenabrieb.",
      price: 6.5,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Salzig", "Sauer", "Glutenfrei"],
      image: "/src/assets/carta/comidas/empezamos/torreznos-lima.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/torreznos-lima.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 3,
      name: "Garnelenspieß",
      description: "Mit Merrins-Sauce.",
      price: 3.8,
      category: "Zum Starten",
      tags: [],
      image: "/carta/comidas/empezamos/brocheta-langostinos.jpg",
    },
    {
      id: 4,
      name: "Knusprige Hähnchenstreifen",
      description: "Mit japanischer Mayonnaise.",
      price: 9.5,
      category: "Zum Starten",
      tags: [],
      image: "/carta/comidas/empezamos/lagrimitas-pollo.jpg",
    },
    {
      id: 5,
      name: "Hausgemachte Totopos",
      description: "Mit Fleisch, Guacamole und Cheddar-Sauce.",
      price: 8.5,
      category: "Zum Starten",
      tags: [],
      image: "/carta/comidas/empezamos/totopos-caseros.jpg",
    },
    {
      id: 6,
      name: "Russischer Salat",
      description: "Mit Fregattenmakrele (Melva) und Garnelen.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Zum Starten",
      tags: [],
      image: "/carta/comidas/empezamos/ensaladilla-rusa.jpg",
    },
    {
      id: 7,
      name: "Salami-Tartar aus Málaga",
      description: "Mit marinierter Avocado in Honig-Senf-Sauce.",
      doublePrice: "8.00€ - 14.00€",
      price: 0,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/comidas/empezamos/tartar-salchichon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tartar-salchichon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 8,
      name: "Papas Arrugas mit Chipotle-Sauce",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Scharf", "Glutenfrei", "Vegetarisch"],
      image: "/src/assets/carta/comidas/empezamos/papas-chipotle.jpg",
=======
      tags: ["Scharf"],
      image: "/carta/comidas/empezamos/papas-chipotle.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 9,
      name: "Papas Arrugas mit Salsa Brava",
      description: "",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Sehr scharf", "Glutenfrei", "Vegetarisch"],
      image: "/src/assets/carta/comidas/empezamos/papas-bravas.jpeg",
=======
      tags: ["Sehr scharf"],
      image: "/carta/comidas/empezamos/papas-bravas.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 10,
      name: "Tita Cosi Kartoffeln",
      description: "Mit Kimchi-Sauce.",
      doublePrice: "6.00€ - 10.00€",
      price: 0,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Scharf", "Vegetarisch"],
      image: "/src/assets/carta/comidas/empezamos/papas-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/papas-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 11,
      name: "Marinierte Tomaten mit Fregattenmakrele",
      description: "Mit Balsamico-Creme und Merrins.",
      price: 8,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Süß", "Sauer", "Glutenfrei"],
      image: "/src/assets/carta/comidas/empezamos/tomate-melva.png",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-melva.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 12,
      name: "Marinierte Tomaten mit Avocado und Fregattenmakrele",
      description: "Mit Balsamico-Creme und Merrins.",
      price: 10,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Süß", "Sauer", "Glutenfrei"],
      image: "/src/assets/carta/comidas/empezamos/tomate-aguacate.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/tomate-aguacate.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 13,
      name: "Tita Cosi Salat",
      description: "Blattsalat, Rucola, Kirschtomaten, rote Zwiebeln, Garnelen, Ziegenkäse und Honig-Senf-Sauce.",
      price: 12,
      category: "Zum Starten",
<<<<<<< HEAD
      tags: ["Süß", "Glutenfrei"],
      image: "/src/assets/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
=======
      tags: [],
      image: "/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // KROKETTEN
    {
      id: 14,
      name: "Tintenfisch",
      description: "Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/croquetas/choco.jpg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/choco.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 15,
      name: "Puchero-Eintopf",
      description: "Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.00€ / 10.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/croquetas/puchero.jpeg",
=======
      tags: [],
      image: "/carta/comidas/croquetas/puchero.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 16,
      name: "Karamellisierter Apfel, Blauschimmelkäse und Walnüsse",
      description: "Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Gourmet", "Süß", "Salzig", "Vegetarisch"],
      image: "/src/assets/carta/comidas/croquetas/manzana.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/manzana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 17,
      name: "Tex Mex",
      description: "Leicht scharfe Panierung. Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Gourmet", "Scharf"],
      image: "/src/assets/carta/comidas/croquetas/texmex.jpg",
=======
      tags: ["Gourmet"],
      image: "/carta/comidas/croquetas/texmex.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 18,
      name: "Iberischer Eichelschinken",
      description: "Glutenfreies Panko. Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Gourmet", "Glutenfrei", "Salzig"],
      image: "/src/assets/carta/comidas/croquetas/jamon.jpeg",
=======
      tags: ["Gourmet", "Glutenfrei"],
      image: "/carta/comidas/croquetas/jamon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 19,
      name: "Aubergine mit Honig",
      description: "Glutenfreies Panko. Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "6.50€ / 11.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Gourmet", "Glutenfrei", "Süß", "Vegetarisch"],
      image: "/src/assets/carta/comidas/croquetas/berenjena.jpg",
=======
      tags: ["Gourmet", "Glutenfrei"],
      image: "/carta/comidas/croquetas/berenjena.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 20,
      name: "Gereiftes Rindfleisch",
      description: "Garniert auf einer Saucenbasis (Trüffel oder japanische Mayo). Optionen: Halbe Portion (4 Stk.) oder Portion (8 Stk.).",
      doublePrice: "7.00€ / 12.00€",
      price: 0,
      category: "Kroketten",
<<<<<<< HEAD
      tags: ["Neu", "Gourmet", "Salzig"],
      image: "/src/assets/carta/comidas/croquetas/vaca.jpg",
=======
      tags: ["Neu", "Gourmet"],
      image: "/carta/comidas/croquetas/vaca.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // BELEGTE BROTE
    {
      id: 21,
      name: "Lachs",
      description: "Aïoli-Basis, Rucola, Garnelen und Glasaal-Imitat (Gulas).",
      price: 9.5,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/tostas/salmon.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/salmon.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 22,
      name: "Iberisches Presa-Fleisch",
      description: "Aïoli-Basis, Rucola, Beeren-Coulis und Käse.",
      price: 9.5,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Süß", "Salzig"],
      image: "/src/assets/carta/comidas/tostas/presa.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/presa.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 23,
      name: "Schweinebäckchen",
      description: "Mit Sauce im eigenen Saft und karamellisierten Zwiebeln.",
      price: 10,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/comidas/tostas/carrillada.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/carrillada.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 24,
      name: "Serrana",
      description: "Aïoli-Basis, Rucola, Pluma-Fleisch, Paprika und Serrano-Schinken.",
      price: 12,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/tostas/serrana.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/serrana.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 25,
      name: "Vegetarisch",
      description: "Aïoli-Basis, Rucola, Pilzmischung und Kirschtomaten.",
      price: 8,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Vegetarisch"],
      image: "/src/assets/carta/comidas/tostas/vegetariana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/tostas/vegetariana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 26,
      name: "Roter Thunfisch",
      description: "Frischkäse-Trüffel-Basis.",
      price: 13,
      category: "Belegte Brote",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/tostas/atun-rojo.jpg",
=======
      tags: [],
      image: "/carta/comidas/tostas/atun-rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // HÄPPCHEN
    {
      id: 27,
      name: "Mini-Burger",
      description: "Rindfleisch 80g, Cheddar, Bacon, Wachtelei und BBQ-Sauce.",
      price: 7.5,
      category: "Häppchen",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/comidas/bocados/mini-burger.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/mini-burger.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 28,
      name: "Taco Amor",
      description: "Schweinebäckchen mit Honig, Guacamole und Beeren-Coulis.",
      price: 6,
      category: "Häppchen",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/comidas/bocados/taco-amor.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/taco-amor.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    // HÄPPCHEN (part 2)
    {
      id: 29,
      name: "Brioche",
      description: "Lachs, rote Zwiebel, Avocado, Radieschen und japanische Mayonnaise.",
      price: 6,
      category: "Häppchen",
      tags: [],
      image: "/carta/comidas/bocados/brioche.jpg",
    },
    {
      id: 30,
      name: "Amerikanischer Burger",
      description: "Rindfleisch 200g, Bacon, Cheddar, Ei und BBQ-Sauce.",
      price: 14,
      category: "Häppchen",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/comidas/bocados/burger-americana.jpeg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-americana.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 31,
      name: "Ziegenkäse-Burger",
      description: "Rindfleisch 200g, Cecina-Schinken, Ziegenkäse und Trüffel-Mayonnaise.",
      price: 14,
      category: "Häppchen",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/bocados/burger-cabrita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-cabrita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 32,
      name: "Spanischer Burger",
      description: "Rindfleisch 200g, Aïoli, Paprika, Cheddar, Schinken und Ei.",
      price: 15,
      category: "Häppchen",
<<<<<<< HEAD
      tags: ["Salzig"],
      image: "/src/assets/carta/comidas/bocados/burger-espanolita.jpg",
=======
      tags: [],
      image: "/carta/comidas/bocados/burger-espanolita.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // SPEZIALITÄTEN
    {
      id: 33,
      name: "Spanische Kartoffeln mit Spiegeleiern und Cecina",
      description: "Mit Trüffel-Mayonnaise-Sauce.",
      price: 14,
      category: "Spezialitäten",
<<<<<<< HEAD
      tags: ["Glutenfrei", "Salzig"],
      image: "/src/assets/carta/comidas/especialidades/huevos-cecina.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-cecina.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 34,
      name: "Spanische Kartoffeln mit Spiegeleiern, Garnelen und Glasaal-Imitat",
      description: "Mit Petersilien-Aïoli.",
      price: 14,
      category: "Spezialitäten",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/especialidades/huevos-langostinos.jpg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-langostinos.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 35,
      name: "Spanische Kartoffeln mit Spiegeleiern und Rote Riesengarnelen",
      description: "Mit Petersilien-Aïoli.",
      price: 16,
      category: "Spezialitäten",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/especialidades/huevos-carabineros.jpeg",
=======
      tags: [],
      image: "/carta/comidas/especialidades/huevos-carabineros.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 36,
      name: "Geröstete Nudeln mit Garnelen",
      description: "Mit Aïoli im eigenen Saft.",
      price: 12,
      category: "Spezialitäten",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-langostinos.jpg",
    },
    {
      id: 37,
      name: "Geröstete Nudeln mit Carabineros",
      description: "Mit Aïoli im eigenen Saft.",
      price: 16,
      category: "Spezialitäten",
      tags: [],
      image: "/carta/comidas/especialidades/fideos-carabineros.jpeg",
    },

    // FLEISCH
    {
      id: 38,
      name: "Angus-Ochsenbäckchen in Pedro Ximénez",
      description: "Serviert mit Pommes frites oder Gemüse.",
      price: 17.5,
      category: "Fleisch",
<<<<<<< HEAD
      tags: ["Süß", "Glutenfrei"],
      image: "/src/assets/carta/comidas/carnes/carrillada-angus.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/carrillada-angus.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 39,
      name: "Presa vom Iberischen Eichelschwein",
      description: "Serviert mit Pommes frites oder Gemüse.",
      price: 15,
      category: "Fleisch",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/carnes/presa-iberica.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/presa-iberica.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 40,
      name: "Pluma vom Iberischen Schwein in Miso-Sauce mariniert",
      description: "Serviert mit Pommes frites oder Gemüse.",
      price: 16,
      category: "Fleisch",
<<<<<<< HEAD
      tags: ["Sauer", "Salzig"],
      image: "/src/assets/carta/comidas/carnes/pluma-iberica.png",
=======
      tags: [],
      image: "/carta/comidas/carnes/pluma-iberica.png",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 41,
      name: "Spanferkel",
      description: "Serviert mit Pommes frites oder Gemüse.",
      doublePrice: "Auf Bestellung",
      price: 0,
      category: "Fleisch",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/carnes/cochinillo-lechal.jpg",
=======
      tags: [],
      image: "/carta/comidas/carnes/cochinillo-lechal.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // REISGERICHTE
    {
      id: 42,
      name: "Arroz a Banda (Reisgericht mit Fischfond)",
      description: "Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 16,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/banda.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/banda.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 43,
      name: "Schwarzer Reis mit Kabeljau",
      description: "Mit Merrins-Sauce. Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 19,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/negro-bacalao.jpeg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-bacalao.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 44,
      name: "Schwarzer Reis mit Carabineros",
      description: "Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 24,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/negro-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/negro-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 45,
      name: "Meeresfrüchte-Reis mit Oktopus",
      description: "Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 22,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/marisco-pulpo.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-pulpo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 46,
      name: "Meeresfrüchte-Reis mit Carabineros",
      description: "Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 24,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/marisco-carabineros.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/marisco-carabineros.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 47,
      name: "Reisgericht mit Fleisch",
      description: "Saisonal. Mit Aïoli garniert. Mindestens 2 Personen (Preis pro Person).",
      price: 24,
      category: "Reisgerichte",
<<<<<<< HEAD
      tags: ["Glutenfrei"],
      image: "/src/assets/carta/comidas/arroces/carne.jpg",
=======
      tags: [],
      image: "/carta/comidas/arroces/carne.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // NACHSPEISEN
    {
      id: 48,
      name: "Kuchen",
      description: "Fragen Sie nach unseren aktuellen Kuchen.",
      price: 6,
      category: "Nachspeisen",
<<<<<<< HEAD
      tags: ["Süß", "Glutenfrei"],
      image: "/src/assets/carta/comidas/postres/tartas.jpg",
=======
      tags: ["Glutenfrei"],
      image: "/carta/comidas/postres/tartas.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 49,
      name: "Tiramisu",
      description: "",
      price: 6,
      category: "Nachspeisen",
<<<<<<< HEAD
      tags: ["Süß", "Glutenfrei", "Laktosefrei"],
      image: "/src/assets/carta/comidas/postres/tiramisu.jpg",
=======
      tags: ["Glutenfrei", "Laktosefrei"],
      image: "/carta/comidas/postres/tiramisu.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },


    /// GETRÄNKE ///
    
    // BIERE
    {
      id: 50,
      name: "Águila Dorada",
      description: "Kleines Bier (30cl) oder großes Bier (56cl).",
      doublePrice: "2.30€ / 3.30€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-dorada.jpg",
    },
    {
      id: 51,
      name: "La Rubia 18/70",
      description: "Kleines Bier (30cl) oder großes Bier (56cl).",
      doublePrice: "2.60€ / 3.60€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/cervezas/la-rubia.jpg",
    },
    {
      id: 52,
      name: "Águila ungefiltert",
      description: "",
      price: 3,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/cervezas/aguila-sin-filtrar.jpg",
    },
    {
      id: 53,
      name: "Alcázar",
      description: "",
      price: 3,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/cervezas/la-alcazar.jpg",
    },
    {
      id: 54,
      name: "Amstel",
      description: "",
      price: 3,
      category: "Getränke",
      tags: ["Alkoholfrei"],
      image: "/carta/bebidas/cervezas/amstel-0.jpg",
    },
    {
      id: 55,
      name: "Amstel Tostada",
      description: "",
      price: 3.3,
      category: "Getränke",
      tags: ["Alkoholfrei"],
      image: "/carta/bebidas/cervezas/amstel-tostada-0.jpg",
    },
    {
      id: 56,
      name: "Quinto Estrella Galicia",
      description: "",
      price: 2,
      category: "Getränke",
      tags: ["Glutenfrei"],
      image: "/carta/bebidas/cervezas/estrella-sin-gluten.png",
    },

    // WERMUT
    {
      id: 57,
      name: "Traditioneller roter Wermut",
      description: "Der lebenslange Klassiker.",
      price: 4,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/bebidas/vermuts/rojo.jpg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/rojo.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 58,
      name: "Fruchtiger Orangen-Wermut",
      description: "Erfrischend und mit intensivem Fruchtgeschmack.",
      price: 4.5,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß", "Sauer"],
      image: "/src/assets/carta/bebidas/vermuts/naranja.jpeg",
=======
      tags: [],
      image: "/carta/bebidas/vermuts/naranja.jpeg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // ROSÉ
    {
      id: 59,
      name: "Frissé Rosé Frizzante",
      description: "Himbeere & Grapefruit. Glas oder Flasche.",
      doublePrice: "3.20€ / 12.00€",
      price: 0,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß", "Sauer"],
      image: "/src/assets/carta/bebidas/rosado/frisse-rose.jpg",
=======
      tags: [],
      image: "/carta/bebidas/rosado/frisse-rose.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },

    // WEISSWEINE
    {
      id: 60,
      name: "Barbadillo VI Cool",
      description: "Frizzante. Glas oder Flasche.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/bebidas/blancos/barbadillo-vi.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/barbadillo-vi.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 61,
      name: "Embrumas Rueda 100% Verdejo",
      description: "Glas oder Flasche.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-verdejo.png",
    },
    {
      id: 62,
      name: "Embrumas Rueda Semidulce Afrutado",
      description: "Glas oder Flasche.",
      doublePrice: "3.80€ / 16.00€",
      price: 0,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/bebidas/blancos/embrumas-semidulce.jpg",
=======
      tags: [],
      image: "/carta/bebidas/blancos/embrumas-semidulce.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 63,
      name: "Diez Siglos",
      description: "Sauvignon Blanc 2024. Glas oder Flasche.",
      doublePrice: "3.60€ / 15.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/blancos/diez-siglos.png",
    },

    // ROTWEINE
    /* Ribera */
    {
      id: 64,
      name: "Finca Engalia",
      description: "Roble Tempranillo 2023. Glas oder Flasche.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/finca-engalia.jpg",
    },
    {
      id: 65,
      name: "Tarino",
      description: "Roble Tempranillo 2023. Glas oder Flasche.",
      doublePrice: "3.60€ / 16.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/tarino.png",
    },
    {
      id: 66,
      name: "Carramimbre Roble",
      description: "Ribera del Duero 2023. Glas oder Flasche.",
      doublePrice: "4.00€ / 20.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-roble.png",
    },
    {
      id: 67,
      name: "Carramimbre Crianza",
      description: "Ribera del Duero 2021. Flasche.",
      price: 25,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/ribera/carramimbre-crianza.png",
    },
    /* Rioja */
    {
      id: 68,
      name: "Azabache",
      description: "Crianza 2021. Glas oder Flasche.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/azabache.jpg",
    },
    {
      id: 69,
      name: "Carlos Serres",
      description: "Crianza 2021. Glas oder Flasche.",
      doublePrice: "3.80€ / 18.00€",
      price: 0,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/carlos-serres.png",
    },
    {
      id: 70,
      name: "Campillo",
      description: "Crianza 2022. Flasche.",
      price: 22,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/tintos/rioja/campillo.webp",
    },

    // ERFRISCHUNGSGETRÄNKE
    {
      id: 71,
      name: "Wasser",
      description: "",
      price: 2,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/agua.jpg",
    },
    {
      id: 72,
      name: "Sprudelwasser",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/agua-gas.png",
    },
    {
      id: 73,
      name: "Coca Cola",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola.jpeg",
    },
    {
      id: 74,
      name: "Coca Cola Zero",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero.jpg",
    },
    {
      id: 75,
      name: "Coca Cola Zero Zero",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/coca-cola-zero-zero.jpg",
    },
    {
      id: 76,
      name: "Fanta Orange",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-naranja.jpg",
    },
    {
      id: 77,
      name: "Fanta Zitrone",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/fanta-limon.jpeg",
    },
    {
      id: 78,
      name: "Sprite",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/sprite.webp",
    },
    {
      id: 79,
      name: "Tinto de Verano",
      description: "",
      price: 3.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-verano.jpg",
    },
    {
      id: 80,
      name: "Tinto Racing",
      description: "",
      price: 4.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/tinto-racing.jpg",
    },
    {
      id: 81,
      name: "Royal Bliss",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/royal-bliss.png",
    },
    {
      id: 82,
      name: "Fuze Tea Zitrone",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-limon.png",
    },
    {
      id: 83,
      name: "Fuze Tea Maracuja",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/fuze-tea-maracuya.jpg",
    },
    {
      id: 84,
      name: "Aquarius Zitrone",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-limon.webp",
    },
    {
      id: 85,
      name: "Aquarius Orange",
      description: "",
      price: 2.5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/refrescos/aquarius-naranja.png",
    },

    // GETRÄNKE (ALKOHOLISCH)
    {
      id: 86,
      name: "Larios",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/larios.jpg",
    },
    {
      id: 87,
      name: "Tanqueray",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/tanqueray.jpg",
    },
    {
      id: 88,
      name: "Beefeater",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/beefeater.jpg",
    },
    {
      id: 89,
      name: "Seagram's",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/seagrams.png",
    },
    {
      id: 90,
      name: "Martin Miller's",
      description: "",
      price: 10,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/martin-millers.jpg",
    },
    {
      id: 91,
      name: "Legendario",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/legendario.jpg",
    },
    {
      id: 92,
      name: "Barceló",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/barcelo.jpg",
    },
    {
      id: 93,
      name: "Brugal",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/brugal.jpg",
    },
    {
      id: 94,
      name: "Red Label",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/red-label.jpg",
    },
    {
      id: 95,
      name: "Black Label",
      description: "",
      price: 8,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/black-label.png",
    },
    {
      id: 96,
      name: "Ballantines",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/ballantines.jpg",
    },
    {
      id: 97,
      name: "Macallan 12",
      description: "",
      price: 10,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/macallan.jpg",
    },
    {
      id: 98,
      name: "Vodka Absolut",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/vodka-absolut.jpg",
    },
    {
      id: 99,
      name: "Baileys",
      description: "",
      price: 4,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/bebidas/bebidas/baileys.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/baileys.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 100,
      name: "Disaronno",
      description: "",
      price: 4,
      category: "Getränke",
<<<<<<< HEAD
      tags: ["Süß"],
      image: "/src/assets/carta/bebidas/bebidas/disaronno.jpg",
=======
      tags: [],
      image: "/carta/bebidas/bebidas/disaronno.jpg",
>>>>>>> 90f89945373b0249b98fc0e049aa000d117d7daf
    },
    {
      id: 101,
      name: "Ein Glas Likör",
      description: "",
      price: 4,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/copa-licor.jpg",
    },
    {
      id: 102,
      name: "Jägermeister",
      description: "",
      price: 5,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/jagermeister.jpg",
    },
    {
      id: 103,
      name: "Fernet Branca",
      description: "",
      price: 6,
      category: "Getränke",
      tags: [],
      image: "/carta/bebidas/bebidas/fernet.jpg",
    }
  ],

}