// src/data/products.js
// Image files should be placed in src/assets and imported below.

import zeva from "../assets/zeva.svg";
import oyiBitters from "../assets/oyi-bitters.svg";
import cola from "../assets/cola.svg";
import ginger from "../assets/ginger.svg";
import orange from "../assets/orange.svg";
import energy from "../assets/energy-drink.svg";
import lime from "../assets/lime.svg";

const products = [
  {
    id: 1,
    name: "Zeva",
    image: zeva,
    description: "A refreshing, fruity beverage crafted for pure enjoyment with a smooth taste.",
    category: "Soft Drink",
  },
  {
    id: 2,
    name: "Oyi Bitters",
    image: oyiBitters,
    description: "Premium herbal bitters made from natural ingredients, delivering bold energy and vitality.",
    category: "Bitters",
  },
  {
    id: 3,
    name: "Food Basket Cola",
    image: cola,
    description: "Classic cola taste with a rich flavor profile, brewed for maximum refreshment.",
    category: "Soft Drink",
  },
  {
    id: 4,
    name: "Food Basket Ginger",
    image: ginger,
    description: "A bold and spicy ginger drink with a crisp, invigorating kick.",
    category: "Soft Drink",
  },
  {
    id: 5,
    name: "Food Basket Orange",
    image: orange,
    description: "Sweet and tangy orange flavor bursting with natural freshness.",
    category: "Soft Drink",
  },
  {
    id: 6,
    name: "Food Basket Energy Drink",
    image: energy,
    description: "A strong and revitalizing energy drink designed to boost stamina and focus.",
    category: "Energy Drink",
  },
  {
    id: 7,
    name: "Food Basket Lime",
    image: lime,
    description: "Cool, crisp lime taste with a refreshing citrus punch.",
    category: "Soft Drink",
  },
];

export default products;
