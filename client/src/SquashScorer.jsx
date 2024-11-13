import React, { useState } from 'react';


const SquashScorer = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [outputText, setOutputText] = useState('');
  const [outputScore, setOutputScore] = useState('');
  const [endScore, setEndScore] = useState('');
  const [startPlayer, setStartPlayer] = useState('Default');
  const [currPoint, setCurrPoint] = useState(0);
  const [prevPoint, setPrevPoint] = useState(0);

  const handleConfirm = () => {
    if (score1 === 0 && score2 === 0) {
      if (startPlayer === 'Player1') {
        setOutputText('Player 1 ball in hand, serve when ready.');
      } else if (startPlayer === 'Player2') {
        setOutputText('Player 2 ball in hand, serve when ready.');
      } else {
        setOutputText('Error: [Incomplete setup]');
      }
    }
  };

  const increaseScore = (player) => {
    if (startPlayer !== 'Default' && endScore && !isNaN(Number(endScore)) && Number(endScore) > 0) {
      if (player === 'Player1' && score1 + 1 <= Number(endScore) && score2 + 1 <= Number(endScore)) {
        setScore1(score1 + 1);
        setCurrPoint(1);
      } else if (player === 'Player2' && score2 + 1 <= Number(endScore) && score1 + 1 <= Number(endScore)) {
        setScore2(score2 + 1);
        setCurrPoint(2);
      }
      updateOutput();
    }
  };

  const updateOutput = () => {
    if (Math.abs(score1 - score2) >= 2 && (score1 === Number(endScore) || score2 === Number(endScore))) {
      setOutputText((score1 > score2 ? 'Player 1' : 'Player 2') + ' Wins!');
    } else if (currPoint !== prevPoint) {
      setOutputText(`Handout ${currPoint === 1 ? 'Player 1' : 'Player 2'}`);
    }
    setPrevPoint(currPoint);
    setOutputScore(`${score1} / ${score2}`);
  };

  return (
    <div className="Body">
      <h1>Squash Scorer</h1>
      <div className="Precursor">
        <div className="P1"><p>The players will play to: </p></div>
        <input
          type="text"
          id="Input1"
          placeholder="-Score-"
          value={endScore}
          onChange={(e) => setEndScore(e.target.value)}
        />
        <div className="P2"><p>The starting player is: </p></div>
        <select
          name="Input2"
          id="Input2"
          value={startPlayer}
          onChange={(e) => setStartPlayer(e.target.value)}
          style={{ width: '100px' }}
        >
          <option value="Default">-Select-</option>
          <option value="Player1">Player 1</option>
          <option value="Player2">Player 2</option>
        </select>
      </div>
      <div className="ConfirmButton">
        <button onClick={handleConfirm}>Confirm</button>
      </div>

      <div className="Main">
        <input type="text" id="Player1" placeholder="Player 1" />
        <input type="text" id="Player2" placeholder="Player 2" />
        <div className="Score1">{score1}</div>
        <div className="Score2">{score2}</div>
        <div className="Player1Button">
          <button onClick={() => increaseScore('Player1')}>Increment Score</button>
        </div>
        <div className="Player2Button">
          <button onClick={() => increaseScore('Player2')}>Increment Score</button>
        </div>
      </div>
      <div className="TextScore">{outputScore}</div>
      <div className="TextWords">{outputText}</div>
    </div>
  );
};

export default SquashScorer;