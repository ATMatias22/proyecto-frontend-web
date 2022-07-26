import { IProducto } from "../interface";
import sensor from "../../../Images/sensor.jpg";
import { Link } from "react-router-dom";
import RUTA from "../../../routes";

interface Props{
  product:IProducto
}

export const Sensor = ({ product }: Props) => {
  return (
    <Link to={RUTA.SENSOR.RUTA_SIN_PARAMETROS+"/"+product.id}>
      <div className="product">
        <img src={sensor} alt={product.descripcion} />
        <h3>{product.name}</h3>
        <div className="price">{product.price}</div>
      </div>
    </Link>
  );
};
