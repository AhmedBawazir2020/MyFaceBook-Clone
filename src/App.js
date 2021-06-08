import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sideber from './Sideber';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';

// Ahmed //

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sideber />
              <Feed />
              <Widgets />
            </div>
          </>
        )}


    </div>
  );
}

export default App;
