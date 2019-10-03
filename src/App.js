import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  //api stuff
  const APP_ID = "3c06f5ed";
  const APP_KEY = "fe4edfd4233c805f05316543caaba326";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect( () => {
    getRecipes();
  }, [query]); //by adding an empty set of arrays, my page doesn't render every single

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //this will format it, so we can work with the data much easier
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="container">
      <form className="form-group" onSubmit={getSearch}>
        <input className="form-control" type="text" placeholder="search here for the ingredient of your choice" value={search} onChange={updateSearch}/>
        <button className="btn btn-dark" type="button">search </button>
      </form>
      <Container>
        <Row>
          <Col sm>
          {recipes.map(recipe => (<Recipe
           title={recipe.recipe.label} 
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           calories={recipe.recipe.calories}
           key={recipe.recipe.label}/>))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
