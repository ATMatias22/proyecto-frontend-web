import "./perfil.css";
import { Link, useNavigate } from "react-router-dom";
import RUTA from "../../../routes";
import axios from "axios";
import { useEffect, useState } from "react";

interface User{
  id:number,
  name:string,
  lastName:string,
  country:string,
  datesBirth:string,
  email:string,
}

export const Perfil = () => {
  const navigate = useNavigate();

  const [perfil,setPerfil] = useState<User>();

  const getData = () => {
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

      const URL: string = "http://localhost:8080/sensor/api/users/email/"+email;

      axios.get(URL,config).then((res) => {
        setPerfil(res.data)
      });
    } else {
      navigate(RUTA.LOGIN);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h3 className="title">
        <strong>Perfil</strong>
      </h3>

      <div className="row align-items-center mx-0">
        <div className="col">
          <div>
            <h6 className="perfilDato">Apellido:</h6>
            <h6 className="perfilDato2">{perfil?.lastName}</h6>
          </div>

          <div>
            <h6 className="perfilDato">Email:</h6>
            <h6 className="perfilDato2">{perfil?.email}</h6>
          </div>
        </div>

        <div className="col">
          <div>
            <h6 className="perfilDato">Fecha de nacimiento:</h6>
            <h6 className="perfilDato2">{perfil?.datesBirth}</h6>
          </div>

          <div>
            <h6 className="perfilDato">Nacionalidad:</h6>
            <h6 className="perfilDato2">{perfil?.country}</h6>
          </div>
        </div>
      </div>

      <Link
        className="btn btn-primary comprasRealizadas"
        to={RUTA.COMPRAS_REALIZADAS}
      >
        Ver compras realizadas
      </Link>
    </div>
  );
};
