
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductListing from '../components/ProductListing';
import './ProductViewPage.css';
import productThumb1 from '../assets/product-thumb-1.jpeg';
import productThumb2 from '../assets/product-thumb-2.jpeg';
import productThumb3 from '../assets/product-thumb-3.jpeg';
import productThumb4 from '../assets/product-thumb-4.jpeg';
import productThumb5 from '../assets/product-thumb-5.jpeg';

function ProductViewPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-view-page">
        <h1>Produto não encontrado</h1>
        <p>O produto solicitado não está disponível.</p>
        <Link to="/products">Voltar aos produtos</Link>
      </main>
    );
  }

  const relatedProducts = products
  .filter((item) =>
    item.id !== product.id &&
    item.category === product.category
  )
  .slice(0, 4);

// Cada produto exibe sua própria imagem.
// Evita mostrar fotos de outros produtos na galeria.

const images = [
  {
    src: product.image,
    alt: `${product.name} - imagem principal`,
  },
  {
    src: product.image,
    alt: `${product.name} - visualização ampliada`,
  },
  {
    src: product.image,
    alt: `${product.name} - visualização alternativa`,
  },
  {
    src: product.image,
    alt: `${product.name} - destaque do produto`,
  },
  {
    src: product.image,
    alt: `${product.name} - outra apresentação`,
  },
];


  return (
    <main className="product-view-page">
      <div className="product-view-container">
        <p>
          <Link to="/">Home</Link> /{' '}
          <Link to="/products">Produtos</Link> / {product.name}
        </p>

        <div className="product-view-content">
          <Gallery images={images} />

          <BuyBox product={product} />
        </div>

        {relatedProducts.length > 0 && (
  <section className="related-products">
    <div className="related-products-header">
      <h2>Produtos relacionados</h2>

      <Link to="/products">
        Ver todos →
      </Link>
    </div>

    <ProductListing products={relatedProducts} />
  </section>
)}
      </div>
    </main>
  );
}

export default ProductViewPage;
