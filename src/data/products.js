
import productImage1 from '../assets/produc-image-1.jpeg';
import productImage2 from '../assets/produc-image-2.jpeg';
import productImage3 from '../assets/produc-image-3.jpeg';
import productImage4 from '../assets/produc-image-4.jpeg';
import productImage5 from '../assets/produc-image-5.jpeg';
import camisetaNike from '../assets/camiseta-nike.jpg';
import boneAdidas from '../assets/bone-adidas.jpg';
import tenisFila from '../assets/tenis-fila.jpg';

const placeholder = '/images/produto-placeholder.svg';

export const products = [
  {
    id: 1,
    name: 'Tênis Nike Revolution',
    category: 'Tênis',
    brand: 'Nike',
    image: productImage1,
    price: 299.90,
    priceDiscount: 209.90
  },
  {
    id: 2,
    name: 'Tênis Adidas Runfalcon',
    category: 'Tênis',
    brand: 'Adidas',
    image: productImage2,
    price: 349.90,
    priceDiscount: 279.90
  },
  {
    id: 3,
    name: 'Tênis Puma Smash',
    category: 'Tênis',
    brand: 'Puma',
    image: productImage3,
    price: 329.90,
    priceDiscount: 249.90
  },
  {
    id: 4,
    name: 'Tênis Converse All Star',
    category: 'Tênis',
    brand: 'Converse',
    image: productImage4,
    price: 259.90,
    priceDiscount: 199.90
  },
  {
    id: 5,
    name: 'Camiseta Nike Sportswear',
    category: 'Camiseta',
    brand: 'Nike',
    image: camisetaNike,
    price: 129.90,
    priceDiscount: 99.90
  },
  {
    id: 6,
    name: 'Boné Adidas Essentials',
    category: 'Acessórios',
    brand: 'Adidas',
    image: boneAdidas,
    price: 119.90,
    priceDiscount: 89.90
  },
  {
    id: 7,
    name: 'Tênis New Balance 574',
    category: 'Tênis',
    brand: 'New Balance',
    image: productImage5,
    price: 599.90,
    priceDiscount: 449.90
  },
  {
    id: 8,
    name: 'Tênis Fila Racer',
    category: 'Tênis',
    brand: 'Fila',
    image: tenisFila,
    price: 399.90,
    priceDiscount: 299.90
  }
];
