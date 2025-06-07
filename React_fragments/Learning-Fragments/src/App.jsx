import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = [" momo", "pizza", "fruits", "vegetables", "dry foods"];
  if (foodItems.length === 0) {
    return <h2>lemmme have some foods plz 🥲</h2>;
  }
  return (
    <>
      <h1>Healthy foods</h1>;
      <ul className="list-group">
        {foodItems.map((item) => {
          return (
            <li key={item} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
