import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import MobileMenu from './MobileMenu';
import Tree from '../../assets/Tree.svg';
import Cloud from '../../assets/cloud.svg';
import Information from '../../assets/information.svg';
import LogoWithCrown from '../../assets/LogoWithCrown.svg';

export default function MainPageHeader() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative flex flex-col lg:flex-row justify-between items-center bg-gradient-to-t from-white to-[#BCD9F2] h-[500px] px-6 lg:px-20 py-10">
      {/* 로고 */}
      <div className="relative flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src={Cloud} alt="cloud" className="absolute top-20 left-10 w-24 lg:w-32" />
        <img src={Tree} alt="tree" className="absolute top-40 left-1/2 transform -translate-x-1/2 w-40 lg:w-60" />
        <div className="z-10 flex items-center gap-4">
          <img src={LogoWithCrown} alt="logo" className="w-16 lg:w-24" />
          <h1 className="text-3xl lg:text-5xl font-semibold">
            <span className="text-white">Intertnet</span>
            <span className="text-[#9B3939]">tern</span>
          </h1>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex items-center gap-6 z-10">
        {isMobile ? (
          <>
            <HiMenu className="text-black text-3xl cursor-pointer" onClick={() => setOpenMobileMenu(true)} />
            <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
          </>
        ) : (
          <nav className="flex gap-8 items-center bg-white p-4 rounded-full shadow-lg">
            <button onClick={() => navigate('/')} className="hover:underline">Home</button>
            <button onClick={() => navigate('/ourservice')} className="hover:underline">Our Service</button>
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:underline">
                Community <BiChevronDown className="text-lg" />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4">
                  <button className="block text-left w-full hover:underline" onClick={() => navigate('/mytasks')}>멘토링 요청</button>
                  <button className="block text-left w-full hover:underline">나의 멘토링</button>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:underline">
                My Page <BiChevronDown className="text-lg" />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4">
                  <button className="block text-left w-full hover:underline" onClick={() => navigate('/mytasks')}>나의 과제</button>
                  <button className="block text-left w-full hover:underline">단풍 뱃지 수집</button>
                  <button className="block text-left w-full hover:underline">포트폴리오</button>
                </div>
              )}
            </div>
          </nav>
        )}
        <div onClick={() => navigate('/login')} className="cursor-pointer">
          <img src={Information} alt="information" className="w-6 lg:w-8" />
        </div>
      </div>
    </header>
  );
}
