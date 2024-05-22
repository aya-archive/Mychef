import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Trending.css';

const Trending = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const GetTrending = async () => {
      const url = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${import.meta.env.VITE_REACT_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.recipes);
    };

    GetTrending();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (

    <div className="trending-section">
      <h2 className="section-title">Trending Recipies</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card" onClick={() => handleCardClick(recipe.id)}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          {recipe.cuisines.length > 0 && (
            <p><strong>Cuisine:</strong> {recipe.cuisines.join(', ')}</p>
          )}
          {recipe.diets.length > 0 && (
            <p><strong>Dietary Restrictions:</strong> {recipe.diets.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Trending;
