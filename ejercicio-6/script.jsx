const { useState } = React;

function IMCCalculadora() {
  const [peso, setPeso]     = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc]       = useState(null);
  const [clase, setClase]   = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (!p || !a) {
      setImc(null);
      setClase('');
      return;
    }
    const valor = p / (a * a);
    const redondeado = Math.round(valor * 10) / 10;
    setImc(redondeado);

    if (valor < 18.5) {
      setClase('bajo');
    } else if (valor < 25) {
      setClase('normal');
    } else if (valor < 30) {
      setClase('sobrepeso');
    } else {
      setClase('obesidad');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <label>
          Peso (kg):
          <input
            type="number"
            step="0.1"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            required
          />
        </label>
        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calcular</button>
      </form>

      {imc !== null && (
        <div className={`mensaje ${clase}`}>
          Tu IMC es {imc} —{' '}
          {clase === 'bajo' && 'Nivel bajo'}
          {clase === 'normal' && 'Nivel normal'}
          {clase === 'sobrepeso' && 'Nivel de sobrepeso'}
          {clase === 'obesidad' && 'Nivel de obesidad'}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IMCCalculadora />);

