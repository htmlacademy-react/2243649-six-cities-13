import {Link} from 'react-router-dom';

function ErrorNotFound() : JSX.Element {
  return (
    <section>
      <h1>error 404. Page not found</h1>
      <Link to="/">Back to main page</Link>
    </section>
  );
}

export default ErrorNotFound;
