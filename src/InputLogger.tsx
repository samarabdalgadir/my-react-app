import React, { useState } from 'react';

const InputLogger: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
};

export default InputLogger;
