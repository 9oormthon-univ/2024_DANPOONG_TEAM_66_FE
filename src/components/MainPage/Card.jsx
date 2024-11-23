export default function Card({ title, description, className }) {
  return (
    <div
      className={`bg-[#C4C4C4] rounded-lg shadow-md flex flex-col justify-end ${className}`}
    >
      {/* 카드 내용 */}
      <div className="bg-white h-20 rounded-b-lg p-2">
        <h1 className="text-md font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
