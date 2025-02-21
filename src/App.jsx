import React, { useState } from "react";
import ListWithButton from "./ListWithButton";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleButtonClick = (item) => {
    alert(`Button clicked for: ${item}`);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear input field after adding
    }
  };

  const checkList = (index) => {

  }


  const deleteList = (index) => {
    // setItems(items.filter((_, i) => i !== index));
    let temp = [...items] 
    temp.splice(index, 1)
    setItems(temp)
  }

  return (
    <div style={{ border: "2px solid black", width: "100%" }}>
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
  );
};

export default App;
