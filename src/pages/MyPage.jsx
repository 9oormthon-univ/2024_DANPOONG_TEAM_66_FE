import MyPage_User from '../components/MyPage/User/MyPage_User';
import MyPage_Company from '../components/MyPage/Company/MyPage_Company';
import { useState } from 'react';

export default function MyPage() {
  const [userType, setUserType] = useState('user');

  return (
    <>
      {/* 개발용 버튼 */}
      <button onClick={() => setUserType('user')}>user</button>
      <button onClick={() => setUserType('company')}>company</button>
      {userType === 'user' && <MyPage_User />}
      {userType === 'company' && <MyPage_Company />}
    </>
  );
}