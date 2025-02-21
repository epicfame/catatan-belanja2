import React from "react";
import "./app.css";

const ListWithButton = ({ items, checkList, deleteList }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      <hr />
      <h3 className="text-lg font-bold mt-4">Outstanding</h3>
      <table>
      {/* <ul className="space-y-2" style={{listStyle: "none"}}> */}
        {items.filter(item => !item.isChecked)
        .map((item, index) => (
          // <li key={item.id} >
              <tr>
                <td>
                  <input 
                    type="checkbox" 
                    checked={item.isChecked} 
                    onChange={() => checkList(item.id)} 
                  />
                </td>
                <td>
                  <span className={`ml-2 ${item.isChecked ? "line-through" : ""}`}>
                    {item.value}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => deleteList(item.id)}
                    className="btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
          // </li>
        ))}
      {/* </ul> */}

      </table>

      <hr />
      
      <h3 className="text-lg font-bold mt-4">Completed</h3>
      <table>

        {items.filter(item => item.isChecked)
        .map((item, index) => (
          <tr>
            <td>
              <input 
                type="checkbox" 
                checked={item.isChecked} 
                onChange={() => checkList(item.id)} 
              />
            </td>
            <td>
              <span className={`ml-2 ${item.isChecked ? "line-through" : ""}`}>
                {item.value}
              </span>
            </td>
            <td>
              <button
                onClick={() => deleteList(item.id)}
                className="btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ListWithButton;
