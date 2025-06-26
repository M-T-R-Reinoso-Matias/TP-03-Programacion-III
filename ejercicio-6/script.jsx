const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100;

    if (pesoNum > 0 && alturaNum > 0) {
      const resultado = pesoNum / (alturaNum * alturaNum);
      setIMC(resultado.toFixed(2));
    } else {
      setIMC(null);
    }
  };

  const obtenerNivel = (valor) => {
    if (valor < 18.5) return { mensaje: "Nivel Bajo", clase: "amarillo" };
    if (valor < 25) return { mensaje: "Nivel Normal", clase: "verde" };
    if (valor < 30) return { mensaje: "Sobrepeso", clase: "naranja" };
    return { mensaje: "Obesidad", clase: "rojo" };
  };

  const nivel = imc ? obtenerNivel(parseFloat(imc)) : null;

  return (
    <div className="contenedor">
      <h1>Calculadora de IMC</h1>

      <label htmlFor="peso">Peso (kg):</label>
      <input
        id="peso"
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Ej: 70"
      />

      <label htmlFor="altura">Altura (cm):</label>
      <input
        id="altura"
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ej: 170"
      />

      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className={`mensaje ${nivel.clase}`}>
          <p>Tu IMC es <strong>{imc}</strong></p>
          <p>{nivel.mensaje}</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
