import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sensor from "../../../../Images/sensor.jpg";
import "./informacionSensor.css";
import axios from "axios";
import { SeccionComentario } from "./SeccionComentario/SeccionComentario";
import { IComentario } from "./SeccionComentario/interface";
import { useForm } from "react-hook-form";

interface Producto {
  id?: number;
  name?: string;
  description?: string;
  idUser?: number;
  price?: number;
}

interface IComprarPrducto {
  email: string;
  productId: number;
  quantity: number;
}

interface InputsFormularioLogin {
  cantidad: number;
}

export const InformacionSensor = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState<Producto>({});
  const [comentarios, setComentarios] = useState<IComentario[]>([]);
  const [error, setError] = useState<string>("");
  const [exitoso, setExitoso] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsFormularioLogin>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data, event) => {
    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);
      const email = values.email;

      const productoComprado: IComprarPrducto = {
        email: email,
        productId: Number(idProducto),
        quantity: data.cantidad,
      };

      const URL: string = "http://localhost:8080/sensor/api/sales";

      axios
        .post(URL, productoComprado, config)
        .then((res) => {
          setError("");
          setExitoso("Se realizo la compra correctamente");
        })
        .catch((err) => {
          setExitoso("");
          setError(err.response.data.error.message);
        });
    } else {
      setError("Necesitas estar logueado para poder comprar");
    }
  });

  const getProducto = (): void => {
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
                  <img className="imagenDesc" src={sensor} alt="imagen del sensor" />
                </div>
              </div>
              <div className="col-md-7 single-top-left simpleCart_shelfItem descripcion">
                <h1>{producto.name}</h1>
                <h6 className="item_price">${producto.price}</h6>
                <p>{producto.description}</p>

                {/*   <div className="text-center text-md-left botonEnvio botonFavoritos ml-0">
                    <button className="btn btn-primary btn-block mb-4 ">
                    <i className="fa fa-star iconoEstrella"></i>Agregar a
                    favoritos
                  </button>
                </div> */}

                <form className="ml-0" onSubmit={onSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label">Cantidad</label>

                    <input
                      type="text"
                      className={`${"form-control"} ${
                        errors.cantidad && "cuadroError"
                      }`}
                      {...register("cantidad", {
                        required: {
                          value: true,
                          message: "Ingrese cantidad",
                        },
                      })}
                    />

                    {errors.cantidad && (
                      <span className={errors.cantidad && "mensajeError"}>
                        {errors.cantidad.message}
                      </span>
                    )}
                  </div>
                  <div className="text-center text-md-left botonEnvio ml-0">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4 "
                    >
                      Comprar
                    </button>
                  </div>
                </form>
                {exitoso && (
                  <div className="alert alert-success alerta ml-0">
                    {exitoso}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger alerta ml-0">
                    {error}
                  </div>
                )}
              </div>
            </div>
            <hr />
            <SeccionComentario
              comentarios={comentarios}
              idProducto={Number(idProducto)}
              getComentarios={getComentarios}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
