import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="root">
        <div className="page">
          <Helmet>
            <title>Main Page</title>
          </Helmet>
          <h1>Hello!</h1>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
