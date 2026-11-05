
import { useState } from 'react';
import {
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import Logo from './Logo';
import './Header.css';


function Header() {
  const [search, setSearch] = useState('');
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
  <a href="#" className="header-register">
    Cadastre-se
  </a>

  <button type="button" className="header-login">
    Entrar
  </button>

  
<span className="header-cart" aria-label="Carrinho de compras">
  <ShoppingCart size={28} strokeWidth={2} />
</span>

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
  to="/products?category=all"
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
