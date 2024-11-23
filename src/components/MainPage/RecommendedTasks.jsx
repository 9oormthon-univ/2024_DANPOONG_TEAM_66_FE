import { useState, useEffect } from 'react';
import Card from './Card';

export default function RecommendedTasks({ tasks }) {
  const [visibleTasks, setVisibleTasks] = useState([]);
  const [columns, setColumns] = useState(5);

  // 화면 크기에 따라 표시할 항목 수와 열 개수 계산
  const updateLayout = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      setVisibleTasks(tasks.slice(0, 10));
      setColumns(5);
    } else if (width >= 1024) {
      setVisibleTasks(tasks.slice(0, 8));
      setColumns(4);
    } else if (width >= 768) {
      setVisibleTasks(tasks.slice(0, 6));
      setColumns(3);
    } else {
      setVisibleTasks(tasks.slice(0, 4));
      setColumns(2);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-white px-5 py-24">
      {/* 제목과 더보기 */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">맞춤 과제 추천</div>
        <button className="text-gray-600 text-sm">더보기 &gt;</button>
      </div>
      <div
        className={`grid gap-12`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {visibleTasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            description={task.description}
            className="h-44 w-36"
          />
        ))}
      </div>
    </div>
  );
}
