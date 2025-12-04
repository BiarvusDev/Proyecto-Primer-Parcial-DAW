//Camibar de Tema: Oscuro o Claro

const btnTema = document.querySelector(".btnTema");
const iconTema = btnTema.querySelector("img");

const STORAGE_THEME = "gamepedia_tema";

const temaGuardado = localStorage.getItem(STORAGE_THEME);

if (temaGuardado === "claro") {
  document.body.classList.add("tema-claro");
}

function actualizarIconoTema() {
  const modoClaro = document.body.classList.contains("tema-claro");

  iconTema.src = modoClaro ? "/Iconos/claro.svg" : "/Iconos/oscuro.svg";
}

actualizarIconoTema();

btnTema.addEventListener("click", () => {
  const modoClaroActivo = document.body.classList.toggle("tema-claro");

  localStorage.setItem(STORAGE_THEME, modoClaroActivo ? "claro" : "oscuro");

  actualizarIconoTema();
});
