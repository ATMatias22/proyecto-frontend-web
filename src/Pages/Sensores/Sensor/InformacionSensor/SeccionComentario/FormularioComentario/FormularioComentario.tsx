import axios from "axios";
import { useState } from "react";
import { IFormularioComentario } from "../interface";

interface Props {
  idProducto: number;
  getComentarios: () => void;
}

export const FormularioComentario = ({ idProducto, getComentarios }: Props) => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [comentario, setComentario] = useState<string>();

  const clearForm = () => {
    setComentario("");
  };

  const agregarComentario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const URL = "http://localhost:8080/sensor/api/comments";

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

      const data: IFormularioComentario = {
        comment: comentario,
        email,
        idProduct: idProducto,
      };

      axios
        .post(URL, data, config)
        .then((response) => {
          console.log(response);
          setSuccess("Se creo el comentario correctamente");
          clearForm();
          setError("");
          getComentarios();
        })
        .catch((error) => {
          success && setSuccess("");
          console.log(error.response.data);
          console.log(error.response.data.error.message);
          setError(error.response.data.error.message);
        });
    } else {
      setError("Debe iniciar sesion para comentar");
    }
  };

  return (
    <div className="container">
      <h4>¡Deja tu comentario!</h4>
      {!!error && <div className=" alert alert-danger">{error}</div>}
      {!!success && <div className=" alert alert-success">{success}</div>}

      <form id="formulario" className="form02" onSubmit={agregarComentario}>
        <p>
          {" "}
          Comentario <br />
          <textarea
            required
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setComentario(e.currentTarget.value)
            }
            value={comentario}
          ></textarea>
        </p>

        <button type="submit" className="btn btn-primary boton-formulario">
          Enviar comentario
        </button>
      </form>
    </div>
  );
};
