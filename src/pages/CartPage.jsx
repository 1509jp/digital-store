import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal - cartTotal;

  return (
    <main className="cart-page">
      <div className="cart-container">
        <section className="cart-products">
          <h1>MEU CARRINHO</h1>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Seu carrinho está vazio.</p>
              <Link to="/products">Continuar comprando</Link>
            </div>
          ) : (
            <>
              <div className="cart-table-header">
                <span>PRODUTO</span>
                <span>QUANTIDADE</span>
                <span>UNITÁRIO</span>
                <span>TOTAL</span>
              </div>

              {cartItems.map((item) => {
                const unitPrice = item.priceDiscount ?? item.price;

                return (
                  <div
                    className="cart-item"
                    key={`${item.id}-${item.size}-${item.color}`}
                  >
                    <div className="cart-product-info">
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h2>{item.name}</h2>
                        {item.size && <p>Tamanho: {item.size}</p>}
                        {item.color && (
  <p>
    Cor: {{
      '#1F1F1F': 'Preto',
      '#C92071': 'Rosa',
      '#B5B6F2': 'Lilás',
      '#FFFFFF': 'Branco'
    }[item.color] ?? item.color}
  </p>
)}

                        <button
                          type="button"
                          className="cart-remove"
                          onClick={() =>
                            removeFromCart(item.id, item.size, item.color)
                          }
                        >
                          Remover item
                        </button>
                      </div>
                    </div>

                    <div className="cart-quantity">
                      <button
                        type="button"
                        aria-label="Diminuir quantidade"
                        disabled={item.quantity === 1}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label="Aumentar quantidade"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-unit-price">
                      {item.priceDiscount < item.price && (
                        <del>{formatPrice(item.price)}</del>
                      )}
                      <strong>{formatPrice(unitPrice)}</strong>
                    </div>

                    <strong className="cart-item-total">
                      {formatPrice(unitPrice * item.quantity)}
                    </strong>
                  </div>
                );
              })}
            </>
          )}
        </section>

        <aside className="cart-summary">
          <h2>RESUMO</h2>

          <div>
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div>
            <span>Desconto</span>
            <span>{formatPrice(discount)}</span>
          </div>

          <div className="cart-summary-total">
            <strong>Total</strong>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <Link
  to={cartItems.length > 0 ? "/checkout" : "/cart"}
  className="cart-checkout-button"
  aria-disabled={cartItems.length === 0}
>
  Continuar
</Link>

          <Link to="/products">Continuar comprando</Link>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;
