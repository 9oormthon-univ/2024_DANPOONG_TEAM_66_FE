import MyTask from '../components/MainPage/MyTask';
import RecommendedTasks from '../components/MainPage/RecommendedTasks';

export default function MainPage() {
  const userTasks = Array.from({ length: 4 }).map((_, index) => ({
    title: `사용자 작업 ${index + 1}`,
    description: '',
  }));

  const recommendedTasks = Array.from({ length: 10 }).map((_, index) => ({
    title: `(주) Example ${index + 1}`,
    description: '브랜드 로고 디자인 및 기획서 제안',
  }));

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-16 xl:gap-24 px-4 md:px-10 lg:px-16">
      {/* MyTask 컴포넌트 */}
      <div className="w-full md:w-auto flex-shrink-0">
        <MyTask userTasks={userTasks} />
      </div>

      {/* RecommendedTasks 컴포넌트 */}
      <div className="w-full md:w-auto">
        <RecommendedTasks tasks={recommendedTasks} />
      </div>
    </div>
  );
}
