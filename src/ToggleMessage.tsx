import React, { useState } from 'react';

const ToggleMessage: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => setVisible(prev => !prev);

  return (
    <div>
      <button onClick={toggle}>
        Toggle Message
      </button>
      <p>{visible ? 'Message is visible' : 'Message is hidden'}</p>
    </div>
  );
};

export default ToggleMessage;
