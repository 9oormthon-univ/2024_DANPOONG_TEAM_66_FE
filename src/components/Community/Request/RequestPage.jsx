import { useEffect, useState } from 'react';
import useProfileData from '../../../hooks/useProfileData';

export default function MentoringRequest() {
  const ProfileData = useProfileData();
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if(ProfileData) {
      let sum = 0;
      ProfileData.badgeData.forEach(badgeData => {
        sum += badgeData.count;
      });
      setTotalScore(sum);
    }
  }, [ProfileData]);

  return (
    <div className='px-10 pt-5'>
      <div className='border border-black p-1 px-2 rounded-lg'>
        {totalScore}
      </div>
    </div>
  );
}