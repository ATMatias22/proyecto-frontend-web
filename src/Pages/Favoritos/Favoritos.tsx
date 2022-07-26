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
            </tr>
          </thead>
          <tbody>
            <tr className="tablaContenido">
              <th scope="row">
                {" "}
                <img src={sensor} alt="sensor" className="historialImagen" />
              </th>
              <td>SENSOR 1</td>
              <td>$500</td>
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
              <td>SENSOR 2</td>
              <td>$500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

