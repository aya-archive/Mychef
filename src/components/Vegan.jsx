// src/components/Vegan.jsx
import React, { useEffect, useState } from 'react';
import './Vegan.css';

const Vegan = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchVeganRecipes = async () => {
      const url = `https://api.spoonacular.com/recipes/random?number=3&tags=vegan&apiKey=${import.meta.env.VITE_REACT_API_KEY}`;
      const options = {
        method: 'GET',
      };
        const response = await fetch(url, options);
        const data = await response.json();
        setRecipes(data.recipes);
      
    };

    fetchVeganRecipes();
  }, []);

  return (
    <div className="vegan-section">
      <h2 className="section-title">Vegan Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="vegan-recipe-card"
          onClick={() => window.location.href = `/recipe/${recipe.id}`}
        >
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Cuisine:</strong> {recipe.cuisines.join(', ')}</p>
          <p><strong>Allergies:</strong> {recipe.dishTypes.join(', ')}</p>
        </div>
      ))}
    </div>
  );
  
};

export default Vegan;
