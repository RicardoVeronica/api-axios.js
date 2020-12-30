import mostrarVacantes from "./mostrarVacantes";

function consultarAPI(busqueda) {
  // Consume API de GithubJobs
  const githubUrl = `
    https://jobs.github.com/positions.json?search=${busqueda}
  `;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    githubUrl
  )}`;

  axios
    .get(url)
    .then((response) => mostrarVacantes(JSON.parse(response.data.contents)));
}

export default consultarAPI;
