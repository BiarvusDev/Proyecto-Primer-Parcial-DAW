//Camibar de Tema: Oscuro o Claro

const btnTema = document.querySelector(".btnTema");
const iconTema = btnTema.querySelector("img");

const STORAGE_THEME = "gamepedia_tema";

const temaGuardado = localStorage.getItem(STORAGE_THEME);

if (temaGuardado === "claro") {
  document.body.classList.add("temaClaro");
}

function actualizarIconoTema() {
  const modoClaro = document.body.classList.contains("temaClaro");

  iconTema.src = modoClaro ? "/Iconos/claro.svg" : "/Iconos/oscuro.svg";
}

actualizarIconoTema();

btnTema.addEventListener("click", () => {
  const modoClaroActivo = document.body.classList.toggle("temaClaro");

  localStorage.setItem(STORAGE_THEME, modoClaroActivo ? "claro" : "oscuro");

  actualizarIconoTema();
});
