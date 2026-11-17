import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './OrderConfirmationPage.css';

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

function OrderConfirmationPage() {
  const { lastOrder } = useCart();
  const cartItems = lastOrder?.items ?? [];
  const cartTotal = lastOrder?.total ?? 0;

  return (
    <main className="order-confirmation-page">
      <div className="order-confirmation-container">
        <div className="order-confirmation-header">
          <CheckCircle size={64} color="#2ecc71" />

          <h1>Pedido realizado com sucesso!</h1>

          <p>
            Obrigado por comprar na Digital Store!
            Esta é uma confirmação demonstrativa.
          </p>
        </div>

        <section className="order-confirmation-details">
          <h2>Resumo do Pedido</h2>

          {cartItems.length === 0 ? (
            <p>Nenhum pedido disponível para exibição.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  className="order-confirmation-item"
                  key={`${item.id}-${item.size}-${item.color}`}
                >
                  <img src={item.image} alt={item.name} />

                  <div>
                    <strong>{item.name}</strong>
                    <p>Quantidade: {item.quantity}</p>
                    {item.size && <p>Tamanho: {item.size}</p>}
                  </div>

                  <strong>
                    {formatPrice(
                      (item.priceDiscount ?? item.price) * item.quantity
                    )}
                  </strong>
                </div>
              ))}

              <div className="order-confirmation-total">
                <span>Total do Pedido</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>
            </>
          )}
        </section>

        <div className="order-confirmation-actions">
          <Link to="/products">
            Voltar às compras
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmationPage;
