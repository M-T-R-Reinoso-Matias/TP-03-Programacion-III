const { useState, useEffect } = React;

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(null);
  const [deshabilitar, setDeshabilitar] = useState(false);

  useEffect(() => {
    const esDivision = operacion === "division";
    const divisorEsCero = parseFloat(num2) === 0;
    setDeshabilitar(esDivision && divisorEsCero);
  }, [operacion, num2]);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = null;

    switch (operacion) {
      case "suma":
        res = a + b;
        break;
      case "resta":
        res = a - b;
        break;
      case "multiplicacion":
        res = a * b;
        break;
      case "division":
        res = a / b;
        break;
      default:
        res = "Operación inválida";
    }

    setResultado(res);
  };

  return (
    <div className="contenedor">
      <h1>Calculadora React</h1>

      <label htmlFor="num1">Número 1:</label>
      <input
        id="num1"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Ingrese el primer número"
      />

      <label htmlFor="num2">Número 2:</label>
      <input
        id="num2"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Ingrese el segundo número"
      />

      <label htmlFor="operacion">Operación:</label>
      <select
        id="operacion"
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <button onClick={calcular} disabled={deshabilitar}>
        Calcular
      </button>

      {deshabilitar && (
        <div className="mensaje">⚠️ No se puede dividir por cero. ⚠️</div>
      )}

      {resultado !== null && !deshabilitar && (
        <div className="resultado">
          Resultado: <strong>{resultado}</strong>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
