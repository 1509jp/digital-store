
import { Link } from 'react-router-dom';

function Logo({ variant = 'header' }) {
  const logoSrc =
    variant === 'footer'
      ? '/images/logo-footer.svg'
      : '/images/logo-header.svg';

  return (
    <Link
      to="/"
      className={`header-logo logo-${variant}`}
      aria-label="Digital Store - Página inicial"
    >
      <img
        src={logoSrc}
        alt="Digital Store"
        className="logo-image"
      />
    </Link>
  );
}

export default Logo;
