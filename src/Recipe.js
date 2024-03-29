import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} className="img-fluid" alt="Responsive image"></img>
            <ul className="list-group">Ingredients: {ingredients.map(ingredients=>(<li className="list-group-item">{ingredients.text}</li>))}</ul>
            <p>Calories: {calories}</p>
        </div>
    );
}

export default Recipe;