import { useEffect, useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import MobileMenu from './MobileMenu';
import Logo from '../../assets/Logo.svg';
import { BiChevronDown } from "react-icons/bi";
import Vector from '../../assets/vector.svg';
import Tree from '../../assets/Tree.svg';
import Cloud from '../../assets/cloud.svg';
import Information from '../../assets/information.svg';

export default function MainPageHeader() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showMyPageDropdown, setShowMyPageDropdown] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };
  const handleLogoClick2 = () => {
    navigate('/login');
  }

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
      <header className='relative flex justify-center items-center bg-#BCD9F2 pb-80 py-10 gap-80 h-[500px] bg-gradient-to-t from-white to-[#BCD9F2]'>
        {/* 로고 */}
        <div
          onClick={handleLogoClick}
          className='flex flex-row cursor-pointer p-2'
        >
          <img
            src={Vector}
            alt='vector'
            className='absolute top-0 m-9 mb-2'
          />
           <img
            src={Cloud}
            alt='groom'
            className='absolute top-32 m-12 mb-2 mx-40 '
          />
          <img
            src={Tree}
            alt='tree'
            className='absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-3/4'
          />
          <img
            src={Logo}
            alt='logo'
            className='size-24 m-6 mb-2'
          />
          {showMyPageDropdown && (
                  <div className="h-40 w-[10%] rounded-b-2xl pt-5 absolute bottom-0 left-[73.5%] transform -translate-x-1/2 top-[122px] text-center"
                  style={{
                    background: "linear-gradient(to bottom, white 7.9%, #90A8C0 1%)",
                  }}
                  onMouseEnter={() => setShowMyPageDropdown(true)}
                  onMouseLeave={() => setShowMyPageDropdown(false)}                  
                  >
                      <div className="font-extrabold text-white space-y-5 text-lg">
                      <h1
                      className="cursor-pointer"
                      onClick={() => navigate('/mytasks')}
                      >
                        멘토링 요청
                      </h1>
                        <h1>나의 멘토링</h1>
                       
                      </div>
                  </div>
              )}
          {showMyPageDropdown && (
                  <div className="h-40 w-[10%] rounded-b-2xl pt-5 absolute bottom-0 left-[84%] transform -translate-x-1/2 top-[122px] text-center"
                  style={{
                    background: "linear-gradient(to bottom, white 7.9%, #90A8C0 1%)",
                  }}
                  onMouseEnter={() => setShowMyPageDropdown(true)}
                  onMouseLeave={() => setShowMyPageDropdown(false)}                  
                  >
                      <div className="font-extrabold text-white space-y-5 text-lg">
                      <h1
                      className="cursor-pointer"
                      onClick={() => navigate('/mytasks')}
                      >
                        나의 과제
                      </h1>
                        <h1>단풍 뱃지 수집</h1>
                        <h1>포트폴리오</h1>
                      </div>
                  </div>
              )}
    
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
              {/* 모바일 메뉴 */}
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
              <button onClick={() => navigate('/')} className="flex items-center justify-center w-24 h-2 rounded-full ml-10">Home</button>
              <button onClick={() => navigate('/register')} className="flex items-center justify-center w-24 h-2 rounded-full">서비스 소개</button>
              
              <div
                className='flex items-center gap'
                onMouseEnter={() => setShowMyPageDropdown(true)} // 마우스가 올려졌을 때
                onMouseLeave={() => setShowMyPageDropdown(false)} // 마우스가 떠났을 때
              >
                <button onClick={() => navigate('/community')} 
                className="flex items-center justify-center w-24 h-2 rounded-full"
                >
                  community
                  <BiChevronDown className="text-2xl text-[#142D6F] mt-1" />
                  </button>
              </div>

              {/* My page 버튼과 아이콘을 오른쪽에 배치 */}
              <div
                className="flex items-center gap"
                onMouseEnter={() => setShowMyPageDropdown(true)} // 마우스가 올려졌을 때
                onMouseLeave={() => setShowMyPageDropdown(false)} // 마우스가 떠났을 때
              >
                <button
                  onClick={() => navigate('/mypage')}
                  className="flex items-center justify-center w-24 h-2 rounded-full mr-10"
                >
                  My Page
                <BiChevronDown className="text-2xl text-[#142D6F] mt-1" />
                </button>
                
              </div>
            </nav>
            
          )}
          <nav>
            <div
              onClick={handleLogoClick2}
              className='flex flex-row cursor-pointer p-2'
              >
              <img
              src={Information}
              alt='information'
              className='size-16 m-6 mb-6'
            />
            </div>
          </nav>
        </div>
      </header>
  );
}