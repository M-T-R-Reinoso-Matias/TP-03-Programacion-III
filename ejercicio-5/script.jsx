const { useState, useEffect } = React;

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

  useEffect(() => {
    const esDivisionPorCero = operacion === 'division' && parseFloat(num2) === 0;
    setBotonDeshabilitado(esDivisionPorCero);
    if (esDivisionPorCero) setResultado(null);
  }, [operacion, num2]);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    switch (operacion) {
      case 'suma': res = a + b; break;
      case 'resta': res = a - b; break;
      case 'multiplicacion': res = a * b; break;
      case 'division': res = a / b; break;
      default: res = 'Operación inválida';
    }

    setResultado(res);
  };

  return (
    <div>
      <h1>Calculadora React</h1>

      <label>
        Número 1:
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />
      </label>

      <label>
        Número 2:
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />
      </label>

      <label>
        Operación:
        <select
          value={operacion}
          onChange={e => setOperacion(e.target.value)}
        >
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>
      </label>

      <button
        onClick={calcular}
        disabled={botonDeshabilitado}
      >
        Calcular
      </button>

      <div className="resultado">
        {resultado !== null
          ? `Resultado: ${resultado}`
          : botonDeshabilitado
            ? '⚠️ División por cero no permitida ⚠️'
            : '—'}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculadora />);
