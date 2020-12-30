import * as UI from "./selectors";
import validarFormulario from "./functions/validarFormulario";

function app() {
  // Inicia la aplicacion
  UI.formulario.addEventListener("click", (e) => {
    if (e.target.matches("input[type='submit']")) {
      e.preventDefault();
      validarFormulario();
    }
  });
}

export default app;
