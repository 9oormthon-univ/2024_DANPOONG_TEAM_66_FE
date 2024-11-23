import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';
import { BiChevronDown } from "react-icons/bi";
import Vector from '../../assets/vector.svg';
import Tree from '../../assets/Tree.svg';
import Cloud from '../../assets/cloud.svg';
import Information from '../../assets/information.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showMyPageDropdown, setShowMyPageDropdown] = useState(false);

  const isRootPage = location.pathname === '/'; // 루트 페이지 확인

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 모바일 환경 감지
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isRootPage) {
    // feature/Home 스타일 헤더
    return (
      <header className="relative flex justify-center items-center bg-gradient-to-t from-white to-[#BCD9F2] pb-80 py-10 gap-80 h-[500px]">
        {/* 로고 */}
        <div
          onClick={() => navigate('/')}
          className="flex flex-row cursor-pointer p-2"
        >
          <img src={Vector} alt="vector" className="absolute top-0 m-9 mb-2" />
          <img
            src={Cloud}
            alt="cloud"
            className="absolute top-32 m-12 mb-2 mx-40"
          />
          <img
            src={Tree}
            alt="tree"
            className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-3/4"
          />
          <img src={Logo} alt="logo" className="size-24 m-6 mb-2" />
          <h1 className="text-5xl font-kreon flex items-center font-semibold py-4">
            <span className="text-white">Intertnet</span>
            <span className="text-[#9B3939]">tern</span>
          </h1>
        </div>

        {/* 네비게이션 */}
        <div className="flex items-center">
          {isMobile ? (
            <>
              <button onClick={() => setOpenMobileMenu(true)}>
                <HiMenu className="text-black text-3xl" />
              </button>
              <MobileMenu
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
            </>
          ) : (
            <nav
              className={cn(
                'flex flex-row rounded-full bg-white text-[#142D6F] text-m font-semibold space-x-10',
                'p-5 gap-12 mr-4'
              )}
            >
              <button onClick={() => navigate('/')}>Home</button>
              <button onClick={() => navigate('/register')}>서비스 소개</button>
              <button onClick={() => navigate('/community')}>Community</button>
              <button onClick={() => navigate('/mypage')}>My Page</button>
            </nav>
          )}
        </div>
      </header>
    );
  }

  // dev 스타일 헤더
  return (
    <header className="flex justify-between items-center bg-theme-green px-4">
      {/* 로고 */}
      <div
        onClick={() => navigate('/')}
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
