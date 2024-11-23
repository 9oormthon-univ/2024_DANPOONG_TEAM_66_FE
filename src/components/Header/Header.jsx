import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';
import CommonHeader from './CommonHeader';

export default function Header() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 루트 페이지인지 확인
  const isRootPage = location.pathname === '/';

  return (
    <>
      {isRootPage ? (isMobile ? <CommonHeader /> : <MainPageHeader />) : <CommonHeader />}
    </>
  );
}