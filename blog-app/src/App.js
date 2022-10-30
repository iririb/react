import './App.css';

// we no longer required to import React for latest version
// in order to have jsx run
// import React from 'react'

function App() {

  const title = "Welcome to new blog"
  const likes = 50

  // bool and object can't be render directly
  const person = { name: 'yoshi', age: 20 }

  const link = "https://youtube.com"

  return (
    <div className="App">
      <div className="content">
        
        <h1>{title}</h1>
        <p1>Likes {likes} times</p1>
        {/* below will caused error as we can't render object or boolean */}
        {/* <p2> {person} </p2> */}

        <p>{10}</p>
        <p>{"hello world"}</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{Math.random() * 10 }</p>
        <a href={link}>Youtube</a>

      </div>
    </div>
  );
}

export default App;
