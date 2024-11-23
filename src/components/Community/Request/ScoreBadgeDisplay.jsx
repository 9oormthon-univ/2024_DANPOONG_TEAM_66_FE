import MapleBadge from '../MapleBadge';

export default function ScoreBadgeDisplay({ totalScore, badgeData }) {
  return (
    <div className="flex items-center justify-start gap-2">
      {/* 총점 */}
      <div className="border-2 border-black p-2 px-7 rounded-lg text-lg font-semibold mr-4">
        {totalScore}
      </div>

      {/* 배지 표시 */}
      <div className="flex items-center gap-4">
        {badgeData.map((badge, index) => (
          <MapleBadge
            key={index}
            badgeType={badge.badgeType}
            count={badge.count}
          />
        ))}
      </div>
    </div>
  );
}
