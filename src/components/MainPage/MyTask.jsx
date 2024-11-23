import Card from './Card';

export default function MyTask({ userTasks }) {
  return (
    <div className="w-full p-4 bg-[#A4A9B763] bg-opacity-35 rounded-lg shadow-lg mb-10 sm:mb-60">
      {/* My Task: 사용자 */}
      <div>
        <h1 className="text-lg font-bold text-gray-800">My Task : 사용자</h1>
        <p className="text-gray-600 text-xs mt-1">&gt; 작업중인 과제 목록</p>
        {/* 카드 컨테이너 */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {userTasks.map((task, index) => (
            <Card
              key={index}
              title={task.title}
              description={task.description}
              className="h-28 sm:h-36"
            />
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <button className="text-gray-500 text-xs hover:text-gray-700 transition">
            더보기
          </button>
        </div>
      </div>

      {/* My Task: 기업 */}
      <div className="mt-8">
        <h1 className="text-lg font-bold text-gray-800">My Task : 기업</h1>
        <p className="text-gray-600 text-xs mt-1">&gt; 과제 등록 페이지</p>
        <p className="text-gray-600 text-xs">&gt; 과제 진행 현황 확인</p>
      </div>
    </div>
  );
}
