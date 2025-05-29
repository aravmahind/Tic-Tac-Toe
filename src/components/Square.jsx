function Square({ value, onSqClick }) {
  return (
    <button
      className="w-20 h-20 border-2 border-gray-600 text-3xl font-bold flex items-center justify-center bg-white hover:bg-gray-100 transition"
      onClick={onSqClick}
    >
      {value}
    </button>
  );
}

export default Square;
