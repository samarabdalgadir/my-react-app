import React from 'react';
import { useUserPreferences } from './UserPreferencesContext';

const FontSizeControls: React.FC = () => {
  const { setFontSize } = useUserPreferences();

  return (
    <div>
      <button onClick={() => setFontSize('small')}>Small</button>
      <button onClick={() => setFontSize('medium')}>Medium</button>
      <button onClick={() => setFontSize('large')}>Large</button>
    </div>
  );
};

export default FontSizeControls;
