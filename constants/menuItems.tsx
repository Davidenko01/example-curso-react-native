// Definimos el tipo para un elemento del menú
export type MenuItem = {
    id: number;
    title: string;
    description: string;
    image?: any; // Opcional, para agregar imágenes luego
  };
  
  // Lista de elementos del menú con tipado
  export const MENU_ITEMS: MenuItem[] = [
    { id: 1, title: "Espresso", description: "Strong, concentrated coffee." },
    { id: 2, title: "Americano", description: "Espresso diluted with hot water." },
    { id: 3, title: "Latte", description: "Espresso with steamed milk and foam." },
    { id: 4, title: "Cappuccino", description: "Equal parts espresso, milk, and foam." },
    { id: 5, title: "Macchiato", description: "Espresso with a dollop of foam." },
    { id: 6, title: "Mocha", description: "Latte with chocolate flavor." },
    { id: 7, title: "Flat White", description: "Espresso with velvety steamed milk." },
    { id: 8, title: "Cortado", description: "Equal parts espresso and milk." },
    { id: 9, title: "Cold Brew", description: "Cold water brewed coffee." },
    { id: 10, title: "Affogato", description: "Espresso over ice cream." },
  ];
  