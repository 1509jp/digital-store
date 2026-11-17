import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');
    alert('Cadastro demonstrativo! Nenhuma conta foi criada.');
  }

  return (
    <main className="register-page">
      <div className="register-container">
        <h1>Criar Conta</h1>

        <p className="register-intro">
          Já possui uma conta? <Link to="/login">Entre aqui.</Link>
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <section className="register-section">
            <h2>Informações Pessoais</h2>

            <label htmlFor="register-name">Nome Completo *</label>
            <input
              id="register-name"
              name="name"
              type="text"
              placeholder="Insira seu nome"
              autoComplete="name"
              required
            />

            <label htmlFor="register-cpf">CPF *</label>
            <input
              id="register-cpf"
              name="cpf"
              type="text"
              placeholder="Insira seu CPF"
              required
            />

            <label htmlFor="register-email">E-mail *</label>
            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="Insira seu e-mail"
              autoComplete="email"
              required
            />

            <label htmlFor="register-phone">Celular *</label>
            <input
              id="register-phone"
              name="phone"
              type="tel"
              placeholder="Insira seu celular"
              autoComplete="tel"
              required
            />

            <label htmlFor="register-password">Senha *</label>
            <input
              id="register-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Crie uma senha"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <label className="register-checkbox">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
              />
              Mostrar senha
            </label>

            <label htmlFor="register-confirm-password">
              Confirmar Senha *
            </label>
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirme sua senha"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <label className="register-checkbox">
              <input
                type="checkbox"
                checked={showConfirmPassword}
                onChange={(event) =>
                  setShowConfirmPassword(event.target.checked)
                }
              />
              Mostrar confirmação
            </label>

            {error && <p className="register-error" role="alert">{error}</p>}
          </section>

          <section className="register-section">
            <h2>Informações de Entrega</h2>

            <label htmlFor="register-address">Endereço *</label>
            <input
              id="register-address"
              name="address"
              type="text"
              placeholder="Insira seu endereço"
              required
            />

            <label htmlFor="register-neighborhood">Bairro *</label>
            <input
              id="register-neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Insira seu bairro"
              required
            />

            <label htmlFor="register-city">Cidade *</label>
            <input
              id="register-city"
              name="city"
              type="text"
              placeholder="Insira sua cidade"
              required
            />

            <label htmlFor="register-zip">CEP *</label>
            <input
              id="register-zip"
              name="zip"
              type="text"
              placeholder="Insira seu CEP"
              required
            />

            <label htmlFor="register-complement">Complemento</label>
            <input
              id="register-complement"
              name="complement"
              type="text"
              placeholder="Insira um complemento (opcional)"
            />
          </section>

          <button className="register-submit" type="submit">
            Criar Conta
          </button>

          <p className="register-notice">
            Esta página é demonstrativa. Nenhum dado será enviado
            ou armazenado em um servidor.
          </p>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
