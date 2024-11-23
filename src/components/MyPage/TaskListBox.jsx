import Blank from '../../assets/Badges/Blank.svg';
import Normal from '../../assets/Badges/Normal.svg';
import Bronze from '../../assets/Badges/Bronze.svg';
import Silver from '../../assets/Badges/Silver.svg';
import Gold from '../../assets/Badges/Gold.svg';
import cn from '../../utils/cn';

export default function TaskListBox({ taskData }) {
  // 아이콘 맵핑
  const badgeIcons = {
    Blank,
    Normal,
    Bronze,
    Silver,
    Gold,
  };

  return (
    <div className="flex flex-col gap-4">
      {taskData.map((task, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center border border-gray-300 rounded-md p-4",
            "hover:shadow-md transition duration-150 mt-2"
          )}
        >
          {/* 좌측 아이콘 */}
          <img
            src={badgeIcons[task.badgeType]}
            alt={`${task.badgeType} badge`}
            className="w-8 h-8 mr-4"
          />

          {/* 중앙 제목 */}
          <div className="flex-1 text-gray-800">
            <p className="text-base">{task.title}</p>
          </div>

          {/* 우측 아이콘 */}
          <div className="text-gray-400 text-xl">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
