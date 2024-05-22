import React, { createContext, useState } from 'react';

const GroceryListContext = createContext();

export const GroceryListProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState([]);

  const addItem = (item) => {
    setGroceryList([...groceryList, item]);
  };

  const removeItem = (index) => {
    const newList = groceryList.filter((_, i) => i !== index);
    setGroceryList(newList);
  };

  return (
    <GroceryListContext.Provider value={{ groceryList, addItem, removeItem }}>
      {children}
    </GroceryListContext.Provider>
  );
};

export default GroceryListContext;
