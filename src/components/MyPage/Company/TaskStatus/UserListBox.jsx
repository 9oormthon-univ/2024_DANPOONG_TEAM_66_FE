import ProfileIcon from '../../../../assets/icons/ProfileSm.svg';

export default function UserListBox({ userData }) {
  const defaultProfile = ProfileIcon; // 기본 프로필 아이콘

  return (
    <div className="flex flex-col justify-between p-4 w-full">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="flex flex-row justify-start items-center">
          <img
            src={userData.Profile || defaultProfile}
            alt="profile"
            className="w-10 h-10 rounded-full border border-gray-300 mr-3"
          />
          <h3 className="text-[#598564] font-medium text-lg w-20">{userData.Name}</h3>
        </div>
        <div className="flex items-center justify-start border-2 border-gray-300 rounded-lg px-4 py-2 w-full">
          진행중
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end text-sm text-gray-500 gap-4">
        <p className="whitespace-nowrap">
          E-mail: <span className="font-medium">{userData.Email}</span>
        </p>
        <button>자세히 보기</button>
      </div>
    </div>
  );
}
