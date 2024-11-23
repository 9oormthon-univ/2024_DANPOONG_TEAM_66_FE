import { useState } from "react";

export default function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "효율적인 진행",
      description: "일반적인 인턴십보다 더 소소한 업무를 담당하며 원하는 곳에서 실무를 경험해 보세요.",
      icon: "📅",
    },
    {
      title: "멘토링 & 피드백",
      description: "현업의 실무자와 멘토링 및 피드백을 받을 수 있는 기회를 제공합니다.",
      icon: "💬",
    },
    {
      title: "미니인턴 기획안",
      description: "구직활동을 위한 실무 경험과 포트폴리오를 제작할 수 있는 기회를 제공합니다.",
      icon: "📝",
    },
    {
      title: "미니인턴 기획안",
      description: "구직활동을 위한 실무 경험과 포트폴리오를 제작할 수 있는 기회를 제공합니다.",
      icon: "📝",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1); // 현재 인덱스가 0보다 클 때만 감소
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1); // 마지막 인덱스를 초과하지 않도록
  };

  return (
    <div className="flex flex-row items-center bg-[#45666] p-6 gap-8">
      {/* 슬라이더 영역 */}
      <div className="relative w-[1200px] h-[150px] overflow-hidden">
        <div
          className="relative transition-transform duration-500"
          style={{
            transform: `translateY(-${currentIndex * 20}vh)`, // 슬라이드를 한 항목씩 이동
            height: `${items.length * 20}vh`, // 슬라이드 컨테이너의 전체 높이 설정
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ height: "20vh" }} // 각 슬라이드 항목의 높이를 100vh로 설정
            >
              <div className="flex items-center h-[150px] bg-white p-6 shadow-lg rounded-lg gap-10">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400 disabled:opacity-50 transition"
          disabled={currentIndex === 0} // 첫 번째 요소일 때 비활성화
        >
          ▲
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400 disabled:opacity-50 transition"
          disabled={currentIndex === items.length - 1} // 마지막 요소일 때 비활성화
        >
          ▼
        </button>
      </div>
    </div>
  );
}
