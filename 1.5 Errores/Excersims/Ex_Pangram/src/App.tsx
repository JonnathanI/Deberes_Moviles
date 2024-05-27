import React, { useState } from 'react';

export function isPangram(sentence: string): boolean {
  sentence = sentence.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every(c => sentence.includes(c));
}

const PangramChecker: React.FC = () => {
  const [sentence, setSentence] = useState<string>('');
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheck = () => {
    setResult(isPangram(sentence));
  };

  return (
    <div>
      <h1>Pangram Checker</h1>
      <div>
        <label>
          Sentence:
          <input type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} />
        </label>
      </div>
      <button onClick={handleCheck}>Check</button>
      {result !== null && <div>{result ? 'The sentence is a pangram.' : 'The sentence is not a pangram.'}</div>}
    </div>
  );
};

export default PangramChecker;
