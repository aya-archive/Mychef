import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const apiKey = import.meta.env.VITE_REACT_API_KEY;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching the recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id, apiKey]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  );
};

export default RecipeDetail;
