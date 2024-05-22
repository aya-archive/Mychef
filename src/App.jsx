import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Grocery from './components/Grocery';
import User from './components/User';
import NavBar from './components/NavBar';
import RecipeDetail from './components/RecipeDetail'; // Add this if you haven't already

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/user" element={<User />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Add this if you haven't already */}
    </Routes>
  </Router>
);

export default App;
