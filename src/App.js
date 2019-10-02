import React, { useEffect, useState } from 'react';
import './App.css';
import { async } from 'q';

const App = () => {
  //api stuff
  const APP_ID = "3c06f5ed";
  const APP_KEY = "fe4edfd4233c805f05316543caaba326";


  useEffect( () => {
    getRecipes();
  }, []); //by adding an empty set of arrays, my page doesn't render every single

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //this will format it, so we can work with the data much easier
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search </button>
      </form>
    </div>
  );
}

export default App;
