import { useLocation } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';
import CommonHeader from './CommonHeader';

export default function Header() {
  const location = useLocation();

  // 루트 페이지인지 확인
  const isRootPage = location.pathname === '/';

  return (
    <>
      {isRootPage ? <MainPageHeader /> : <CommonHeader />}
    </>
  );
}