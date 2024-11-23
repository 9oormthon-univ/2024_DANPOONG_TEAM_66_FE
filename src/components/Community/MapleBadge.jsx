import Red from '../../assets/Badges/Red.svg';
import Yellow from '../../assets/Badges/Yellow.svg';
import Green from '../../assets/Badges/Green.svg';
import Orange from '../../assets/Badges/Orange.svg';

const badgeIcons = {
  Red,
  Yellow,
  Green,
  Orange,
};

export default function MapleBadge({ badgeType, count }) {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      {/* 배지 아이콘 */}
      <img
        src={badgeIcons[badgeType]}
        alt={`${badgeType} Badge`}
        className="absolute inset-0 w-full h-full"
      />
      {/* 배지 개수 (중앙 숫자) */}
      <span
        className={`z-10 text-base font-bold ${
          badgeType === 'Yellow' ? 'text-black' : 'text-white'
        }`}
      >
        {count}
      </span>
    </div>
  );
}
