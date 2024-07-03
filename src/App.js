import "./App.css";

// Move types
const FORCED = 0;
const BLUNDER = 1;
const MISS = 2;
const MISTAKE = 3;
const INACCURACY = 4;
const BOOK = 5;
const GOOD = 6;
const EXCELLENT = 7;
const BEST = 8;
const GREAT = 9;
const BRILLIANT = 10;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Estas son las opciones disponibles:</p>
        <p className="opciones"></p>

        <form action="/submit-form" method="post">
          <label>Ingrese movimiento jugado</label>
          <textarea
            id="message"
            className="App-textarea"
            name="message"
            rows="4"
            cols="50"
          ></textarea>
          <input type="submit" value="Enviar"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
