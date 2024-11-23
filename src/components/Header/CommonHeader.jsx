import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';

export default function CommonHeader() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleLogoClick = () => navigate('/');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 모바일 여부 확인
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="flex justify-between items-center bg-theme-green px-4">
      {/* 로고 */}
      <div
        onClick={handleLogoClick}
        className="flex flex-row gap-3 cursor-pointer p-2"
      >
        <img src={Logo} alt="logo" className="h-10" />
        <h1 className="text-white text-3xl font-kreon font-bold">
          Internet<span className="text-theme-red">tern</span>
        </h1>
      </div>

      {/* 네비게이션 */}
      {isMobile ? (
        <>
          <button onClick={() => setOpenMobileMenu(true)}>
            <HiMenu className="text-white text-3xl" />
          </button>
          {/* 모바일 메뉴 */}
          <MobileMenu
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
          />
        </>
      ) : (
        <nav
          className={cn(
            'flex flex-row rounded-full bg-white text-[#142D6F] text-sm lg:text-lg',
            'p-3 m-3 gap-8 lg:gap-16 xl:gap-20 px-12 lg:px-20'
          )}
        >
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/introduce')}>서비스 소개</button>
          <button onClick={() => navigate('/community')}>Community</button>
          <button onClick={() => navigate('/mypage')} className="flex items-center">
            My Page <FaAngleDown className="inline ml-1" />
          </button>
        </nav>
      )}
    </header>
  );
}
