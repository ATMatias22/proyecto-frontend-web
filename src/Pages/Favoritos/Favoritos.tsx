import "./favoritos.css";
import sensor from "../../Images/sensor.jpg";

export const Favoritos = () => {
  return (
    <div className="Favoritos">
      <h3 className="text-center mb-5 title">
        <strong>Lista de productos</strong>
      </h3>

      <div className="row margen">
        <table className="table">
          <thead>
            <tr className="inicioTabla">
              <th scope="col">Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tablaContenido">
              <th scope="row">
                {" "}
                <img src={sensor} alt="sensor" className="historialImagen" />
              </th>
              <td>
                <p className="datosTabla">SENSOR 1</p>
              </td>
              <td>
                <p className="datosTabla datosTabla2">$500</p>
              </td>
              <td>
                <button className="btn btn-primary botonEliminar">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr className="tablaContenido">
              <th scope="row">
                {" "}
                <img
                  src={sensor}
                  alt="sensor"
                  className="historialImagen"
                />{" "}
              </th>
              <td>
                <p className="datosTabla">SENSOR 2</p>
              </td>
              <td>
                <p className="datosTabla datosTabla2">$500</p>
              </td>
              <td>
                <button className="btn btn-primary botonEliminar">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

