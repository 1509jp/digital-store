
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';
import Information from './Information';

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
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img src="/images/facebook.svg" alt="Facebook" />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img src="/images/instagram.svg" alt="Instagram" />
  </a>

  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
  >
    <img src="/images/twitter.svg" alt="Twitter" />
  </a>
</div>



        </div>

        
{informations.map((group) => (
  <Information
    key={group.title}
    title={group.title}
    informations={group.links.map((item) => ({
      text: item.text,
      link: item.href
    }))}
  />
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
