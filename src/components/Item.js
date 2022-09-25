import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={() => setAddCart((addCart) => !addCart)}
        className={addCart ? "remove" : "add"}
      >
        {addCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
