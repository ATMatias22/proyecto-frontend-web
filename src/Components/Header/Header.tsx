import { Link } from "react-router-dom";
import logo from "../../Images/logo1.png"


export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Inicio
              </Link>
              <Link to="/sensores" className="nav-item nav-link">
                Sensores
              </Link>
              <Link to="/contacto" className="nav-item nav-link">
                Contacto
              </Link>

              <Link to="/favoritos" className="nav-item nav-link">
                Favoritos
              </Link>
            </ul>
          </div>

          <div>
            <ul className="navbar-nav">
              <Link to="/login" className="nav-item nav-link">
                Iniciar Sesion
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
