import { useState } from "react";

import Bronze from '../../assets/Badges/Bronze.svg';
import Gold from '../../assets/Badges/Gold.svg';
import Normal from '../../assets/Badges/Normal.svg';
import Silver from '../../assets/Badges/Silver.svg';
import Blank from '../../assets/Badges/Blank.svg';

export default function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const badgeImages = {
    Blank: Blank,
    Normal: Normal,
    Bronze: Bronze,
    Silver: Silver,
    Gold: Gold
  };
  

  const items = [
    {
      title: "단풍",
      description: "단풍이 물들면서 아름다운 단풍 나무를 만들어가며 성장하는 청년 인턴",
      icon: "Blank",
    },
    {
      title: "과제 뱃지; 1점",
      description: "일반 과제를 통해 실무 경험을 엿보고, 한발자국씩 성장하는 청년 인턴 ",
      icon: "Normal",
    },
    {
      title: "멘티 뱃지; 5점",
      description: "꾸준히 배우고자 하는 자세와 열정을 가지고 자신의 꿈을 위해 질문하는 청년 인턴",
      icon: "Bronze",
    },
    {
      title: "멘토 뱃지; 10점",
      description: "청년 인턴들에세 희망적인 방향을 제시하고, 긍정적인 에너지로 함께 성장해가는 멘토",
      icon: "Silver",
    },
    {
      title: "기업 뱃지; 20점",
      description: "기업이 제공한 과제를 성공적으로 수행하여 앞으로의 길에 변화와 혁신의 가능성을 열어가는 청년 인턴",
      icon: "Gold",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1); // 현재 인덱스가 0보다 클 때만 감소
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1); // 마지막 인덱스를 초과하지 않도록
  };

  return (
    <div className="flex flex-row items-center bg-[#45666] p-4 md:p-6 gap-4 md:gap-8">
      {/* 슬라이더 영역 */}
      <div className="relative w-full md:w-[1200px] h-[150px] md:h-[200px] overflow-hidden">
        <div
          className="relative transition-transform duration-500"
          style={{
            transform: `translateY(-${currentIndex * (30)}vh)`,
            height: `${items.length * 30}vh`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ height: "30vh" }}
            >
              {/* 모바일/데스크톱 조건부 렌더링 */}
              <div className="hidden md:flex items-center bg-white p-8 shadow-lg rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <img
                      src={badgeImages[item.icon]}
                      alt={item.icon}
                      className="size-24 mb-2"
                    />
                    <span className="text-gray-600">{item.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
 
              {/* 모바일 전용 레이아웃 */}
              <div className="md:hidden flex items-center bg-white p-4 shadow-lg rounded-lg">
                <div className="flex flex-col items-center w-full">
                  <img
                    src={badgeImages[item.icon]}
                    alt={item.icon}
                    className="h-16 w-16 mb-2"
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* 네비게이션 버튼 */}
      <div className="flex flex-col items-center gap-2 md:gap-4 mt-0 md:mt-6">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400 disabled:opacity-50 transition"
          disabled={currentIndex === 0}
        >
          ▲
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400 disabled:opacity-50 transition"
          disabled={currentIndex === items.length - 1}
        >
          ▼
        </button>
      </div>
    </div>
  );
 }