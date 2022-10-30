import './App.css';

// we no longer required to import React for latest version
// in order to have jsx run
// import React from 'react'

import Navbar from './Navbar'
import Home from'./Home'

function App() {
  return (
    // className will become class
    // we can't use class because it a reserve keyword
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
