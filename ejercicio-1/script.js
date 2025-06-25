const num1Input     = document.getElementById('num1');
const num2Input     = document.getElementById('num2');
const operacionSel  = document.getElementById('operacion');
const btnCalcular   = document.getElementById('btnCalcular');
const resultadoSpan = document.getElementById('resultado');

// Deshabilita el botón si se elige división
operacionSel.addEventListener('change', () => {
  btnCalcular.disabled = (operacionSel.value === 'division');
});

// Calcula al clic en “Calcular”
btnCalcular.addEventListener('click', () => {
  const a = parseFloat(num1Input.value);
  const b = parseFloat(num2Input.value);
  let res;
  switch (operacionSel.value) {
    case 'suma':           res = a + b; break;
    case 'resta':          res = a - b; break;
    case 'multiplicacion': res = a * b; break;
    default:               res = 'Operación no válida';
  }
  resultadoSpan.textContent = res;
});

// Estado inicial al cargar
window.addEventListener('DOMContentLoaded', () => {
  operacionSel.dispatchEvent(new Event('change'));
});
