import React, { createContext, useContext, useState, ReactNode } from 'react';

type Preferences = {
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
};

const defaultPreferences: Preferences = {
  fontSize: 'medium',
  setFontSize: () => {},
};

const UserPreferencesContext = createContext<Preferences>(defaultPreferences);

export const useUserPreferences = () => useContext(UserPreferencesContext);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  return (
    <UserPreferencesContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
