import React, { useState } from 'react';

export function hey(message: string): string {
  if (message.trim().length >= 1) {
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message) && message.endsWith('?')) {
      return "Calm down, I know what I'm doing!";
    } else if (message.trim().endsWith('?')) {
      return 'Sure.';
    } else if (!/[a-z]/.test(message) && /[A-Z]/.test(message)) {
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
  } else {
    return 'Fine. Be that way!';
  }
}

const HeyComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    setResponse(hey(message));
  };

  return (
    <div>
      <h1>Hey Bot</h1>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message"
      />
      <button onClick={handleSubmit}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default HeyComponent;
