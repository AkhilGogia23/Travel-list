export default function Stats({ items }) {
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numpacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>You have {numitems} items in your list and u already packed  {numpacked}({percent})</em>
    </footer>
  );
}
