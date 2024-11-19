import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import { HiMenu } from "react-icons/hi";
import Logo from '../../assets/Logo.svg';

export default function header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleLogoCpck = () => {
    navigate('/')
  }
  useEffect(() => {
    if (window.innerWidth >= 768) {
      // PC 환경
      setIsMobile(false);
    } else {
      // 모바일 환경
      setIsMobile(true);
    }
  }, []);

  return (
    <header className='flex justify-between items-center bg-[#51667D] px-4'>
      <div className='flex flex-row gap-3'>
        <img 
          src={Logo}
          alt='logo' 
          className='cursor-pointer'
          onClick={handleLogoCpck}
        />
        <h1 className='text-white text-3xl'>Internettern</h1>
      </div>
      {isMobile ? (
        <button onClick={() => setDropdownOpen(true)}>
          <HiMenu />
        </button>
      ) : (
        <nav className={cn(
          'flex flex-row rounded-full bg-white text-black text-sm p-3 m-4',
          'gap-14 px-10'
        )}>
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