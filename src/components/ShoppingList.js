import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function updateValue(e){
    setSelectedCategory(e.target.value)
  }

  const displayedUpdatedValue = items.filter((item) => {
		if (selectedCategory === "All") {
			return true;
		} else {
			return item.category === selectedCategory;
		}
	});

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={updateValue}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
				{displayedUpdatedValue.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
    </div>
  );
}

export default ShoppingList;
