import { Routes, Route, Navigate } from 'react-router-dom';
import MyPage_User from '../components/MyPage/User/MyPage_User';
import MyPage_Company from '../components/MyPage/Company/MyPage_Company';

export default function MyPage() {
  return (
    <>
      <Routes>
        <Route path="user/*" element={<MyPage_User />} />
        <Route path="company/*" element={<MyPage_Company />} />
        <Route path="*" element={<Navigate to="user" replace />} />
      </Routes>
    </>
  );
}
