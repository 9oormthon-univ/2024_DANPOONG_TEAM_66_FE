import { useEffect, useState } from 'react';
import MentorListBox from './MentorListBox';
import useProfileData from '../../../hooks/useProfileData';
import useMentoringStatus from '../../../hooks/useMentoringStatus';
import useCommunityUserList from '../../../hooks/useCommunityUserList';
import ScoreBadgeDisplay from './ScoreBadgeDisplay';

export default function MentoringRequest() {
  const ProfileData = useProfileData();
  const { data: MentoringStatus = [] } = useMentoringStatus(1);
  const { data: CommunityUserList = [] } = useCommunityUserList();
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (ProfileData?.badgeData) {
      const sum = ProfileData.badgeData.reduce((acc, badge) => acc + badge.count, 0);
      setTotalScore(sum);
    }
  }, [ProfileData]);

  return (
    <div className="px-4 lg:px-12 pt-5 flex flex-col gap-6">
      {/* 총점과 배지 표시 */}
      <ScoreBadgeDisplay totalScore={totalScore} badgeData={ProfileData?.badgeData || []} />

      {/* 멘토링 요청 및 승인 현황 */}
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-[#886363] text-2xl font-bold'>멘토링 승인 및 요청 현황</h2>
        <div className='bg-[#EFEFEF] rounded-lg w-full p-4 py-6'>
          {MentoringStatus?.map((mentor) => (
            <MentorListBox key={mentor.id} mentorData={mentor} />
          )) || <div>멘토링 요청이 없습니다.</div>}
        </div>
      </div>

      {/* 멘토 리스트 */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[#886363] text-2xl font-bold">멘토 리스트</h2>
        <div className="bg-[#EFEFEF] rounded-lg w-full p-4 py-6">
          {CommunityUserList.length > 0 ? (
            CommunityUserList.map((mentor) => (
              <MentorListBox
                key={mentor.id}
                mentorData={{
                  id: mentor.id,
                  name: mentor.name,
                  email: mentor.email,
                  interest: mentor.interest?.name || 'N/A',
                  badgeData: mentor.badgeData || [],
                }}
              />
            ))
          ) : (
            <div>멘토 리스트가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
