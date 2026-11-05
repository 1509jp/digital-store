
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  const informations = [
    {
      title: 'Informação',
      links: [
        { text: 'Sobre a Digital Store', href: '/' },
        { text: 'Segurança', href: '/' },
        { text: 'Wishlist', href: '/' },
        { text: 'Blog', href: '/' },
        { text: 'Trabalhe conosco', href: '/' }
      ]
    },
    {
      title: 'Categorias',
      links: [
        { text: 'Camisetas', href: '/products' },
        { text: 'Calças', href: '/products' },
        { text: 'Bonés', href: '/products' },
        { text: 'Tênis', href: '/products' },
        { text: 'Acessórios', href: '/products' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <Logo variant="footer" /> 

          <p>
            A Digital Store oferece produtos para quem busca
            estilo, conforto e qualidade.
          </p>

          

<div className="footer-social">
  <img
    src="/images/facebook.svg"
    alt="Facebook"
    title="Facebook"
  />

  <img
    src="/images/instagram.svg"
    alt="Instagram"
    title="Instagram"
  />

  <img
    src="/images/twitter.svg"
    alt="Twitter"
    title="Twitter"
  />
</div>


        </div>

        {informations.map((group) => (
          <div className="footer-column" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.links.map((link) => (
                <li key={link.text}>
                  <Link to={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-contact">
          <h3>Contato</h3>

          <p>
            Fortaleza, Ceará, Brasil
          </p>

          <p>
            Entre em contato pelos nossos
            canais oficiais.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Digital Store. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
