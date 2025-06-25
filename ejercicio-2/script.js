const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const listaEl     = document.getElementById('lista');
const filtroInput = document.getElementById('filtro');
const btnFiltrar  = document.getElementById('btnFiltrar');
const errorEl     = document.getElementById('error');

function renderizar(lista) {
  listaEl.innerHTML = '';
  lista.forEach(palabra => {
    const li = document.createElement('li');
    li.textContent = palabra;
    listaEl.appendChild(li);
  });
}

btnFiltrar.addEventListener('click', () => {
  const texto = filtroInput.value.trim();
  if (!texto) {
    errorEl.style.display = 'block';
    return;
  }
  errorEl.style.display = 'none';
  const filtradas = palabras.filter(p =>
    p.toLowerCase().includes(texto.toLowerCase())
  );
  renderizar(filtradas);
});

window.addEventListener('DOMContentLoaded', () => {
  renderizar(palabras);
});
