export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-3 rounded-xl w-full"
    />
  );
}
