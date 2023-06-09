import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import logo from "../../Images/logo1.png";
import RUTA from "../../routes";

export const Header = () => {
  const { isLogged } = useContext(DataContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    window.localStorage.removeItem("token");
    navigate(RUTA.INICIO);
  };

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
              {/*    <Link to="/favoritos" className="nav-item nav-link">
                Favoritos
              </Link> */}

              {isLogged() && (
                <Link to="/perfil" className="nav-item nav-link">
                  Perfil
                </Link>
              )}
            </ul>
          </div>

          {!isLogged() && (
            <div>
              <ul className="navbar-nav">
                <Link to="/login" className="nav-item nav-link">
                  Iniciar Sesion
                </Link>
              </ul>
            </div>
          )}

          {isLogged() && (
            <div>
              <ul className="navbar-nav">
                <Link
                  to="/login"
                  className="nav-item nav-link"
                  onClick={cerrarSesion}
                >
                  Cerrar Sesion
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
