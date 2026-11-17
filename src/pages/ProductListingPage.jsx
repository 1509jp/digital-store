
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import { products } from '../data/products';

import './ProductListingPage.css';

const brandOptions = [
  { label: 'Nike', value: 'Nike' },
  { label: 'Adidas', value: 'Adidas' },
  { label: 'Puma', value: 'Puma' },
  { label: 'Converse', value: 'Converse' },
  { label: 'New Balance', value: 'New Balance' },
  { label: 'Fila', value: 'Fila' }
];

const categoryOptions = [
  { label: 'Tênis', value: 'Tênis' },
  { label: 'Camiseta', value: 'Camiseta' },
  { label: 'Acessórios', value: 'Acessórios' }
];

function ProductListingPage() {
  const [searchParams] = useSearchParams();

  const [sortOrder, setSortOrder] = useState('relevance');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const searchTerm = searchParams.get('filter') || '';
  
  const categoryParam = searchParams.get('category') || '';

  const matchesUrlCategory = (product) => {
    return (
      !categoryParam ||
      categoryParam === 'all' ||
      product.category.toLowerCase() === categoryParam.toLowerCase()
    );
  };


  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return (
  matchesSearch &&
  matchesBrand &&
  matchesCategory &&
  matchesUrlCategory(product)
);
  });

  const sortedProducts = [...filteredProducts];

  if (sortOrder === 'lowest') {
    sortedProducts.sort(
      (a, b) => a.priceDiscount - b.priceDiscount
    );
  }

  if (sortOrder === 'highest') {
    sortedProducts.sort(
      (a, b) => b.priceDiscount - a.priceDiscount
    );
  }

  function clearFilters() {
    setSelectedBrands([]);
    setSelectedCategories([]);
  }

  return (
    <main className="products-page">
      <div className="products-page-container">
        <h1>Nossos Produtos</h1>

        <p>
          Confira os produtos disponíveis na Digital Store.
        </p>

        <div className="products-toolbar">
          <p>
  <strong>{sortedProducts.length}</strong>{' '}
  {sortedProducts.length === 1
    ? 'produto encontrado'
    : 'produtos encontrados'}
</p>

          <label htmlFor="sort-products">
            Ordenar por:{' '}
            <select
              id="sort-products"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="relevance">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </label>
        </div>

        <div className="products-content">
  <button
    type="button"
    className="mobile-filter-button"
    onClick={() => setShowFilters(!showFilters)}
    aria-expanded={showFilters}
    aria-controls="categorias"
  >
    {showFilters ? '✕ Fechar filtros' : '☰ Filtrar produtos'}
  </button>

  <aside
    id="categorias"
    className={`products-sidebar ${showFilters ? 'filters-open' : ''}`}
  >
            <div className="products-sidebar-header">
              <h2>Filtrar por</h2>

              <button
                type="button"
                onClick={clearFilters}
                className="clear-filters"
              >
                Limpar
              </button>
            </div>

            <FilterGroup
              title="Marca"
              options={brandOptions}
              selectedValues={selectedBrands}
              onChange={setSelectedBrands}
            />

            <FilterGroup
              title="Categoria"
              options={categoryOptions}
              selectedValues={selectedCategories}
              onChange={setSelectedCategories}
            />
          </aside>

          <section className="products-results">
            {sortedProducts.length > 0 ? (
              <ProductListing products={sortedProducts} />
            ) : (
              <p>
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductListingPage;
