import React, { useState, useEffect } from 'react';

const TitleUpdater: React.FC = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title || 'Default Title';
  }, [title]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to change title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default TitleUpdater;
