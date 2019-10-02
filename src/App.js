import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  //api stuff
  const APP_ID = "3c06f5ed";
  const APP_KEY = "fe4edfd4233c805f05316543caaba326";
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('i am here');
  })

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" onClick={()=> setCounter(counter + 1)} type="submit">{counter}</button>
      </form>
    </div>
  );
}

export default App;
