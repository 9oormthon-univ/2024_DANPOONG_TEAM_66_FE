import TaskListBox from "../TaskListBox";

// 더미 뱃지 데이터
// Badge페이지와 동일한 데이터를 불러온다고 가정
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

export default function PortfolioPage() {
  return (
    <div className="px-4 md:px-10 mt-5">
      <h2 className="font-bold text-xl text-gray-800 mb-4">기업 열람 포트폴리오</h2>

      {/* 카드 컨테이너 */}
      <div className="bg-gray-300 rounded-lg p-6 relative">
        {/* 상단 자기소개서 */}
        <div className="bg-gray-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-gray-700 font-semibold">자기소개서</p>
        </div>

        {/* 중앙 내용 */}
        <p className="text-gray-800 text-center font-medium mb-6">
          과제 설명 줄글 (자신이 수정)
        </p>

        {/* 수정 버튼 */}
        <button className="absolute bottom-4 right-4 text-gray-600 px-4 py-2 rounded-lg">
          수정
        </button>
      </div>
      <h2>기업 열람 과제</h2>
      <TaskListBox taskData={BadgeData.badges} />
    </div>
  );
}
