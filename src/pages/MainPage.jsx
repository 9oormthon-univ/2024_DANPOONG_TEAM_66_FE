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
    <div className="w-full bg-white flex flex-col md:flex-row px-10 gap-10">
      {/* MyTask 컴포넌트 */}
      <div className="flex lg:w-96">
        <MyTask userTasks={userTasks} />
      </div>

      {/* RecommendedTasks 컴포넌트 */}
      <div className="flex-1 ">
        <RecommendedTasks tasks={recommendedTasks} />
      </div>
    </div>
  );
}
