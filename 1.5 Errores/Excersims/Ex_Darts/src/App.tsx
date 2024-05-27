import React, { useState } from 'react';

export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);
  if (distance > 10) {
    return 0;
  } else if (distance > 5) {
    return 1;
  } else if (distance > 1) {
    return 5;
  } else {
    return 10;
  }
}

const ScoreComponent: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    setResult(score(x, y));
  };

  return (
    <div>
      <h1>Calculate Score</h1>
      <div>
        <label>
          X:
          <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Y:
          <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Score: {result}</div>}
    </div>
  );
};

export default ScoreComponent;
