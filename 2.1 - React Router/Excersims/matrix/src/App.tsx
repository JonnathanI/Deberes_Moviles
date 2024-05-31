import React, { useState } from 'react';

export class Matrix {
  public rows: number[][];
  public columns: number[][];

  constructor(input: string) {
    this.rows = input.split('\n').map(row => row.split(' ').map(Number));
    this.columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }
}

const MatrixComponent: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [matrix, setMatrix] = useState<Matrix | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    const newMatrix = new Matrix(input);
    setMatrix(newMatrix);
  };

  return (
    <div>
      <h1>Matrix Input</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter matrix rows separated by newline and values by space"
        rows={5}
        cols={30}
      />
      <button onClick={handleSubmit}>Generate Matrix</button>

      {matrix && (
        <div>
          <h2>Rows</h2>
          <pre>{JSON.stringify(matrix.rows, null, 2)}</pre>

          <h2>Columns</h2>
          <pre>{JSON.stringify(matrix.columns, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MatrixComponent;
