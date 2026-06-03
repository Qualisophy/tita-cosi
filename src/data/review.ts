export interface Review {
  id: number;
  name: string;
  rating: number;
  textKey: string; // Refactorizado de 'text' a 'textKey'
  tag: "celiac" | "vegetarian" | "general";
  images?: string[];
}

export const customerReviews: Review[] = [
  {
    id: 1,
    name: "Laura A.",
    rating: 5,
    textKey: "home.resenas.r1",
    tag: "celiac",
    images: [
      "/carta/comidas/croquetas/jamon.jpeg",
      "/carta/comidas/empezamos/ensalada-tita-cosi.jpg",
    ],
  },
  {
    id: 2,
    name: "Sofía G.",
    rating: 5,
    textKey: "home.resenas.r2",
    tag: "celiac",
    images: [
      "/carta/comidas/empezamos/ensaladilla-rusa.jpg",
      "/carta/comidas/tostas/presa.jpeg",
    ],
  },
  {
    id: 3,
    name: "Cristina G.",
    rating: 5,
    textKey: "home.resenas.r3",
    tag: "vegetarian",
    images: ["/carta/comidas/tostas/vegetariana.jpeg"],
  },
  {
    id: 4,
    name: "José L.",
    rating: 5,
    textKey: "home.resenas.r4",
    tag: "general",
    images: [
      "/carta/comidas/croquetas/choco.jpg",
      "/carta/comidas/especialidades/fideos-carabineros.jpeg",
    ],
  },
  {
    id: 5,
    name: "Lucila M.",
    rating: 5,
    textKey: "home.resenas.r5",
    tag: "general",
    images: ["/carta/comidas/croquetas/manzana.jpg"],
  },
];
