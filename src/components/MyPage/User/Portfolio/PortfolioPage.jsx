import useUserTaskData from "../../../../hooks/useUserTaskData";
import TaskListBox from "../../TaskListBox";

export default function PortfolioPage() {
  const tasks = useUserTaskData();

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

      <h2 className="mt-6 font-bold text-xl text-gray-800">기업 열람 과제</h2>
      <TaskListBox taskData={tasks} />
    </div>
  );
}
