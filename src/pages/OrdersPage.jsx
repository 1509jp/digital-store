import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function OrdersPage() {
  const { lastOrder } = useCart();

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '50px 20px 80px',
    minHeight: '60vh'
  };

  const cardStyle = {
    background: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    marginTop: '25px'
  };

  const formatPrice = (value) =>
    Number(value || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <main style={{ background: '#f9f8fe' }}>
      <div style={containerStyle}>
        <h1>Meus Pedidos</h1>

        {!lastOrder ? (
          <div style={cardStyle}>
            <h2>Nenhum pedido encontrado</h2>
            <p>
              Você ainda não realizou uma compra nesta sessão.
            </p>
            <p>
              Os pedidos são demonstrativos e não ficam salvos
              após atualizar a página.
            </p>
            <Link to="/products">Ver produtos</Link>
          </div>
        ) : (
          <div style={cardStyle}>
            <h2>Último pedido</h2>

            <p>
              <strong>Data:</strong>{' '}
              {new Date(lastOrder.createdAt).toLocaleString('pt-BR')}
            </p>

            <p>
              <strong>Status:</strong> Pedido demonstrativo
            </p>

            <hr />

            {lastOrder.items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: '1px solid #eee'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain'
                  }}
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>Quantidade: {item.quantity}</p>
                  <p>
                    {formatPrice(
                      (item.priceDiscount ?? item.price) * item.quantity
                    )}
                  </p>
                </div>
              </div>
            ))}

            <h2 style={{ marginTop: '25px' }}>
              Total: {formatPrice(lastOrder.total)}
            </h2>

            <Link to="/products">Continuar comprando</Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default OrdersPage;
