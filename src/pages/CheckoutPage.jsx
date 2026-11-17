import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

function CheckoutPage() {
  const { cartItems, cartTotal, completeOrder } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal - cartTotal;

  function handleSubmit(event) {
    event.preventDefault();
    if (completeOrder()) {
      navigate('/order-confirmation');
    }
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <h1>Finalizar Compra</h1>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit} id="checkout-form">
            <section className="checkout-section">
              <h2>Informações Pessoais</h2>

              <label>Nome Completo *
                <input type="text" name="name" placeholder="Insira seu nome" required />
              </label>

              <label>CPF *
                <input type="text" name="cpf" placeholder="Insira seu CPF" required />
              </label>

              <label>E-mail *
                <input type="email" name="email" placeholder="Insira seu email" required />
              </label>

              <label>Celular *
                <input type="tel" name="phone" placeholder="Insira seu celular" required />
              </label>
            </section>

            <section className="checkout-section">
              <h2>Informações de Entrega</h2>

              <label>Endereço *
                <input type="text" name="address" placeholder="Insira seu endereço" required />
              </label>

              <label>Bairro *
                <input type="text" name="neighborhood" placeholder="Insira seu bairro" required />
              </label>

              <label>Cidade *
                <input type="text" name="city" placeholder="Insira sua cidade" required />
              </label>

              <label>CEP *
                <input type="text" name="zip" placeholder="Insira seu CEP" required />
              </label>

              <label>Complemento
                <input type="text" name="complement" placeholder="Insira complemento" />
              </label>
            </section>

            <section className="checkout-section">
              <h2>Informações de Pagamento</h2>

              <div className="checkout-payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                  />
                  Cartão de Crédito
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="boleto"
                    checked={paymentMethod === 'boleto'}
                    onChange={() => setPaymentMethod('boleto')}
                  />
                  Boleto Bancário
                </label>
              </div>

              {paymentMethod === 'credit' && (
                <>
                  <label>Nome do Cartão *
                    <input type="text" name="cardName" required />
                  </label>

                  <label>Número do Cartão *
                    <input type="text" name="cardNumber" required />
                  </label>

                  <label>Data de Validade *
                    <input type="text" name="expiry" placeholder="MM/AA" required />
                  </label>

                  <label>CVV *
                    <input type="text" name="cvv" required />
                  </label>
                </>
              )}
            </section>
          </form>

          <aside className="checkout-summary">
            <h2>RESUMO</h2>

            <h3>Itens do pedido</h3>

            {cartItems.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  className="checkout-summary-item"
                  key={`${item.id}-${item.size}-${item.color}`}
                >
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <p>Quantidade: {item.quantity}</p>
                  </div>
                </div>
              ))
            )}

            <div className="checkout-summary-line">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="checkout-summary-line">
              <span>Desconto</span>
              <span>{formatPrice(discount)}</span>
            </div>

            <div className="checkout-summary-line">
              <strong>Total</strong>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={cartItems.length === 0}
            >
              Realizar Pagamento
            </button>

            <Link to="/cart">Voltar ao carrinho</Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
