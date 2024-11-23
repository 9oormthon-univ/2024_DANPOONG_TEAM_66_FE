import { useEffect, useState } from 'react';
import useProfileData from '../../../hooks/useProfileData';
import useMentoringStatus from '../../../hooks/useMentoringStatus';
import useUserMentoringData from '../../../hooks/useUserMentoringData';
import ScoreBadgeDisplay from './ScoreBadgeDisplay';

export default function MentoringRequest() {
  const ProfileData = useProfileData();
  const MentoringStatus = useMentoringStatus();
  const UserMentoringData = useUserMentoringData();
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (ProfileData?.badgeData) {
      const sum = ProfileData.badgeData.reduce((acc, badge) => acc + badge.count, 0);
      setTotalScore(sum);
    }
  }, [ProfileData]);

  return (
    <div className="px-14 lg:px-20 pt-5 gap-2">
      {/* 총점과 배지 표시 */}
      <ScoreBadgeDisplay totalScore={totalScore} badgeData={ProfileData?.badgeData || []} />
      {/* 멘토링 요청 및 승인 현황 */}
      <div className='flex flex-col items-center'>
        <h2 className='text-[#886363] text-2xl font-bold'>멘토링 승인 및 요청 현황</h2>
        <div className='bg-[#EFEFEF] rounded-lg w-full p-4'>
          
        </div>
      </div>
      {/* 멘토 리스트 */}
      <div className='flex flex-col items-center'>
        <h2 className='text-[#886363] text-2xl font-bold'>멘토 리스트</h2>
        <div className='bg-[#EFEFEF] rounded-lg w-full p-4'>
          yeah
        </div>
      </div>
    </div>
  );
}
