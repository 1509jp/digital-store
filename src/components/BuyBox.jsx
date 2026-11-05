import './BuyBox.css';
import ProductOptions from './ProductOptions';
import { useState } from 'react';

function BuyBox({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const hasDiscount =
  product.priceDiscount != null &&
  product.priceDiscount < product.price;
  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="buy-box">
      <h1>{product.name}</h1>

      <p className="buy-box-reference">
        Ref: {String(product.id).padStart(6, '0')} |
        Marca: {product.brand}
      </p>

      <div className="buy-box-rating">
        <span>★★★★★</span>
        <span>4.7 (90 avaliações)</span>
      </div>

      <p className="buy-box-label">Preço do produto:</p>

      
<div className="buy-box-prices">
  {hasDiscount && (
    <span className="buy-box-old-price">
      {formatPrice(product.price)}
    </span>
  )}

  <strong className="buy-box-new-price">
    {formatPrice(
      hasDiscount ? product.priceDiscount : product.price
    )}
  </strong>
</div>


      <h3>Descrição do produto</h3>

      <p className="buy-box-description">
        {product.description ||
          `Conheça ${product.name}, uma excelente opção
          para quem procura estilo, conforto e qualidade.`}
      </p>

      
{product.category === 'Tênis' && (
  <ProductOptions
    title="Tamanho"
    options={['39', '40', '41', '42', '43']}
    shape="square"
    type="text"
    selectedOption={selectedSize}
    onSelect={setSelectedSize}
  />
)}

<ProductOptions
  title="Cor"
  options={['#1F1F1F', '#C92071', '#B5B6F2', '#FFFFFF']}
  shape="circle"
  type="color"
  selectedOption={selectedColor}
  onSelect={setSelectedColor}
/>


<button
  type="button"
  className="buy-box-button"
  onClick={() => {
    if (product.category === 'Tênis' && !selectedSize) {
      alert('Selecione um tamanho antes de comprar.');
      return;
    }

    if (!selectedColor) {
      alert('Selecione uma cor antes de comprar.');
      return;
    }

    const sizeText = selectedSize
      ? `\nTamanho: ${selectedSize}`
      : '';

    const colorNames = {
      '#1F1F1F': 'Preto',
      '#C92071': 'Rosa',
      '#B5B6F2': 'Lilás',
      '#FFFFFF': 'Branco'
    };

    alert(
      `${product.name} adicionado ao carrinho!` +
      sizeText +
      `\nCor: ${colorNames[selectedColor]}`
    );
  }}
>
  COMPRAR
</button>
    </div>
  );
}

export default BuyBox;
