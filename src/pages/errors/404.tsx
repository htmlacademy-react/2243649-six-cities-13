import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function Page404() : JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <section className="page__main container" style={{textAlign: 'center'}}>
        <h1 className="offer__name">Error 404. Page not found</h1>
        <Link className="button" to={'/'}
          style={{
            marginTop: '20px',
            padding: '10px 25px',
            backgroundColor: '#4481c3',
            color: '#ffffff'
          }}
        >Back to the main page
        </Link>
      </section>
    </div>
  );
}

export default Page404;
