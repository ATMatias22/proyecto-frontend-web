import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sensor from "../../../../Images/sensor.jpg";
import "./informacionSensor.css";
import axios from "axios";
import { SeccionComentario } from "./SeccionComentario/SeccionComentario";
import { IComentario } from "./SeccionComentario/interface";

interface Producto {
  id?: number;
  name?: string;
  description?: string;
  idUser?: number;
  price?: number;
}


export const InformacionSensor = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState<Producto>({});
  const [comentarios, setComentarios] = useState<IComentario[]>([]);

  const getProducto = () :void => {
    axios
      .get("http://localhost:8080/sensor/api/products/" + idProducto)
      .then((res) => {
        setProducto(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.data.error.message);
      });
  };

  const getComentarios = () => {
    axios
      .get("http://localhost:8080/sensor/api/comments/product/" + idProducto)
      .then((res) => {
        setComentarios(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.data.error.message);
      });
  };

  useEffect(() => {
    getProducto();
    getComentarios();
  }, []);

  return (
    <div className="SensoresDesc">
      <div className="single">
        <div className="contaianer">
          <div className="single-main">
            <div className="row mx-0">
              <div className="col-md-5 single-top">
                <div className="flexslider">
                  <img className="imagenDesc" src={sensor} />
                </div>
              </div>
              <div className="col-md-7 single-top-left simpleCart_shelfItem descripcion">
                <h1>{producto.name}</h1>
                <h6 className="item_price">{producto.price}</h6>
                <p>{producto.description}</p>
                <div className="text-center text-md-left botonEnvio">
                  <a className="btn btn-primary btn-block mb-4">Comprar</a>
                </div>
              </div>
            </div>
            <hr />
            <SeccionComentario comentarios={comentarios} idProducto={Number(idProducto)} getComentarios={getComentarios}/>
          </div>
        </div>
      </div>
    </div>
  );
}

