export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={`bg-[#0b1622] p-3 rounded-xl border border-gray-800 text-white shadow-md ${className}`}
    >
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
}
