
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const {
    id,
    name,
    image,
    category,
    price,
    priceDiscount
  } = product;

  const hasDiscount =
    priceDiscount != null && priceDiscount < price;

  function formatPrice(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} />

        {hasDiscount && (
          <span className="product-card-badge">
            {Math.round((1 - priceDiscount / price) * 100)}% OFF
          </span>
        )}
      </div>

      <div className="product-card-info">
        <span className="product-card-category">
          {category}
        </span>

        <h3 className="product-card-name">{name}</h3>

        <div className="product-card-prices">
          {hasDiscount ? (
            <>
              <span className="product-card-old-price">
                {formatPrice(price)}
              </span>

              <strong className="product-card-current-price">
                {formatPrice(priceDiscount)}
              </strong>
            </>
          ) : (
            <strong className="product-card-current-price">
              {formatPrice(price)}
            </strong>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
