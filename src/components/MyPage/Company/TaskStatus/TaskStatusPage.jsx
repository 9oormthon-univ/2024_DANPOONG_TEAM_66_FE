import { useState } from 'react';
import UserListBox from './UserListBox';
import Dropdown from './Dropdown';

// 더미 유저 데이터
const userDataList = [
  {
    id: 1,
    Task: 'Task A',
    Profile: 'https://via.placeholder.com/150',
    Name: 'User A',
    Email: 'html@gmail.com',
  },
  {
    id: 2,
    Task: 'Task B',
    Profile: null,
    Name: 'User B',
    Email: 'abcde@gmail.com',
  },
  {
    id: 3,
    Task: 'Task A',
    Profile: undefined,
    Name: 'User C',
    Email: 'javascript@naver.com',
  },
  {
    id: 4,
    Task: 'Task C',
    Profile: 'https://via.placeholder.com/150',
    Name: 'User D',
    Email: 'NoReply@groomthon.univ',
  },
  {
    id: 5,
    Task: 'Task D',
    Profile: 'https://via.placeholder.com/150',
    Name: 'User E',
    Email: '222222@gmail.com',
  },
  {
    id: 6,
    Task: 'Task B',
    Profile: 'https://via.placeholder.com/150',
    Name: 'User F',
    Email: 'helloworld@svelte.com',
  },
];

const CompanyTaskList = [
  {
    id: 1,
    taskName: 'Task A',
  },
  {
    id: 2,
    taskName: 'Task B',
  },
  {
    id: 3,
    taskName: 'Task C',
  },
  {
    id: 4,
    taskName: 'Task D',
  },
];

export default function TaskStatusPage() {
  const [selectedOption, setSelectedOption] = useState('모두 보기');

  // 유저 목록 필터링
  const filteredUserDataList =
    selectedOption === '모두 보기'
      ? userDataList // 모든 사용자 표시
      : userDataList.filter((user) => user.Task === selectedOption);

  return (
    <div className="px-4 md:px-10 lg:px-20 pt-4">
      <div className="flex flex-row items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 w-40 text-center pr-10">과제</h2>

        {/* 드롭다운 */}
        <Dropdown
          options={[{ id: 0, taskName: '모두 보기' }, ...CompanyTaskList]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      {/* 필터된 사용자 목록 */}
      <div className="space-y-4">
        {filteredUserDataList.length > 0 ? (
          filteredUserDataList.map((userData) => (
            <UserListBox key={userData.id} userData={userData} />
          ))
        ) : (
          <p className="text-gray-500 text-center">해당 과제를 수행 중인 사용자가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
