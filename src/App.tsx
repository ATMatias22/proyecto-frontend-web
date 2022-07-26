import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sensores } from "./Pages/Sensores/Sensores";
import { InformacionSensor } from "./Pages/Sensores/Sensor/InformacionSensor/InformacionSensor";
import { Inicio } from "./Pages/Inicio/Inicio";
import { Favoritos } from "./Pages/Favoritos/Favoritos";
import { Login } from "./Pages/Login/Login";
import { Registro } from "./Pages/Registro/Registro";
import { TemplateHeaderFooter } from "./Components/TemplateHeaderFooter/TemplateHeaderFooter";
import RUTA from "./routes";
import { Contacto } from "./Pages/Contacto/Contacto";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={RUTA.INICIO} element={<TemplateHeaderFooter />}>
            <Route path={RUTA.CONTACTO} element={<Contacto />} />
            <Route path={RUTA.FAVORITOS} element={<Favoritos />} />
            <Route path={RUTA.SENSORES} element={<Sensores />} />
            <Route
              path={RUTA.SENSOR.RUTA_CON_PARAMETROS}
              element={<InformacionSensor />}
            />
            <Route path={RUTA.LOGIN} element={<Login />} />
            <Route path={RUTA.REGISTRO} element={<Registro />} />
            <Route path={RUTA.INICIO} element={<Inicio />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;