import { useState } from 'react';
import cn from '../utils/cn';
import DefaultProfile from '../assets/icons/ProfileLg.svg';
import Pencil from '../assets/icons/Pencil.svg';

const userData = {
  profile: 'https://avatars.githubusercontent.com/u/81866624?v=4',
  name: '홍길동',
  email: 'kakakako@gmail.com',
};

export default function Profile() {
  const [nameInput, setNameInput] = useState(userData.name);
  const [emailInput, setEmailInput] = useState(userData.email);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[90vh] px-4">
      <img
        src={userData.profile || DefaultProfile}
        alt="profile"
        className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border border-gray-300 bg-green-200"
      />
      <h1 className="font-semibold text-2xl mt-6 sm:mt-8">이름</h1>

      <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-md">
        {/* Name Input */}
        <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 w-[75%]">
          <p className="text-gray-700 mr-2">Name :</p>
          <input
            type="text"
            className="flex-1 outline-none bg-transparent text-base sm:text-lg"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <img src={Pencil} alt="pencil" className="w-4 h-4 cursor-pointer" />
        </div>

        {/* Email Input */}
        <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 w-[90%]">
          <p className="text-gray-700 mr-2">E-mail :</p>
          <input
            type="text"
            className="flex-1 outline-none bg-transparent text-base sm:text-lg"
            placeholder="입력하기"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <button
          className={cn(
            "border-2 border-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold",
            "text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 text-sm sm:text-base"
          )}
        >
          저장하기
        </button>
        <button
          className={cn(
            "border-2 border-red-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold",
            "text-red-500 hover:bg-red-500 hover:text-white transition duration-300 text-sm sm:text-base"
          )}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
