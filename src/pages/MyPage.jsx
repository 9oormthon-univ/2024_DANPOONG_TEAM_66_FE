import MyPage_User from '../components/MyPage/User/MyPage_User';
import MyPage_Company from '../components/MyPage/Company/MyPage_Company';

export default function MyPage() {
  const [userType, setUserType] = useState('company');

  return (
    <>
      {userType === 'user' && <MyPage_User />}
      {userType === 'company' && <MyPage_Company />}
    </>
  );
}