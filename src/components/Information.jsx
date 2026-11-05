
import { Link } from 'react-router-dom';

function Information({ title, informations = [] }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      <ul>
        {informations.map((item) => (
          <li key={`${item.text}-${item.link}`}>
            <Link to={item.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Information;
