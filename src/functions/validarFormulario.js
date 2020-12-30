import * as UI from "../selectors";
import mostrarMensaje from "./mostrarMensaje";
import consultarAPI from "./consultarAPI";

function validarFormulario() {
  // Valida el formulario
  if (UI.busqueda.value === "") {
    mostrarMensaje("Tienes que ingresar informacion para la busqueda");
    return;
  }

  consultarAPI(UI.busqueda.value);
}

export default validarFormulario;
