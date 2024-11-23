import useUserMentoringData from '../../../hooks/useUserMentoringData';
import useProfileData from '../../../hooks/useProfileData';
import Information from '../../../assets/information2.svg';
import MapleBadge from '../MapleBadge';

const UserCard = ({ mentoring, name, email, description, badgeData = [] }) => {
  return (
    <div className="flex flex-col items-center w-52 max-w-s bg-white border border-[#623E36] rounded-lg shadow-md overflow-hidden">
      {/* 상단 멘토 이름 */}
      <div className="w-full bg-white text-center py-4 border-b border-[#623E36] text-lg font-medium">
        {mentoring} : {name}
      </div>

      {/* 중간 메시지 */}
      <div className="w-full bg-[#CCC2C2] text-center py-6 px-4 text-ms text-gray-700">
        {description || '설정한 소개 메세지가 없습니다.'}
      </div>

      {/* 하단 정보 */}
      <div className="w-full bg-white text-center py-4 border-t border-[#623E36] text-sm">
        {email}
      </div>

      {/* 아이콘과 숫자 */}
      <div className="flex gap-2 items-center py-4">
        {badgeData.map((badge) => (
          <MapleBadge
            key={badge.badgeType}
            badgeType={badge.badgeType}
            count={badge.count}
          />
        ))}
      </div>
    </div>
  );
};

export default function MyMentoring() {
  const UserMentoringData = useUserMentoringData() || []; // 기본값 빈 배열
  const ProfileData = useProfileData() || { badgeData: [] }; // 기본값 추가

  // "멘토"와 "멘티" 데이터 필터링
  const mentors = UserMentoringData.filter((user) => user.mentoring === '멘토');
  const mentees = UserMentoringData.filter((user) => user.mentoring === '멘티');

  return (
    <div>
      {/* 상단 정보 */}
      <div className="flex items-center p-4 w-full max-w-4xl mx-auto border-gray-300 rounded-lg size-24">
        <img src={Information} alt="Profile" className="w-8 h-8 rounded-full mr-4" />
        <div className="text-[#598564] font-light text-lg mr-6">Me</div>
        <div className="flex items-center flex-grow border-2 rounded-lg px-4 py-2 bg-white">
          <div className="hidden md:flex gap-2 items-center">
            {ProfileData.badgeData.map((badge) => (
              <MapleBadge
                key={badge.badgeType}
                badgeType={badge.badgeType}
                count={badge.count}
              />
            ))}
          </div>
          <span className="text-gray-500 whitespace-nowrap mr-2 ml-2">관심 분야 :</span>
          <input
            type="text"
            placeholder="(입력)"
            className="flex-grow border-none focus:outline-none bg-transparent text-gray-700"
          />
          <svg
            className="w-5 h-5 text-gray-400 ml-2 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536M16.768 4.768a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L16.768 4.768z"
            />
          </svg>
        </div>
      </div>

      {/* My Mento 섹션 */}
      <div className="flex flex-col items-center p-4 w-full max-w-4xl mx-auto bg-[#E2E2E2] rounded-lg shadow-md overflow-hidden mt-8">
        <div className="rounded-b-xl bg-[#A99582] w-40 h-12 -mt-5">
          <div className="font-bold text-xl p-4 w-full max-w-4xl mx-auto py-1 pl-7 text-white">
            My Mento
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 px-10 mt-6 mb-10">
          {mentors.map((mentor) => (
            <UserCard
              key={mentor.id}
              mentoring="멘토"
              name={mentor.name}
              email={mentor.email}
              badgeData={mentor.badgeData || []} // 기본값 빈 배열
            />
          ))}
        </div>
      </div>

      {/* My Menti 섹션 */}
      <div className="flex flex-col items-center p-4 w-full max-w-4xl mx-auto bg-[#E2E2E2] rounded-lg shadow-md overflow-hidden mt-10">
        <div className="rounded-b-xl bg-[#A99582] w-40 h-12 -mt-5">
          <div className="font-bold text-xl p-4 w-full max-w-4xl mx-auto py-1 pl-7 text-white">
            My Menti
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 px-10 mt-6 mb-10">
          {mentees.map((mentee) => (
            <UserCard
              key={mentee.id}
              mentoring="멘티"
              name={mentee.name}
              email={mentee.email}
              badgeData={mentee.badgeData || []} // 기본값 빈 배열
              description="연동할 수 있으면 카카오톡 프로필이었음 좋겠어요"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
