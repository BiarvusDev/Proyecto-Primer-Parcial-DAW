//Collapsar la Barra de Navegacion (Minimizado)

const aside = document.querySelector(".barraVertical");
const btnMin = document.querySelector(".btnMinimizar");

if (aside && btnMin) {
  const STORAGE_KEY = "gamepedia_sidebar_colapsada";

  // Cargar estado guardado
  const isColapsada = localStorage.getItem(STORAGE_KEY) === "true";

  if (isColapsada) {
    aside.classList.add("colapsada");
    btnMin.setAttribute("aria-expanded", "false");
  }

  // Click para alternar
  btnMin.addEventListener("click", () => {
    const seVaAColapsar = !aside.classList.contains("colapsada");

    aside.classList.toggle("colapsada");

    // Accesibilidad
    btnMin.setAttribute("aria-expanded", String(!seVaAColapsar));

    // Guardar preferencia
    localStorage.setItem(STORAGE_KEY, String(seVaAColapsar));
  });
}
