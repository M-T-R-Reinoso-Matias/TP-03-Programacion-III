const num1Input     = document.getElementById('num1');
const num2Input     = document.getElementById('num2');
const operacionSel  = document.getElementById('operacion');
const btnCalcular   = document.getElementById('btnCalcular');
const resultadoDiv  = document.getElementById('resultado');

function actualizarEstadoBoton() {
  const operacion = operacionSel.value;
  const segundo = parseFloat(num2Input.value);
  btnCalcular.disabled = (operacion === 'division' && segundo === 0);
}

operacionSel.addEventListener('change', actualizarEstadoBoton);
num2Input.addEventListener('input', actualizarEstadoBoton);

btnCalcular.addEventListener('click', () => {
  const a = parseFloat(num1Input.value);
  const b = parseFloat(num2Input.value);
  let res;

  switch (operacionSel.value) {
    case 'suma': res = a + b; break;
    case 'resta': res = a - b; break;
    case 'multiplicacion': res = a * b; break;
    case 'division': res = a / b; break;
    default: res = 'Operación inválida';
  }

  resultadoDiv.textContent = `Resultado: ${res}`;
});

window.addEventListener('DOMContentLoaded', actualizarEstadoBoton);
