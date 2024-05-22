import React, { useState } from 'react';
import './Explore.css';

const Explore = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedIntolerances, setSelectedIntolerances] = useState([]);

  const fetchRecipes = async () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_REACT_API_KEY}`;


    if (selectedCuisine) {
      url += `&cuisine=${selectedCuisine}`;
    }

    if (selectedIntolerances.length > 0) {
      url += `&intolerances=${selectedIntolerances.join(',')}`;
    }


    if (query) {
      url += `&query=${query}`;
    }

    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    fetchRecipes();
  };

  const handleIntoleranceToggle = (intolerance) => {
    const updatedIntolerances = selectedIntolerances.includes(intolerance)
      ? selectedIntolerances.filter((item) => item !== intolerance)
      : [...selectedIntolerances, intolerance];

    setSelectedIntolerances(updatedIntolerances);
    fetchRecipes();
  };

  return (
    <div className="explore-section">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="filters">
        <div className="cuisine-menu">
          <span>Cuisine</span>
          <div className="cuisine-options">
          <span className={selectedCuisine === 'Asian' ? 'active' : ''} onClick={() => handleCuisineClick('Asian')}> Asian </span>
          <span className={selectedCuisine === 'American' ? 'active' : ''} onClick={() => handleCuisineClick('American')}> American </span>
          <span className={selectedCuisine === 'Chinese' ? 'active' : ''} onClick={() => handleCuisineClick('Chinese')}> French </span>
          <span className={selectedCuisine === 'French' ? 'active' : ''} onClick={() => handleCuisineClick('French')}> French </span>
          <span className={selectedCuisine === 'Indian' ? 'active' : ''} onClick={() => handleCuisineClick('Indian')}> Indian </span>
          <span className={selectedCuisine === 'Middle Eastern' ? 'active' : ''} onClick={() => handleCuisineClick('Middle Eastern')}> Middle Eastern </span>
          <span className={selectedCuisine === 'Thai' ? 'active' : ''} onClick={() => handleCuisineClick('Thai')}> Thai </span>
          <span className={selectedCuisine === 'Japanese' ? 'active' : ''} onClick={() => handleCuisineClick('Japanese')}> Japanese </span>
          <span className={selectedCuisine === 'italian' ? 'active' : ''} onClick={() => handleCuisineClick('italian')}> Italian </span>
            <span className={selectedCuisine === 'mexican' ? 'active' : ''} onClick={() => handleCuisineClick('mexican')}>Mexican</span>
          </div>
        </div>
        <div className="intolerance-menu">
          <span>Intolerances</span>
          <div className="intolerance-options">
          <span className={selectedIntolerances.includes('dairy') ? 'active' : ''} onClick={() => handleIntoleranceToggle('dairy')}>Dairy</span>
            <span className={selectedIntolerances.includes('Egg') ? 'active' : ''} onClick={() => handleIntoleranceToggle('Egg')}> Egg</span>
            <span className={selectedIntolerances.includes('Peanut') ? 'active' : ''} onClick={() => handleIntoleranceToggle('Peanut')}> Peanut</span>
            <span className={selectedIntolerances.includes('Sesame') ? 'active' : ''} onClick={() => handleIntoleranceToggle('Sesame')} > Sesame </span>
            <span className={selectedIntolerances.includes('Soy') ? 'active' : ''} onClick={() => handleIntoleranceToggle('Soy')} > Soy </span>
            <span className={selectedIntolerances.includes('gluten') ? 'active' : ''} onClick={() => handleIntoleranceToggle('gluten')} > Gluten </span>
          </div>
        </div>
      </div>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => window.location.href = `/recipe/${recipe.id}`}
          >
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
