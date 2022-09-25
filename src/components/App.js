import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isLight, setIsLight] = useState(false);

  // const appClass = isLight ? "App light" : "App dark";

  return (
    <div className={isLight ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setIsLight((isLight) => !isLight)}>
          {isLight ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
