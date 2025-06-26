const { useState } = React;

function App() {
  const [izquierdaActiva, setIzquierdaActiva] = useState(true);

  return (
    <div class="botones">
      <button
        onClick={() => setIzquierdaActiva(false)}
        disabled={!izquierdaActiva}
      >
        izquierdo
      </button>
      <button
        onClick={() => setIzquierdaActiva(true)}
        disabled={izquierdaActiva}
      >
        derecho
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

