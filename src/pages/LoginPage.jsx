import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert('A autenticação será conectada posteriormente.');
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <section className="login-form-section">
          <h1>Acesse sua conta</h1>

          <p>
            Novo cliente?{' '}
            <Link to="/register">Cadastre-se aqui.</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="login-email">Login *</label>
            <input
              id="login-email"
              type="email"
              placeholder="Insira seu login ou email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />

            <label htmlFor="login-password">Senha *</label>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Insira sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />

            <label className="login-show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(event) =>
                  setShowPassword(event.target.checked)
                }
              />
              Mostrar senha
            </label>

            <button type="submit" className="login-submit">
              Acessar Conta
            </button>
          </form>

          <p className="login-notice">
            Esta é uma interface demonstrativa.
            A autenticação ainda não está ativa.
          </p>
        </section>

        <aside className="login-visual">
          <h2>Bem-vindo à Digital Store!</h2>
          <p>
            Encontre seus produtos favoritos em um só lugar.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default LoginPage;
