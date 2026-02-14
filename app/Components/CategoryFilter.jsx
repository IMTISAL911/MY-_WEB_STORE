export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border p-3 rounded-xl"
    >
      <option value="">All</option>
      {categories.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  );
}
