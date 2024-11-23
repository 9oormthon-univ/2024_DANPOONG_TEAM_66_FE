import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';
import useProfileData from '../../hooks/useProfileData';
import DefaultProfile from '../../assets/icons/ProfileLg.svg';

const DropdownMenu = ({ showDropdown, menuItems, style, zIndex = 30 }) => {
  return (
    <div
      className={`z-100 absolute top-11 left-1/2 transform -translate-x-1/2 w-40 rounded-b-2xl shadow-md bg-white transition-all duration-200 ${
        showDropdown ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}
      style={{ ...style, zIndex }}
    >
      <div className="font-semibold text-black space-y-2 py-3 px-3 text-center">
        {menuItems.map((item, index) => (
          <h1
            key={index}
            className="cursor-pointer hover:text-theme-red text-base md:text-lg"
            onClick={item.onClick}
          >
            {item.label}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default function CommonHeader() {
  const navigate = useNavigate();
  const ProfileData = useProfileData(); // ProfileData 초기값은 {}
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    community: false,
    myPage: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            ProfileData={ProfileData}
          />
        </>
      ) : (
        <div className="flex flex-row justify-end items-center">
          {ProfileData?.profile ? (
            <img
              src={ProfileData.profile || DefaultProfile}
              alt="profile"
              className="w-12 h-12 rounded-full mr-1"
              onClick={() => navigate('/profile')}
            />
          ) : (
            <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-gray-300 animate-pulse"></div>
          )}
          <nav
            className={cn(
              'flex flex-row rounded-full bg-white text-black text-sm lg:text-lg',
              'p-2 md:p-3 m-3 gap-4 lg:gap-16 xl:gap-20 px-12 lg:px-20'
            )}
          >
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/ourservice')}>Our Service</button>

            {/* Community 메뉴 */}
            <div
              className="relative flex items-center group"
            >
              <button 
                onClick={() => navigate('/community')}
                className="flex items-center justify-center w-28 h-8"
              >
                Community
                <BiChevronDown className="text-2xl text-black ml-1" />
              </button>
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-40 rounded-b-2xl shadow-md bg-white transition-all duration-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-20`}
              >
                <div className="font-semibold text-black space-y-2 py-3 px-3 text-center">
                  <h1
                    className="cursor-pointer hover:text-theme-red text-base md:text-lg"
                    onClick={() => navigate('/community/request')}
                  >
                    멘토링 요청
                  </h1>
                  <h1
                    className="cursor-pointer hover:text-theme-red text-base md:text-lg"
                    onClick={() => navigate('/community/mymentoring')}
                  >
                    나의 멘토링
                  </h1>
                </div>
              </div>
            </div>

            {/* My Page 메뉴 */}
            <div
              className="relative flex items-center group"
            >
              <button 
                onClick={() => navigate('/mypage')}
                className="flex items-center justify-center w-28 h-8"
              >
                My Page
                <BiChevronDown className="text-2xl text-black ml-1" />
              </button>
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-40 rounded-b-2xl shadow-md bg-white transition-all duration-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-20`}
              >
                <div className="font-semibold text-black space-y-2 py-3 px-3 text-center">
                  <h1
                    className="cursor-pointer hover:text-theme-red text-base md:text-lg"
                    onClick={() => navigate('/mypage/mytask')}
                  >
                    과제 현황
                  </h1>
                  <h1
                    className="cursor-pointer hover:text-theme-red text-base md:text-lg"
                    onClick={() => navigate('/mypage/badge')}
                  >
                    뱃지
                  </h1>
                  <h1
                    className="cursor-pointer hover:text-theme-red text-base md:text-lg"
                    onClick={() => navigate('/mypage/portfolio')}
                  >
                    포트폴리오
                  </h1>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}