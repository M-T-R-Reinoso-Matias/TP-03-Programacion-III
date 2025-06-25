const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const listaEl = document.getElementById('lista');

function renderizarTareas(tareas) {
  listaEl.innerHTML = '';
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = `${tarea.id}. ${tarea.title}`;
    listaEl.appendChild(li);
  });
}

fetch(API_URL)
  .then(res => {
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
    return res.json();
  })
  .then(data => {
    const completadas = data.filter(item => item.completed);
    renderizarTareas(completadas);
  })
  .catch(err => {
    console.error(err);
    listaEl.innerHTML = '<li style="color:red;">No se pudo cargar las tareas.</li>';
  });

