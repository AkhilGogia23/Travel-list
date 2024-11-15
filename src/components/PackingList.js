

import  Item  from "./Item";

export default function PackingList({ items, onDeleteItems, ontoggleitem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (<Item item={item} onDeleteItems={onDeleteItems} ontoggleitem={ontoggleitem} key={item.id} />))}
      </ul>
    </div>
  );
}
