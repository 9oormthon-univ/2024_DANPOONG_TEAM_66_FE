import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';
import useProfileData from '../../hooks/useProfileData';
import DefaultProfile from '../../assets/icons/ProfileLg.svg';

const DropdownMenu = ({ showDropdown, setShowDropdown, menuItems, style, zIndex = 10 }) => {
  return (
    showDropdown && (
      <div
        className="h-40 w-[10%] rounded-b-2xl pt-5 absolute transform -translate-x-1/2 text-center"
        style={{ ...style, zIndex }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="font-extrabold text-white space-y-5 text-lg">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="cursor-pointer"
              onClick={() => item.onClick()}
            >
              {item.label}
            </h1>
          ))}
        </div>
      </div>
    )
  );
};

export default function CommonHeader() {
  const navigate = useNavigate();
  const ProfileData = useProfileData(); // ProfileData 초기값은 {}
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showCommunityDropdown, setShowCommunityDropdown] = useState(false); // Community 드롭다운
  const [showMyPageDropdown, setShowMyPageDropdown] = useState(false); // My Page 드롭다운

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

      {/* Community 드롭다운 */}
      <DropdownMenu
        showDropdown={showCommunityDropdown}
        setShowDropdown={setShowCommunityDropdown}
        menuItems={[
          { label: '멘토링 요청', onClick: () => navigate('/Ourservice') },
          { label: '나의 멘토링', onClick: () => navigate('/community/나의멘토링') }
        ]}
        style={{
          top: '50px',
          left: 'calc(86% - 50px)', // 화면 크기와 관계 없이 정확히 Community 아래에 표시
          background: "linear-gradient(to bottom, white 7.9%, #90A8C0 1%)"
        }}
        zIndex={20} // Community 드롭다운의 z-index 높게 설정
      />

      {/* My Page 드롭다운 */}
      <DropdownMenu
        showDropdown={showMyPageDropdown}
        setShowDropdown={setShowMyPageDropdown}
        menuItems={[
          { label: '나의 과제', onClick: () => navigate('MyPage/나의과제') },
          { label: '단풍 뱃지 수집', onClick: () => navigate('MyPage/단풍뱃지수집') },
          { label: '포트폴리오', onClick: () => navigate('MyPage/포트폴리오') }
        ]}
        style={{
          top: '50px',
          left: 'calc(87% + 100px)', // 화면 크기와 관계 없이 정확히 My Page 아래에 표시
          background: "linear-gradient(to bottom, white 7.9%, #90A8C0 1%)"
        }}
        zIndex={15} // My Page 드롭다운의 z-index 낮게 설정
      />

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
            ProfileData={ProfileData}
          />
        </>
      ) : (
        <div className='flex flex-row justify-end items-center'>
          {ProfileData?.profile ? (
            <img
              src={ProfileData.profile || DefaultProfile}
              alt="profile"
              className="w-12 h-12 rounded-full mr-1"
              onClick={() => navigate('/profile')}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse"></div>
          )}
          <nav
            className={cn(
              'flex flex-row rounded-full bg-white text-[#142D6F] text-sm lg:text-lg',
              'p-3 m-3 gap-8 lg:gap-16 xl:gap-20 px-12 lg:px-20'
            )}
          >
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/ourservice')}>Our Service</button>

            {/* Community 메뉴 - 드롭다운 */}
            <div
              className='flex items-center gap'
              onMouseEnter={() => setShowCommunityDropdown(true)} // 마우스가 올려졌을 때
              onMouseLeave={() => setShowCommunityDropdown(false)} // 마우스가 떠났을 때
            >
              <button onClick={() => navigate('/community')}
                className="flex items-center justify-center w-24 h-2 rounded-full"
              >
                Community
                <BiChevronDown className="text-2xl text-[#142D6F] mt-1" />
              </button>
            </div>

            {/* My page 메뉴 - 드롭다운 */}
            <div
              className='flex items-center gap'
              onMouseEnter={() => setShowMyPageDropdown(true)} // 마우스가 올려졌을 때
              onMouseLeave={() => setShowMyPageDropdown(false)} // 마우스가 떠났을 때
            >
              <button onClick={() => navigate('/mypage')}
                className="flex items-center justify-center w-24 h-2 rounded-full"
              >
                My Page
                <BiChevronDown className="text-2xl text-[#142D6F] mt-1" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
