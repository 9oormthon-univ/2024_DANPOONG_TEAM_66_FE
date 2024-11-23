import UserListBox from './UserListBox';

// 더미 유저 데이터
const userDataList = [
  {
    id: 1,
    Profile: 'https://via.placeholder.com/150',
    Name: 'User A',
    Email: 'html@gmail.com',
  },
  {
    id: 2,
    Profile: null,
    Name: 'User B',
    Email: 'abcde@gmail.com',
  },
  {
    id: 3,
    Profile: undefined,
    Name: 'User C',
    Email: 'javascript@naver.com',
  },
  {
    id: 4,
    Profile: 'https://via.placeholder.com/150',
    Name: 'User D',
    Email: 'NoReply@groomthon.univ',
  },
];

export default function TaskStatusPage() {
  return (
    <div className='px-0 lg:px-5'>
      {userDataList.map((userData) => (
        <UserListBox userData={userData}/>
      ))}
    </div>
  );
}