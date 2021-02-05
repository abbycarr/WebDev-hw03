import { useState } from 'react';
import { uniq, match, test_guess, make_secret_numb } from './game';
import './App.css';

// The format of a seprate screen and the passing of the reset function in through 
// the GameLost and GameWon functions were formats taken from class
function GameLost(r) {
  let { reset } = r;
  return (
    <div className="App">
      <h1>You Lost!</h1>
      <h3>Try again?</h3>
      <p>
        <button class="tertiary" onClick={reset}>
          New Game
        </button>
      </p>
    </div>
  );
}

function GameWon(r) {
  let { reset } = r;
  return (
    <div className="App">
      <h1>You Won!</h1>
      <h3>Play again?</h3>
      <p>
        <button class="tertiary" onClick={reset}>
          New Game
        </button>
      </p>
    </div>
  );
}

function App() {

  // the text useState item is from lecture
  const [text, setText] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [results, setResults] = useState([]);
  const [numb, setNumb] = useState(make_secret_numb());

  let turns = 8 - guesses.length;

  // the following 3 lines of code are from lecture
  function updateText(ev) {
    let vv = ev.target.value;
    let cc = vv[vv.length - 1];
    if (!isNaN(cc) || vv === "") {
      setText(vv);
    }
  }

  // the following 4 lines of code are from lecture
  function guess() {
    if (test_guess(text)) {
      let ng = uniq(guesses.concat(text));
      setGuesses(ng);
      let res = match(numb, text);
      setResults([...results, res]);
      setText("");
    }
  }

  // this function was also in lecture code
  function keyPress(ev) {
    if (ev.key === "Enter") {
      guess();
    }
  }

  function newGame() {
    setText("");
    setGuesses([]);
    setResults([]);
    setNumb(make_secret_numb());
  }

  if (turns <= 0) {
    return <GameLost reset={newGame} />;
  }

  if (results[results.length - 1] == "4B0C") {
    return <GameWon reset={(newGame)} />;
  }
  // the input box below is from lecture 
  return (
    <div className="App">
      <h1>Bulls and Cows</h1>
      <p>Guess the four-digit number. More information on the game&nbsp;
       <a href="https://en.wikipedia.org/wiki/Bulls_and_Cows" rel="noreferrer" target="_blank">here</a>
        .
      </p>
      <p>
        Input:&nbsp;
        <input type="text"
          value={text}
          onChange={updateText}
          onKeyPress={keyPress} />
        <button class="inverse" onClick={guess}>OK</button>
      </p>
      <table max-height="800px">
        <thead>
          <tr>
            <th></th>
            <th>Guess</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Count">1</td>
            <td data-label="Guess">{guesses[0]}</td>
            <td data-label="Result">{results[0]}</td>
          </tr>
          <tr>
            <td data-label="Count">2</td>
            <td data-label="Guess">{guesses[1]}</td>
            <td data-label="Result">{results[1]}</td>
          </tr>
          <tr>
            <td data-label="Count">3</td>
            <td data-label="Guess">{guesses[2]}</td>
            <td data-label="Result">{results[2]}</td>
          </tr>
          <tr>
            <td data-label="Count">4</td>
            <td data-label="Guess">{guesses[3]}</td>
            <td data-label="Result">{results[3]}</td>
          </tr>
          <tr>
            <td data-label="Count">5</td>
            <td data-label="Guess">{guesses[4]}</td>
            <td data-label="Result">{results[4]}</td>
          </tr>
          <tr>
            <td data-label="Count">6</td>
            <td data-label="Guess">{guesses[5]}</td>
            <td data-label="Result">{results[5]}</td>
          </tr>
          <tr>
            <td data-label="Count">7</td>
            <td data-label="Guess">{guesses[6]}</td>
            <td data-label="Result">{results[6]}</td>
          </tr>
          <tr>
            <td data-label="Count">8</td>
            <td data-label="Guess">{guesses[7]}</td>
            <td data-label="Result">{results[7]}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
