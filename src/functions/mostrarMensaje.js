import * as UI from "../selectors";

function mostrarMensaje(mensaje) {
  // Agrega mensaje al HTML
  const alerta = document.querySelector(".alerta");

  if (!alerta) {
    const div = document.createElement("div");
    div.classList.add("bg-gray-100", "p-3", "text-center", "mt-3", "alerta");
    div.textContent = mensaje;

    UI.formulario.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2500);
  }
}

export default mostrarMensaje;
