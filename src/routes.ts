interface Sensor {
  RUTA_SIN_PARAMETROS: string;
  RUTA_CON_PARAMETROS: string;
}

const INICIO: string = "/";
const CONTACTO: string = "/contacto";
const FAVORITOS: string = "/favoritos";
const SENSORES: string = "/sensores";

const SENSOR:Sensor = {
  RUTA_SIN_PARAMETROS: "/sensor",
  RUTA_CON_PARAMETROS: "/sensor/:idProducto",
};

const LOGIN: string = "/login";
const REGISTRO: string = "/registro";

const RUTA = {
  INICIO,
  CONTACTO,
  FAVORITOS,
  SENSORES,
  SENSOR,
  LOGIN,
  REGISTRO,
};

export default RUTA;
