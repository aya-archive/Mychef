import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Grocery from './components/Grocery';
import User from './pages/User';
import Trending from './components/Trending';
import RecipeDetail from './components/RecipeDetail';
import Vegan from './components/Vegan';
import NavBar from './components/NavBar';
import { GroceryListProvider } from './context/GroceryListContext';
import './index.css';

const Main = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/user" element={<User />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<GroceryListProvider>
      <Main />
    </GroceryListProvider>
  </React.StrictMode>
);
