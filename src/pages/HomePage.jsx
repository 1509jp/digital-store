
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';
import { products } from '../data/products';

import heroImage from '../assets/home-slide-7.jpeg';
import collection1 from '../assets/collection-1.png';
import collection2 from '../assets/collection-2.png';
import collection3 from '../assets/collection-3.png';
import specialOfferImage from '../assets/product-thumb-1.jpeg';

import {
  Shirt,
  Footprints,
  Headphones,
  ShoppingBag,
} from 'lucide-react';


const slides = [
  {
    image: heroImage,
    alt: 'Tênis Nike em destaque',
    highlight: 'Melhores ofertas personalizadas',
    title: 'Queima de estoque Nike 🔥',
    description:
      'Aproveite nossas ofertas especiais e encontre produtos com estilo, conforto e qualidade.',
  },
  {
    image: collection1,
    alt: 'Camiseta da coleção Supreme',
    highlight: 'Novidades em destaque',
    title: 'Novo drop Supreme',
    description:
      'Conheça as novidades da coleção Supreme e renove seu estilo.',
  },
  {
    image: collection2,
    alt: 'Tênis da coleção Adidas',
    highlight: 'Coleções especiais',
    title: 'Coleção Adidas',
    description:
      'Explore a coleção Adidas e encontre produtos para acompanhar sua rotina.',
  },
  {
    image: collection3,
    alt: 'Fones de ouvido Beats',
    highlight: 'Tecnologia e estilo',
    title: 'Novo Beats Bass',
    description:
      'Descubra os fones Beats e aproveite suas músicas com muito estilo.',
  },
];


const featuredCategories = [
  {
    name: 'Camisetas',
    icon: Shirt,
    category: 'Camiseta',
  },
  {
    name: 'Calças',
    icon: ShoppingBag,
    category: 'Calças',
  },
  {
    name: 'Bonés',
    icon: ShoppingBag,
    category: 'Acessórios',
  },
  {
    name: 'Headphones',
    icon: Headphones,
    category: 'Acessórios',
  },
  {
    name: 'Tênis',
    icon: Footprints,
    category: 'Tênis',
  },
];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const bannerImages = slides.map((slide) => ({
    src: slide.image,
    alt: slide.alt,
  }));

  return (
    <main className="home-page">

      {/* Banner principal */}
      <section className="home-banner">
        <div className="home-banner-content">
          <p className="home-banner-highlight">
            {currentSlide.highlight}
          </p>

          <h1>{currentSlide.title}</h1>

          <p className="home-banner-description">
            {currentSlide.description}
          </p>

          <Link
            to="/products"
            className="home-banner-button"
          >
            Ver ofertas
          </Link>
        </div>

        <div className="home-banner-image">
          <Gallery
            images={bannerImages}
            mode="banner"
            showThumbnails={false}
            onSlideChange={setActiveSlide}
          />
        </div>
      </section>

      {/* Coleções em destaque */}
      <Section title="Coleções em destaque">
        
<div className="featured-collections">
  <div className="collection-card">
    <img src={collection1} alt="Coleção Supreme" />

    <span className="collection-discount">30% OFF</span>

    <Link to="/products" className="collection-button">
      Comprar
    </Link>
  </div>

  <div className="collection-card">
    <img src={collection2} alt="Coleção Adidas" />

    <span className="collection-discount">30% OFF</span>

    <Link
      to="/products?filter=Adidas"
      className="collection-button"
    >
      Comprar
    </Link>
  </div>

  <div className="collection-card">
    <img src={collection3} alt="Coleção Beats" />

    <span className="collection-discount">30% OFF</span>

    <Link
      to="/products?filter=Beats"
      className="collection-button"
    >
      Comprar
    </Link>
  </div>
</div>

      </Section>

      
{/* Categorias em destaque */}
<section className="home-categories">
  <h2>Categorias em destaque</h2>

  <div className="home-categories-list">
    {featuredCategories.map((category) => {
      const Icon = category.icon;

      return (
        <Link
          key={category.name}
          to={`/products?category=${encodeURIComponent(category.category)}`}
          className="home-category-item"
        >
          <span className="home-category-icon">
            <Icon size={30} strokeWidth={1.5} />
          </span>

          <span className="home-category-name">
            {category.name}
          </span>
        </Link>
      );
    })}
  </div>
</section>

      {/* Produtos em alta */}
      <Section
        title="Produtos em alta"
        link={{
          text: 'Ver todos',
          href: '/products',
        }}
      >
        <ProductListing products={products} />
      </Section>
      
{/* Oferta especial */}
<section className="home-special-offer">
  <div className="home-special-offer-container">
    <div className="home-special-offer-image">
      <img
        src={specialOfferImage}
        alt="Tênis Nike preto, branco e vermelho"
      />
    </div>

    <div className="home-special-offer-content">
      <p className="home-special-offer-highlight">
        Oferta especial
      </p>

      <h2>Coleção Nike em destaque</h2>

      <p>
        Descubra produtos Nike selecionados e aproveite
        nossas ofertas especiais com estilo e conforto.
      </p>

      <Link
        to="/products?filter=Nike"
        className="home-special-offer-button"
      >
        Ver ofertas
      </Link>
    </div>
  </div>
</section>


    </main>
  );
}

export default HomePage;
