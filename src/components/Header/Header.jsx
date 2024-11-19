import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';

export default function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // PC 환경
        setIsMobile(false);
      } else {
        // 모바일 환경
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='flex justify-between items-center bg-[#51667D] px-4'>
      {/* 로고 */}
      <div
        onClick={handleLogoClick}
        className='flex flex-row gap-3 cursor-pointer p-2'
      >
        <img
          src={Logo}
          alt='logo'
          className='h-10'
        />
        <h1 className='text-white text-3xl font-kreon'>Internettern</h1>
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
            'flex flex-row rounded-full bg-white text-[#142D6F] text-sm',
            'p-3 m-4 gap-6 lg:gap-14 px-10'
          )}
        >
          <button onClick={() => navigate('/')}>
            Home
          </button>
          <button onClick={() => navigate('/explore')}>
            Explore
          </button>
          <button onClick={() => navigate('/mytasks')}>
            My Tasks
          </button>
          <button onClick={() => navigate('/community')}>
            Community
          </button>
          <button onClick={() => navigate('/profile')}>
            Profile
          </button>
        </nav>
      )}
    </header>
  );
}
