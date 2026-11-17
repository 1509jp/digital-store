
import { useState } from 'react';
import {
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import './Header.css';


function Header() {
  const [search, setSearch] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
const isCategoryPage =
  new URLSearchParams(location.search).has('category');

  function handleSearch(event) {
    event.preventDefault();

    const term = search.trim();

    if (term) {
      navigate(`/products?filter=${encodeURIComponent(term)}`);
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Logo />

          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            
<button type="submit" aria-label="Pesquisar produtos">
  <Search size={24} strokeWidth={2} />
</button>

          </form>
          
<div className="header-actions">
  <NavLink to="/register" className="header-register">
    Cadastre-se
  </NavLink>

  <button type="button" className="header-login" onClick={() => navigate("/login")}>
    Entrar
  </button>

  
<NavLink to="/cart" className="header-cart" aria-label="Carrinho de compras">
  <ShoppingCart size={28} strokeWidth={2} />
  {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
</NavLink>

</div>

        </div>

        
<nav className="header-nav">
  <NavLink to="/">Home</NavLink>
  
<NavLink
  to="/products"
  className={({ isActive }) =>
    isActive && !isCategoryPage ? 'active' : ''
  }
>
  Produtos
</NavLink>

<NavLink
  to="/categories"
  className={({ isActive }) =>
    isActive && isCategoryPage ? 'active' : 'category-link'
  }
>
  Categorias
</NavLink>

  <NavLink to="/orders">Meus Pedidos</NavLink>
</nav>

      </div>
    </header>
  );
}

export default Header;

