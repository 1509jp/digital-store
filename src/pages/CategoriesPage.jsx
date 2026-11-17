import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './CategoriesPage.css';

function CategoriesPage() {
  const categories = [
    {
      name: 'Tênis',
      category: 'Tênis',
      description: 'Encontre o tênis ideal para seu estilo.',
      image: products.find((product) => product.category === 'Tênis')?.image
    },
    {
      name: 'Camisetas',
      category: 'Camiseta',
      description: 'Confira nossas camisetas esportivas.',
      image: products.find((product) => product.category === 'Camiseta')?.image
    },
    {
      name: 'Acessórios',
      category: 'Acessórios',
      description: 'Complete seu visual com nossos acessórios.',
      image: products.find((product) => product.category === 'Acessórios')?.image
    }
  ];

  return (
    <main className="categories-page">
      <div className="categories-container">
        <h1>Nossas Categorias</h1>

        <p className="categories-intro">
          Escolha uma categoria e encontre seus produtos favoritos.
        </p>

        <div className="categories-grid">
          {categories.map((item) => (
            <Link
              key={item.category}
              to={`/products?category=${encodeURIComponent(item.category)}`}
              className="category-card"
            >
              <div className="category-image">
                {item.image && (
                  <img src={item.image} alt={item.name} />
                )}
              </div>

              <div className="category-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>Ver produtos →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CategoriesPage;
