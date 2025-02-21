import React, { useState } from "react";
import ListWithButton from "./ListWithButton";
import "./app.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: items.length,
        value: inputValue,
        isChecked: false,
      }
      console.log(newItem)
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const checkList = (id) => {
    console.log(id)
    let temp = items.map(item => 
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(temp)
  }


  const deleteList = (id) => {
    console.log(id);
    let temp = items.filter(item => item.id !== id); // ✅ Remove item with matching id
    setItems(temp);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="border p-2 rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
        <ListWithButton items={items} checkList={checkList} deleteList={deleteList} />
      </div>
    </div>
  );
};

export default App;
