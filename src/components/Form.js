import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function Handlesubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);

  }



  return (
    <form className="add-form" onSubmit={Handlesubmit}>
      <h3>what do u need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((nu) => (
          <option value={nu} key={nu}>
            {nu}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Item.." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add  </button>
    </form>

  );
}
