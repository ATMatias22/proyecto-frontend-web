import sensor from "../../../../Images/sensor.jpg";
import "./styles.css"

interface IComprasRealizadas {
  id?: number;
  productName?: number;
  quantity?: number;
  price?:number;
}

interface Props {
  compra: IComprasRealizadas;
}


export const ItemCompraRealizada = ({compra}: Props) => {
  return (
    <tr className="tablaContenido">
      <th scope="row">
        {" "}
        <img src={sensor} alt="sensor" className="historialImagen" />
      </th>
      <td>
        <p className="datosTabla">{compra.productName}</p>
      </td>
      <td>
        <p className="datosTabla">{compra.quantity}</p>
      </td>
      <td>
        <p className="datosTabla datosTabla2">{compra.price}</p>
      </td>
    </tr>
  );
}
