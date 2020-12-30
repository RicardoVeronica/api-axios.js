import * as UI from "../selectors";

function mostrarVacantes(vacantes) {
  // Muestra las vacantes
  while (UI.resultado.firstChild) {
    UI.resultado.removeChild(UI.resultado.firstChild);
  }

  if (vacantes.length > 0) {
    UI.resultado.classList.add("grid");
    vacantes.forEach((element) => {
      const { company, title, type, url } = element;

      UI.resultado.innerHTML += `
       <div class="shadow bg-white p-6 rounded">
         <h2 class="text-2xl font-light mb-4">${title}</h2>
         <p class="font-bold uppercase">
           Compañia:  <span class="font-light normal-case">${company} </span>
         </p>
         <p class="font-bold uppercase">
           Tipo de Contrato:   <span class="font-light normal-case">${type} </span>
         </p>
         <a class=
              "
                bg-teal-500
                max-w-lg
                mx-auto
                mt-3
                rounded
                p-2
                block
                uppercase
                font-xl
                font-bold
                text-white
                text-center
              "
              href="${url}"
         >
           Ver Vacante
         </a>
        </div>
      `;
    });
  } else {
    const noResultado = document.createElement("p");
    noResultado.classList.add(
      "text-center",
      "mt-10",
      "text-gray-600",
      "w-full"
    );
    UI.resultado.classList.remove("grid");
    noResultado.textContent = "No hay vacantes para ese puesto";

    UI.resultado.appendChild(noResultado);
  }
}

export default mostrarVacantes;
