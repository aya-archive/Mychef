// Grocery.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import './Grocery.css';


const Grocery = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h2>Grocery List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>
        <i className="fa fa-plus"></i>
      </button>
      <div>
        {items.map(item => (
          <div key={item.id} className={`grocery-item ${item.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span className="item-text">{item.text}</span>
            <button onClick={() => deleteItem(item.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
