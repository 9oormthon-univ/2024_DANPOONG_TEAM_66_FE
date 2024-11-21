export default function TaskBox({ image, company, title, description }) {
  return (
    <div className="w-60 lg:w-80 flex flex-col">
      {/* 이미지 */}
      <div className="mb-2">
        <img
          src={image}
          alt="task-image"
          className="w-full h-52 lg:h-72 object-cover bg-gray-200"
        />
      </div>

      {/* 상단 텍스트와 버튼 */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{company}</p>
        <div className="space-x-2">
          <button className="text-lg text-gray-500 hover:underline">수정</button>
          <button className="text-lg text-gray-500 hover:underline">삭제</button>
        </div>
      </div>

      {/* 제목 */}
      <h2 className="text-base font-medium">{title}</h2>

      {/* 설명 */}
      <p className="text-base font-medium text-gray-600">{description}</p>
    </div>
  );
}
