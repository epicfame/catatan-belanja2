import React from "react";

const ListWithButton = ({ items, checkList, deleteList }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      <ul className="space-y-2" style={{listStyle: "none"}}>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <input type="checkbox" onClick={() => checkList(index)} />
            <span>{item}</span>
            {/* <button
              onClick={() => onButtonClick(item)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Checkbox
            </button> */}


            <button
              onClick={() => deleteList(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-2"
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithButton;
