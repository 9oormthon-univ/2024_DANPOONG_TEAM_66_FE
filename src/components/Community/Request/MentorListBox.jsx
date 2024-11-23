import { useState, useEffect } from 'react';
import MapleBadge from '../MapleBadge';
import cn from '../../../utils/cn';
import DefaultProfile from '../../../assets/icons/ProfileSm.svg';

export default function MentorListBox({ mentorData }) {
  const [mentoringStatus, setMentoringStatus] = useState('');

  useEffect(() => {
    mentorData.status === '요청중' ? setMentoringStatus('요청중') :  setMentoringStatus('요청받음');
  }, [mentorData.status]);

  return (
    <div className='flex flex-row items-center gap-4 m-1 my-2'>
      <img src={DefaultProfile} alt='Profile' />
      <h1 className='text-xl font-semibold text-[#598564] w-20'>{mentorData.name}</h1>
      <div className={cn(
        'flex flex-row items-center p-1 bg-white rounded-lg w-full',
        'justify-between border-2 border-[#767676]'
      )}>
        <div className='flex gap-2 items-center'>
          {/* 멘토의 뱃지 정보 */}
          {mentorData.badgeData.map((badge) => (
            <MapleBadge
              key={badge.badgeType}
              badgeType={badge.badgeType}
              count={badge.count}
            />
          ))}
          <p className='text-base ml-2'>관심 분야: {mentorData.interest || "없음"}</p>
        </div>
        {/* 멘토링 버튼 */}
        {mentoringStatus === '요청받음' && (
        <div className='flex gap-2'>
          <button
            className={cn(
              'border-2 border-[#767676] text-[#767676] p-1 rounded-lg w-16',
              'hover:bg-[#767676] hover:text-white transition duration-200'
            )}
          >
            거절
          </button>
          <button
            className={cn(
              'border-2 border-[#767676] text-[#767676] p-1 rounded-lg w-16',
              'hover:bg-[#767676] hover:text-white transition duration-200'
            )}
          >
            승인
          </button>
        </div>
        )}
        {mentoringStatus === '요청중' && (
          <button
            className={cn(
              'border-2 border-[#767676] text-[#767676] p-1 rounded-lg w-16',
              'hover:bg-[#767676] hover:text-white transition duration-200'
            )}
          >
            요청중
          </button>
        )}
      </div>
    </div>
  );
}
