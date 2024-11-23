import React from 'react';
import useUserMentoringData from '../../hooks/useUserMentoringData';
import Information from '../../assets/information2.svg';
import red2 from '../../assets/red2.svg';
import yellow3 from '../../assets/yellow3.svg';

export default function MyMentoring() {
  const UserMentoringData = useUserMentoringData();

  if (!UserMentoringData) {
    return <div>Loading...</div>; // 데이터가 없으면 로딩 화면
  }

  return (
    <div>
    <div className="flex items-center p-4 w-full max-w-4xl mx-auto border-gray-300 rounded-lg size-24">
      {/* 프로필 아이콘 */}
      <img src={Information} alt="Profile" className="w-8 h-8 rounded-full mr-4" />

      {/* 텍스트 Me */}
      <div className="text-[#598564] font-light text-lg mr-6">
        Me
      </div>

      {/* 관심 분야 박스 */}
      <div className="flex items-center flex-grow border rounded-lg px-4 py-2 bg-white">
        {/* 아이콘과 숫자 */}
        <div className="flex items-center space-x-2 mr-4">
          <div className="flex items-center space-x-1">
            <img src={yellow3} alt="Yellow Icon" className="w-5 h-5" />
            <span className="text-yellow-500 font-medium">3</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={red2} alt="Red Icon" className="w-5 h-5" />
            <span className="text-red-500 font-medium">2</span>
          </div>
        </div>

        {/* 관심 분야 텍스트 */}
        <span className="text-gray-500 whitespace-nowrap mr-2">
          관심 분야 :
        </span>

        {/* 입력란 */}
        <input
          type="text"
          placeholder="(입력)"
          className="flex-grow border-none focus:outline-none bg-transparent text-gray-700"
        />

        {/* 연필 아이콘 */}
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
      <div className="flex flex-col items-center p-4 w-full max-w-4xl mx-auto bg-[#E2E2E2] rounded-lg shadow-md overflow-hidden">
      <div class="rounded-b-xl bg-[#A99582] w-40 h-12 -mt-5">
        <div className='font-bold text-xl p-4 w-full max-w-4xl mx-auto py-1 pl-7 text-white'>
          My Mento
        </div>


      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20 px-10 mt-6 mb-10">
          {UserMentoringData.map((user) => ( 
          <div className="flex flex-col items-center w-52 max-w-s bg-white border border-[#623E36] rounded-lg shadow-md overflow-hidden">
          {/* 상단 멘토 이름 */}
            <div className="w-full bg-white text-center py-4 border-b border-[#623E36] text-lg font-medium">
              {user.mentoring} : {user.name}
            </div>

            {/* 중간 메시지 */}
          <div className="w-full bg-[#CCC2C2] text-center py-6 px-4 text-ms text-gray-700">
            연동할 수 있으면
            <br />
            카카오톡 프로필이었음 좋겠어요
          </div>
          {/*하단 정보*/}
          <div className="w-full bg-white text-center py-4 border-t border-[#623E36] text-sm">
            {user.email}
          </div>

          {/* 아이콘과 숫자 */}
            
          <div className="flex items-center justify-center space-x-6 py-4 bg-white">
            {/* 노란색 아이콘 */}
            <div className="flex items-center space-x-1">
              <img src={yellow3} alt="Yellow Icon" className="w-6 h-6" />
              <span className="text-yellow-500 font-medium text-lg">3</span>
            </div>
            {/* 빨간색 아이콘 */}
            <div className="flex items-center space-x-1">
              <img src={red2} alt="Red Icon" className="w-6 h-6" />
              <span className="text-red-500 font-medium text-lg">2</span>
            </div>
          </div>
          </div>
          ))}
          
      </div>
      </div>
      <div className="flex flex-col items-center p-4 w-full max-w-4xl mx-auto bg-[#E2E2E2] mt-10 rounded-lg shadow-md overflow-hidden">
      <div class="rounded-b-xl bg-[#A99582] w-40 h-12 -mt-5">
        <div className='font-bold text-xl p-4 w-full max-w-4xl mx-auto py-1 pl-7 text-white'>
          My Menti
        </div>


      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20 px-10 mt-6 mb-10">
          {UserMentoringData.map((user) => ( 
          <div className="flex flex-col items-center w-52 max-w-s bg-white border border-[#623E36] rounded-lg shadow-md overflow-hidden">
          {/* 상단 멘토 이름 */}
            <div className="w-full bg-white text-center py-4 border-b border-[#623E36] text-lg font-medium">
              {user.mentoring} : {user.name}
            </div>

            {/* 중간 메시지 */}
          <div className="w-full bg-[#CCC2C2] text-center py-6 px-4 text-ms text-gray-700">
            연동할 수 있으면
            <br />
            카카오톡 프로필이었음 좋겠어요
          </div>
          {/*하단 정보*/}
          <div className="w-full bg-white text-center py-4 border-t border-[#623E36] text-sm">
            {user.email}
          </div>

          {/* 아이콘과 숫자 */}
            
          <div className="flex items-center justify-center space-x-6 py-4 bg-white">
            {/* 노란색 아이콘 */}
            <div className="flex items-center space-x-1">
              <img src={yellow3} alt="Yellow Icon" className="w-6 h-6" />
              <span className="text-yellow-500 font-medium text-lg">3</span>
            </div>
            {/* 빨간색 아이콘 */}
            <div className="flex items-center space-x-1">
              <img src={red2} alt="Red Icon" className="w-6 h-6" />
              <span className="text-red-500 font-medium text-lg">2</span>
            </div>
          </div>
          </div>
          ))}
          
          
      </div>
          </div>
      
    </div>
  );
}
