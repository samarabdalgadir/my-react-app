import React from 'react';
import { useUserPreferences } from './UserPreferencesContext';

const TextDisplay: React.FC = () => {
  const { fontSize } = useUserPreferences();

  const fontSizeMap = {
    small: '14px',
    medium: '18px',
    large: '24px',
  };

  return (
    <p style={{ fontSize: fontSizeMap[fontSize] }}>
      This text follows your font size preference: {fontSize}
    </p>
  );
};

export default TextDisplay;
