import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function ErrorNotFound() : JSX.Element {
  return (
    <section>
      <Logo />
      <h1 className="offer__name">Error 404. Page not found</h1>
      <Link className="footer__logo-link" to="/">Back to the main page</Link>
    </section>
  );
}

export default ErrorNotFound;
