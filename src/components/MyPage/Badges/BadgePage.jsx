import { useState } from "react";
import BadgeHeader from "./BadgeHeader";

// 더미 뱃지 데이터
const BadgeData = {
  score: 100,
  mentoring: 30,
  user: 10,
  company: 50,
  badges: [
    {
      id: 1,
      badgeType: "Normal",
      title: "(일반) 과제 제목",
    },
    {
      id: 2,
      badgeType: "Gold",
      title: "(기업) 과제 제목",
    },
    {
      id: 3,
      badgeType: "Silver",
      title: "(멘토링) 과제 제목",
    },
    {
      id: 4,
      badgeType: "Bronze",
      title: "(사용자) 과제 제목",
    }
  ],
}

export default function BadgePage() {
  const [selectedOption, setSelectedOption] = useState("전체");

  return (
    <div className="px-10 mt-5">
      <BadgeHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        BadgeData={BadgeData}
      />
      <h1>Badge</h1>
    </div>
  );
}