import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;




import React from 'react';
import ProductCard from './ProductCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <ProductCard name="Wireless Headphones" price={99.99} />
    </div>
  );
}

export default App;



import React from 'react';
import ToggleMessage from './ToggleMessage';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <ToggleMessage />
    </div>
  );
}

export default App;



import React from 'react';
import TitleUpdater from './TitleUpdater';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <TitleUpdater />
    </div>
  );
}

export default App;




import React from 'react';
import InputLogger from './InputLogger';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <InputLogger />
    </div>
  );
}

export default App;






import React from 'react';
import ItemWithDetails from './ItemWithDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <ItemWithDetails />
    </div>
  );
}

export default App;


import React from 'react';
import UserList from './UserList';

function App() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Samar' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;




import React from 'react';
import FeedbackForm from './FeedbackForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <FeedbackForm />
    </div>
  );
}

export default App;






import React from 'react';
import { UserPreferencesProvider } from './UserPreferencesContext';
import TextDisplay from './TextDisplay';
import FontSizeControls from './FontSizeControls';

function App() {
  return (
    <UserPreferencesProvider>
      <div style={{ padding: '20px' }}>
        <h2>User Preferences Context</h2>
        <FontSizeControls />
        <TextDisplay />
      </div>
    </UserPreferencesProvider>
  );
}

export default App;





import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <HashRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
