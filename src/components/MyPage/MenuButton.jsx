import cn from '../../utils/cn';

export default function MenuButton({ icon, text }) {
  return (
    <button className={cn(
      "relative rounded-lg border-2 border-gray-400 p-2 mx-2 my-4 text-2xl text-black",
      "hover:bg-theme-green hover:border-theme-green hover:text-white",
      "transition duration-200 flex items-center justify-center"
    )}>
      {/* 아이콘: 좌측 고정 */}
      <span className="absolute left-4 flex items-center">
        {icon}
      </span>
      {/* 텍스트: 중앙 정렬 */}
      <span>
        {text}
      </span>
    </button>
  );
}
