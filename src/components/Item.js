import React, { useState } from "react";

function Item({ name, category }) {
  const [addedItem, setAddedItem] = useState("")
  

  return (
    <li className={addedItem}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button className="add" 
        onClick={() => setAddedItem("in-cart")}>
			{addedItem ? "Remove" : "Add to Cart"}
			</button>
		</li>
  );
}

export default Item;
